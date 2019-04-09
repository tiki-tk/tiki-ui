type t =
  | Auto
  | Default
  | Pointer
  | Wait
  | Move
  | NotAllowed;

let toPartialClassName =
  fun
  | Auto => "auto"
  | Default => "default"
  | Pointer => "pointer"
  | Wait => "wait"
  | Move => "move"
  | NotAllowed => "not-allowed";

let toClassName = v => "cursor-" ++ toPartialClassName(v);
