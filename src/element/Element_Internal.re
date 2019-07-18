open Relude.Globals;

module Base = {
  open Attribute;

  [@react.component]
  let make =
      (
        ~transformChildren,
        ~tag="div",
        ~alignX=Layout.Align.Start,
        ~alignY=Layout.Align.Start,
        ~className=?,
        ~decoration=[],
        ~padding=?,
        ~paddingX=?,
        ~paddingY=?,
        ~paddingTop=?,
        ~paddingBottom=?,
        ~paddingLeft=?,
        ~paddingRight=?,
        ~height=?,
        ~width=?,
        ~onClick=?,
        ~children,
      ) => {
    let paddingToClassName = (side, amt) =>
      Layout.Spacing.(make(Padding, side, amt) |> toClassName);

    let className =
      [
        // extra classes from parent
        className,
        // alignment
        alignX |> Layout.Align.toClassNameForDir(X) |> Option.pure,
        alignY |> Layout.Align.toClassNameForDir(Y) |> Option.pure,
        // sizing (only applies to Stretch | Portion, in the case of Exact, we
        // add an inline style manually below)
        height |> Option.flatMap(Layout.Height.toClassName),
        width |> Option.flatMap(Layout.Width.toClassName),
        // padding
        padding |> Option.map(paddingToClassName(All)),
        paddingX |> Option.map(paddingToClassName(Horizontal)),
        paddingY |> Option.map(paddingToClassName(Vertical)),
        paddingTop |> Option.map(paddingToClassName(Top)),
        paddingBottom |> Option.map(paddingToClassName(Bottom)),
        paddingLeft |> Option.map(paddingToClassName(Left)),
        paddingRight |> Option.map(paddingToClassName(Right)),
        // decorative styles
        decoration
        |> List.map(Decoration.toClassName)
        |> List.String.joinWith(" ")
        |> Option.pure,
      ]
      |> List.catOptions
      |> List.String.joinWith(" ");

    let style =
      [
        height |> Option.flatMap(Layout.Height.toStyle),
        width |> Option.flatMap(Layout.Width.toStyle),
      ]
      |> List.catOptions
      |> List.foldLeft(ReactDOMRe.Style.combine, ReactDOMRe.Style.make());

    ReactDOMRe.createElementVariadic(
      tag,
      ~props=ReactDOMRe.props(~className, ~style, ~onClick?, ()),
      [|transformChildren(children)|],
    );
  };
};

module Directional = {
  let make = Base.make;
  let makeProps = (~direction, ~spacing=?) => {
    let className =
      Attribute.Layout.[
        direction |> Direction.toClassName |> Option.pure,
        spacing
        |> Option.map(Spacing.Size.toPartialClassName)
        |> Option.map(cls => "child-margin-" ++ cls),
      ]
      |> List.catOptions
      |> List.String.joinWith(" ");
    Base.makeProps(~transformChildren=id, ~className);
  };
};

module Simple = {
  let make = Base.make;
  let makeProps = (~children) =>
    Base.makeProps(~transformChildren=id, ~className="", ~children);
};

module Row = {
  let make = Directional.make;
  let makeProps = (~children) =>
    Directional.makeProps(~direction=Row, ~children);
};

module Col = {
  let make = Directional.make;
  let makeProps = (~children) =>
    Directional.makeProps(~direction=Col, ~children);
};

module Span = {
  let make = Simple.make;
  let makeProps = Simple.makeProps(~tag="span");
};

module El = {
  let make = Simple.make;
  let makeProps = Simple.makeProps(~tag="div");
};

module P = {
  let make = Simple.make;
  let makeProps = Simple.makeProps(~tag="p");
};

module Button = {
  let make = Simple.make;
  let makeProps = Simple.makeProps(~tag="button");
};

module H1 = {
  let make = Simple.make;
  let makeProps = Simple.makeProps(~tag="h1");
};

module Link = {
  let make = Simple.make;
  let makeProps = Simple.makeProps(~tag="a");
};

module Text = {
  let make = Base.make;
  let makeProps = (~children) =>
    Base.makeProps(
      ~transformChildren=ReasonReact.string,
      ~tag="span",
      ~className="",
      ~children,
    );
};
