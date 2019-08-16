# Next.js basic frontend boilerplate

Start development mode with
```
npm run start-dev
```

## Project Layout

| Folder | Description |
| ---- | ---- |
| /__tests__ | Place for all unit and snapshot tests |
| /components | Place for React Components |
| /config | Configuration files, json's |
| /pages | Page Components, in next.js Pages behaves as frontend routes |
| /static | Static file assets (images etc.) |
| /styles | Sass style files |
| /types | FlowType definitions (https://flow.org/en/docs/libdefs/) |
| /util | utility javascript |

## Styling
We can use either styled-jsx (https://github.com/zeit/styled-jsx) or classic global stylesheet style with sass/css.
Global styles are usually loaded in layout components (/components/layouts), like in this example:
```
import style from 'styles/components/<your-component>.scss'
...
const Component = () => (
    <div>
        <style dangerouslySetInnerHTML={{ __html: style }} />
    </div>
)
```
This is usually set up on layout component level, but you can decide to use this approach in every component. The styles will only affect html rendered by this component or child components. The styles can not affect parent components markup.

If you use the styled-jsx approach, the component styles are encapsulated just for this one component. They can not even affect children components. Styled jsx is used like this:
```
const Component = () => (
    <div>
        <style jsx>{`
            p {
            color: red;
         `}</style>
     </div>
 )
```

## Simplify module import paths
Use babel-plugin-module-resolver to setup custom aliases for directories, specific files, or even other npm modules.
Instead of using complex relative paths like:
 ```
 import lib from '../../../../utils/my-utils/lib'
```
you can write
```
import lib from 'utils/my-utils/lib'
```
Configuration example:
```
[
      "module-resolver", {
      "root": ["."],
      "alias": {
        "styles": "./styles",
        "components": "./components"
      },
      "cwd": "babelrc"
    }
]
```

## Flow
we use babel plugin "transform-flow-strip-types" to strip flow annotations.
in .flowconfig file:
* we ignore node_modules
```
...
[ignore]
.*/node_modules/.*
...
```
* we configure node modules path aliases according to setting of babel-plugin-module-resolver (fixes errors with paths to modules)
```
...
[options]
module.name_mapper='^components\/\(.*\)$' -> '<PROJECT_ROOT>/components/\1'
module.name_mapper='^styles\/\(.*\)$' -> '<PROJECT_ROOT>/styles/\1'
...
```
* we specify filetypes for flow to consume, so it can recognize css modules (fixes errors with paths to modules)
```
...
[options]
module.file_ext=.js
module.file_ext=.json
module.file_ext=.jsx
module.file_ext=.css
module.file_ext=.scss
...
```

Don't forget to set yout IDE to integrate with flow (for phpStorm: https://blog.jetbrains.com/webstorm/2016/11/using-flow-in-webstorm/)


## Linting
Part of the project are `lint` tools, a static code analysis tools and settings to determinate issues, guarantee code quality and code consitency.

Currently we use linters for these technologies:
* `javascript` - ESLint (https://eslint.org/)
* `sass` - Sass Lint (https://github.com/sasstools/sass-lint)

To run the analysis, you have to run the commans below:

```
npm run eslint
```
or
```
npm run sass-lint
```

## Testing
We use Jest as main test framework (https://facebook.github.io/jest/).
To run tests:
```
npm run test
```
