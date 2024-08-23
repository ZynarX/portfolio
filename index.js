const togglePagesButton = document.getElementById('TogglePages');
const pagesContainer = document.getElementById('PagesContainer');

togglePagesButton.innerHTML = `<i class="fa-solid fa-x"></i>`;

let invis = 0;

togglePagesButton.onclick = function(){
  if (invis === 1)
  {
    pagesContainer.style.visibility = "visible";
    togglePagesButton.innerHTML = `<i class="fa-solid fa-x"></i>`;
    invis = 0;
  }
  else if (invis === 0)
  {
    pagesContainer.style.visibility = "hidden";
    togglePagesButton.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    invis = 1;
  }
}
