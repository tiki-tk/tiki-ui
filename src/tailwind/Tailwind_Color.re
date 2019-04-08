module Hue = {
  type t =
    | Grey
    | Red
    | Orange
    | Yellow
    | Green
    | Teal
    | Blue
    | Indigo
    | Purple
    | Pink;

  let toPartialClassName =
    fun
    | Grey => "grey"
    | Red => "red"
    | Orange => "orange"
    | Yellow => "yellow"
    | Green => "green"
    | Teal => "teal"
    | Blue => "blue"
    | Indigo => "indigo"
    | Purple => "purple"
    | Pink => "pink";
};

module Darkness = {
  type t =
    | Lightest
    | Lighter
    | Light
    | Base
    | Dark
    | Darker
    | Darkest;

  let toPartialClassName =
    fun
    | Lightest => "-lightest"
    | Lighter => "-lighter"
    | Light => "-light"
    | Base => ""
    | Dark => "-dark"
    | Darker => "-darker"
    | Darkest => "-darkest";
};

type t =
  | Black
  | White
  | Color(Hue.t, Darkness.t);

let make = (hue, darkness) => Color(hue, darkness);

let toClassName =
  fun
  | Black => "black"
  | White => "white"
  | Color(hue, darkness) =>
    Hue.toPartialClassName(hue) ++ Darkness.toPartialClassName(darkness);
