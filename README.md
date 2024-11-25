### Tree-shaking in Angular 19

This project demonstrates cases when Angular 19 tree-shakes unused internals of a (3rd party) library and when not - while importing just one component from a library. The cases are:

1. Eagerly loaded component from library
2. @Defer-loaded component from library
3. @Defer-loaded local component that wraps a component from library

### How to run

```bash
npm install

# Build all 3 libraries
ng build lib1 && ng build lib2 && ng build lib3

# Build app
ng build

# Start http server on a production build
npx http-server dist/test-standalone-minimal/browser
```

### Project structure

The project contains 3 libraries and a main application. Each library is simple and analogical: it contains a Component A, Component B and Service, e.g.: `lib1` contains `Lib1AComponent`, `Lib1BComponent` and `Lib1Service`.

### Results

1. Eagerly loaded Component A from lib1
   - ✅ ONLY Component A is bundled into main.js
2. Defer-loaded Component A from lib2
   - 😕 WHOLE lib2 is bundled in a lazy loaded chunk (despite Component B and Service are unused!)
3. Defer-loaded Local Component that wraps Component A from lib3
   - ✅ ONLY Component A is bundled (together with the wrapper component) in a lazy loaded chunk (but NOT Component B and Service from lib3!)
