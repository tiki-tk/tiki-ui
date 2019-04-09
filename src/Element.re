module A = Relude.Array;
module L = Relude.List;
module O = Relude.Option;

module Base = {
  let make =
      (
        transform,
        transformChildren,
        ~tag="div",
        ~className="",
        ~decoration=[],
        ~padding=?,
        ~paddingX=?,
        ~paddingY=?,
        ~paddingTop=?,
        ~paddingBottom=?,
        ~paddingLeft=?,
        ~paddingRight=?,
        ~onClick=?,
        ~alignX=LayoutProps.Align.Start,
        ~alignY=LayoutProps.Align.Start,
        ~height=?,
        ~width=?,
        children,
      ) => {
    let combineStyles = xs =>
      L.foldLeft(ReactDOMRe.Style.combine, ReactDOMRe.Style.make(), xs);

    let paddingToClassName = side =>
      O.foldStrict("", v =>
        LayoutProps.Spacing.(make(Padding, side, v) |> toClassName)
      );

    let paddingClasses = [
      paddingToClassName(All, padding),
      paddingToClassName(Horizontal, paddingX),
      paddingToClassName(Vertical, paddingY),
      paddingToClassName(Top, paddingTop),
      paddingToClassName(Bottom, paddingBottom),
      paddingToClassName(Left, paddingLeft),
      paddingToClassName(Right, paddingRight),
    ];

    let alignmentClasses = [
      LayoutProps.Align.toClassNameForDir(X, alignX),
      LayoutProps.Align.toClassNameForDir(Y, alignY),
    ];

    let sizingClasses =
      L.catOptions([
        O.flatMap(LayoutProps.Height.toClassName, height),
        O.flatMap(LayoutProps.Width.toClassName, width),
      ]);

    let decorationClasses = decoration |> L.map(Decoration.toClassName);

    let className =
      ClassName.flatten([
        [className],
        alignmentClasses,
        sizingClasses,
        paddingClasses,
        decorationClasses,
      ]);

    let style =
      [
        height |> O.flatMap(LayoutProps.Height.toStyle),
        width |> O.flatMap(LayoutProps.Width.toStyle),
      ]
      |> L.catOptions
      |> combineStyles;

    transform(r =>
      ReactDOMRe.createElementVariadic(
        tag,
        ~props=ReactDOMRe.props(~ref=?r, ~style, ~className, ~onClick?, ()),
        A.map(transformChildren, children),
      )
    );
  };
};

module Directional = {
  type state = {el: ref(option(Dom.element))};

  let setContainer = (el, self) =>
    self.ReasonReact.state.el := Js.Nullable.toOption(el);

  let setChildrenMargin = (container, dir, amt) => {
    let side =
      switch (dir) {
      | LayoutProps.Direction.Row => LayoutProps.Spacing.Side.Left
      | LayoutProps.Direction.Col => LayoutProps.Spacing.Side.Top
      };

    let classNameForSize = size =>
      LayoutProps.Spacing.(make(Margin, side, size) |> toClassName);

    let allMarginClasses =
      LayoutProps.Spacing.Size.each |> L.map(classNameForSize) |> L.toArray;

    let currentMarginClass = O.map(classNameForSize, amt);

    switch (container) {
    | Some(el) =>
      DomUtil.getChildren(. el)
      |> A.tailOrEmpty
      |> A.forEach(el => {
           DomUtil.removeClasses(. allMarginClasses, el);
           O.foldStrict(
             (),
             cn => DomUtil.addClass(. cn, el),
             currentMarginClass,
           );
         })
    | None => ()
    };
  };

  let make' = (debug, direction, spacing, el) => {
    let component = ReasonReact.reducerComponent(debug);
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
    let className = LayoutProps.Direction.toClassName(direction);
    let debug =
      switch (direction) {
      | Row => "Row"
      | Col => "Col"
      };
    Base.make(make'(debug, direction, spacing), a => a, ~className);
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

module Row = {
  let make = Directional.make(~direction=Row);
};

module Col = {
  let make = Directional.make(~direction=Col);
};

module P = {
  let make = Simple.make("P", ~tag="p");
};

module Button = {
  let make = Simple.make("Button", ~tag="button");
};

module H1 = {
  let make = Simple.make("H1", ~tag="h1");
};

module Link = {
  let make = Simple.make("Link", ~tag="a");
};

module Text = {
  let make =
    Base.make(
      el => {
        let component = ReasonReact.statelessComponent("Text");
        {...component, render: _ => el(None)};
      },
      ReasonReact.string,
      ~tag="span",
    );
};
