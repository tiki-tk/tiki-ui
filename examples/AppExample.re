module SimpleExample = {
  open Element;
  open Attribute.Layout;
  open Spacing.Size;
  module Decoration = Attribute.Decoration;

  [@react.component]
  let make = () => {
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

      let make = Link.make;
      let makeProps =
        Element.Link.makeProps(~paddingX=S4, ~paddingY=S2, ~decoration);
    };

    <Col decoration height=Sizing.Stretch>
      <Row decoration=headerDecoration paddingX=S4 paddingY=S2>
        <Text alignY=Align.Center decoration=logoDecoration> "App Name" </Text>
        <Button
          alignX=Align.End paddingY=S2 paddingX=S4 decoration=btnDecoration>
          <Text> "User" </Text>
        </Button>
      </Row>
      <Row height=Sizing.Stretch>
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
  };
};

ReactDOMRe.renderToElementWithId(<SimpleExample />, "app");
