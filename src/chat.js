export function initFreshChat() {
  window.fcWidget.init({
    token: "23ee12da-ba36-4857-849f-3f91824cc10b",
    host: "https://wchat.freshchat.com"
  });
}
export function initialize(i, t) {
  var e;
  i.getElementById(t)
    ? initFreshChat()
    : (((e = i.createElement("script")).id = t),
      (e.async = !0),
      (e.src = "https://wchat.freshchat.com/js/widget.js"),
      (e.onload = initFreshChat),
      i.head.appendChild(e));
}
export function initiateCall() {
  initialize(document, "freshchat-js-sdk");
}
window.addEventListener
  ? window.addEventListener("load", initiateCall, !1)
  : window.attachEvent("load", initiateCall, !1);
