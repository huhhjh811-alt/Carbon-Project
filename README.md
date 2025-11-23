# Karbon Ayak İzi Hesaplama Aracı

Bu proje, kullanıcıların günlük enerji tüketimi, ulaşım alışkanlıkları ve ev içi aktivitelerine dayanarak yıllık karbon ayak izini hesaplayan Flask tabanlı bir web uygulamasıdır.

Uygulama, kullanıcıdan aldığı verileri işleyerek sonucu hem sayısal verilerle hem de interaktif grafiklerle sunar. Ayrıca kullanıcı deneyimini artırmak için modern bir arayüz ve karanlık mod (Dark Mode) desteği içerir.

## Özellikler

* **Backend:** Python ve Flask ile geliştirilmiş hafif mimari.
* **Arayüz:** CSS ile özelleştirilmiş, responsive ve modern tasarım.
* **Karanlık Mod:** Tarayıcı hafızasında (localStorage) tutulan Aydınlık/Karanlık tema desteği.
* **Görselleştirme:** Chart.js kütüphanesi ile detaylı sonuç grafikleri.
* **Çok Sayfalı Yapı:** Adım adım veri girişi sağlayan kullanıcı dostu akış.
* **Bilgilendirme:** Sonuçlara göre enerji tasarrufu ipuçları.

## Güncelleme (23.11.25) :
# Siyah / Beyaz / Noel temaları eklendi
# Bazı hatalar düzeltildi
# Noel geri sayımı eklendi
# Kar teması eklendi
# Hareketli geçişler / Tema
# Hesaplama geçmişi görüntüleme ve daha fazlası

## Proje Yapısı

```text
project/
│
├── app.py                  # Ana uygulama dosyası
├── requirements.txt        # Gerekli Python kütüphaneleri
│
├── static/
│   ├── css/
│   │   └── style.css       # Tüm stiller ve tema ayarları
│   ├── js/                 # Chart.js ve tema scriptleri
│   └── img/                # SVG ikonlar ve görseller
│
└── templates/              # HTML Şablonları
    ├── index.html          # Karşılama ekranı
    ├── form.html           # Veri giriş formu
    ├── result.html         # Grafik destekli sonuç ekranı
    └── tips.html           # Tasarruf önerileri

Kurulum
Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

1. Depoyu klonlayın:

Bash

git clone [https://github.com/KULLANICI_ADI/REPO_ADI.git](https://github.com/KULLANICI_ADI/REPO_ADI.git)
cd REPO_ADI
2. Sanal ortam oluşturun (Önerilen):

Bash

python -m venv venv
# Windows için:
venv\Scripts\activate
# Mac/Linux için:
source venv/bin/activate
3. Gereksinimleri yükleyin:

Bash

pip install -r requirements.txt
4. Uygulamayı başlatın:

Bash

python app.py
Tarayıcınızda http://127.0.0.1:5000 adresine giderek uygulamayı görüntüleyebilirsiniz.

Kullanım
Başlangıç: Ana sayfadan hesaplama aracını başlatın.

Veri Girişi: Form ekranında elektrik tüketimi, ampul sayısı, araç kullanımı ve uçuş bilgileri gibi verileri girin.

Tema Seçimi: İsterseniz sağ üst köşedeki ikon ile arayüzü karanlık moda alabilirsiniz.

Sonuç: Hesaplama sonrası çıkan ekranda karbon ayak izi seviyenizi (İyi/Orta/Kötü) ve tüketim dağılımını grafik üzerinde inceleyin.

Öneriler: Karbon ayak izinizi düşürmek için sunulan ipuçlarını okuyun.

Hesaplama Yöntemi
Proje, girilen verileri belirli emisyon katsayıları ile çarparak yıllık CO₂ miktarını (kg cinsinden) hesaplar.

Örnek formül:

Python

toplam_emisyon = (elektrik * 0.233) + (ampul * 5) + (cihaz * 12) + (ulasim_emisyonu)
Değerlendirme Skalası:

< 2000 kg: İyi (Çevre Dostu)

2000 - 5000 kg: Orta (Ortalama Tüketim)

> 5000 kg: Kötü (Yüksek Emisyon)

Yapılacaklar (To-Do)
[ ] SQLite veritabanı entegrasyonu ile geçmiş sorguları kaydetme.

[ ] Sonuçların PDF olarak indirilmesi.

[ ] Daha detaylı ulaşım (toplu taşıma vs.) hesaplamaları.

Lisans
Bu proje eğitim amaçlı geliştirilmiştir. Kaynak göstererek dilediğiniz gibi kullanabilir ve geliştirebilirsiniz.
'''
