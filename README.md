## Update! ##
*As of June '17 we switched to using NPM5, this removed the need for `npm link`* 
If you still use an older npm, refer to README.npm.old.md



# Meisterplayer Targets #

## What is a target ##
Meisterplayer consists of a Meister-Core, a collection of plugins and a target-project. The target project can be used to actually build an instance of the player or is used as environment to create/maintain plugins. It has been setup as a gulp environment which load the configured plugins and is capable of building/minifying the source using WebPack or run a (hot-reloading) webpack-webserver.

This readme is divided in 2 parts; the building of a Meisterplayer-distribution file (minified) and developing/maintaining Meisterplayer-plugins  

## Prerequisites ##

For now we assume you are using a Mac of Linux machine. Using Windows to compile works but we haven't tested it ourselves.
Furthermore you'd need;

-  Node installed. The meisterplayer team uses v6.9.4 at the time of writing, other versions probably work but your mileage may vary.
-  NPM installed. 
-  Reasonable understanding of ES6
  

## Building a (custom) distribution of Meisterplayer ##

With this template project you can create your own custom build of Meisterplayer with just the plugins you need.  To get up and running follow these steps

- Check and install the prerequisites
- Clone this project in to a folder of your choosing and CD in to it.
- Install the plugins you need ie.:

```
npm i @meisterplayer/meisterplayer
npm i @meisterplayer/plugin-basemedia
npm i @meisterplayer/plugin-dash
npm i @meisterplayer/plugin-hls
npm i @meisterplayer/plugin-nativehls
npm i @meisterplayer/plugin-smooth
npm i @npm-wearetriple/meister-plugin-googleima

```
[also check below!]

- Open `src/js/MeisterPlayer` and import the plugins need
- Add the plugins you imported to `Meister.builtIn` , preferably by referencing the pluginName property of a plugin, like so; ```[Html5Player.pluginName]: {},```
- Build a distribution version using `npm run build:dist`

You're done! The minified file is available in `/dist`

We have several predefined setups available on GIST:

