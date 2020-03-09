# Solomajig
### Solo Wiki Journal Blog

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
* Start MongoDB demon
  * `sudo mongod &`
* Start the NodeJS application
  * `npm start`
  * or
  * `npm run nodemon`
* Overload localhost for local.host
  * `sudo vim /etc/hosts`
  * Add `127.0.0.1  local.host`
* Open local.host in web browser
  * Browse to `local.host:3000`
* Enjoy!
* Start Vue CLI application
  * `npm run vueserve`
  * Browse to `local.host:8080`
* Enjoy!

### Heroku
* [Install Heroku Toolbelt](https://toolbelt.heroku.com)
* Clone source code locally
  * `git clone https://github.com/benvacha/solomajig.git`
* Enter source code directory
  * `cd solomajig`
* Add Heroku remote
  * `heroku git:remote -a appName[ -r remoteName]`
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
* Debug
  * `heroku logs --tail`
* Enjoy!
* Build Vue CLI publics
  * `npm run vuebuild`
  * Artifacts at `/dists`
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