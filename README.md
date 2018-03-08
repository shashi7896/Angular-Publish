# AngularPublish

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# Angular-Publish

## Steps to publish your module to NPM artifactory
1. Create an index.ts file at the /src level and export all the modules, services, components and pipes in this file.
2. Create an public_api.ts and export everything that is defined in the index.ts file as export * from 'index.ts'.
3. Install gulp and gulp-inline-ng2-template from npm to configure our tasks and write down the tasks to inline our HTML, CSS and to copy    our assets, other files to dist directory.
4. Create a file called tsconfig-aot.json and write the compiler options in it.
5. As a last step go to the package.json file and in the scripts add these two scripts    
    "runaot": "./node_modules/.bin/ngc -p tsconfig-aot.json",
    "gulppack": "gulp templates && npm run runaot"
6. Now when you run the npm run gulppack cmd, it generates a dist folder, and it executes our tasks from gulp file and performs AOT from 
   the tsconfig-aot.json.
7. Now cd into dist "cd dist" and run the following cmd 'npm pack'.
8. Above cmd generates a tarbal file with .tgz extention which is ready to publish and you could run npm publish to publish it to the      artifactory.

