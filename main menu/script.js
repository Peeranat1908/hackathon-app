function toggleDarkLight() {
    var body = document.getElementById("body")
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "lightmode" : "darkmode";
}