from flask import Flask, render_template, request, send_from_directory
import math

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/lights')
def lights():
    return render_template('lights.html')

@app.route('/electronics')
def electronics():
    return render_template('electronics.html')

@app.route('/form')
def form_page():
    return render_template('form.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    # collect inputs safely with defaults
    try:
        electricity = float(request.form.get('electricity', 0))
        bulbs = int(request.form.get('bulbs', 0))
        devices = int(request.form.get('devices', 0))
        car_km_week = float(request.form.get('car_km_week', 0))
        flights_short = int(request.form.get('flights_short', 0))
        flights_long = int(request.form.get('flights_long', 0))
        household = max(1, int(request.form.get('household', 1)))
    except:
        return render_template('result.html', error='Girdi hatası. Lütfen sayıları kontrol edin.')

    # Emission factors (demo values)
    F = {
        'electricity_kwh': 0.233,     # kg CO2e per kWh
        'natural_gas_m3': 2.02,       # kg CO2e per m3 (not used but placeholder)
        'petrol_l': 2.31,             # kg CO2e per litre petrol
        'short_flight': 150,          # kg CO2e per short flight
        'long_flight': 1000           # kg CO2e per long flight
    }

    electricity_annual = electricity * 12 * F['electricity_kwh']
    bulbs_annual = bulbs * 5         # simplified per-bulb estimate
    devices_annual = devices * 12    # simplified per-device estimate
    car_annual = (car_km_week * 52) * 0.08  # 0.08 kg CO2 per km (approx)
    flights_annual = flights_short * F['short_flight'] + flights_long * F['long_flight']

    total_kg = electricity_annual + bulbs_annual + devices_annual + car_annual + flights_annual
    per_person = total_kg / household

    if per_person < 2000:
        level = 'good'
        badge = 'Doğa Dostu 🌿'
        badge_color = 'green'
    elif per_person < 5000:
        level = 'medium'
        badge = 'Şehirli Çevreci 🏙️'
        badge_color = 'orange'
    else:
        level = 'bad'
        badge = 'Karbon Devi 🏭'
        badge_color = 'red'

    breakdown = {
        'electricity': round(electricity_annual,2),
        'bulbs': round(bulbs_annual,2),
        'devices': round(devices_annual,2),
        'car': round(car_annual,2),
        'flights': round(flights_annual,2)
    }

    return render_template('result.html', total=round(total_kg,2), per_person=round(per_person,2), level=level, breakdown=breakdown, badge=badge, badge_color=badge_color)

@app.route('/tips')
def tips():
    tips_list = [
        ("LED ampuller kullanın","LED ampuller, akkor ampullere göre %75'e varan enerji tasarrufu sağlar."),
        ("Termostatınızı 1°C değiştirin","Kışın 1°C azaltma, yazın 1°C artırma enerji tüketimini azaltır."),
        ("Toplu taşımayı tercih edin","Kısa mesafelerde yürüyün veya bisiklet kullanın."),
        ("Ev yalıtımını iyileştirin","İyi yalıtım ısıtma/soğutma ihtiyacını düşürür."),
        ("Uçuşları azaltın","Uçuşlar büyük miktarda CO₂ üretir; mümkünse azaltın veya telafi edin.")
    ]
    return render_template('tips.html', tips=tips_list)

@app.route('/charts')
def charts():
    return render_template('charts.html')

@app.route('/history')
def history():
    return render_template('history.html')

if __name__ == '__main__':
    app.run(debug=True)
