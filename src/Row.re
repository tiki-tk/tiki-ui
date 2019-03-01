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

module Container = {
  type direction =
    | Row
    | Col;

  let make = (component, ~direction, ~padding=?, ~spacing=?) => {
    let directionClassName = Direction.toClassName(direction);
    let paddingClassName =
      O.foldStrict("", Size.toClassName(Padding), padding);
    let className = directionClassName ++ " " ++ paddingClassName;

    BaseElement.make(component, ~className, ~spacing?);
  };
};

let component = ReasonReact.statelessComponent(__MODULE__);
let make = Container.make(component, ~direction=Row);
