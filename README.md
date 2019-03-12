# Tiki UI

Loosely inspired by [elm-ui](https://package.elm-lang.org/packages/mdgriffith/elm-ui/1.1.0/) (and its various predecessors), Tiki UI aims to provide the building blocks to create arbitrarily complex user interfaces without needing to write CSS by hand.

**Goals**

- Separation between layout and decoration
- Layout is part of the ReasonReact components
- Layout and style typechecked by the ReasonML/Bucklescript tooling
- CSS vs css-in-js is an implementation detail

**Status**

Current: Only use this if you want to contribute

- [x] Rows and Columns
- [x] Padding and Spacing
- [x] Alignment
- [x] Width and Height
- [x] A strategy for decorative styles
- [ ] Hover and Focus styling
- [ ] Responsive styling

Caveats: even the things that are checked off the list are under-tested.

## Run this thing

```bash
# grab the dependencies
npm install

# compile (and watch) the Reason code
npm run dev:reason

# bundle (and watch) with rollup
npm run dev:bundle

# or do all of it at once
npm run dev

# or make a production build
npm run prod
```

## Status

It's early days.
