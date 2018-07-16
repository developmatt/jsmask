[![Build Status](https://travis-ci.org/matheusasdev/jsmask.svg?branch=master)](https://travis-ci.org/matheusasdev/jsmask)

# JS Mask
## A simple lightweight Javascript mask

This module allows you create masks to input (for phones, zip codes and etc) in simple steps.

### How it works

JSMask only requires you send two parameters:
1. The element who needs a mask
2. The mask format (in wich the X represents the characters)

Example:

    <input type="text" id="anyId" oninput="jsmask(this, XXX-XXX/XXX)">

The result will be: **123-456/789**

Another way to do this is:

In view file:

    <input type="text" id="anyId" oninput="jsmask(this, XXX-XXX/XXX)">

In your script file:

    document.getElementById('anyId').addEventListener('input', function(){
    	jsmask(this, 'XX-XX-XX');
    });

The result will be **12-34-56**


### Installing in project

#### Installing from github

- Clone jsmask `git@github.com:matheusasdev/jsmask.git` inside your project
- In your script file, import jsmask
Example:
`require('../jsmask/dist/jsmask.min.js');`

Obs: If you are using any code packer (as webpack), you can just include the jsmask this way: `require('jsmask');`


#### Installing from NPM
**Coming soon**


### Contributing

