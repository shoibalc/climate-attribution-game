# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static single-page web application — no build tools, no package manager, no framework. Runs directly in the browser by opening `index.html`. Serve locally with any static file server (e.g., `python3 -m http.server 8080`) if needed to avoid browser CORS restrictions when loading images.

## App Requirements

- Responsive UI with a clean, modern design.
- Loads 10 randomly selected photos from `app-photos/` at the start of each quiz. 
- Brief explanation at the start of the quiz: "We will show ten photos of environmental impacts. Take this quiz to see wheter you can identify if the cause is climate change! Sometimes, more than one answer can be correct, you bet a point if you pick either one."
- Every image shows the same question: "Is this environmental impact caused by Climate Change?"
- Every Image has brief description text which should be displayed, the text is in 'description' column of the file  `app-photos/answers.csv` (columns: `name`, `correct answers`, 'description'); parse this at startup and store as a JS array/map.
- Three answer buttons: **Yes**, **No**, **Maybe**.
- Correct answers are defined in `app-photos/answers.csv` (columns: `name`, `correct answers`); parse this at startup and store as a JS array/map.
- Immediate feedback on answer selection (correct/incorrect highlight).
- Counter tracking correct answers throughout the quiz.
- Final results screen showing score and a **Restart Quiz** button.

## File Structure

```
app-photos/          # Photos used in the quiz + answer key
  answers.csv        # name;correct answers — maps each filename to "yes", "no", or "maybe"; description
index.html           # Main (and only) HTML file
```

## Key Implementation Notes

- **Answer keys**: `answers.csv` lists only the subset of photos intended for the quiz. The app should randomly sample 10 from those listed entries, not from all files in the directory.
- **Image paths**: reference images as `app-photos/<filename>` relative to `index.html`.
- **CSV parsing**: parse `answers.csv` inline in JS (no external library needed); split on newlines and commas, skip the header row.
- All logic, styles, and markup should live in `index.html` (or split into `style.css` / `script.js` if the file grows large).
