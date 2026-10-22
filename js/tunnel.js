(function () {
  "use strict";

  var RAW_URL = "https://raw.githubusercontent.com/stubcpp/iGames_website/main/tunnel_url.txt";
  var API_URL = "https://api.github.com/repos/stubcpp/iGames_website/contents/tunnel_url.txt?ref=main";
  var TUNNEL_PATTERN = /^https:\/\/[a-zA-Z0-9.-]+\.(?:lhr\.life|pinggy(?:-free)?\.link)$/;
  var pending = null;

  function normalize(text) {
    var candidate = (text || "").trim();
    return TUNNEL_PATTERN.test(candidate) ? candidate : null;
  }

  function request(url, options) {
    return fetch(url, options)
      .then(function (response) {
        return response.ok ? response.text() : null;
      })
      .then(normalize)
      .catch(function () {
        return null;
      });
  }

  // Читає адресу з raw.githubusercontent.com (CDN може віддавати до 5 хв
  // застарілий файл). Проміс кешується на час життя сторінки.
  function resolve() {
    if (!pending) {
      pending = request(RAW_URL + "?t=" + Date.now(), { cache: "no-store" });
    }
    return pending;
  }

  // Читає адресу через GitHub API (max-age 60 с); використовується, якщо
  // закешована raw-адреса вже не відповідає.
  function resolveFresh() {
    return request(API_URL + "&t=" + Date.now(), {
      headers: { "Accept": "application/vnd.github.raw" },
      cache: "no-store"
    });
  }

  function toWebSocketUrl(url) {
    if (!url) {
      return null;
    }
    if (url.indexOf("https://") === 0) {
      return "wss://" + url.slice("https://".length);
    }
    if (url.indexOf("http://") === 0) {
      return "ws://" + url.slice("http://".length);
    }
    return url;
  }

  window.iGamesTunnel = {
    resolve: resolve,
    resolveFresh: resolveFresh,
    normalize: normalize,
    toWebSocketUrl: toWebSocketUrl
  };
})();
