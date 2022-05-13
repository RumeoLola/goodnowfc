function openNav() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("nosite").style.display = "none";
  document.getElementById("daeh").style.marginBottom = "325px";
  document.getElementById("daeh").style.borderBottom = "none"
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("daeh").style.marginBottom = "0";
  document.getElementById("nosite").style.display = "flex";
  document.getElementById("daeh").style.borderBottom = "2px solid #999"
}