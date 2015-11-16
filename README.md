# Universal Apple Store Search (TypeScript Edition)

This is a fully functional app demonstrating latest best practices in Angular,
using TypeScript and jspm. The backend is [Apple's Search API][apple api].

You can [see the app in action][app].

## Primary Technologies

* Transpiles TypeScript
* Package management using [jspm][]
* Develop and build using [Gulp][] and friends


## Major Concepts Demonstrated

* Uses [UI Router][] for state based and nested routing
* Uses jspm instead of Bower or npm to manage packages for the browser
* Uses [SystemJS][] to load modules
* Sass compilation using [LibSass][] and [Autoprefixer][]
* Local dev server with [LiveReload](http://livereload.com/) using
    [Browsersync][]
* Define and maintain consistent coding styles between different editors using
    [EditorConfig][]
* Linting with [TSLint][]
* Gulp tasks are written using TypeScript, of course.
* Multiple `serve` modes to facilitate development speed or simulate production
    environment.
* Per environment setting determined at build time.


## Usage

1. Fork and clone this repo from
    `https://github.com/gsong/apple-store-search-ts.git`.
2. Make sure you have `node` installed on your machine. [nvm][] is highly
   recommended.
3. Install Gulp, jspm, and [TSD][] globally:

    ```
    npm install -g gulp jspm tsd
    ```
4. `npm install` then `jspm install` to instal development and browser packages.
5. `tsd install` to install the proper type definitions.
6. Run `gulp` to start the local dev server.
7. Make your own enhancements! 😀


## Building and Publishing

1. Run `gulp dist` to build the app for distribution in the `/dist` folder.
2. Run `gulp publish` to publish the app on `gh-pages` branch.


## Hint

Use [gulper][] if you want to automatically reload the Gulp runtime whenever you
change Gulp task files. This is especially nice if you're customizing the task
files to fit your own workflow. Otherwise you would have to constantly restart
gulp.


## Contributing

1. Pick something from [TODO][] to work on.
2. If there's a problem, please file a [new issue][], or better yet, submit a
   [pull request][]!

---

[No rights reserved][unlicensed]. Made with 🐣 by [George Song][gs twitter].


[app]: http://gsong.github.io/apple-store-search-ts
[apple api]: https://www.apple.com/itunes/affiliates/resources/documentation/itunes-store-web-service-search-api.html
[autoprefixer]: https://github.com/postcss/autoprefixer
[browsersync]: http://www.browsersync.io
[editorconfig]: http://editorconfig.org
[gs twitter]: https://twitter.com/zukefresh
[gulp]: http://gulpjs.com
[gulper]: https://github.com/anatoo/gulper
[jspm]: http://jspm.io
[libsass]: http://libsass.org/
[new issue]: https://github.com/gsong/apple-store-search-ts/issues/new
[nvm]: https://github.com/creationix/nvm
[pull request]: https://github.com/gsong/apple-store-search-ts/compare/
[systemjs]: https://github.com/systemjs/systemjs
[todo]: https://github.com/gsong/apple-store-search-ts/blob/development/TODO.md
[tsd]: http://definitelytyped.org/tsd/
[tslint]: http://palantir.github.io/tslint/
[UI Router]: http://angular-ui.github.io/ui-router/site/#/api/ui.router
[unlicensed]: http://unlicense.org/
