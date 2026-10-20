(function () {
  "use strict";

  var DEFAULT_URL = "https://github.io";
  var TOAST_VISIBLE_MS = 2000;
  var TOAST_FADE_MS = 300;

  var toast = null;
  var hideTimer = null;
  var resetTimer = null;

  function legacyCopy(value) {
    if (!document.body) {
      return false;
    }

    var textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.setAttribute("aria-hidden", "true");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "-9999px";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);

    var copied = false;
    try {
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);

      if (typeof document.execCommand === "function") {
        copied = document.execCommand("copy");
      }
    } catch (error) {
      copied = false;
    }

    document.body.removeChild(textarea);
    return copied;
  }

  function showToast() {
    if (!toast) {
      return;
    }

    window.clearTimeout(hideTimer);
    window.clearTimeout(resetTimer);

    toast.setAttribute("aria-hidden", "false");
    toast.classList.remove("opacity-0", "translate-y-1");
    toast.classList.add("opacity-100", "translate-y-0");

    hideTimer = window.setTimeout(function () {
      toast.classList.remove("opacity-100", "translate-y-0");
      toast.classList.add("opacity-0", "translate-y-1");

      resetTimer = window.setTimeout(function () {
        toast.setAttribute("aria-hidden", "true");
      }, TOAST_FADE_MS);
    }, TOAST_VISIBLE_MS);
  }

  function copyText(value) {
    function fallback() {
      if (legacyCopy(value)) {
        showToast();
      }
    }

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      try {
        navigator.clipboard.writeText(value).then(showToast, fallback);
        return;
      } catch (error) {
        /* Clipboard API unavailable: fall through to the legacy copy path. */
      }
    }

    fallback();
  }

  function init() {
    var button = document.querySelector("[data-share-button]");
    toast = document.querySelector("[data-share-toast]");

    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      var url = button.getAttribute("data-share-url") || DEFAULT_URL;
      copyText(url);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
