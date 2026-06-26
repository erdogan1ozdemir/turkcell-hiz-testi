# Rakip İçerik Analizi — Hız Testi SERP · gözlem 2026-06-26 (DataForSEO içerik parse + ham HTML şema kontrolü)

## Karşılaştırma matrisi
| Marka | Sıra | Test aracı | Dönüşüm/lead | FAQ | Şema | Öne çıkan |
|---|---|---|---|---:|---|---|
| Türk Telekom | #2 | Markalı Ookla (hiztesti.turktelekom.com.tr iframe) | 18 ay fiyat garantili kampanya bandı, 5G başvuru (5555 SMS), altyapı sorgulama, uygulama CTA | 31 | YOK | Hız-ihtiyaç eşleme + indirme süresi tablosu + 5G akışı |
| Vodafone | #6 | Kendi widget'ı (yerli) | Fiber 200/1000 net fiyat kartları (799/1.149 TL) + "Hemen Başvur", adres sorgulama, 5G RedBox | 8 | YOK | Net fiyatlı paket kartları + adres bazlı max hız |
| TurkNet | #7 | Kendi custom widget (jitter+packet loss) | "Altyapı Sorgula" x4, "Adresimde GigaFiber var mı?", "GigaFiber İstiyorum" lead formu | 32 | YOK | Tekrarlı adres-lead akışı + 1000 Mbps eşit up/down + peering |
| Superonline | #9 | speedtest.net iframe ("Turkcell Host seç") | Altyapı/IP/Ping sorgulama, online'a özel kampanya, Pasaj donanım | 4 | YOK | Geniş ama dağınık self-servis CTA seti |
| Fast.com | #3 | Netflix tescilli (oto-başlar, reklamsız) | YOK (kasıtlı) | 8 | YOK | Sıfır sürtünme tek-tık UX |
| Speedtest.net | #1/#5 | Native Ookla (Download/Upload/Ping/Latency/Jitter) | Uygulama indirme + premium upsell | 0 | YOK | Global otorite + Results History |

## EN ÖNEMLİ ortak boşluk
SERP'teki **hiçbir rakip JSON-LD şema kullanmıyor** (FAQPage/WebApplication/HowTo/BreadcrumbList hiçbiri).
→ Turkcell için en düşük efor / en yüksek farklılaşma: şema ile rich result + AI Overview/GEO alıntılanabilirlik kapılabilir.

## Türk Telekom neden #2 (Turkcell'in üstünde) — somut farklar
1. FAQ derinliği 31'e karşı Turkcell-gövde mantığında 4 (Superonline body); Turkcell kendi sayfasında 37 var ama şemasız.
2. İhtiyaca göre hız eşleme metni (12-16 / 24-35 / 50 / 100+ Mbps → kullanım) — Turkcell'de yapısal yok.
3. İndirme süresi karşılaştırma tablosu (100/200/500/1000 Mbps × YouTube/Steam/Tivibu) — yapısal, taranabilir.
4. Marka tutarlılığı: baştan sona "Türk Telekom"; Turkcell gövdesi "Superonline" markalı (tutarsızlık).
5. Markalı test motoru (kendi alan adı); Turkcell public speedtest.net iframe + manuel "Turkcell Host" seçimi (sürtünme).
6. 5G başvuru akışı + kapsamlı 5G FAQ; Turkcell'de yok.
7. Test sayfasında net teklifli kampanya bandı (18 ay fiyat garantisi + ücretsiz kurulum).
TT zayıflıkları (Turkcell'in açık kapıları): şema yok · çift iç içe iframe (performans) · 5G içeriği odağı seyreltiyor · tabloda yazım/birim hataları.

## Turkcell'de OLMAYAN, eklenmeye değer (öncelik)
P0: (1) JSON-LD şema (FAQPage+WebApplication+BreadcrumbList) (2) hız-ihtiyaç eşleme **tablosu** (3) FAQ'ı şemayla işaretleme.
P1 (dönüşüm): (4) **test sonucuna bağlı dinamik paket önerisi — KİMSEDE YOK** (5) net fiyatlı paket kartları (Vodafone) (6) sayfa içi tekrarlı adres/altyapı lead akışı (TurkNet).
P2: (7) kendi markalı widget (8) jitter+packet loss gösterimi (9) 5G/mobil CTA modülü (10) marka tutarlılığı (Turkcell çatısı) (11) araç ekosistemi internal link (ping/IP/blog).

## Dönüşüm/lead için en iyi 5 fikir (rakiplerden damıtıldı)
1. **Sonuç-tetikli akıllı paket önerisi** (kimsede yok → kategori liderliği). "Hızınız 38 Mbps → 4K+oyun için Fiber 100" + tek tık başvuru.
2. Net teklifli kampanya bandı = TT netliği (18 ay garanti/ücretsiz kurulum) + Vodafone somut fiyat kartları.
3. Sayfa içi tekrarlı adres/altyapı lead akışı (TurkNet modeli: hero + sonuç + sayfa sonu).
4. Hız-ihtiyaç eşleme tablosunun her satırını ilgili pakete linkleme (bilgi → dönüşüm köprüsü).
5. Fast.com'un sıfır sürtünme UX'i + sonuç sonrası operatör hunisi (paket+başvuru+altyapı).
