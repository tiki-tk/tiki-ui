module SimpleExample = {
  open Element;
  open Attribute;
  let component = ReasonReact.statelessComponent(__MODULE__);
  let make = _children => {
    ...component,
    render: _ => {
      let decoration = [
        Decoration.bgColor(Tailwind.Color.make(Grey, Lighter)),
      ];

      let btnDecoration = [
        Decoration.bgColor(Tailwind.Color.make(Blue, Base)),
        Decoration.fgColor(Tailwind.Color.White),
        Decoration.rounded,
      ];

      <Row decoration padding=S4 paddingY=S2 spacing=S2>
        <Button paddingY=S2 paddingX=S4 decoration=btnDecoration>
          {ReasonReact.string("First")}
        </Button>
        <Button> {ReasonReact.string("Second")} </Button>
        <Button> {ReasonReact.string("Third")} </Button>
      </Row>;
    },
  };
};

ReactDOMRe.renderToElementWithId(<SimpleExample />, "app");
