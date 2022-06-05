This theme for WordPress using [TailwindCSS](https://tailwindcss.com/) and [Laravel Mix](https://laravel.com/docs/5.8/mix).
## Commands

#### `npm run watch`

Assets will be compiled and BrowserSync will proxy the dev host allowing you to work while seeing your CSS and JS changes appear on the site as they are recompiled.

#### `npm run prod`

Runs the product build which includes asset file versioning and Purge CSS 

## SVG Icons for the theme are collected form here
https://github.com/Rush/Font-Awesome-SVG-PNG

## Purge CSS

Purge CSS is pretty darn excellent and is used to strip out any CSS that isn't being used during the production build. 

It does this by looking through specified template files to work out which CSS selectors have been used. If it can't 
find a CSS rule being used in the templates, it removes it from the final CSS. 

See the `paths` option in the `mix.purgeCss()` invocation in `webpack.mix.js` for the file paths being looked at. 

### How to tell Purge CSS to ignore things

The easiest way is to delineate your CSS with comments as per the example below. See 
[safelisting](https://purgecss.com/safelisting.html) for more options.   

```css
/* purgecss start ignore */
h1 {
  color: blue;
}

h3 {
  color: green;
}
/* purgecss end ignore */
```
