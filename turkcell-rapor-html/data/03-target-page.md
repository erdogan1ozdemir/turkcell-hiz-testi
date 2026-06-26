# Hedef Sayfa Denetimi — turkcell.com.tr/hiz-testi · gözlem 2026-06-26

Kaynak: DataForSEO `on_page_instant_pages` + `on_page_content_parsing` (JS render açık).

## On-page sinyaller
- **Title:** "Hız Testi, Speed Test, İnternet Hız Testi - Superonline" (55 krk) → marka kuyruğu **Superonline**, Turkcell değil.
- **Meta description:** "Superonline Hız Testi ile internet hızınızı saniyeler içerisinde ölçebilirsiniz..." (143 krk) → yine Superonline.
- **H1:** "Hız Testi" (tek başına, marka/değer yok).
- **Canonical:** self (doğru). **HTTPS, www, doctype:** ✓. seo_friendly_url ✓.
- **onpage_score:** 98,9 · **CLS:** 0 · **TTI:** 684 ms · dom_complete: 983 ms (hızlı).
- **LCP:** ölçülemedi (0) → ana içerik `iframe` (speedtest.net gömülü); LCP atfı belirsiz.
- içerik: 1.572 kelime, plain_text_rate 0,044 → `low_content_rate: true`, `low_readability_rate: true`.
- internal_links: 11 · external_links: 17 · images: 20 (no_image_title: true → görsellerde title yok) · scripts: 11.
- render_blocking: 2 script + 1 stylesheet. Schema (WebApplication/FAQPage) on-page çıktıda **görünmüyor** → muhtemelen yok.
- last_modified: 2026-05-12.

## Marka tutarsızlığı + link-equity kaçağı (kritik)
Sayfa `turkcell.com.tr` üzerinde ama gövde tamamen "**Superonline** Hız Testi" dilinde ve **superonline.net**'e
çok sayıda dış link veriyor. superonline.net aynı SERP'te **#8-9 rakip**. Yani sayfa, kendi SERP'inde yarıştığı
bir domaine link-equity aktarıyor ve marka sinyalini bölüyor.

### superonline.net'e giden linkler (STALE / konsolide edilmeli)
| Anchor | Mevcut hedef (superonline.net) | Turkcell içi karşılık (öneri) |
|---|---|---|
| IP Sorgulama | /ip-adresi-sorgulama | Turkcell içi IP sorgulama aracı/sayfası |
| Ping Testi | /internet-ping-testi | Turkcell içi ping testi aracı (KD=1!) |
| Yazlık İnternet | /yazlik-internet | turkcell.com.tr/ev-interneti karşılığı |
| Ev İnterneti Kampanyaları | /ev-interneti/online-a-ozel | turkcell.com.tr/ev-interneti kampanya |
| altyapı sorgulama (gövde) | /altyapi-sorgulama | turkcell.com.tr/ev-interneti/superbox-basvuru-ve-altyapi-sorgulama (zaten var!) |
| fiber internet (gövde) | /ev-interneti/fiber-internet | turkcell.com.tr/ev-interneti fiber |
| 1000 MBPS internet (gövde) | /ev-interneti/1000-mbps | turkcell.com.tr ev-interneti tarife |
| 200 MBPS internet (gövde) | /ev-interneti/200-mbps | turkcell.com.tr ev-interneti tarife |
| ev interneti (gövde) | /ev-interneti | turkcell.com.tr/ev-interneti |

### Turkcell içi linkler (doğru — korunmalı)
- Superbox Altyapı Sorgulama → turkcell.com.tr/ev-interneti/superbox-basvuru-ve-altyapi-sorgulama
- Superbox 5G Ön Talep → turkcell.com.tr/ev-interneti/superbox-5g-on-talep-olusturma
- Router → turkcell.com.tr/kampanya/...

## Mevcut FAQ envanteri (37 soru — H3) — Excel önerileri büyük ölçüde UYGULANMIŞ
Hız Testi Nedir? · İnternet Hız Testi (Speed Test) Nedir? · Nasıl Yapılır? · Nasıl Çalışır? · İnternet Hızı Nasıl Ölçülür? ·
İndirme Hızı Nasıl Ölçülür? · Hat Hızını Nasıl Öğrenebilirsin? · Öncesinde Dikkat? · Yaparken Dikkat? · En Doğru Testi Nasıl? ·
Wi-Fi ile Hız Testi? · Nelere Dikkat? · Sonuçlar Ne Anlama Gelir? · Neye Bakılır? · Metrikler? · Packet Loss? · Jitter? ·
İnternet Hızı Kaç Olmalı? · İdeal Mbps? · En Yüksek Mbps? · Download/Upload Kaç Olmalı? · Mbps? · Ping? · Download? · Upload? ·
Download ve Upload? · Hız Neden Düşük? · Yavaşlatan Uygulamalar? · Hangi Faktörler? · Neden Değişkenlik? ·
Farklı Cihazlarda Neden Farklı? · Neden Test Etmelisin? · Hızlandırma Yolları? · Neler Artırır? · Nasıl Hızlandırılır? ·
Güvenilir mi? · Ücretli mi?

## "Hız testine başlamadan önce..." kılavuzu (var)
Arka plan programları kapat · diğer cihazları kes · Ethernet kullan · indirmeleri durdur. (How-To şema adayı.)
