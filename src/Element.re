module A = Relude.Array;
module L = Relude.List;
module O = Relude.Option;

/* TODO: use Webapi */
module DomUtil = {
  let getChildren: (. Dom.element) => array(Dom.element) = [%bs.raw
    {|
    function (parent) {
      return [].slice.call(parent.children);
    }
  |}
  ];

  let removeClasses: (. array(string), Dom.element) => unit = [%bs.raw
    {|
    function (classNames, el) {
      classNames.forEach(function (cn) { el.classList.remove(cn) });
    }
  |}
  ];

  let addClass: (. string, Dom.element) => unit = [%bs.raw
    {|
    function (className, el) {
      el.classList.add(className);
    }
  |}
  ];
};

module Base = {
  type state = {el: ref(option(Dom.element))};
  let setContainer = (el, self) =>
    self.ReasonReact.state.el := Js.Nullable.toOption(el);

  let setChildrenMargin = (container, size) => {
    let classNameForSize = size =>
      Attribute.Size.(make(Margin, Left, size) |> toClassName);

    let allMarginClasses =
      Attribute.Size.Size.each |> L.map(classNameForSize) |> L.toArray;

    let currentMarginClass = O.foldStrict("", classNameForSize, size);

    switch (container) {
    | Some(el) =>
      let children = DomUtil.getChildren(. el);
      children
      |> A.tailOrEmpty
      |> A.forEachWithIndex((el, i) => {
          DomUtil.removeClasses(. allMarginClasses, el);
          DomUtil.addClass(. currentMarginClass, el);
         });
    | None => ()
    };
  };

  let component = ReasonReact.reducerComponent(__MODULE__);
  let make =
      (
        ~tag="div",
        ~className,
        ~decoration=[],
        ~spacing=?,
        ~onClick=?,
        children,
      ) => {
    ...component,
    initialState: () => {el: ref(None)},
    reducer: (_action: unit, _state: state) => NoUpdate,
    didMount: self => setChildrenMargin(self.state.el^, spacing),
    willReceiveProps: self => {
      setChildrenMargin(self.state.el^, spacing);
      self.state;
    },
    render: self => {
      let decorationClasses =
        decoration
        |> L.map(Attribute.Decoration.toClassName)
        |> L.String.joinWith(" ");
      let className = className ++ " " ++ decorationClasses;

      ReactDOMRe.createElementVariadic(
        tag,
        ~props=
          ReactDOMRe.props(
            ~className,
            ~onClick?,
            ~ref=self.handle(setContainer),
            (),
          ),
        children,
      );
    },
  };
};

module Directional = {
  type direction =
    | Row
    | Col;

  let make =
      (
        ~direction,
        ~padding=?,
        ~paddingX=?,
        ~paddingY=?,
        ~paddingTop=?,
        ~paddingBottom=?,
        ~paddingLeft=?,
        ~paddingRight=?,
      ) => {
    let toPaddingClassName = side =>
      O.foldStrict("", v =>
        Attribute.Size.(make(Padding, side, v) |> toClassName)
      );

    let className =
      [
        Attribute.Direction.toClassName(direction),
        toPaddingClassName(All, padding),
        toPaddingClassName(Horizontal, paddingX),
        toPaddingClassName(Vertical, paddingY),
        toPaddingClassName(Top, paddingTop),
        toPaddingClassName(Bottom, paddingBottom),
        toPaddingClassName(Left, paddingLeft),
        toPaddingClassName(Right, paddingRight),
      ]
      |> L.String.joinWith(" ");

    Base.make(~className);
  };
};

module Row = {
  let component = ReasonReact.statelessComponent(__MODULE__);
  let make = Directional.make(~direction=Row);
};
