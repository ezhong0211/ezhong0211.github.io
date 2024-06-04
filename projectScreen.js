function showOther(className) {
  var frontContName = document.querySelector(`.${className}pic`);
  console.log(frontContName);
  var backContName = document.querySelector(`.${className}Desc`);
  if (frontContName.style.display == "none") {
    frontContName.style.display = "block";
    backContName.style.display = "none";
  } else {
    frontContName.style.display = "none";
    backContName.style.display = "block";
  }
}

function openResume() {
  open("./Eric_Zhong_Resume.pdf");
  console.log("work")
}
