function toggleText(id) {
    var x = document.getElementById("q" + String(id));
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }