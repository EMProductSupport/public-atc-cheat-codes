function showhidepw() {
  var dots = document.getElementById("hide-fares");
  var moreText = document.getElementById("aa-pwfares");
  var btnText = document.getElementById("aa-farebtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View less"; 
    moreText.style.display = "inline";
  }
}
