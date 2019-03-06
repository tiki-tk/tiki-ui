module Size = {
  type t =
    | XS
    | SM
    | M
    | LG
    | XL
    | XXL
    | XXXL;

  let toPartialClassName =
    fun
    | XS => "xs"
    | SM => "sm"
    | M => "base"
    | LG => "lg"
    | XL => "xl"
    | XXL => "2xl"
    | XXXL => "3xl";

  let toClassName = v => "text-" ++ toPartialClassName(v);
};

module Weight = {
  type t =
    | Hairline
    | Thin
    | Light
    | Normal
    | Medium
    | Semibold
    | Bold
    | Extrabold
    | Black;

  let toPartialClassName =
    fun
    | Hairline => "hairline"
    | Thin => "thin"
    | Light => "light"
    | Normal => "normal"
    | Medium => "medium"
    | Semibold => "semibold"
    | Bold => "bold"
    | Extrabold => "extrabold"
    | Black => "black";

  let toClassName = v => "font-" ++ toPartialClassName(v);
};
