### Tree-shaking in Angular 19

This project demonstrates cases when Angular 19 tree-shakes unused internals of a (3rd party) library and when not - while importing just one component from a library. The cases are:

1. ✅ Eagerly loaded component from library (tree shaking works)
2. 😕 @Defer-loaded component from library (tree shaking doesn't work)
3. ✅ @Defer-loaded local component that wraps a component from library (tree shaking works)
4. ✅ @Defer-loaded component from library imported via a local proxy-file instead of directly (tree shaking works)

### How to run

```bash
npm install

# Build all 3 libraries
ng build lib1 && ng build lib2 && ng build lib3 && ng build lib4

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
   - <img width="251" alt="image" src="https://github.com/user-attachments/assets/2f332cfb-f971-4192-9eb6-7a81bd0099fe">
2. Defer-loaded Component A from lib2
   - 😕 WHOLE lib2 is bundled in a lazy loaded chunk - not only Component A, but also unused Component B and Service
   - <img width="445" alt="image" src="https://github.com/user-attachments/assets/66fc2ec6-9d6b-402a-bf21-e574e1decfee">
3. Defer-loaded Local Component that wraps Component A from lib3
   - ✅ ONLY Component A is bundled (together with the wrapper component) in a lazy loaded chunk (but NOT the unused Component B and Service from lib3!)
   - <img width="443" alt="image" src="https://github.com/user-attachments/assets/cba9ebc9-7e0b-4ef7-b4e8-7b705a69c34b">
4. Defer-loaded Component A from lib4 imported via a local proxy-file (instead of directly)
   - ✅ ONLY Component A is bundled in a lazy loaded chunk (but NOT the unused Component B and Service from lib4!)
   - ![image](https://github.com/user-attachments/assets/efc2c384-cf1d-4275-a4ff-9b19be602339)

