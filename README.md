# BK meubelmakerij – website

Static one-page website (HTML, CSS, a little JavaScript). No build step, no backend.

## Put it on GitHub Pages

### Option A: through the GitHub website (no terminal)

1. Sign in at github.com and click **New repository**.
2. Name it, for example `bk-meubelmakerij`. Set it to **Public** (free GitHub Pages needs a public repo). Click **Create repository**.
3. On the empty repo page click **uploading an existing file**.
4. Drag in **everything inside this folder** (`index.html`, `style.css`, `script.js` and the `assets` folder), not the folder itself. `index.html` must be at the top level of the repo.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then click **Save**.
7. After a minute or two the site is live at `https://<your-username>.github.io/bk-meubelmakerij/`. The address shows at the top of the Pages settings.

### Option B: with git in a terminal

```bash
cd bk-meubelmakerij
git init
git add .
git commit -m "Eerste versie website"
git branch -M main
git remote add origin https://github.com/<your-username>/bk-meubelmakerij.git
git push -u origin main
```

Then do step 6 above. Every later `git push` updates the live site within a minute or two.

## Own domain (optional)

Buy a domain (for example `bkmeubelmakerij.nl`), then in **Settings → Pages → Custom domain** enter it and follow the DNS instructions GitHub shows. HTTPS is switched on automatically.

## Adding the real portfolio photos

1. Resize photos to about 1600 px wide and save them as JPG (under about 400 KB each keeps the site fast).
2. Replace the placeholders `assets/portfolio/werk-01.jpg` to `werk-06.jpg` with the same file names, or edit the `Werk` section in `index.html` to add more.
3. Change the captions (`data-caption` and `alt`) from "Project 1" to something descriptive, for example "Eikenhouten eettafel".

## Things to check before going live

- Text in the **Over** section and the four services is placeholder wording. Edit it in `index.html`.
- The photo in the Over section is `assets/over.jpg`. Replace it if it is not the right one.
- Add the KvK number to the footer if wanted.
- The map only loads after a visitor clicks "Toon kaart", so no third-party requests happen by default.
