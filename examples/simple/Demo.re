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

      <Col paddingX=S8 paddingY=S3 spacing=S1>
        <Row decoration padding=S2 spacing=S4>
          <Button paddingY=S2 paddingX=S4 decoration=btnDecoration>
            {ReasonReact.string("First")}
          </Button>
          <Button> {ReasonReact.string("Second")} </Button>
          <Button> {ReasonReact.string("Third")} </Button>
        </Row>
        <P decoration padding=S2>
          {ReasonReact.string("This is more content")}
        </P>
      </Col>;
    },
  };
};

ReactDOMRe.renderToElementWithId(<SimpleExample />, "app");
