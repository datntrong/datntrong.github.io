# datntrong.github.io

Personal academic homepage — plain static HTML/CSS/JS, no build step, bilingual (English / Tiếng Việt).

Live at **https://datntrong.github.io** once the repo is pushed and Pages is enabled.

## Layout

```
index.html            the whole page (all content lives here)
404.html              not-found page
assets/css/style.css  design tokens, light + dark themes, layout
assets/js/main.js     language switch, theme switch, active-nav highlight
assets/img/           avatar.jpg, favicon.svg
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

Search the HTML for `TODO` — each one marks something only you can supply:

- [ ] Hero role — `[Student / Research assistant]` → your actual title
- [ ] `files/cv.pdf` — add the PDF, or delete the CV button in the hero
- [ ] Contact email — currently the placeholder `your.address@vnu.edu.vn`
- [ ] Education entry — degree and years (`[20XX – 20XX]`, `[Degree]`)
- [ ] Publication venue — the UnitTestLM entry is tagged `Preprint`; update it, and add
      paper/arXiv/BibTeX links under `.pub-links`
- [ ] News dates — currently just `2026`; use real dates (`Jul 2026`)
- [ ] Optional profile links (Google Scholar, LinkedIn, ORCID) — commented-out templates
      are in the hero `.actions` block
- [ ] Check the CIA-AUT project description matches what the repo actually does
- [ ] `assets/img/avatar.jpg` is your current GitHub avatar (the dog) — swap in a portrait if you want one

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
