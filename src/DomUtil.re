/* TODO: use Webapi */

let getChildren: (. Dom.element) => array(Dom.element) = [%bs.raw
  {|
    function (parent) {
      return [].slice.call(parent.children);
    }
  |}
];

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
