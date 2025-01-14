let navBarToggle = document.querySelector(".nav-bar-js");
let pagesContainer = document.querySelector(".pages-container");
let exitNavBar = document.querySelector(".exit-nav-bar-js");

let visible = false;

navBarToggle.addEventListener("click", () => {
    if(visible === false)
    {
        pagesContainer.classList.add("visible");
        pagesContainer.classList.remove("invisible");

        visible = true;

        document.body.style.overflow = "hidden";
    }
    else
    {
        pagesContainer.classList.add("invisible");
        pagesContainer.classList.remove("visible");

        visible = false;

        document.body.style.overflow = "auto";
    }
});

exitNavBar.addEventListener("click", () => {
    if(visible === true)
    {
        pagesContainer.classList.add("invisible");
        pagesContainer.classList.remove("visible");
        
        visible = false;

        document.body.style.overflow = "auto";
    }
    else
    {
        pagesContainer.classList.add("visible");
        pagesContainer.classList.remove("invisible");
        
        visible = true;

        document.body.style.overflow = "hidden";
    }
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    })
});

const hiddentElements = document.querySelectorAll(".hidden");
  
hiddentElements.forEach((element) => {
    observer.observe(element);
});