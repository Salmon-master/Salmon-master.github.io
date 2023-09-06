let show = false;
const menuBtn = document.getElementsByClassName("menu-btn");

function onToggle(){
  show **= -1;
  const menuList = document.getElementById("menu-list");
  if (show == false){
    menuBtn[0].classList.remove("close");
    menuList.classList.remove("open");
  }
  else{
    menuBtn[0].classList.add("close");
    menuList.classList.add("open");
    console.log(menuList.classList.value);
  }
}