# Dr. Anurag Bajpai — Academic Website

A complete, responsive academic portfolio designed for direct deployment on GitHub Pages. The visual system follows the clean academic structure of the supplied reference: restrained colour palette, sticky tab navigation, large editorial headings, modular research cards, publication filtering and compact professional content.

## Included sections

- **Home:** academic profile, current appointment, research mission, expertise, career timeline and selected highlights.
- **Research:** five detailed research themes and a mechanism-led workflow.
- **Publications:** all 22 journal publications from the supplied CV, live search, year/topic filters, DOI links, book and patent.
- **Awards:** fellowships, article distinctions, presentation awards, service and invited talks.
- **Contact:** institutional contact details, external profiles, CV download and a privacy-preserving mailto form.

## Technology

This version is deliberately implemented as a dependency-free static single-page application:

- semantic HTML5
- responsive CSS
- vanilla JavaScript hash routing
- structured data (Schema.org)
- no database and no build step
- GitHub Pages deployment workflow

This keeps maintenance easier than a compiled React/Vite bundle while retaining the same modern tabbed behaviour and visual structure.

## Local preview

From the repository directory:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages deployment

1. Create a new GitHub repository, for example `anurag-bajpai.github.io`.
2. Copy all files in this folder into the repository root.
3. Commit and push to the `main` branch.
4. In **Settings → Pages**, choose **GitHub Actions** as the source.
5. The included workflow in `.github/workflows/deploy-pages.yml` will publish the site.

For a project repository rather than a user site, no path changes are required because all links are relative.

## Editing content

Most academic content is kept in one file:

```text
assets/js/data.js
```

Edit profile, research themes, publications, awards and talks there. Layout and page templates are in:

```text
assets/js/app.js
```

Visual styling is in:

```text
assets/css/styles.css
```

## Replace or update the CV

Replace:

```text
assets/docs/Anurag_Bajpai_CV.pdf
```

Keep the same filename, or update the two CV links in `index.html` and `assets/js/app.js`.

## Optional portrait

The current home panel intentionally uses an academic monogram because the supplied CV did not contain a portrait. To add one:

1. Add `assets/images/profile.jpg`.
2. Replace the `.portrait-monogram` element in `homePage()` inside `assets/js/app.js` with an image.
3. Apply `object-fit: cover` and retain meaningful alternative text.

## Contact form

The form creates an email draft using `mailto:` and does not collect or transmit data to a third-party backend. For hosted form submissions, integrate a service such as Formspree or an institutional endpoint and update the privacy statement.

## Quality features

- responsive desktop, tablet and mobile layouts
- keyboard-accessible navigation and skip link
- reduced-motion support
- descriptive metadata and Person structured data
- publication search and filtering
- no external fonts, trackers or JavaScript libraries
- relative paths compatible with GitHub Pages

## Content source

The academic content was prepared from the supplied CV. Review dates, publication metadata and contact details before public deployment, particularly when new articles or appointments are added.
