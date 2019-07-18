# Tiki UI

Loosely inspired by [elm-ui](https://package.elm-lang.org/packages/mdgriffith/elm-ui/1.1.0/) (and its various predecessors), Tiki UI aims to provide the building blocks to create arbitrarily complex user interfaces without needing to write CSS by hand.

**Goals**

- Separation between layout and decoration
- Layout is part of the ReasonReact components
- Layout and style typechecked by the ReasonML/Bucklescript tooling
- CSS vs css-in-js is an implementation detail

**Status: It's Early Days**

It might be possible to make something with Tiki UI in its current state, but you should be ready and willing to jump into the guts.

- [x] Rows and Columns
- [ ] Wrapped rows (and columns?)
- [ ] Overlapping elements
- [x] Padding and Spacing
- [x] Alignment
- [x] Width and Height
- [ ] Hover and Focus styling
- [ ] Responsive styling
- [ ] Decorative styles
  - [x] Background color
  - [ ] Background gradiant
  - [ ] Background image
  - [x] Text color
  - [x] Font styles
  - [x] Borders
  - [ ] Shadows
  - [x] Rounded corners
  - [ ] Opacity
  - [x] Cursor

Caveats: even the things that are checked off the list are under-tested.

**Hooks Migration**

Tiki UI is being updated with React Hooks support! While the migration is mostly complete, there are a few things that might not be working quite right in the new version.

Specifically, "spacing" was previously added to children by tracking a `ref` to the parent, then on `willReceiveProps`, each DOM node child would have its spacing class updated. This doesn't map cleanly to hooks (and was gross even before hooks). Now we add a custom spacing class (one that doesn't exist in Tailwind) to the parent, but I'm not confident this is being used.

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
