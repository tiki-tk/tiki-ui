module A = Relude.Array;
module L = Relude.List;
module O = Relude.Option;

module Base = {
  let make =
      (
        transform,
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
        ~align=Attribute.Align.Start,
        children,
      ) => {
    let paddingToClassName = side =>
      O.foldStrict("", v =>
        Attribute.Size.(make(Padding, side, v) |> toClassName)
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

    let alignmentClass = Attribute.Align.toClassName(align);

    let decorationClasses =
      decoration |> L.map(Attribute.Decoration.toClassName);

    let className =
      ClassName.flatten([
        [className, alignmentClass],
        paddingClasses,
        decorationClasses,
      ]);

    transform(r =>
      ReactDOMRe.createElementVariadic(
        tag,
        ~props=ReactDOMRe.props(~ref=?r, ~className, ~onClick?, ()),
        children,
      )
    );
  };
};

module Directional = {
  type state = {el: ref(option(Dom.element))};

  let setContainer = (el, self) =>
    self.ReasonReact.state.el := Js.Nullable.toOption(el);

  let setChildrenMargin = (container, dir, size) => {
    let side =
      switch (dir) {
      | Attribute.Direction.Row => Attribute.Size.Side.Left
      | Attribute.Direction.Col => Attribute.Size.Side.Top
      };

    let classNameForSize = size =>
      Attribute.Size.(make(Margin, side, size) |> toClassName);

    let allMarginClasses =
      Attribute.Size.Size.each |> L.map(classNameForSize) |> L.toArray;

    let currentMarginClass = O.map(classNameForSize, size);

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
    let className = Attribute.Direction.toClassName(direction);
    let debug =
      switch (direction) {
      | Row => "Row"
      | Col => "Col"
      };
    Base.make(make'(debug, direction, spacing), ~className);
  };
};

module Simple = {
  let make = debug =>
    Base.make(el => {
      let component = ReasonReact.statelessComponent(debug);
      {...component, render: _ => el(None)};
    });
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
  let make = Simple.make("Text", ~tag="span");
};
