module L = Relude.List;
module O = Relude.Option;

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

module Spacing = {
  include Tailwind.Spacing;
};

module Sizing = {
  include Tailwind.Sizing;
};

module Width = {
  let toClassName = v => Sizing.toClassName(v) |> O.map(str => "w-" ++ str);
  let toStyle = v =>
    Sizing.toStyle(v) |> O.map(width => ReactDOMRe.Style.make(~width, ()));
};

module Height = {
  let toClassName = v => Sizing.toClassName(v) |> O.map(str => "h-" ++ str);
  let toStyle = v =>
    Sizing.toStyle(v) |> O.map(height => ReactDOMRe.Style.make(~height, ()));
};

module Align = {
  type dir =
    | X
    | Y;

  type t =
    | Start
    | Center
    | End;

  let toClassName =
    fun
    | Start => ""
    | Center => "align-center"
    | End => "align-end";

  let toClassNameForDir = (dir, align) =>
    switch (dir) {
    | _ when align == Start => ""
    | X => "x-" ++ toClassName(align)
    | Y => "y-" ++ toClassName(align)
    };
};

module Decoration = {
  type t =
    | BgColor(Tailwind.Color.t)
    | FgColor(Tailwind.Color.t)
    | BorderColor(Tailwind.Border.Color.t)
    | BorderStyle(Tailwind.Border.Style.t)
    | BorderWidth(Tailwind.Border.Width.t)
    | BorderRadius(Tailwind.Border.Radius.t)
    | FontSize(Tailwind.Font.Size.t)
    | FontWeight(Tailwind.Font.Weight.t);

  let bgColor = color => BgColor(color);
  let fgColor = color => FgColor(color);
  let borderColor = color => BorderColor(color);
  let borderStyle = style => BorderStyle(style);
  let borderWidth = width => BorderWidth(width);
  let borderRadius = radius => BorderRadius(radius);
  let fontSize = size => FontSize(size);
  let fontWeight = weight => FontWeight(weight);

  let toClassName =
    fun
    | BgColor(color) => "bg-" ++ Tailwind.Color.toClassName(color)
    | FgColor(color) => "text-" ++ Tailwind.Color.toClassName(color)
    | BorderColor(color) => Tailwind.Border.Color.toClassName(color)
    | BorderStyle(style) => Tailwind.Border.Style.toClassName(style)
    | BorderWidth(width) => Tailwind.Border.Width.toClassName(width)
    | BorderRadius(rad) => Tailwind.Border.Radius.toClassName(rad)
    | FontSize(size) => Tailwind.Font.Size.toClassName(size)
    | FontWeight(weight) => Tailwind.Font.Weight.toClassName(weight);
};
