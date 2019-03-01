module Direction = {
  type t =
    | Row
    | RowReverse
    | Col
    | ColReverse;

  let toClassName =
    fun
    | Row => "flex-row"
    | RowReverse => "flex-row-reverse"
    | Col => "flex-col"
    | ColReverse => "flex-col-reverse";
};

module Wrap = {
  type t =
    | NoWrap
    | Wrap
    | WrapReverse;

    let toClassName =
    fun
    | NoWrap => "flex-no-wrap"
    | Wrap => "flex-wrap"
    | WrapReverse => "flex-wrap-reverse";
};

type t = {
  direction: Direction.t,
  wrap: Wrap.t,
  inline: bool,
};

let make = (direction, wrap, inline) =>
  { direction, wrap, inline };

let row = make(Row, NoWrap, false);
let col = make(Col, NoWrap, false);
let rowWrapped = make(Row, Wrap, false);

let toClassName = ({direction, wrap, inline}) =>
  (inline ? "inline-flex " : "flex ")
  ++ Direction.toClassName(direction)
  ++ " "
  ++ Wrap.toClassName(wrap);
