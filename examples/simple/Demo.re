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

      <Col>
        <Row decoration paddingX=S4 paddingY=S2>
          <Button> {ReasonReact.string("Menu")} </Button>
          <Button align=End paddingY=S2 paddingX=S4 decoration=btnDecoration>
            {ReasonReact.string("User")}
          </Button>
        </Row>
        <Row>
          <Col>
            <Link padding=S4>{ReasonReact.string("Overview")}</Link>
            <Link padding=S4>{ReasonReact.string("Contacts")}</Link>
            <Link padding=S4>{ReasonReact.string("Reports")}</Link>
          </Col>
          <Col>
            <H1>{ReasonReact.string("Contacts")}</H1>
            <P decoration padding=S2>
              {ReasonReact.string("This is more content")}
            </P>
          </Col>
        </Row>
      </Col>;
    },
  };
};

ReactDOMRe.renderToElementWithId(<SimpleExample />, "app");
