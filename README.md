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

## Installation

If you already have Meteor, Void is ready to go. Just clone it locally, run it with `meteor`, and start coding!

If not, here are the full instructions:

```
curl https://install.meteor.com | /bin/sh
git clone https://github.com/anuragphadke19/firestarter.git myApp
cd myApp
meteor or meteor --port $IP:$PORT (if you are using c9.io)

```

## Features

- Client-side routing
- Publications/subscriptions
- Basic permissions
- Common templates
- Basic authentication system
- Fontawesome & Bootstrap 3 support

## Principles

Opinionated structure and patterns a la rails

## File Structure

- **client**
	- **CSS**
	- **helpers**
		- handlebars.js
		- router.js
	- **views**
		- **common**
			- footer.html
			- header.html
			- layout.html
			- loading.html
			- notFound.html
		- **items**
			- item.html
			- item.js
			- items.html
		- **pages**
			- homepage.html
	- main.html
	- main.js
- **models**
	- items.js
- **lib**
	- helpers.js
	- permissions.js
- **packages**
	- sample-package
- **public**
- **server**
	- fixtures.js
	- publications.js

