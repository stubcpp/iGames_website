(function () {
  "use strict";

  function render() {
    var node = document.getElementById("banner-server-url");
    if (!node || !window.iGamesTunnel) {
      return;
    }

    window.iGamesTunnel.resolve().then(function (url) {
      if (!url) {
        return;
      }
      node.textContent = window.iGamesTunnel.toWebSocketUrl(url);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