- [Complete Woodstock edition](https://gist.github.com/buttonfreak/560991afef18c36db33c33ee24b8750a)
- [Basic Woodstock edition without Smooth/DASH/HLS support](https://gist.github.com/buttonfreak/6107c87797fc53b408e844bd7638bbdc)
- [Full Meister Suite (enterprise only!)](https://gist.github.com/buttonfreak/4df287afa1c820ae978e521d4b3e77cc)



## Developing and/or maintaining Meisterplayer Plugins ##


### TL;DR ###
To Setup the woodstock edition and it's plugins you can copy-paste the following GIST in a terminal:

[See GIST](https://gist.github.com/buttonfreak/72a069e977b8187b56f87e5337eee2ec)

### How does this work? ###
If you're gearing up for some Meisterplayer plugin development you should use this project as main task runner. If all the plugins you need are imported and configured you technically only would need to keep this project open in a terminal to run `npm start` and monitor the output once in a while. The actual coding is done from one or more plugin-directory you usually cloned from GitHub and a are linked into this project. 

Our ideal workflow (assuming this project is configured) is to open all plugins and Meister-core in Visual Studio Code, open the terminal in VSC and cd to this project, run `npm start` and get to work :-)

### Start setting up ###

##### Clone Meister from Github #####

To get started working on existing plugins you need to clone those plugins and the meister-core from GitHub and store these file *outside* the target-template (if you have cloned the template already).

- create a meister directory dedicated to the plugins and Meister core ;

```
mkdir meister && cd meister
```

- Clone Meister-core and core plugins;

```
git clone https://github.com/meisterplayer/meisterplayer.git
git clone https://github.com/meisterplayer/media-basemedia.git
git clone https://github.com/meisterplayer/player-html5player.git
git clone https://github.com/meisterplayer/ui-standardui.git
```

- Clone any other plugins you might want to use, check out the meisterplayer-repo's on github;

```
git clone https://github.com/meisterplayer/parser-multisource.git
git clone https://github.com/meisterplayer/media-nativehls.git
git clone https://github.com/meisterplayer/media-hls.git
git clone https://github.com/meisterplayer/media-dash.git
git clone https://github.com/meisterplayer/media-smooth.git
git clone https://github.com/meisterplayer/parser-webvtt.git
git clone https://github.com/meisterplayer/ui-debugoverlay.git 
```

##### Install plugin-dependencies ######

In each plugin and in Meisterplayer-core you need to run `npm install`. This could take a while.

##### Clone target template #####

Next up; clone the target-template from GitHub if you haven't already

```
git clone https://github.com/meisterplayer/meister-target-template.git && cd meister-target-template
```

Next; install dependencies by running `npm install`. 

Next, install the Meisterplayer-plugins you want to work on;

``` 
npm i ../meister/media-nativehls 
``` 

Finish by installing the Meisterplugins you need but don't need to work on.

*Change the path to reflect your folder-structure*, you can use both relative and absolute paths. If you link all plugins be prepared to have NPM slow down significantly, the filetree of the project will become quite large.

##### The index, src/meisterplayer-file and importing the correct source-files #####

`index.js` is the npm-main file, it merely imports `src/meisterplayer.js` which contains the collection of plugins that are imported and compiled by WebPack. If you linked a plugin into the project webpack will only compile it's `src` directory if you import the index of the plugin like this;

```
import NativeHls from '@npm-wearetriple/meister-plugin-nativehls/index';
```

If you want to import the dist-file (created when you use `npm run dist` from the plugin) from the linked plugin you should remove the reference to `index` like this;

```
import NativeHls from '@npm-wearetriple/meister-plugin-nativehls';
```

Webpack will also supply a webserver with hot-reloading, but please note that hot-reloading will only work if you reference the index-file of the plugin. 

*You should now be ready to start working on plugins development*

### Update after switching branches ###

If you checkout a branch of a plugin that has new dependencies you should update the node-modules. This can be done by cd'ing to the plugin-directory (the target of the NPM-link) and enter `npm update` . The package list should be updated to reflect the changes in dependencies. 


## NPM Tasks ##

`npm start`
Starts a browserSync server and hot-reloading 

`npm run build` 
Transpiles a non minified version using webpack

`npm run build:dist`
Transpiles and minifies a version using webpack

`npm run min`
Transpiles and minifies a version using webpack and puts it in /dist

`npm run jsdocs`
Creates API docs using JSDoc

`npm run bump --type=major/minor` 
Bumps version

`npm run changelog`
Creates a changelogs from transactional git logs

## Debugging from Visual Studio Code ##

We use VSC for development, in order to debug from VSC you should install `https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome`. 
If you followed the steps defined in `Developing and/or maintaining Meisterplayer Plugins` you should have a VSC (or terminal) instance from the dev-target which started the development-server with `npm start` and a VSC instance with all meister-plugins and the core (normally I'd drag the parentfolder into VSC and Bob's your uncle).
If you want to debug from VSC you should add a configuration in the debug-tab with the following contents in `launch.json`;

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceRoot}",
            "sourceMapPathOverrides": {
                "webpack:///../meister5/*":   "${workspaceRoot}/../meister5/*",    
           },
        }
    ]
}
```

What this configuration does; it maps the source-files generated by Webpack and loaded into the browser from webpack://meister5 to the actual files on your file-system.

If the development-server is running (`npm start`) you should be able to start debugging (press f5), another instance of Chrome will start and VSC will connect to it, you can set breakpoints in your Meister-plugins/Core code and after (hot)-reloading you should see VSC stepping into your breakpoints.


## SSL ##
You need to setup SSL if you want to support DRM in your target. For development on localhost you might get away without ssl but as soon as you are using a hostname or allow remote clients to connect to your development-environment (mobile devices for testing etc) you need a valid SSL certificate.
By default `browserSync` is configured to use a selfsigned certificate, if you need to configure a valid certificate you can configure BrowserSync to use the `certificates` configuration in package.json. An example;
```
{
  "certificates": {
    "privateCertificate" : "./certificates/privkey.pem",
    "certificate" : "./certificates/cert.pem"
  }
}
```
You can (and should) use certificates obtained from Letsencrypt; this will make your live a whole lot easier.

### disable SSL ###
_Please note_: you will get strange bugs when not using SSL since browsers do not like to serve video over non-ssl connections.
If you need to disable ssl *(which is discouraged)* you can remove the configuration of `server`-task in `gulpfile.js`, specifically the configuration in `sslOptions`

## Problems? ##
_I don't have hot-reloading when I save something in `plugin-xx`_

Check whether you have linked `plugin-xx` into the template project and you import the `index` of the plugin.


### Todo
Create and configure test-tasks
