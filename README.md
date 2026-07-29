# Dr. Anurag Bajpai — Academic Website

A complete, responsive academic website for a materials scientist working across physical metallurgy, autonomous materials design, and sustainable processing.

## Website contents

- Research themes and methods
- Six selected publications with DOI links
- Group leadership and mentoring profile
- Professional and educational timeline
- Fellowships, awards, journal distinctions, book, and patent
- Contact information and downloadable CV
- Search-engine and Schema.org metadata
- Accessible navigation, keyboard focus states, mobile layout, and reduced-motion support

## Publish on GitHub Pages

### 1. Create the repository

Sign in to GitHub and create a new **public** repository.

For the shortest address, name the repository:

```text
anurag-bajpai.github.io
```

The website address will then be:

```text
https://anurag-bajpai.github.io/
```

A normal repository name such as `academic-website` also works. Its address will be:

```text
https://anurag-bajpai.github.io/academic-website/
```

### 2. Upload the files

Upload the complete contents of this folder to the repository. `index.html`, `styles.css`, `assets`, `favicon.svg`, and `Anurag-Bajpai-CV.pdf` must remain at the repository root.

The `.nojekyll` file may be hidden by your operating system. Ensure it is also uploaded.

### 3. Enable GitHub Pages

1. Open the repository on GitHub.
2. Select **Settings**.
3. Open **Pages** under **Code and automation**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/(root)`.
6. Select **Save**.

GitHub will display the public website address after deployment finishes. The first deployment normally takes a few minutes.

## Preview on your computer

Opening `index.html` directly will work in most browsers. A local server gives a more accurate preview:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Make updates

- Scientific and biographical text: `index.html`
- Colours, typography, spacing, and responsive behavior: `styles.css`
- CV: replace `Anurag-Bajpai-CV.pdf` without changing the filename
- Browser icon: replace `favicon.svg`

The most important colour values appear as CSS variables near the beginning of `styles.css`:

```css
--ink: #0a0d0f;
--paper: #f2efe8;
--copper: #e7763b;
--cyan: #55c7d9;
```

## Add a custom domain

Open **Settings → Pages → Custom domain**, enter the domain, and follow GitHub’s DNS verification instructions. GitHub can enforce HTTPS after the DNS records are active.

## Before public launch

Review:

- current title and affiliation;
- email address;
- publication count and selected papers;
- DOI links;
- external profile links;
- the attached CV.

The website intentionally does not use a portrait in the hero section. The metallographic atlas is its principal visual identity and keeps the presentation scientifically distinctive.

## Files

```text
index.html                 Website content and structure
styles.css                 Complete visual system
assets/fonts/              Local web fonts
Anurag-Bajpai-CV.pdf       Downloadable academic CV
favicon.svg                AB monogram
404.html                   GitHub Pages fallback
.nojekyll                  Disables Jekyll processing
```
