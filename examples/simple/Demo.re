module SimpleExample = {
  open Element;
  open LayoutProps;

  let component = ReasonReact.statelessComponent(__MODULE__);
  let make = _children => {
    ...component,
    render: _ => {
      let decoration = Decoration.[
        bgColor(Color.make(Grey, Lighter)),
      ];

      let btnDecoration = Decoration.[
        bgColor(Color.make(Blue, Base)),
        fgColor(Color.White),
        borderRadius(Tailwind.Border.Radius.Radius(All, Md)),
      ];

      <Col>
        <Row decoration paddingX=S4 paddingY=S2>
          <Text
            alignY=Center
            text="App Name"
            decoration=[
              Decoration.fontSize(LG),
              Decoration.fontWeight(Semibold),
              Decoration.fgColor(Tailwind.Color.make(Blue, Base)),
              /*Decoration.hover(Decoration.bgColor(Blue, Darker)) */
            ]
          />
          <Button alignX=End paddingY=S2 paddingX=S4 decoration=btnDecoration>
            {ReasonReact.string("User")}
          </Button>
        </Row>
        <Row height=Stretch>
          <Col width={Sizing.rem(12.0)}>
            <Link padding=S4> {ReasonReact.string("Overview")} </Link>
            <Link padding=S4> {ReasonReact.string("Contacts")} </Link>
            <Link padding=S4> {ReasonReact.string("Reports")} </Link>
          </Col>
          <Col>
            <H1> {ReasonReact.string("Contacts")} </H1>
            <P padding=S2> {ReasonReact.string("This is more content")} </P>
          </Col>
        </Row>
      </Col>;
    },
  };
};

ReactDOMRe.renderToElementWithId(<SimpleExample />, "app");
