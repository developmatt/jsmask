
![Build Status](https://img.shields.io/travis/developmatt/jsmask-plugin/master.svg?longCache=true&style=for-the-badge)
![License: MIT](https://img.shields.io/badge/license-mit-blue.svg?longCache=true&style=for-the-badge)



# JS Mask
## A simple lightweight Javascript mask

This module allows you create masks to input (for phones, zip codes and etc) in simple steps.
**This plugin does not require jquery.**

### How it works

JSMask only requires you send two parameters:
1. The element who needs a mask
2. The mask format (in wich the X represents the characters)

Examples:

**Calling from HTML**

    <input type="text" id="anyId" oninput="jsmask(this, XXX-XXX/XXX)">

The result will be: **123-456/789**


**Using Javascript**

In view file:

    <input type="text" id="anyId">

In your script file:

    document.getElementById('anyId').addEventListener('input', function(){
    	jsmask(this, 'XX-XX-XX');
    });

The result will be **12-34-56**

### Installing in project

#### Installing from github

- Clone jsmask `git@github.com:developmatt/jsmask-plugin.git` inside your project
- In your script file, import jsmask
Example:
`require('./jsmask-plugin/dist/jsmask.min.js');`

Obs: If you are using any code packer (as webpack), you can just include the jsmask this way: `require('jsmask');`


#### Installing from NPM 

    npm install jsmask
or

    npm install developmatt/jsmask-plugin

Now, in your script file, just include the jsmask using (I'm assuming you're using some code packer):

    require('jsmask');

#### Other mask options
JSmask offers options more accurate to mask your fiels. You can use the chars 'A', 'a', '0', 'U', 'l' instead 'X'. Se each option definition:
 - 'A': Just uppercase letters
 - 'a': Just lowercase letters
 - '0': Just numbers
 - 'U': Uppercase letters or numbers
 - 'l': Lowercase letters or numbers
 - 'X': Uppercase or lowercase letters or numbers

Example: 

    <input id="anyId" oninput="jsmask(this, 'AAA-aaa-000-UUU-lll')">

The result will be **ABC-def-123-GH4-ij5**

### Contributing
You are welcome to contribute. If you want more info about contributing, [read this](https://github.com/developmatt/jsmask-plugin/blob/master/CONTRIBUTING.md).
