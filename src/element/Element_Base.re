module Row = {
  let make = Element_Internal.Directional.make(~direction=Row);
};

module Col = {
  let make = Element_Internal.Directional.make(~direction=Col);
};

module El = {
  let make = Element_Internal.Simple.make("El", ~tag="div");
};

module P = {
  let make = Element_Internal.Simple.make("P", ~tag="p");
};

module Button = {
  let make = Element_Internal.Simple.make("Button", ~tag="button");
};

module H1 = {
  let make = Element_Internal.Simple.make("H1", ~tag="h1");
};

module Link = {
  let make = Element_Internal.Simple.make("Link", ~tag="a");
};

module Text = {
  let make =
    Element_Internal.Base.make(
      el => {
        let component = ReasonReact.statelessComponent("Text");
        {...component, render: _ => el(None)};
      },
      ReasonReact.string,
      ~tag="span",
    );
};

/*
 module Overlapping = {
   type state = {isOpen: bool};
   type action =
     | Toggle
     | Close;
   let component = ReasonReact.reducerComponent(__MODULE__);
   let make = (~closeOnClick=true, (toggle, content)) => {
     ...component,
     initialState: () => {isOpen: false},
     reducer: (action, state) =>
       switch (action) {
       | Close => Update({isOpen: false})
       | Toggle => Update({isOpen: !state.isOpen})
       },
     render: ({send, state}) => {
       let toggleEl = toggle(_ => send(Toggle));
       let contentEl =
         state.isOpen ? <Portal> ...content </Portal> : ReasonReact.null;

       <> toggleEl contentEl </>;
     },
   };
 };
 */
