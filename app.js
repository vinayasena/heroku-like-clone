const slidesContainer = document.querySelector(".slides");

const startSlider = (type) => {
  //1. activeSliedr  to lastSlider
  //2.
  const active = document.querySelector(".activeSlide");
  let next = active.nextElementSibling;
  const last = document.querySelector(".lastSlide");
  if (!next) {
    next = slidesContainer.firstElementChild;
  }

  active.classList.remove(["activeSlide"]);
  next.classList.remove(["nextSlide"]);
  last.classList.remove(["lastSlide"]);

  if (type === "prev") {
    active.classList.add("nextSlide");
    last.classList.add("activeSlide");
    next = last.previousElementSibling;
    if (!next) {
      next = slidesContainer.lastElementChild;
    }
    next.classList.add("lastSlide");
    return;
  }

  active.classList.add("lastSlide");
  next.classList.add("activeSlide");
  last.classList.add("nextSlide");
};

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});

setInterval(()=>{
   startSlider();
}, 5000)


const toggleBtn = document.querySelector('.mobile');
const closeBtn = document.querySelector('.close-btn');
const sidewrapper = document.querySelector('.sidebar-wrapper');

toggleBtn.addEventListener('click', ()=>{
  
  sidewrapper.classList.add('show')
})

closeBtn.addEventListener('click', ()=>{
  

  sidewrapper.classList.remove('show')
})