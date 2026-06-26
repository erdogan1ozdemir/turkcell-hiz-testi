# Teknik & Core Web Vitals · ÖLÇÜLEN değerler · turkcell.com.tr/hiz-testi · 26 Haz 2026

## Embed (düzeltme)
Ana test aracı **Ookla Speedtest Custom**, Turkcell alt alan adına sarılı: `turkcellhiztesti.speedtestcustom.com` (iframe).
(Önceki notlardaki "ham speedtest.net iframe" ifadesi düzeltildi; markalı white-label kullanılıyor · TT ile aynı yaklaşım.)

## Lab metrikleri · Lighthouse (DataForSEO, masaüstü, simüle throttling)
| Metrik | Değer | Durum |
|---|---|---|
| Performans skoru | 91/100 | İyi |
| LCP | 1,23 sn | İyi (<2,5) |
| FCP | 1,20 sn | İyi |
| Speed Index | 1,20 sn | İyi |
| CLS | 0,099 | Sınırda (<0,1 eşiğine çok yakın) |
| TBT | 76 ms | İyi (<200) |
| TTI | 2,94 sn | Orta |
| Sunucu yanıtı (TTFB) | 223 ms | İyi |
| Toplam ağırlık | ~2,0 MB (1.999.449 byte) | İzle |
| Ana iş parçacığı / JS bootup | 698 / 415 ms | Orta |
| Erişilebilirlik | 81/100 | Geliştirilebilir |
| En İyi Pratikler | 96/100 | İyi |
| SEO | 100/100 | İyi |

3. taraflar (Lighthouse entities): turkcell.com.tr, merlincdn.net, efilli.com (çerez), Google Tag Manager, speedtestcustom.com, Cloudflare CDN, Google/Doubleclick Ads, Google Analytics.

## Gerçek tarayıcı (Playwright, 1366px, warm cache) çapraz kontrol
FCP 188 ms · LCP 204 ms · CLS 0 · DCL 185 ms · load 1.071 ms · 30 script · 43 kaynak · iframe: turkcellhiztesti.dualstack.speedtestcustom.com.
→ Lab değerlerini doğruluyor: sayfa gerçekten hızlı.

## PSI/CrUX notu
PSI API anahtar olmadan 429 (rate limit) döndü; lab ölçümü Lighthouse + gerçek tarayıcı ile alındı.
Saha (gerçek kullanıcı / CrUX p75) verisi, GSC/CrUX erişimiyle ayrıca eklenebilir. Lab değerleri "iyi" bandında.

## Tek somut CWV riski
**CLS 0,099** · "iyi" eşiği 0,1'e çok yakın. Geç yüklenen çerez bandı + kampanya kutuları kaymayı tetikliyor olabilir.
Banner/geç gelen öğelere boyut rezervasyonu (min-height) ile CLS < 0,05 hedeflenmeli.

## Sayfa hızı / embed preload önerileri
- preconnect/dns-prefetch: turkcellhiztesti.speedtestcustom.com + Ookla ölçüm/CDN.
- Facade (tıklamada yükle) deseni; iframe'i etkileşimde enjekte et.
- 3. taraf (GTM/GA/Doubleclick) defer/etkileşim-sonrası.
- Render-blocking 2 script + 1 css çöz; kritik CSS inline.
- Logo/hero için fetchpriority=high + boyut rezervasyonu.

## fast.com otomatik başlatma
Neden: tek amaçlı, sıfır sürtünme, anında cevap. Turkcell için hibrit öneri: Wi-Fi/masaüstünde otomatik başlat,
mobil veride tek dokunuş + "veri tüketir" notu (KVKK/şeffaflık + mobil veri tüketimi riski).
