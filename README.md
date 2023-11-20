# A React App Template
A basic and easily configurable template for setting up a client-side rendered React web app using Webpack and Babel with support for JSX, ESM, TypeScript, CSS, CSS modules and preprocessing, static assets, linting, unit testing, polyfilling and live reloading of changes in development mode.

An explanation about the purpose of each and every NPM package used in this template can be found in [this blog post tutorial](https://blog.magnusmontin.net/2023/11/20/create-react-app-from-scratch-tutorial) about how to create a React app from scratch without using any build tools, frameworks or compilers and then gradually evolving it to support all of the above mentioned features.

## Included files
Besides configuration files for Babel, Browserslist, ESLint, Jest, Stylelint, PostCSS, TypeScript and Webpack, the template project includes a single [src/components/App.tsx](src/components/App.tsx) placeholder React component that imports a sample [src/components/App.module.css](src/components/App.module.css) CSS module. It also includes a [tests/App.test.tsx](tests/App.test.tsx) file to test the very simplistic functionality of the [src/components/App.tsx](src/components/App.tsx) component. These files are intended to be modified or removed and replaced with your own custom components and tests.

The [src/index.tsx](src/index.tsx) entry point file imports a sample [src/index.scss](src/index.scss) SCSS syntax Sass file and creates a React root for displaying content inside the "root" `div` element in [src/index.html](src/index.html). The HTML file should also be modified as needed. You may for example want to change the title and add some additional `meta` and `link` tags.

## Configuration
All configuration files are located directly in the root folder, next to the [package.json](package.json) file. There is no custom configuration defined somewhere else.

The provided default configuration should work as-is in most cases but you may at least want to take a look at the [.browserslistrc](.browserslistrc) file. It configures the target browsers of the app and is used by Babel, Core-js and Post CSS to determine what to transpile and polyfill. If you use APIs that are not part of the ECMAScript specification or/and are not handled by any of these libraries, such as for example the browser `fetch` API, you need to install additional polyfills to be compatible with legacy browsers.

If you intend to use any other assets types than `.gif`, `.jpg`, `.jpeg`, `.png` or `.svg` files, you should configure Webpack, Jest and TypeScript to handle these additional file extensions by adding them in the [webpack.config.js](webpack.config.js), [jest.config.json](jest.config.json) and [assets.d.ts](assets.d.ts) files respectively.

## Scripts
The [package.json](package.json) file contains the following scripts:

- `tsc`: Compiles all TypeScript files using the official TypeScipt compiler and the settings configured in [tsconfig.json](tsconfig.json)
- `lint`: Lints all `js`, `jsx`, `ts` and `tsx` files in the [src](src) and [tests](tests) folders using ESLint
- `lintstyles`: Lints all `css`, `sass` and `scss` files in the [src](src) and [tests](tests) folders using Stylelint
- `build`: Builds an optimized production-ready JavaScript bundle using Webpack, and performs both typechecking and linting as part of the build process. The output is [configured](webpack.config.js) to be written to a `dist` folder.
- `test`: Runs all tests (`.test` and .`spec` files) in the project using Jest
- `start`: Starts the Webpack Development Server in development mode, assuming the typechecking and linting succeeds

## Usage
To base a new application on this template, begin by cloning this repository to your local machine (there is no public NPM package):

    git clone https://github.com/mgnsm/react-csr-app-template.git
    cd react-csr-app-template

Then remove the `.git` folder using the `rd /s /q .git` command on Windows or `rm -r .git` on Unix, install the NPM dependencies using the `npm install` command and start to add more components, install additional packages and modify any files as needed.

Please create an issue in this repository if you run into an issue or want to provide any feedback.