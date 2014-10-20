# A heavily modified fork of [Void](https://github.com/SachaG/Void)

A starter boilerplate app template for [Meteor](http://meteor.com) using the following packages: 
- Client side routing [IronRouter](https://github.com/EventedMind/iron-router)
- CDN based fontawesome support [font-awesome](https://atmospherejs.com/natestrauser/font-awesome)
- Excellent collection package[collection2](https://atmospherejs.com/aldeed/collection2)
- Forms with schema support via "simple-schema" [autoform](https://atmospherejs.com/aldeed/autoform)
- Bootstrap 3 support [bootstrap-3](https://atmospherejs.com/mizzao/bootstrap-3)
- Wrapper for spinner.js [spin](https://atmospherejs.com/sacha/spin)
- Base accounts package [accounts-base](https://atmospherejs.com/meteor/accounts-base)
- Password based authentication [accounts-password](https://atmospherejs.com/meteor/accounts-password)
- Dropdown based Ui for authentication (TODO: change to bootstrap based UI) [accounts-ui](https://atmospherejs.com/meteor/accounts-ui)
- Rails style flash messages for your meteor app (added as a local package) [flash-messages](https://github.com/camilosw/flash-messages)

## Installation

If you already have Meteor, Firestarter is ready to go. Just clone it locally, run it with `meteor`, and start coding!

If not, here are the full instructions:

```
curl https://install.meteor.com | /bin/sh
git clone https://github.com/anuragphadke19/firestarter.git myApp
cd myApp
git remote -v
git remote rm origin
git remote add origin (github or bitbucket repository URL)
meteor add flash-messages
meteor or meteor --port $IP:$PORT (if you are using c9.io)

```

## Features

- Client-side routing
- Publications/subscriptions
- Basic permissions
- Common templates
- Basic authentication system
- Boostrap based authentication UI
- Fontawesome & Bootstrap 3 support
- A built in flash message system

## Principles

Opinionated structure and patterns a la rails

## File Structure

- **client**
	- **CSS**
	    - user.css
	    - main.css
	- **helpers**
		- flash.js
		- handlebars.js
		- router.js
	- **views**
		- **common**
			- footer.html
			- header.html
			- header.js
			- layout.html
			- loading.html
			- notFound.html
		- **items**
			- item.html
			- item.js
			- items.html
			- items.js
		- **pages**
		    - about.html
			- homepage.html
		- **users**
		    - forgot.html
			- forgot.js
			- login.html
			- login.js
			- signup.html
			- signup.js
	- main.html
	- main.js
- **models**
	- items.js
- **lib**
	- helpers.js
	- permissions.js
- **packages**
	- sample-package
	- flash-messages
- **public**
- **server**
	- seed.js
	- publications.js

