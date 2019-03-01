module L = Relude.List;

module Direction = {
  type t =
    | Row
    | Col;

  let toFlex =
    fun
    | Row => Tailwind.Flex.row
    | Col => Tailwind.Flex.col;

  let toClassName = v => toFlex(v) |> Tailwind.Flex.toClassName;
};

module Size = {
  open Tailwind.Sizing;
  type each = {
    top: Size.t,
    right: Size.t,
    bottom: Size.t,
    left: Size.t,
  };
  type t =
    | All(Size.t)
    | XY(Size.t, Size.t)
    | Horizontal(Size.t)
    | Vertical(Size.t)
    | Each(each);

  let all = size => All(size);
  let xy = (~x, ~y) => XY(x, y);
  let horiztonal = size => Horizontal(size);
  let vertical = size => Vertical(size);
  let each = (~top, ~right, ~bottom, ~left) =>
    Each({top, right, bottom, left});

  let toSizings = kind =>
    fun
    | All(size) => [make(kind, All, size)]
    | XY(x, y) => [make(kind, Horizontal, x), make(kind, Vertical, y)]
    | Horizontal(x) => [make(kind, Horizontal, x)]
    | Vertical(y) => [make(kind, Vertical, y)]
    | Each({top, right, bottom, left}) => [
        make(kind, Top, top),
        make(kind, Right, right),
        make(kind, Bottom, bottom),
        make(kind, Left, left),
      ];

  let toClassName = (kind, v) =>
    toSizings(kind, v) |> L.map(toClassName) |> L.String.joinWith(" ");
};

module Decoration = {
  type t =
    | BgColor(Tailwind.Color.t)
    | FgColor(Tailwind.Color.t)
    | Rounded;

  let bgColor = color => BgColor(color);
  let fgColor = color => FgColor(color);
  let rounded = Rounded;

  let toClassName =
    fun
    | BgColor(color) => "bg-" ++ Tailwind.Color.toClassName(color)
    | FgColor(color) => "fg-" ++ Tailwind.Color.toClassName(color)
    | Rounded => "rounded";
};
