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

  let make = (component, ~direction, ~padding=?, ~spacing=?) => {
    let className =
      Attribute.Direction.toClassName(direction)
      ++ " "
      ++ O.foldStrict("", Attribute.Size.toClassName(Padding), padding);

    Base.make(component, ~className, ~spacing?);
  };
};

module Row = {
  let component = ReasonReact.statelessComponent(__MODULE__);
  let make = Directional.make(component, ~direction=Row);
};
