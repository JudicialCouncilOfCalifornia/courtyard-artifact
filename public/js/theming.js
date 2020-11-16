var themeSwitcher = $(".jcc-themebar__switcher");

if (themeSwitcher.length > 0) {
  var theme = localStorage["theme"] || "srl";

  var toggle = function(selector, display) {
    $(selector).each(function(idx, element) {
      if (display) {
        element.style.display = display;
      } else {
        element.style.display = element.style.display == "none" ? "block" : "none";
      }
    });
  };

  if (themeSwitcher) {
    $(themeSwitcher).change(function() {
      var themeName = this.value;
      console.log("name: " + themeName);
      document.body.className = "";
      document.body.classList.add(themeName);
      document.getElementById("trial").disabled = true;

      if (themeName == "trial-court") {
        document.getElementById("trial").disabled = false;
        console.log("trial-court switch");
        toggle("sg-colors-trial", "block");
        toggle("sg-colors-srl", "none");
        localStorage["theme"] = "trial-court";
      }
      if (themeName == "srl") {
        document.getElementById("trial").disabled = true;
        console.log("srl switch");
        toggle("sg-colors-trial", "none");
        toggle("sg-colors-srl", "block");
        localStorage["theme"] = "srl";
      }
    });

    if (theme == "srl") {
      document.getElementById("trial").disabled = true;
      toggle("sg-colors-trial", "none");
      toggle("sg-colors-srl", "block");
      themeSwitcher.value = theme;
    }

    if (theme == "trial-court") {
      document.getElementById("trial").disabled = false;
      toggle("sg-colors-trial", "block");
      toggle("sg-colors-srl", "none");
      themeSwitcher.value = theme;
    }
  }
}
