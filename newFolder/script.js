function myFunction() {
  let x = document.getElementsByClassName("span-text");
  console.log(x);
  if (x.style.display === "block") {
    x.style.display = "none";
    debugger;
  } else {
    x.style.display = "none";
  }
}
