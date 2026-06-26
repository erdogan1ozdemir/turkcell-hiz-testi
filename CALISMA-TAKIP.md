# Çalışma Takip — Turkcell Hız Testi · SEO/GEO Rapor + Tasarım Örneği

**Tarih:** 2026-06-26 · **Hedef sayfa:** https://www.turkcell.com.tr/hiz-testi
**Ana hedef kelimeler:** hız testi (1,57M), speedtest (1,28M), internet hız testi (844K), speed test (478K)
**Skill:** hedef-lp-rapor-tasarim (github.com/erdogan1ozdemir/hedef-lp-keyword-rapor-tasarim-ornegi-skill)

## Yapılanlar
1. Skill (SKILL.md + 6 referans) okundu; intake kapısı uygulandı (zorunlu URL+kelime mevcut → başlandı).
2. İki önceki çalışma çıkarıldı: PDF (5G optimizasyon) + Excel (SSS önerileri) → `data/04-prior-deliverables.md`.
3. Keyword metrikleri (Ahrefs, tr) → `data/01-keyword-metrics.md`.
4. SERP görünürlük (Ahrefs serp-overview, 4 ana kelime) → `data/02-serp.md`.
5. Hedef sayfa denetimi (DataForSEO on_page) + stale link envanteri → `data/03-target-page.md`.
6. Rakip analizi (6 rakip, Workflow ile paralel distilasyon) → `data/05-competitors.md`.
7. Talep havuzu (Ahrefs matching-terms) + Turkcell native ping/IP sayfa kontrolü.
8. Ekran görüntüleri (Playwright): hedef masaüstü+mobil, TT, Vodafone, TurkNet, canlı SERP → `assets/screenshots/`.

## Veri kaynakları
- **Ahrefs MCP** (keyword/SERP) · **DataForSEO MCP** (on-page/içerik parse) · **Playwright** (ekran görüntüsü/canlı SERP)
- Workflow: `turkcell-hiz-testi-rakip-arastirma` (7 ajan, paralel rakip distilasyonu).

## Çıktılar
- `turkcell-rapor-html/index.html` — SEO + GEO + rakip + CRO HTML raporu (Turkcell marka renkleri)
- `turkcell-tasarim-html/` — hedef sayfa klon kabuğu + 4 CRO/dönüşüm varyantı + yüzen varyant seçici
- `turkcell-rapor-html/data/` — ham bulgular (kanıt)

## İşaretleme sistemi (öneriler)
- ★ = önceden iletildi (PDF/Excel) · +★ = önceki önerinin geliştirilmiş hali · Yeni = bu raporda ilk kez · ✓ Uygulandı = canlıda mevcut.

## Eksik / kullanıcıdan beklenen
- Marka logosu (rapor Inbound imzasıyla; Turkcell logosu isteniyorsa eklenir).
- Sunum (deck) istenirse ayrıca üretilir (varsayılan: rapor + tasarım).
