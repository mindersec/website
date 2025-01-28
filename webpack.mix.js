// SPDX-FileCopyrightText: Copyright 2025 The Minder Authors
// SPDX-License-Identifier: Apache-2.0

let mix = require('laravel-mix');
let path = require('path');
require('laravel-mix-clean');

mix.setResourceRoot('../');
mix.setPublicPath(path.normalize('dist'));

mix.webpackConfig({
  watchOptions: {
    ignored: [
      path.posix.resolve(__dirname, './node_modules'),
      path.posix.resolve(__dirname, './public/js'),
      path.posix.resolve(__dirname, './public/css'),
    ],
  },
  stats: {
    children: true,
  },
});

mix
  .js('src/scripts/theme.js', 'js')
  .postCss('src/css/app.css', 'css')
  .copy('src/index.html', 'dist')
  .copy('static/images', 'dist/images')
  .clean();

if (mix.inProduction()) {
  mix.version();
} else {
  mix.options({ manifest: false });
}
