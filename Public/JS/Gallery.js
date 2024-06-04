
window.addEventListener("resize", handleResize);

function handleResize() {
  const containers = document.querySelectorAll(".image-container");
  if (window.innerWidth <= 600) {
    containers.forEach((container) => {
      const minImage = container.getAttribute("data-min");
      container.querySelector("Public/images").src = minImage;
    });
  } else {
    containers.forEach((container) => {
      const fullImage = container.getAttribute("data-full");
      container.querySelector("Public/images").src = fullImage;
    });
  }
}
handleResize();
