# QCi3 Hub · QML Group talks website

A simple static talk schedule, published with GitHub Pages.

## Adding or updating a talk

Edit **`website/talks.js`**. Copy an existing entry, paste it, and change the details. Order doesn't matter: talks are sorted by date and split into *Upcoming* and *Past* automatically. Commit and push, and the site updates within a minute or two.

For more than one speaker on the same day, add one entry per speaker with the same `date`. They appear together under that date, ordered by `time`.

Slides go in `speaker_prezzies/` and are linked from a talk with `slides: "speaker_prezzies/<file>.pdf"`.

## Folders

| Folder              | What it's for                                  | Published? |
| ------------------- | ---------------------------------------------- | ---------- |
| `website/`          | The site itself (`talks.js` is the one to edit)| Yes        |
| `media/`            | Logos and images                               | Yes        |
| `speaker_prezzies/` | Speaker slides                                 | Yes        |
| `internal/`         | Notes for organisers                           | No         |

`website/media` and `website/speaker_prezzies` are symlinks to the top-level folders. They let the site use the same paths locally and when published. Don't delete them.

> **Note:** "Not published" means the file doesn't appear on the website. If the GitHub repo is public, everything in it, including `internal/`, can still be read on GitHub.

## Previewing locally

Open `website/index.html` in a browser. No build step or server needed.

## One-time GitHub setup

1. Push this repo to GitHub, using `main` as the branch.
2. On GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` publishes the site on every push to `main`. You can follow it in the **Actions** tab.
