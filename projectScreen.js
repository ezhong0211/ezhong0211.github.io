function showOther(className) {
  var frontContName = document.querySelector(
    ".".concat(className.concat("Front"))
  );
  console.log(frontContName);
  var backContName = document.querySelector(
    ".".concat(className.concat("Back"))
  );
  if (frontContName.style.display == "none") {
    frontContName.style.display = "flex";
    backContName.style.display = "none";
  } else {
    frontContName.style.display = "none";
    backContName.style.display = "flex";
  }
  console.log("hey");
}
