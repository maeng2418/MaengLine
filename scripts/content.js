/**
 * content script는 웹 페이지에 직접적으로 주입(inject)되는 코드입니다.
 * 주입된 코드는 독립된 공간에서 실행되지만
 * (따라서, 전역 변수를 선언하더라도 기존 사이트의 전역 변수와 겹칠 걱정은 하지 않아도 됩니다),
 * 웹 페이지의 DOM에 접근하거나 아예 새로운 DOM을 그릴 수도 있고, 여러 가지 재미있는 일을 할 수 있게 됩니다.
 */

chrome.runtime.sendMessage({ message: "Hello" }, function (response) {
  console.log(response.message);
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting == "hello") sendResponse({ farewell: "goodbye" });
});
