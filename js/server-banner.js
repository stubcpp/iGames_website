(function () {
  "use strict";

  var PROBE_TIMEOUT_MS = 5000;

  function apply(url) {
    var node = document.getElementById("banner-server-url");
    if (!node || !url) {
      return;
    }
    node.textContent = window.iGamesTunnel.toWebSocketUrl(url);
  }

  // no-cors достатньо, щоб відрізнити живий тунель від закритої сесії:
  // живий сервер віддає будь-яку відповідь, мертвий — помилку з'єднання.
  function isAlive(url) {
    return new Promise(function (resolve) {
      var controller = new AbortController();
      var timer = setTimeout(function () {
        controller.abort();
      }, PROBE_TIMEOUT_MS);

      fetch(url + "/", {
        mode: "no-cors",
        cache: "no-store",
        signal: controller.signal
      })
        .then(function () {
          clearTimeout(timer);
          resolve(true);
        })
        .catch(function () {
          clearTimeout(timer);
          resolve(false);
        });
    });
  }

  function render() {
    if (!window.iGamesTunnel) {
      return;
    }

    window.iGamesTunnel.resolve().then(function (url) {
      if (!url) {
        return window.iGamesTunnel.resolveFresh().then(apply);
      }

      return isAlive(url).then(function (alive) {
        if (alive) {
          apply(url);
          return null;
        }

        // raw CDN міг віддати адресу попередньої, вже закритої сесії.
        return window.iGamesTunnel.resolveFresh().then(function (freshUrl) {
          apply(freshUrl || url);
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
