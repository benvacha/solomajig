# SoloMajig
### Solo Wiki Notebook Blog Thingy

#### Solo
SoloMajig can be used by a single user and or consumed by many users. A single username / password combination, configured in the environment, is used to sign in. All content can be seen and edited while signed in; only published content can be seen while signed out.

#### Wiki
SoloMajig arranges content using URLs. Every unique URL has a unique piece of content attached and browsing to that URL can be used to modify or view that content. Published content can be viewed and bookmarked by anyone with the URL.

#### Notebook
SoloMajig allows for multiple pieces of content to be listed and sorted on the root. Content can be tagged and filtered using double slash URLs on the root or searched in the toolbar.

#### Blog
SoloMajig could be viewed as a flexible blog platform with draft on by default. A list of sortable, taggable posts on the root, with stylized URLs pointing to collections based on tags. Static content pages can be created on the fly by visiting the desired URL for the page and clicking edit.

#### Thingy
SoloMajig was designed as yet another attempt to make a personal knowledge storage platform that felt fluid to integrate into everyday life. It's not really meant for anything, so feel free to use it for everything!

### Learn By Doing
SoloMajig is maybe a little weird to explain, but it's the doing that matters. For a live demo and extended documentation, go to [solomajig.com](http://www.solomajig.com). Sign in to see concealed content, explore all the features, and test drive the live split screen markdown editor! The username is `username` and the password is `password`.  

---

## Deploy

### Local
* [Install NodeJS](https://github.com/joyent/node/wiki/Installation)
* [Install MongoDB](http://docs.mongodb.org/manual/installation)
* Clone source code locally
  * `git clone https://github.com/benvacha/solomajig.git`
* Enter source code directory
  * `cd solomajig`
* Install dependencies
  * `npm install`
* Setup environment
  * `cp .dotenv .env`
  * `vim .env`
  * Set Username & Password
    * `SOLOMAJIG_USERNAME`
    * `SOLOMAJIG_PASSWORD`
* Open 4 terminals / tabs
* Start MongoDB demon
  * `sudo mongod`
* Start the NodeJS server
  * `npm start`
  * or
  * `npm run nodemon`
* Open NodeJS server in browser
  * Browse to `localhost:3000`
* Enjoy!
* Start VueJS server
  * `npm run vueserve`
* Open VueJS server in browser
  * Browse to `localhost:8080`
* Enjoy!
* Build VueJS to NodeJS
  * `npm run vuebuild`
  * Artifacts at `/dists`
* Enjoy!

### Heroku
* [Install Heroku Toolbelt](https://toolbelt.heroku.com)
* Clone source code locally
  * `git clone https://github.com/benvacha/solomajig.git`
* Enter source code directory
  * `cd solomajig`
* Add Heroku remote
  * `heroku git:remote -a appName -r heroku`
* Add domain to Heroku application
  * Browse to app in Heroku web GUI
  * Find more add-ons for MongoDB
  * Browse to Settings tab
  * `add domain` for sub.domain.tld
* Add CNAME to registar
  * Create a CNAME for sub.domain.tld to DNS Target
* Push source code to Heroku application
  * `git push heroku master`
* Open sub.domain.tld in web browser
  * Browse to `sub.domain.tld`
* Enjoy!
* Debug
  * `heroku logs --tail`
* Enjoy!

---

## Update

### Engines
* Install n
  * `sudo npm install -g n`
* Clean npm cache
  * `npm cache clean -f`
* Update NodeJS and npm
  * `sudo n lts`
  * `npm update -g`
* Check versions
  * `node -v`
  * `npm -v`
* Update engines
  * `cd ableservice`
  * `vim package.js`
  * Edit `engines.node`
  * Edit `engines.npm`
* Enjoy!

### Dependencies
* Find outdated
  * `npm outdated`
* Mark for update
  * `vim package.js`
  * Edit `dependencies`
  * Allow patches `~0.0.0`
  * Allow miner `^0.0.0`
* Update dependencies
  * `npm update --save`
* Double check everything
  * `npm outdated`
  * `vim package.js`
  * `npm start`
* Push to Heroku application
 * `git push remoteName master`
* Enjoy!

---

###The MIT License (MIT)

Copyright (C) 2020 Benjamin J Vacha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
