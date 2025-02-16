# hugo-md3-theme

This hugo theme is inspired by the [material design 3 website](https://m3.material.io). It is meant to style personal websites / portfolios.

## Features

- User profile picture or significant image to display
- 4 content pages:
  - About
  - Education
  - Projects
  - Resume
- Links to the users's email, github profile and linkedin profile.
- Auto light/dark mode with possibility to manually change the theme.
- Fully responsive design.

## Installation

Simply clone this theme as a submodule into your hugo website directory:

```bash
git submodule add --depth=1 https://github.com/raphaelweis/hugo-md3-theme.git themes/hugo-md3-theme
git submodule update --init --recursive # needed when you reclone your repo (submodules may not get cloned automatically)
```

You can theme use this theme in your site's `hugo.toml`:

```toml
theme="hugo-md3-theme"
```

## Configuration

You can find an example site for this theme at [`/exampleSite`](/exampleSite/). The config file contains the necessary values that need to set for the theme to know your name, path to your profile picture, profile links...

You can run the exampleSite with the following command, from the theme's root directory:

```bash
hugo server --noHTTPCache --source ./exampleSite --themesDir ../..
```

## Content

You should have 4 markdown pages for this site. The `_index.md` page is directly mapped to the `About` page, and you can put in the content root the remaining 3 markdown pages, named the same as the sections. Do not forget to include:

```toml
menus = 'main'
```

in your page's header.
