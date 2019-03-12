module Kind = {
  type t =
    | Padding
    | Margin
    | NegativeMargin;

  let toPartialClassName =
    fun
    | Padding => "p"
    | Margin => "m"
    | NegativeMargin => "-m";
};
module Size = {
  type t =
    | Px
    | S0
    | S1
    | S2
    | S3
    | S4
    | S5
    | S6
    | S8
    | S10
    | S12
    | S16
    | S20
    | S24
    | S32;

  let each = [
    Px,
    S0,
    S1,
    S2,
    S3,
    S4,
    S5,
    S6,
    S8,
    S10,
    S12,
    S16,
    S20,
    S24,
    S32,
  ];

  let toPartialClassName =
    fun
    | Px => "px"
    | S0 => "0"
    | S1 => "1"
    | S2 => "2"
    | S3 => "3"
    | S4 => "4"
    | S5 => "5"
    | S6 => "6"
    | S8 => "8"
    | S10 => "10"
    | S12 => "12"
    | S16 => "16"
    | S20 => "20"
    | S24 => "24"
    | S32 => "32";
};

module Side = {
  type t =
    | All
    | Top
    | Right
    | Bottom
    | Left
    | Horizontal
    | Vertical;

  let toPartialClassName =
    fun
    | All => ""
    | Top => "t"
    | Right => "r"
    | Bottom => "b"
    | Left => "l"
    | Horizontal => "x"
    | Vertical => "y";
};

type t = {
  kind: Kind.t,
  side: Side.t,
  size: Size.t,
};

let make = (kind, side, size) => {kind, side, size};
let margin = make(Margin);
let marginAll = size => margin(All, size);
let marginX = size => margin(Horizontal, size);
let marginY = size => margin(Vertical, size);
let padding = make(Padding);
let paddingAll = size => padding(All, size);
let paddingX = size => padding(Horizontal, size);
let paddingY = size => padding(Vertical, size);

let toClassName = ({kind, side, size}) =>
  Kind.toPartialClassName(kind)
  ++ Side.toPartialClassName(side)
  ++ "-"
  ++ Size.toPartialClassName(size);
