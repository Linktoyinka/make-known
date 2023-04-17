// SEE MORE BUTTON ON SERVICE PAGE
const seeMore = document.querySelector(".moreBtn");
const tile = document.querySelector(".tile-more");

seeMore.addEventListener("click", function () {
  if (seeMore.innerHTML === "See All") {
    seeMore.innerHTML = "See Less";
  } else {
    seeMore.innerHTML = "See All";
  }
  tile.classList.toggle("tile-more");
});