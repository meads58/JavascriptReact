#Setup
```npm install``
```npm run start -s```

Stateless Components: Aim to use these as much as possible over Class component. https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.nr1ynu728

Container Component:
* Little to no markup
* Logic to pass data and actions down to presentation components(smart).
* Often statefull as they manage state.

Presentation Components:
* Nearly all markup(dumb)
* Receive data and actions via props from Container components.
* Use these most often.
* Stateless.
