function leftImageClick() {
  document.getElementsByClassName("left-image")[0].classList.toggle("showInfo");
  console.log("1");
  
}

function middleImageClick() {
  document.getElementsByClassName("middle-image")[0].classList.toggle("showResume");
}

function rightImageClick() {
  document.getElementsByClassName("right-image")[0].classList.toggle("showActivities");
}
