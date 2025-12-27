# Agents Guidelines for Hydejack

## Build/Test Commands
- **Build everything**: `npm run build` (JS, CSS, minified scripts in parallel)
- **Build JS only**: `npm run build:js` (modern & legacy bundles via webpack)
- **Build CSS only**: `npm run build:css` (`.scripts/build-css.js`)
- **Watch mode (dev)**: `npm run watch` or `npm run dev` (watches JS and CSS)
- **Format code**: `npm run format` (prettier on `_js/src/**/*.js`)
- **Test**: `npm test` (currently no-op)
- **Single test**: Not applicable; no test framework configured

## Project Structure
- **Jekyll theme** - Static site generator (`.yml` config)
- **_js/src/** - ES6 JavaScript modules (webpack entry: `entry.js`), compiled to `/assets/js/`
- **_sass/** - SCSS stylesheets (compressed output via `build-css.js`)
- **_includes/** - Jekyll includes and header banner
- **_layouts/** - Jekyll page templates
- **webpack.config.js** - Dual bundle config (modern ES modules + IE11 legacy polyfills)

## Code Style & Conventions
- **Prettier config**: 120 char width, 2-space tabs, trailing commas, single quotes, semicolons
- **JS**: Babel-transpiled to IE11 (legacy) and modern ESM. Use ES6 imports/const/arrow functions
- **Module structure**: Feature-flagged imports (`webpackChunkName`, `window._noXxx` flags)
- **SCSS**: Compressed output; follow Jekyll Sass structure
- **Naming**: camelCase for JS variables, kebab-case for CSS classes
- **Licenses**: GPL-3.0; include copyright headers in source files
