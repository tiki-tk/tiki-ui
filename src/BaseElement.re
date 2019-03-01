module A = Relude.Array;
module L = Relude.List;
module O = Relude.Option;

let make =
    (
      component,
      ~className=?,
      ~decoration=[],
      ~spacing=?,
      ~onClick=?,
      children,
    ) => {
  ...component,
  ReasonReact.didMount: _ => {
    O.map(v => v + 1, spacing) |> Js.log;
  },
  render: _ => {
    let decorationClasses =
      decoration |> L.map(Decoration.toClassName) |> L.String.joinWith(" ");

    let className =
      O.getOrElseStrict("", className) ++ " " ++ decorationClasses;

    ReactDOMRe.createElementVariadic(
      "div",
      ~props=ReactDOMRe.props(
        ~className,
        ~onClick?,
        ()
      ),
      children
    )

    /* <div className ?onClick> ...children </div>; */
  },
};
