/**
 * content script는 웹 페이지에 직접적으로 주입(inject)되는 코드입니다.
 * 주입된 코드는 독립된 공간에서 실행되지만
 * (따라서, 전역 변수를 선언하더라도 기존 사이트의 전역 변수와 겹칠 걱정은 하지 않아도 됩니다),
 * 웹 페이지의 DOM에 접근하거나 아예 새로운 DOM을 그릴 수도 있고, 여러 가지 재미있는 일을 할 수 있게 됩니다.
 */

const highlighter = document.createElement("maeng-line");
document.body.appendChild(highlighter);

const setMarkerPosition = (markerPosition) =>
  highlighter.setAttribute("markerPosition", JSON.stringify(markerPosition));

const getSelectedText = () => window.getSelection().toString();

document.addEventListener("mouseup", () => {
  if (getSelectedText().length > 0) {
    setMarkerPosition(getMarkerPosition());
  }
});

document.addEventListener("selectionchange", () => {
  if (getSelectedText().length === 0) {
    setMarkerPosition({ display: "none" });
  }
});

function getMarkerPosition() {
  const rangeBounds = window
    .getSelection()
    .getRangeAt(0)
    .getBoundingClientRect();

  return {
    // Substract width of marker button -> 40px / 2 = 20
    left: rangeBounds.left + rangeBounds.width / 2 - 20,
    top: window.pageYOffset + rangeBounds.top - 30,
    display: "flex",
  };
}
