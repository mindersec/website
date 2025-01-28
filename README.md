# Minder website

This repo contains the Minder public website, hosted at <https://minder.dev>. It
is a static HTML site hosted by GitHub pages.

The theme is built using:

- [Tailwind CSS](https://tailwindcss.com/) framework with
  [PostCSS](https://postcss.org/)
- [Alpine.js](https://alpinejs.dev/essentials/templating) for templating
- [Laravel Mix](https://laravel-mix.com/) to build

## Development

To build the site locally:

```bash
npm install
npm run dev
```

The site is built to the `dist` directory. You can simply open `dist/index.html`
in your browser to view it.

## Build

You can test a "production" build locally:

```bash
npm run prod
```

The production build minifies the compiled CSS and JavaScript and produce a
mix-manifest.json file.

Opening a pull request also runs this to validate the build.

## Deployment

The site is automatically deployed to GitHub Pages by a GitHub Actions workflow
upon merge to `main`.

## License

Text and visual content is licensed under the
[Creative Commons Attribution (CC BY) 4.0 International](./LICENSE-CC) license.\
Code is licensed under the [Apache 2.0 License](./LICENSE).
