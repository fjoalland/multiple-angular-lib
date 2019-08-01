# What is it about

The goal is to create 3 angular libraries. The lib2 and lib3 library depend on the lib1 library.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install foobar and [ng](https://www.google.com/search?q=ng+npm+install&oq=ng+npm+install&aqs=chrome..69i57j0l5.3582j0j4&sourceid=chrome&ie=UTF-8) to build the librairies

Install and build the lib1
```bash
cd lib1
npm install
ng build
```

Create Symlink of the lib1
```bash
cd lib1/dist/libs/lib1
npm link
```

Install and build the lib2
```bash
cd lib2
npm install
npm link @libs/lib1
ng build
```
You should get an error here:

```
[error] Error: : Unexpected value 'Lib1Module in D:/Documents/multiple-angular-lib/lib1/dist/libs/lib1/libs-lib1.d.ts' imported by the module 'Lib2Module in D:/Documents/multiple-angular-lib/lib2/projects/libs/lib2/src/lib/lib2.module.ts'. Please add a @NgModule annotation.

    at Object.<anonymous> (D:\Documents\multiple-angular-lib\lib2\node_modules\ng-packagr\lib\ngc\compile-source-files.js:73:19)
    at Generator.next (<anonymous>)
    at fulfilled (D:\Documents\multiple-angular-lib\lib2\node_modules\ng-packagr\lib\ngc\compile-source-files.js:4:58)
```
