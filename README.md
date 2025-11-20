# 🌍 Karbon Ayak İzi Hesaplama Web Sitesi

Bu proje, kullanıcının ev içi enerji tüketim alışkanlıklarına göre **karbon ayak izini hesaplayan** basit ve çok sayfalı bir **Flask web uygulamasıdır**.

Kullanıcı sırasıyla:

* Ampul sayısı,
* Elektronik eşya sayısı,
* Elektrik tüketimi (kWh) gibi bilgileri girerek,

kişisel karbon ayak izi sonucunu öğrenir.

---

## 🚀 Özellikler

* Flask ile geliştirilmiş backend
* Çok sayfalı yapı (index → lights → electronics → form → result → end)
* Basit ve anlaşılır hesaplama mantığı
* Responsive tasarım ve sade UI
* SVG ikonlar ve görsel destekli sonuç ekranı

---

## 📁 Proje Klasör Yapısı

```
project/
│ app.py
│ requirements.txt
│
├── templates/
│   │ index.html
│   │ lights.html
│   │ electronics.html
│   │ form.html
│   │ result.html
│   │ end.html
│
└── static/
    ├── css/
    │   └── style.css
    └── img/
        ├── back.jpg
        ├── home.svg
        ├── light.svg
        ├── battery.svg
        ├── planet_good.svg
        ├── planet_medium.svg
        └── planet_bad.svg
```

---

## 🛠 Kurulum ve Çalıştırma

### 1. Depoyu klonlayın

```bash
git clone https://github.com/KULLANICI_ADI/REPO_ADI.git
cd REPO_ADI
```

### 2. Gerekli paketleri yükleyin

Python ortamı oluşturarak yüklemeniz önerilir:

```bash
pip install -r requirements.txt
```

### 3. Uygulamayı başlatın

```bash
python app.py
```

### 4. Tarayıcıda çalıştırın

```
http://127.0.0.1:5000/
```

---

## 📘 Kullanım Akışı

1. **Ana sayfa** → "Başla" butonuna basılır.
2. **Lights sayfası** → Ampul bilgisi alınır.
3. **Electronics sayfası** → Elektronik cihaz bilgisi alınır.
4. **Form sayfası** → Tüm veriler forma girilir.
5. **Result sayfası** → Hesaplanan karbon ayak izi ve görsel sonuç gösterilir.
6. **End sayfası** → Süreç tamamlanır.

---

## 🔢 Hesaplama Mantığı

Hesaplama örnek projedeki mantığa benzer şekilde yapılır:

```python
result = electricity * 0.23 + bulbs * 5 + devices * 12
```

Sonuç seviyeleri:

* **0 – 200** → İyi
* **200 – 400** → Orta
* **400+** → Kötü

---

## 🎨 Tasarım

* Arka plan görseli
* Yuvarlatılmış butonlar
* Koyulaştırılmış form alanları
* Sonuç ekranında seviyeye göre SVG ikon değişimi

İstersen TailwindCSS ile modern bir tasarıma dönüştürebilirim.

---

## 🧩 Geliştirme Önerileri

Proje kolayca genişletilebilir:

* Kullanıcı geçmişi kaydı
* Daha doğru karbon hesaplama formülü
* API entegrasyonu
* Karanlık mod
* PWA dönüşümü

İstersen bu özelliklerden birini ekleyebilirim.

---

## 🤝 Katkıda Bulunma

Pull request gönderebilir veya issue açabilirsiniz.

---

