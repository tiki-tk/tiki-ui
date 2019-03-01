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
