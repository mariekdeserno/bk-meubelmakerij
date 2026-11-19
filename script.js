(function () {
  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Lightbox for portfolio
  var box = document.getElementById("lightbox");
  var boxImg = box.querySelector("img");
  var boxCaption = box.querySelector(".caption");

  document.querySelectorAll(".grid button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      boxImg.src = btn.dataset.full;
      boxImg.alt = btn.dataset.caption || "";
      boxCaption.textContent = btn.dataset.caption || "";
      box.showModal();
    });
  });

  box.querySelector(".close").addEventListener("click", function () { box.close(); });
  box.addEventListener("click", function (e) {
    if (e.target === box) box.close();
  });

  // Map: only load Google Maps after the visitor asks for it (no third-party requests by default)
  var loadMap = document.getElementById("load-map");
  if (loadMap) {
    loadMap.addEventListener("click", function () {
      var frame = document.createElement("iframe");
      frame.src = "https://maps.google.com/maps?q=Nieuwe+Uilenburgerstraat+36+1011+LS+Amsterdam&hl=nl&z=16&output=embed";
      frame.title = "Kaart met de locatie van BK meubelmakerij";
      frame.loading = "lazy";
      frame.referrerPolicy = "no-referrer-when-downgrade";
      var map = document.getElementById("map");
      map.innerHTML = "";
      map.appendChild(frame);
    });
  }
})();
