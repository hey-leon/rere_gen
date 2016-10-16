# ReRe - reactredux cli tool

ReRe is a cli tool to for generating boiler-plate for a react-redux application. it also uses ejs to inject
options to customise boiler documentation as such (currently just injects the name of components/modules).

## Installation

```sh
npm i -D rere-gen
```

## Usage

### Generate new project

to kick start a new project navigate to the dir to create in and enter:

```sh
rere project <name>
```

This will generate a project with react redux and all the general boiler needed to mount the application and attach
the store. the project also comes with a comprehensive set of scripts to manage your dev flow.

 - webpack for compilation.
 - avajs + enzyme for testing. If your used to mocha learn ava :).
 - includes nyc (istanbul) for test coverage.
 - comes with minimalist eslint + stylelint configurations.


### Generate new pure components
to generate a pure component (component that holds state, only renders on state/props update).

```sh
rere pure <name>
```

This will create a new folder named after the component with files for: index.jsx (component), styles.scss, spec.jsx. All with relevent boiler.


### Generate new pure components
to generate a stateless component (component that holds no state).

```sh
rere stateless <name>
```

This will create a new folder named after the component with files for: index.jsx (component), styles.scss, spec.jsx. All with relevent boiler.


### Generate redux logic modules
to generate a redux logic module.

```sh
rere logic <name>
```

This will create a new folder named after the module with files/folders for: actions, reducers, core, and specs. 


### Want to contribute ???
This would be an easy enough project to contribute to if your new to open source. Feel free to suggest changes to the cli,
or even just updates for the templates and well see what we can do.
