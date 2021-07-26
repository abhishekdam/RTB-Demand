// Adding the image element
const after_me = document.querySelector("#after-me");
const image_container = document.createElement("div");
image_container.classList.add("image_style");
const image =
  '<img src="https://millercenter.rutgers.edu/wp-content/uploads/2021/05/Home-Four-Banner-Background-Image.png" width="80%"/>';
image_container.innerHTML = image;

const section_parent = document.querySelector("section");
section_parent.insertBefore(image_container, after_me);

//adding the close button
const x = document.createTextNode("X");

const close_x = document.createElement("p");
close_x.classList.add("cross");
close_x.appendChild(x);

section_parent.insertBefore(close_x, image_container);

// adding funcitonality to the ad banner
function myFunction() {
  image_container.remove();
  close_x.remove();
}
close_x.addEventListener("click", myFunction);
