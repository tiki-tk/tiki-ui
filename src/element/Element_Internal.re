module A = Relude.Array;
module L = Relude.List;
module O = Relude.Option;

module Base = {
  open Attribute;
  let make =
      (
        transform,
        transformChildren,
        ~tag="div",
        ~className="",
        ~decoration=[],
        ~height=Layout.Sizing.Stretch,
        ~width=Layout.Sizing.Stretch,
        ~alignX=Layout.Align.Start,
        ~alignY=Layout.Align.Start,
        ~padding=Layout.Spacing.Size.S0,
        ~paddingX=Layout.Spacing.Size.S0,
        ~paddingY=Layout.Spacing.Size.S0,
        ~onClick=?,
        children,
      ) => {
    let className =
      className
      ++ (decoration |> L.map(Decoration.toClassName) |> L.String.join);
    transform(r =>
      ReactDOMRe.createElementVariadic(
        tag,
        ~props=ReactDOMRe.props(~ref=?r, ~className, ~onClick?, ()),
        A.map(transformChildren, children),
      )
    );
  };
};

module Directional = {
  open Attribute;
  type state = {el: ref(option(Dom.element))};

  let setContainer = (el, self) =>
    self.ReasonReact.state.el := Js.Nullable.toOption(el);

  let setChildrenMargin = (container, dir, amt) => {
    let side =
      switch (dir) {
      | Layout.Direction.Row => Layout.Spacing.Side.Left
      | Layout.Direction.Col => Layout.Spacing.Side.Top
      };

    let classNameForSize = size =>
      Layout.Spacing.(make(Margin, side, size) |> toClassName);

    let allMarginClasses =
      Layout.Spacing.Size.each |> L.map(classNameForSize) |> L.toArray;

    let currentMarginClass = O.map(classNameForSize, amt);

    switch (container) {
    | Some(el) =>
      DomUtil.getChildren(el)
      |> A.tailOrEmpty
      |> A.forEach(el => {
           DomUtil.removeClasses(. allMarginClasses, el);
           O.forEach(cn => DomUtil.addClass(. cn, el), currentMarginClass);
         })
    | None => ()
    };
  };

  let make' = (direction, spacing, el) => {
    let component = ReasonReact.reducerComponent("");
    {
      ...component,
      initialState: () => {el: ref(None)},
      reducer: (_action: unit, _state: state) => NoUpdate,
      didMount: self => setChildrenMargin(self.state.el^, direction, spacing),
      willReceiveProps: self => {
        setChildrenMargin(self.state.el^, direction, spacing);
        self.state;
      },
      render: self => el(Some(dom => setContainer(dom, self))),
    };
  };

  let make = (~direction, ~spacing=?) => {
    let className = Layout.Direction.toClassName(direction);
    Base.make(make'(direction, spacing), a => a, ~className);
  };
};

module Simple = {
  let make = debug =>
    Base.make(
      el => {
        let component = ReasonReact.statelessComponent(debug);
        {...component, render: _ => el(None)};
      },
      a => a,
    );
};
