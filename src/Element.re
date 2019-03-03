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
      DomUtil.getChildren(. el)
      |> A.tailOrEmpty
      |> A.forEach(el => {
           DomUtil.removeClasses(. allMarginClasses, el);
           DomUtil.addClass(. currentMarginClass, el);
         })
    | None => ()
    };
  };

  let component = ReasonReact.reducerComponent(__MODULE__);
  let make =
      (
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
      let combineNonEmpty = xs =>
        xs |> L.foldLeft((s, x) => x == "" ? s : s ++ " " ++ x, "");

      let flattenClassNames = xss =>
        L.map(combineNonEmpty, xss) |> combineNonEmpty;

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

      let decorationClasses =
        decoration |> L.map(Attribute.Decoration.toClassName);

      let className =
        flattenClassNames([[className], paddingClasses, decorationClasses]);

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

  let make = (~direction) => {
    let className = Attribute.Direction.toClassName(direction);
    Base.make(~tag="div", ~className);
  };
};

module Row = {
  let make = Directional.make(~direction=Row);
};

module Col = {
  let make = Directional.make(~direction=Col);
};

module El = {
  let make = Base.make(~spacing=?None)
};

module P = {
  let make = Base.make(~tag="p", ~spacing=?None);
};

module Button = {
  let make = Base.make(~tag="Button", ~spacing=?None);
};
