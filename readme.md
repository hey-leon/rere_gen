[![Known Vulnerabilities](https://snyk.io/test/npm/rere-gen/badge.svg)](https://snyk.io/test/npm/rere-gen)

# ReRe - reactredux cli tool

ReRe is a cli tool to for generating boiler plate code for a react-redux application. it also uses ejs to inject
options to customise boiler documentation (currently just injects the name of components/modules).

## Installation

```sh
npm i -g rere-gen
```

## Get Started in one line?
```sh
rere project <new project name> && cd $_ && npm i && npm start
```

## Goal of the project
create a cli tool that helps speed up development of react/redux web apps.
The project will attempt to keep up with the latest practices, post cherry
picked by the contributors.

the two main methods of keeping this package relevant are:

- keeping the project template, up to standard with features desgined
  to speed up development, and remove pain points.
- provide easy cli features to generate module boiler for the project
  that easily fit a growing project. 

## CLI Usage

### Generate new project

to kick start a new project navigate to the dir to create in and enter:

```sh
rere project <name>
```

This will generate a project with react redux and all the general boiler needed to mount the application and attach
the store. the project also comes with a comprehensive set of scripts to manage your dev flow.

 - webpack 2 for compilation.
 - avajs + enzyme for testing. If your used to mocha learn ava :).
 - includes nyc (istanbul) for test coverage.
 - comes with minimalist eslint + stylelint configurations.
 - baked in helpers, and good practices. see helpers/redux & libs/log in your new project


### Generate new pure component
to generate a pure component (component that holds state, only renders on state/props update).

```sh
rere pure <name>
```

This will create a new folder named after the component with files for: index.jsx (component), styles.scss, spec.jsx. All with relevent boiler.


### Generate new stateless component
to generate a stateless component (component that holds no state).

```sh
rere stateless <name>
```

This will create a new folder named after the component with files for: index.jsx (component), styles.scss, spec.jsx. All with relevent boiler.


### Generate redux logic module
to generate a redux logic module.

```sh
rere logic <name>
```

This will create a new folder named after the module with files/folders for: actions, reducers, core, and specs. 


## Challenges of the project
keeping the module generators, agnostic to the project template and existing projects. I would like to look into implementing a project
rc file, and look at injecting helper dependencies.


### Want to contribute ???
This would be an easy enough project to contribute to if your new to open source. Feel free to suggest changes to the cli,
or even just updates for the templates and well see what we can do.
