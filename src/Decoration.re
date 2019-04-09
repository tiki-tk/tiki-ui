module L = Relude.List;
module O = Relude.Option;

module Color = {
  include Tailwind.Color;
};

module Border = {
  include Tailwind.Border;
};

module Font = {
  include Tailwind.Font;
};

type t =
  | BgColor(Color.t)
  | FgColor(Color.t)
  | BorderColor(Border.Color.t)
  | BorderStyle(Border.Style.t)
  | BorderWidth(Border.Width.t)
  | BorderRadius(Border.Radius.t)
  | FontSize(Font.Size.t)
  | FontWeight(Font.Weight.t);

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
  | BgColor(color) => "bg-" ++ Color.toClassName(color)
  | FgColor(color) => "text-" ++ Color.toClassName(color)
  | BorderColor(color) => Border.Color.toClassName(color)
  | BorderStyle(style) => Border.Style.toClassName(style)
  | BorderWidth(width) => Border.Width.toClassName(width)
  | BorderRadius(rad) => Border.Radius.toClassName(rad)
  | FontSize(size) => Font.Size.toClassName(size)
  | FontWeight(weight) => Font.Weight.toClassName(weight);
