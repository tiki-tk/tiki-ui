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
