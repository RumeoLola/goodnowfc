document.addEventListener("DOMContentLoaded",
  function  (event) {
    function  sendIt()  {
      var myName = document.getElementById("name").value;
      var myEmail = document.getElementById("email").value;
      var mySubject = document.getElementById("subject").value;
      var myMessage = document.getElementById("message").value;
      console.log("The following message: " + "'" + myMessage + "'" + " is from " + myName + " is about " + mySubject + " The sender's address is " + myEmail)
    }
    document.querySelector("button").addEventListener("click", sendIt);
  }
);

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