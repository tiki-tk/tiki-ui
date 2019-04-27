/* TODO: use Webapi */

let getChildren = parent =>
  parent |> Webapi.Dom.Element.children |> Webapi.Dom.HtmlCollection.toArray;

let removeClasses: (. array(string), Dom.element) => unit = [%bs.raw
  {|
    function (classNames, el) {
      classNames.forEach(function (cn) { el.classList.remove(cn) });
    }
  |}
];

let addClass: (. string, Dom.element) => unit = [%bs.raw
  {|
    function (className, el) {
      el.classList.add(className);
    }
  |}
];
