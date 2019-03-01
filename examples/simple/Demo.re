module SimpleExample = {
  let component = ReasonReact.statelessComponent(__MODULE__);
  let make = _children => {
    ...component,
    render: _ => {
      let decoration = [
        Decoration.bgColor(Tailwind.Color.make(Grey, Lighter))
      ];

      <Row decoration padding=Row.Size.xy(~x=S4, ~y=S2)>
        <p>{ReasonReact.string("First")}</p>
        <p>{ReasonReact.string("Second")}</p>
        <p>{ReasonReact.string("Third")}</p>
      </Row>
    }
  };
};

ReactDOMRe.renderToElementWithId(<SimpleExample />, "app");
