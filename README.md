# Turkcell Hız Testi · SEO / GEO Rapor + Tasarım Örneği

Hedef sayfa **[turkcell.com.tr/hiz-testi](https://www.turkcell.com.tr/hiz-testi)** için, en yüksek hacimli
sorgularda (**hız testi 1,57M · speedtest 1,28M · internet hız testi 844K · speed test 478K**) 1. sıraya çıkmayı
ve sayfayı **dönüşüm/lead** kanalına çevirmeyi hedefleyen danışmanlık paketi.

`hedef-lp-rapor-tasarim` skill'i ile üretilmiştir. Önceki iki çalışma (5G optimizasyon PDF'i + SSS Excel'i)
dikkate alınmış, durumları madde madde işaretlenmiştir.

## Yayın (Vercel + Railway uyumlu)
- **Rapor:** https://turkcell-hiz-testi.vercel.app/ (kök `index.html`)
- **Tasarım örneği:** https://turkcell-hiz-testi.vercel.app/demo (`#v=a|b|c|d` ile varyant)
- **Vercel:** statik servis (`vercel.json` · cleanUrls). **Railway/Render:** `npm start` → `server.js` (`PORT` dinler).
- Demo **tek dosya self-contained**'dır (CSS/JS/logo inline) → hiçbir host'ta stil bozulmaz.

## Çıktılar / repo yapısı
| Yol | İçerik |
|---|---|
| [`index.html`](index.html) | SEO + GEO + rakip analizi + CRO HTML raporu (14 bölüm, Turkcell marka renkleri, grafikler, ekran görüntüleri) — **kökte yayınlanır** |
| [`demo/`](demo/index.html) | Hedef sayfa klon kabuğu + **4 CRO/dönüşüm varyantı** + yüzen varyant seçici (canlı demo test) — **/demo'da yayınlanır** |
| `assets/screenshots/` | Rapordaki ekran görüntüleri |
| `data/` | Ham bulgular (keyword, SERP, sayfa denetimi, rakip distilasyonu) — kanıt |
| `vercel.json` | cleanUrls ayarı |
| `CALISMA-TAKIP.md` | Adım adım ne yapıldı, hangi veri nereden |

## Yerel önizleme
```bash
python3 -m http.server 8842
# Rapor:   http://localhost:8842/                (index.html)
# Tasarım: http://localhost:8842/demo/index.html  (#v=a|b|c|d ile varyant)
```

## Öneri işaretleme sistemi
- **★** önceden iletildi (PDF/Excel) · **+★** önceki önerinin geliştirilmiş hali · **Yeni** bu raporda ilk kez · **✓** canlıda uygulanmış.

## En kritik 3 bulgu
1. **Marka tutarsızlığı + link-equity kaçağı** — sayfa turkcell.com.tr'de ama Superonline markalı ve equity'yi rakip domaine (superonline.net #9) sızdırıyor.
2. **Şema boşluğu** — SERP'teki hiçbir rakipte JSON-LD şema yok; en düşük efor / en yüksek farklılaşma.
3. **Sonuç-tetikli akıllı paket önerisi** — hiçbir rakipte yok; dönüşüm + kategori liderliği fırsatı (tasarım örneğinde uygulandı).

## Tasarım varyantları
- **A · Akıllı Sonuç** — sonuç-tetikli dinamik paket önerisi
- **B · Sade Hız** — tek net sonuç + tek güçlü CTA
- **C · Değer / Paket** — karşılaştırma + net fiyatlı paket kartları
- **D · Lead / Altyapı** — adres/altyapı + telefon ile lead toplama

---
Veri: Ahrefs + DataForSEO + Playwright · Gözlem: 26 Haziran 2026 · Hazırlayan: Inbound
