module Portion = {
  type t =
    | Half
    | Third
    | TwoThirds
    | Quarter
    | ThreeQuarters
    | Fifth
    | TwoFifths
    | ThreeFifths
    | FourFifths
    | Sixth
    | FiveSixth;

  let toPartialClassName =
    fun
    | Half => "1/2"
    | Third => "1/3"
    | TwoThirds => "2/3"
    | Quarter => "1/4"
    | ThreeQuarters => "3/4"
    | Fifth => "1/5"
    | TwoFifths => "2/5"
    | ThreeFifths => "3/5"
    | FourFifths => "4/5"
    | Sixth => "1/6"
    | FiveSixth => "5/6";
};

module Exact = {
  type t =
    | Px(int)
    | Rem(float);
};

type t =
  | Stretch
  | Portion(Portion.t)
  | Exact(Exact.t);

let half = Portion(Half);
let third = Portion(Third);
let twoThirds = Portion(TwoThirds);
let quarter = Portion(Quarter);
let threeQuarters = Portion(ThreeQuarters);
let px = v => Exact(Px(v));
let rem = v => Exact(Rem(v));

let toClassName =
  fun
  | Stretch => Some("full")
  | Portion(p) => Some(Portion.toPartialClassName(p))
  | Exact(_) => None;

let toStyle =
  fun
  | Exact(Px(v)) => Some(string_of_int(v) ++ "px")
  | Exact(Rem(v)) => Some(Js.String.make(v) ++ "rem")
  | Stretch
  | Portion(_) => None;
