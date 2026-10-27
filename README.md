# Atik Hukuk Bürosu: atiklawoffice.com

Astro ile yapılmış, üç dilli (TR / EN / RU) statik site. `main` dalına her gönderimde GitHub Actions siteyi derleyip GitHub Pages'e yayınlar.

## Geliştirme

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # çıktı: dist/
```

## Nerede ne var?

| Ne | Dosya |
| --- | --- |
| Büro bilgileri, avukatlar, çalışma alanları, form anahtarı | `src/data/office.ts` |
| Menü, ilk ekran ve genel metinler | `src/i18n/ui.ts` |
| Sayfa metinleri | `src/i18n/content/{tr,en,ru}.ts` |
| Yazılar (Markdown) | `src/content/articles/{tr,en,ru}/` |
| Logo çizimleri | `src/data/logo.ts` (üreten script: `assets-src/genlogo.py`) |
| Renk ve yazı tipleri | `src/styles/global.css` |

Aynı yazının farklı dillerdeki sürümleri, ön bilgideki `key` değeriyle birbirine bağlanır.

## Mevzuat

İçerik, TBB Reklam Yasağı Yönetmeliği ve 6325 sayılı Kanun m. 10'a uygun tutulmalıdır: referans, müvekkil adı, istatistik ve "uzman" ya da "en iyi" gibi üstünlük ifadeleri kullanılmaz.
