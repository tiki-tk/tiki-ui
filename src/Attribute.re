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
  include Tailwind.Sizing;
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
    | FgColor(color) => "text-" ++ Tailwind.Color.toClassName(color)
    | Rounded => "rounded";
};
