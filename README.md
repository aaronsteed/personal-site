[![Stories in Ready](https://badge.waffle.io/aaronsteed/personal-site.png?label=ready&title=Ready)](https://waffle.io/aaronsteed/personal-site)
[![Build Status](https://travis-ci.org/aaronsteed/personal-site.svg?branch=master)](https://travis-ci.org/aaronsteed/personal-site)
# personal-site

> A profile for Aaron Steed, to advertise himself as a full stack web developer, software engineer and final year student.

### Requirements
This project requires the following :
- NodeJS
    - Node Package Manager (NPM)
        - Bower 
        - Grunt

Install Node from [here!](https://nodejs.org/en/) depending on your OS.


---

### Installation
To download all dependencies, assuming you have downloaded and installed NodeJS, you will also have downloaded and installed NPM (Node Package Manager). Verify you have node and NPM and their correct versions used on this project.

```sh
$ node -v
v6.3.0
$ npm -v 
3.10.3
```

Next is to install Bower. Bower manages all web dependencies on this project. A `bower.json` file should already be in the root directory, this specifies all the dependencies as well as the `.bashrc` file which specifies the location and name of the folder they are stored under. go ahead and install bower as follows :

```sh
$  npm install -g bower
```

Now that Bower is installed we can download our web dependencies with ease. :fire:
```sh
$  bower-install
```

This installs all the web dependencies under the directory `Bower/`

To install Grunt in use for deployments : 
```sh
$  npm install grunt
```

---
### Deployment
Grunt  is used to deploy the project as well as doing other handy tasks such as concatenating files, minimising them and minimising images as well as some other cool stuff you should definitely check it out [here!](http://gruntjs.com/)

To install all the plugins grunt requires, we must first download them using npm :stuck_out_tongue:
```sh
$  npm install 
```

This will download all required plug-ins for Grunt in the directory `node_modules/`

To start grunt and make a directory ready for deployment, simply run the Grunt command :
```sh
$  grunt
```

This runs all the plug-ins Grunt has configured in `Gruntfile.js`
The available plug-ins are as follows:
- `clean` - Deletes the dist directory of the current version E.g. `dist/0.1.x` in prep of new dist
- `concat` - concatenates all Javascript files together into one file
- `uglify` - Minifies concatenated file
- `jshint` - Lints the `Gruntfile.js` along with all other Javascript files used in the project
- `cssmin` - Minifies the CSS files
- `imagemin` - Minifies and compresses JPG images of project
- `htmlmin` - Minifies all HTML files
- `version` - Applies new version to `package.json` and `bower.json` in one line
- `compress` - After all minification, concatenation and 'linting' takes place, this plugin zips a copy of all files and places it in /dist/x.x.x/zip, where x.x.x. represents the version of the project

NOTE : `imagemin-mozjpeg - v5.1.0` is required as `imagemin` hasn't been updated to support v6.0.0
 
 ---
### Version

**0.1.2**

---

### Todos
 - Finish off website fully :sparkler:
 - Localhost setup :computer:
 - Full development environment within project :outbox_tray:

---

### Technologies Used
- HTML, CSS, JavaScript
- Bower for Web Dependencies 
    - JQuery - [Too much good stuff to mention.](http://www.jquery.com) :blue_heart:
    - Animate.CSS - Animating labels and icons. :dash:
    - Typed.js - Animating the hobby as a type effect under my name on the site. :card_index:
- Grunt
    - Tasks :
        -  Minifying HTML, CSS, JS files
        -  Compressing images
        -  Concatenating CSS and JS files
        -  'Linting' JS files 
- Travis CI 
    - Continuous Integration

---

License
---

MIT     
**Free Software, Hell Yeah!**

*This file was generated on Tue 16 Aug 2016 01:45:34 IST*