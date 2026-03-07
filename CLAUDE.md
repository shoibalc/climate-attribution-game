# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static single-page web application — no build tools, no package manager, no framework. Runs directly in the browser by opening `index.html`. Serve locally with any static file server (e.g., `python3 -m http.server 8080`) if needed to avoid browser CORS restrictions when loading images.

Live at: **https://shoibalc.github.io/climate-attribution-game/**

## App Requirements

- Page title and banner: **"Climate Change Attribution Quiz"**.
- Responsive UI with a clean, modern design (dark theme: `#0f172a` background).
- Fixed top banner displaying the quiz title on every screen.
- Start screen with heading, intro text, and a **Start Quiz** button. **Restart Quiz** returns here (not directly back into the quiz).
- Loads 10 randomly selected photos from `app-photos/` at the start of each quiz.
- Intro text: "We will show ten photos of environmental impacts. Take this quiz to see whether you can identify if the cause is climate change!"
- Hint box: "Sometimes, more than one answer can be correct — you get a point if you pick either one."
- Every image shows the same question: "Is this environmental impact caused by Climate Change?"
- Every image shows a brief description (from the `description` column of `answers.csv`) displayed below the photo.
- Three answer buttons: **Yes**, **No**, **Maybe**.
- Correct answers are defined in `app-photos/answers.csv`; a photo may have multiple correct answers (e.g., `"yes, maybe"`). The player earns a point for picking any correct option.
- Immediate feedback on answer selection: correct button highlighted green, wrong button highlighted red, and all correct buttons revealed if the player was wrong.
- Counter tracking correct answers throughout the quiz.
- Final results screen showing score (with a circular progress indicator), a message keyed to the score range, best score (persisted in `localStorage`), and a **Restart Quiz** button that returns to the start screen.

## File Structure

```
app-photos/          # Photos used in the quiz + answer key
  answers.csv        # CSV with columns: name, correct answers, description
My_QR_Code_1-1024.jpeg  # QR code for the GitHub Pages URL
index.html           # Main (and only) HTML file — all markup, styles, and JS
README.md            # Project readme with QR code and usage instructions
CLAUDE.md            # This file
```

## Key Implementation Notes

- **Answer keys**: `answers.csv` lists only the subset of photos intended for the quiz. The app randomly samples 10 from those listed entries, not from all files in the directory.
- **Multiple correct answers**: `correct answers` field may be a quoted comma-separated list (e.g., `"yes, maybe"`). Parse with a proper RFC-4180-aware CSV parser; store as a `string[]` per photo. Check with `Array.includes()`.
- **Image paths**: reference images as `app-photos/<filename>` relative to `index.html`.
- **CSV parsing**: inline JS RFC-4180 parser (no external library); handles quoted fields containing commas.
- All logic, styles, and markup live in `index.html`.
- **Deployment**: GitHub Pages serves from the `main` branch root. Push to `main` to deploy.
