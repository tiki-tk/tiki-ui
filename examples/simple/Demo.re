module SimpleExample = {
  module Decoration = Attribute.Decoration;
  module Sizing = Attribute.Layout.Sizing;
  open Element;

  let component = ReasonReact.statelessComponent(__MODULE__);
  let make = _children => {
    ...component,
    render: _ => {
      let decoration = Decoration.[bgColor(Color.make(Grey, Lighter))];
      let sidebarDecoration = Decoration.[bgColor(Color.make(Grey, Light))];
      let headerDecoration = Decoration.[bgColor(Color.make(Blue, Base))];
      let logoDecoration =
        Decoration.[fontSize(LG), fontWeight(Semibold), fgColor(White)];

      let btnDecoration =
        Decoration.[
          bgColor(Color.make(Blue, Dark)),
          fgColor(White),
          borderRadius(Radius(All, Md)),
          hover(bgColor(Color.make(Blue, Darker))),
        ];

      // here we alias Link with some built-in layout/decoration
      module Link = {
        let decoration =
          Decoration.[
            cursor(Cursor.Pointer),
            hover(bgColor(Color.make(Grey, Lighter))),
            hover(fgColor(Color.make(Blue, Base))),
          ];

        let make = Link.make(~paddingX=S4, ~paddingY=S2, ~decoration);
      };

      <Col decoration height=Stretch>
        <Row decoration=headerDecoration paddingX=S4 paddingY=S2>
          <Text alignY=Center decoration=logoDecoration> "App Name" </Text>
          <Button alignX=End paddingY=S2 paddingX=S4 decoration=btnDecoration>
            <Text> "User" </Text>
          </Button>
        </Row>
        <Row height=Stretch>
          <Col
            decoration=sidebarDecoration width={Sizing.rem(12.0)} paddingY=S8>
            <Link> <Text> "Overview" </Text> </Link>
            <Link> <Text> "Contacts" </Text> </Link>
            <Link> <Text> "Reports" </Text> </Link>
          </Col>
          <Col padding=S8>
            <H1> <Text> "Contacts" </Text> </H1>
            <P paddingY=S2> <Text> "This is more content" </Text> </P>
          </Col>
        </Row>
      </Col>;
    },
  };
};

ReactDOMRe.renderToElementWithId(<SimpleExample />, "app");
