# SoloMajig
### Solo Wiki Notebook Blog Thingy

#### Solo
SoloMajig can be used by a single user and or consumed by many users. A single username / password combination, configured in the environment, is used to sign in. All content can be seen and edited while signed in; only published content can be seen while signed out.

#### Wiki
SoloMajig arranges content using URLs. Every unique URL has a unique piece of content attached and browsing to that URL can be used to modify or view that content. Published content can be viewed and bookmarked by anyone with the URL.

#### Notebook
SoloMajig allows for multiple pieces of content to be listed and sorted on the root. Content can be tagged and filtered using double slash URLs on the root or searched in the toolbar.

#### Blog
SoloMajig could be viewed as a flexible blog platform with draft mode by default. A list of sortable, taggable posts on the root, with stylized URLs pointing to collections based on tags. Static content pages can be created on the fly by visiting the desired URL for the page and clicking edit.

#### Thingy
SoloMajig was designed as yet another attempt to make a personal knowledge storage platform that felt fluid to integrate into everyday life. It's not really meant for anything, so feel free to use it for everything!

### Learn By Doing
SoloMajig is maybe a little weird to explain, but it's the doing that matters. For a live demo and extended documentation, go to [solomajig.com](https://www.solomajig.com). Sign in to see concealed content, explore all the features, and test drive the live split screen markdown editor! The username is `username` and the password is `password`. Enjoy!

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
  * One for MongoDB demon
  * One for NodeJS server
  * One for VueJS server
  * One for GIT & VueJS build
* Start MongoDB demon
  * `mkdir databases`
  * `npm run mongod`
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
  * Artifacts at `/deploys`
* Enjoy!

### MongoDB Atlas
* [Sign In/Up for Atlas](https://www.mongodb.com/cloud/atlas)
* Click `Database Access`
  * `Add New Database User`
  * Click `Autogenerate Secure Password`
  * Copy password into username
  * Click `Autogenerate Secure Password`
  * Securely store username & password
  * `Read and write to any database`
* Click `Network Access`
  * `Add IP Address`
  * `Add Current IP Address`
  * `Allow Access From Anywhere`
  * or
  * Whitelist server IPs
* Create a new project and or cluster
* On cluster, click `CONNECT`
  * `Connect your application`
  * Copy the connection string
  * Replace `<username>` from above
  * Replace `<password>` from above
  * Replace `<dbname>` as `solomajig`
* Set `MONGODB_URI` in environment

### Heroku
* [Install Heroku Toolbelt](https://toolbelt.heroku.com)
* Clone source code locally
  * `git clone https://github.com/benvacha/solomajig.git`
* Enter source code directory
  * `cd solomajig`
* Create Heroku application
  * Use Heroku web GUI
* Add environment to Heroku application
  * Browse to app in Heroku web GUI
  * Browse to Settings tab
  * Scroll to and click `Reveal Config Vars`
  * Add `MONGODB_URI` / MongoDB Atlas
  * Add `SOLOMAJIG_ARCHIVED` / `false`
  * Add `SOLOMAJIG_PASSWORD` / password
  * Add `SOLOMAJIG_USERNAME` / username
* Add domain to Heroku application
  * Browse to app in Heroku web GUI
  * Browse to Settings tab
  * `add domain` for sub.domain.tld
* Add CNAME to registar
  * Create a CNAME for sub.domain.tld to DNS Target
* Add Heroku remote
  * `heroku git:remote -a appName -r heroku`
* Push source code to Heroku application
  * `git push heroku master`
* Open sub.domain.tld in web browser
  * Browse to `sub.domain.tld`
* Enjoy!
* Debug
  * `heroku logs --tail`
* Enjoy!

---

### The MIT License (MIT)

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
