module A = Relude.Array;
module L = Relude.List;
module O = Relude.Option;

module Base = {
  let make =
      (
        component,
        ~tag="div",
        ~className,
        ~decoration=[],
        ~spacing=?,
        ~onClick=?,
        children,
      ) => {
    ...component,
    ReasonReact.didMount: _ => O.map(v => v + 1, spacing) |> Js.log,
    render: _ => {
      let decorationClasses =
        decoration
        |> L.map(Attribute.Decoration.toClassName)
        |> L.String.joinWith(" ");
      let className = className ++ " " ++ decorationClasses;

      ReactDOMRe.createElementVariadic(
        tag,
        ~props=ReactDOMRe.props(~className, ~onClick?, ()),
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
        component,
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

    Base.make(component, ~className);
  };
};

module Row = {
  let component = ReasonReact.statelessComponent(__MODULE__);
  let make = Directional.make(component, ~direction=Row);
};
