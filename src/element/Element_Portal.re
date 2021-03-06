open Relude.Globals;

type state = {el: Dom.element};

let body =
  Webapi.Dom.(
    Document.asHtmlDocument(document) |> Option.flatMap(HtmlDocument.body)
  );

let component = ReasonReact.reducerComponent(__MODULE__);
let make = child => {
  ...component,
  initialState: () => {
    el: Webapi.Dom.(Document.createElement("div", document)),
  },
  reducer: (_action: unit, _state) => NoUpdate,
  didMount: ({state}) =>
    body |> Option.map(Webapi.Dom.Element.appendChild(state.el)) |> ignore,
  willUnmount: ({state}) =>
    body |> Option.map(Webapi.Dom.Element.removeChild(state.el)) |> ignore,
  render: ({state}) => ReactDOMRe.createPortal(child, state.el),
};
