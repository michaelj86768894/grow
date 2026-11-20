(function () {
  "use strict";
  document.getElementById("year").textContent = new Date().getFullYear();
  var button = document.getElementById("raise-hand");
  var status = document.getElementById("form-status");
  var url = ((window.GROW_WITH_COUSINS || {}).microsoftFormUrl || "").trim();
  if (url) {
    try {
      var parsed = new URL(url);
      if (parsed.protocol === "https:") {
        button.href = parsed.href;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
        button.setAttribute("aria-label", "Raise My Hand (opens form in a new tab)");
        status.textContent = "The interest form opens in a new tab. Human Resources will review your response.";
      }
    } catch (_) { /* Keep the honest coming-soon state for an invalid URL. */ }
  }
  button.addEventListener("click", function () {
    if (button.getAttribute("href") === "#form-status") status.focus();
  });
  function revealRole() {
    var id = window.location.hash.slice(1);
    var target = document.getElementById(id);
    if (target && target.matches("details.role-detail")) target.open = true;
  }
  window.addEventListener("hashchange", revealRole);
  document.querySelectorAll("a.career-step").forEach(function (link) {
    link.addEventListener("click", function () {
      var target = document.getElementById(link.getAttribute("href").slice(1));
      if (target) target.open = true;
    });
  });
  revealRole();
})();
