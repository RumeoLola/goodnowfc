function openNav() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("nosite").style.display = "none";
  document.getElementById("daeh").style.marginBottom = "275px";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("daeh").style.marginBottom = "0";
  document.getElementById("nosite").style.display = "flex";
}