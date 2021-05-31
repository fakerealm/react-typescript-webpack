# **React Typescript Webpack Template 🥳**
## _The best front-end template you can find ever,_

**A simple to understand yet powerful template**

- Typescript for decreasing debugging time
- React to make you new website more beautiful

## Features

- **Simple to use 😉**
- **This template uses latest Webpack 5, React 17**
- **The template uses various babel plugins for optimising _JSX_ and _JS_.**
- **ESLint using Google's Standard Style Guide.**


## NPM Commands
_To run webpack and watch files in development mode_
```Bash
npm run start
```

_To run webpack server with hot reloading in development mode_
```Bash
npm run start:server
```

_To create the production build of your program_
```Bash
npm run build
```

_To simply run the build process and watch files_
```Bash
npm run dev:build
```

---
**NOTE**

Running the webpack in development mode will use the *[@babel/preset-typescript]*(https://babeljs.io/docs/en/babel-preset-typescript) and *[fork-ts-checker-webpack-plugin]*(https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) for type checking, because *@babel/preset-typescript* only transpile the files.



---

## Plugins

**This template ensures that your code run as butterly as possible by making use of several babel plugins** 

| Plugin | README |
| ------ | ------ |
| [_babel-plugin-loop-optimizer_](https://github.com/vihanb/babel-plugin-loop-optimizer) | Converts .forEach to native for loop |
| [_faster.js_](https://github.com/vzhou842/faster.js) | rewrites common Array methods which do the same thing just faster! |
| [babel-preset-react-optimize](https://github.com/jamiebuilds/babel-react-optimize) | A Babel Preset for Optimizing React Code |
| [babel-plugin-closure-elimination](https://github.com/codemix/babel-plugin-closure-elimination) | Babel plugin which spreads closures  into functions for faster performance |
| [babel-plugin-preval](https://github.com/kentcdodds/babel-plugin-preval) | pre-evaluate code at build time |
| [babel-plugin-idx](https://github.com/facebookincubator/idx) | idx is a utility function for traversing properties on objects and arrays |


## License

MIT

**Free Software, Hell Yeah! 😘**
