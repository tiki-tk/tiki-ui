module L = Relude.List;

let combineNonEmpty = xs =>
  xs |> L.foldLeft((str, x) => x == "" ? str : str ++ " " ++ x, "");

let flatten = xss => L.map(combineNonEmpty, xss) |> combineNonEmpty;
