module Color = {
  type t =
    | Transparent
    | Color(Tailwind_Color.t);

  let toPartialClassName =
    fun
    | Transparent => "transparent"
    | Color(c) => Tailwind_Color.toClassName(c);

  let toClassName = v => "border-" ++ toPartialClassName(v);
};

module Style = {
  type t =
    | Solid
    | Dashed
    | Dotted
    | None;

  let toPartialClassName =
    fun
    | Solid => "solid"
    | Dashed => "dashed"
    | Dotted => "dotted"
    | None => "none";

  let toClassName = v => "border-" ++ toPartialClassName(v);
};

module Width = {
  module Side = {
    type t =
      | All
      | Top
      | Right
      | Bottom
      | Left;

    let toPartialClassName =
      fun
      | All => ""
      | Top => "-t"
      | Right => "-r"
      | Bottom => "-b"
      | Left => "-l";
  };

  module Size = {
    type t =
      | Px0
      | Px1
      | Px2
      | Px4
      | Px8;

    let toPartialClassName =
      fun
      | Px0 => "-0"
      | Px1 => ""
      | Px2 => "-2"
      | Px4 => "-4"
      | Px8 => "-8";
  };

  type t =
    | Width(Side.t, Size.t);

  let make = (side, size) => Width(side, size);

  let toClassName = (Width(side, size)) =>
    "border"
    ++ Side.toPartialClassName(side)
    ++ Size.toPartialClassName(size);
};

module Radius = {
  module Side = {
    type t =
      | All
      | Top
      | Right
      | Bottom
      | Left
      | TopLeft
      | TopRight
      | BottomLeft
      | BottomRight;

    let toPartialClassName =
      fun
      | All => ""
      | Top => "-t"
      | Right => "-r"
      | Bottom => "-b"
      | Left => "-l"
      | TopLeft => "-tl"
      | TopRight => "-tr"
      | BottomLeft => "-bl"
      | BottomRight => "-br";
  };

  module Amount = {
    type t =
      | None
      | Sm
      | Md
      | Lg
      | Full;

    let toPartialClassName =
      fun
      | None => "-none"
      | Sm => "-sm"
      | Md => ""
      | Lg => "-lg"
      | Full => "-full";
  };

  type t =
    | Radius(Side.t, Amount.t);

  let toClassName = (Radius(side, amount)) =>
    "rounded"
    ++ Side.toPartialClassName(side)
    ++ Amount.toPartialClassName(amount);
};

type t =
  | Border(Color.t, Style.t, Width.t, Radius.t);
