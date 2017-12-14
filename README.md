# Redis Browser


This is a simple browser for [redis](https://redis.io), that also supports displaying json stored in redis through the [rejson plugin](http://rejson.io)

![Screenshot](https://github.com/anandtrex/redis-browser/raw/gh-pages/redis-browser-screenshot.png)

## Downloads
Downloads for all platforms are available on the [Releases page](https://github.com/anandtrex/redis-browser/releases)

## Building from source

### Requirements
* nodejs
* npm

On Archlinux, install with
```
pacman -S nodejs npm
```

### Build
First clone the repository. Then run:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

```

The built application will be found in the `build` directory

# About

This application is build with [electron](https://electronjs.org) and [Vue.js](https://vuejs.org).

---

The vue-electron base for this project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[1c165f7](https://github.com/SimulatedGREG/electron-vue/tree/1c165f7c5e56edaf48be0fbb70838a1af26bb015) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
