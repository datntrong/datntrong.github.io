# datntrong.github.io

Personal academic homepage — plain static HTML/CSS/JS, no build step, bilingual (English / Tiếng Việt).

Live at **https://datntrong.github.io** once the repo is pushed and Pages is enabled.

## Layout

```
index.html            the whole page (all content lives here)
404.html              not-found page
assets/css/style.css  design tokens, light + dark themes, layout
assets/js/main.js     language switch, theme switch, active-nav highlight
assets/img/           avatar.jpg (480px on purpose — see below),
                      datntrong.svg + .png — the tab icon, a cartoon drawn from the photo
assets/fonts/         Lora woff2 subsets, self-hosted (see below)
files/                downloadables — put cv.pdf here
.nojekyll             serve files as-is, skip Jekyll
robots.txt, sitemap.xml
```

## How the bilingual switch works

Both languages sit side by side in the HTML:

```html
<span data-l="en">Research interests</span>
<span data-l="vi">Hướng nghiên cứu</span>
```

`index.html` sets `data-lang` on `<html>` before first paint, and CSS hides the other
language. So it works with JavaScript disabled, and search engines see real text —
not a client-side render. The button in the header flips it and remembers the choice
in `localStorage`; `?lang=vi` also forces a language.

**When adding content, always add both languages.** Proper nouns, paper titles and
code identifiers stay untranslated — only wrap the prose.

## Still to fill in

Content pulled from your GitHub repos, your LinkedIn profile, ORCID and
Crossref/OpenAlex is already in place. Search the HTML for `TODO` — each one marks something only you can
supply:

- [ ] Contact email — currently the placeholder `your.address@vnu.edu.vn`
- [ ] `files/cv.pdf` — add the PDF, or delete the CV pill in the hero
- [ ] Publication venue for UnitTestLM — tagged `Preprint`; add paper/arXiv/BibTeX links
      under `.pub-links`
- [ ] The two `2026` news items need real dates (`Jul 2026`)
- [ ] Google Scholar link — commented-out template is in the hero `.pills`
- [ ] Optional: a real two-line summary for the ConAgent entry (neither Crossref nor SSRN
      publishes its abstract, so the current one just restates the title)
- [ ] Check the CIA-AUT project description matches what the repo actually does
- [ ] Your LinkedIn headline still reads "Master student at Vietnam National University,
      Hanoi" even though the MSc finished in Jun 2026. The site says "Research assistant"
      instead, matching your experience entry — worth fixing the headline on LinkedIn

## Fonts

Headings are Lora, self-hosted from `assets/fonts/` (SIL Open Font License 1.1) —
three woff2 subsets (latin, latin-ext, vietnamese) declared with `unicode-range`, so a
page only downloads what it renders. Body text stays on the system sans stack.

This is not cosmetic. The old heading stack ended at `"Iowan Old Style"`, which Chrome
picks on macOS because it does not support `ui-serif`. That font's cmap has no
ơ ư ớ ờ ở ỡ ợ ứ ừ ử ữ ự, so Chrome dropped the horn and rendered Vietnamese words
*misspelled* — "Dự án" came out as "Dụ án", "Những" as "Nhũng". Lora's vietnamese subset
covers U+01A0–U+01B0 and U+1EA0–U+1EF9, which is exactly the gap. Keep a font with
Vietnamese coverage first in `--serif` if you ever change it; New York and Georgia are
both safe local fallbacks, Iowan Old Style and Charter are not.

## Why the avatar is 480px

The hero photo is a graduation shot, and the diploma in it carries a date of birth and
place of birth. At 480px those lines are unreadable; served at the original 800px they
can be zoomed and read. The card renders it at ~220px, so 480px still looks sharp on a
retina screen. If you replace the image, keep it around that size.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish

The repo **must** be named `datntrong.github.io` for a GitHub user site.

```sh
git remote add origin git@github.com:datntrong/datntrong.github.io.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.
The site goes live at https://datntrong.github.io in a minute or two; every later push
redeploys it automatically.
