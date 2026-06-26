# Önceki İki Çalışma — Envanter + Güncel Durum (2026-06-26 canlı sayfaya göre)

İşaretleme: ★ = önceden iletildi · +★ = önceki önerinin geliştirilmiş hali · (yeni) = bu raporda ilk kez.

## Çalışma 1 — PDF "Turkcell Hız Testi Sayfası 5G Optimizasyon Önerileri"
Durum: büyük ölçüde **UYGULANMAMIŞ → hâlâ yapılabilir**.

1. GO butonu 5G mini-banner CTA + inlink ("Hızın Gerçek Limitini Merak Ediyor musun?") → canlıda YOK ★
2. Sunucu seçimi: "Doğru Sonuç İçin Turkcell Host'unu Seçiniz" daha görünür + mevcut-internet karşılaştırma → kısmi (uyarı disclaimer'da var, görünürlük zayıf) ★
3. Test sonucu dinamik 5G mesajları (ping>50ms / yüksek download / düşük download bazlı) → YOK ★
4. Post-test sabit 5G CTA (AGAIN yanına "5G ile Tekrar Denemeye Gerek Kalmayacak") → YOK ★
5. "5G ile Bu Nasıl Görünürdü?" karşılaştırma modülü (ping 63ms→<10ms, download→1000Mbps+) → YOK ★
6. SSS'leri 5G'ye yönlendirecek şekilde güncelleme (Mbps Nedir, İdeal Hız, Nasıl Hızlandırılır) → YOK ★
7. SSS sonrası güçlü son CTA ("Testiniz Bitti. Şimdi Geleceğin Hızını Keşfet") → YOK ★
8. Yeni 5G SSS başlıkları (5G ortalama hız, 5G ping, 5G her yerde aynı mı, vb.) → YOK ★
9. Footer'a Hız Testi linki → kontrol edilecek ★
10. Hız Testi Kılavuzu görseli (Go yanına) → How-To şema → kısmi (metin kılavuz var, şema yok) ★
11. WebApplication schema markup → YOK ★
12. Dataset schema (Mbps↔MB karşılaştırma tablosu) → YOK ★

## Çalışma 2 — Excel "Telco / Internet Hız Testi SSS Önerileri"
Durum: çekirdek + rakip SSS'leri **UYGULANMIŞ**; long-tail mobil SSS'ler ve 5G SSS'ler **eksik**.

### Mevcut SSS'te bulunuyor (UYGULANDI ✓)
İnternet Hız Testi (Speed Test) Nedir? · Mbps Nedir? · Nasıl Yapılır? · İnternet Hızı Kaç Olmalı? · Packet Loss? · İnternet Nasıl Hızlandırılır?

### Rakip SSS'leri (UYGULANDI ✓ — artık canlıda)
Download ve Upload Nedir? ✓ · Hız Testi Ücretli mi? ✓ · Wi-Fi ile Hız Testi Yapabilir miyim? ✓

### Long-tail mobil SSS önerileri (16) — büyük kısmı EKSİK → hâlâ yapılabilir ★
Canlıda olanlar: jitter ✓ · yavaşlatan uygulamalar (kısmi) ✓ · farklı cihazlar (kısmi) ✓ · gün içi değişkenlik (kısmi) ✓
EKSİK (★): eski SIM 5G/4.5G sınırı · modem çip seti (Snapdragon/Exynos) · mobil veri vs Wi-Fi farkı · odalar arası fark ·
kapalı alan mobil düşüklüğü · baz istasyonu uzaklığı · seyahatte hızlı değişim · mobil upload düşüklüğü nedenleri ·
hız yüksek ama uygulama yavaş · paket azalması etkisi · adil kullanım/hız düşürme politikaları · Carrier Aggregation (CA)

### 5G SSS'leri (Excel + PDF ortak) — EKSİK ★
5G ortalama indirme/yükleme hızı · 5G ile ping ne kadar düşer · sonuçlar neden değişiyor · 5G'de dikkat · 5G her yerde aynı mı

## Sentez notu
Excel'in çekirdek/rakip SSS önerileri uygulanmış; bu yüzden raporda "uygulandı ★" olarak işaretlenecek.
Long-tail mobil + 5G SSS'ler hâlâ açık ve Turkcell'in **mobil/5G** gücüyle birebir örtüşüyor → öncelikli.
5G PDF önerilerinin neredeyse tamamı açık → dönüşüm/lead için en yüksek kaldıraç burada.
