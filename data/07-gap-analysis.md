# Rakip Boşluk (Gap) Analizi · turkcell.com.tr/hiz-testi · gözlem 2026-06-26/27

Kaynak: Ahrefs `site-explorer-organic-keywords` (mode=exact, country=tr), her sayfanın trafik getiren
kelimeleri. "Pozisyon" = sayfanın o kelimedeki en iyi sırası.

## A. Kelime boşluğu · rakiplerin trafik aldığı, Turkcell'in alamadığı/zayıf olduğu kelimeler

| Kelime | Hacim/ay | KD | Türk Telekom | Turkcell | Durum |
|---|---:|---:|---|---|---|
| internet speed test | 68.000 | 70 | #2 (8.485 trafik) | sıralamıyor | **BOŞLUK** |
| fast test | 25.000 | 65 | #2 (2.454) | sıralamıyor | **BOŞLUK** |
| adsl hız testi | 12.000-16.000 | 67 | #2 (3.642) | sıralamıyor | **BOŞLUK** |
| internet hızı ölçme | 7.600 | 65 | #1 (4.503) | #5 (443) | Zayıf |
| mbps test | 4.000 | 70 | (Vodafone #5) | sıralamıyor | **BOŞLUK** |
| internet hızı | 41.000 | 67 | #2 (8.640) | #6 (3.198) | Zayıf |
| internet hız | 15.000 | 66 | #1 (4.503) | #4 (1.825) | Zayıf |
| internet test | 16.000 | 69 | #2 (3.085) | #5 (1.580) | Zayıf |
| internet hızı ölçme / nasıl ölçülür | 7.600 | 65 | #1 | #5 | Zayıf |

**Çıkarım:** Türk Telekom; "internet speed test", "fast test", "adsl hız testi", "internet hızı ölçme"
gibi araç/bilgi sorgularını Turkcell'den çok daha iyi karşılıyor. Bu kelimeler Turkcell sayfasında ya
hiç sıralamıyor ya da 5-6. sırada. Hepsi içerik ve başlık (H2/H3) düzeyinde kapatılabilir.

## B. İçerik / modül boşluğu · rakiplerde olan, Turkcell'de olmayan
(Kaynak: rakip sayfa distilasyonu, bkz. data/05-competitors.md)

| Öğe | Türk Telekom | Vodafone | TurkNet | Turkcell | Aksiyon |
|---|:--:|:--:|:--:|:--:|---|
| Hız-ihtiyaç eşleme TABLOSU (hangi hız ne için) | var | var | var | yok (sadece metin) | **Ekle** |
| İndirme süresi karşılaştırma tablosu (Mbps × dosya) | var | kısmi | yok | yok | **Ekle** |
| 5G FAQ kümesi (5G nedir, faydaları, SIM uyumu, ücret, geçiş) | var (6+) | kısmi | yok | yok | **Ekle** |
| ADSL'e özel içerik (adsl hız testi) | var | yok | yok | yok | **Ekle** |
| "İnternet hızı nasıl ölçülür / ölçme" özel bölüm | var | var | var | dağınık | **Ekle** |
| Jitter + Packet Loss metrik açıklaması | kısmi | var | var (widget) | FAQ'da var | İyileştir |
| Mbps / birim açıklama (mbps test) | var | var | var | FAQ'da var | Genişlet |
| Net fiyatlı paket kartı | dolaylı | var (799/1.149 TL) | yok | yok | **Ekle** (CRO) |

## C. FAQ boşluğu · rakiplerde olan, Turkcell'de OLMAYAN sorular
Turkcell zaten 37 FAQ ile en geniş envantere sahip; eksik olanlar:
- **5G kümesi:** "5G nedir?", "5G'nin faydaları neler?", "4.5G SIM kart 5G'yi destekler mi?", "5G ücretli mi?", "5G'ye nasıl geçilir?", "5G hız testinde nelere dikkat?" (Türk Telekom'da var)
- **Bağlantı türü:** "ADSL hız testi nasıl yapılır?", "ADSL ile fiber hız farkı nedir?" (adsl hız testi boşluğu)
- **Ölçüm:** "İnternet hızı nasıl ölçülür?" başlığını bağımsız ve güçlü ver (internet hızı ölçme boşluğu)
- **Long-tail mobil (Excel'den, hâlâ eksik):** eski SIM 5G sınırı, modem çip seti, baz istasyonu uzaklığı, Carrier Aggregation, adil kullanım, mobil upload düşüklüğü, kapalı alan, seyahatte değişkenlik.

## D. Özet · kapatılması gereken 3 ana boşluk
1. **Bilgi/araç kelimeleri** (internet speed test, fast test, adsl hız testi, internet hızı ölçme, mbps test) → içerik + başlık + FAQ ile kapat.
2. **Yapısal tablolar** (hız-ihtiyaç eşleme + indirme süresi) → hem kullanıcı hem "kaç Mbps olmalı" sorgularını karşılar, dönüşüme köprü kurar.
3. **5G + ADSL + ölçüm içeriği** → rakipte var, Turkcell'de yok; mobil/5G Turkcell'in güçlü olduğu alan.
