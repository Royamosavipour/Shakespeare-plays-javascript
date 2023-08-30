
let detailItem = document.querySelectorAll(".Details-item");
let tableSec2 = document.querySelectorAll("#table-sec2 tr");
let tableSec3 = document.querySelectorAll("#table-sec3 tr");
let aElem = document.querySelectorAll("a");
let iconElement = document.querySelector(".icon-Element");
let linkStyle = document.querySelectorAll(".link-style");
let mailBox = document.querySelector(".mail-box");
let henryIcon=document.querySelector('.henry-icon')
let SelectedShakespeare=document.querySelector('.Selected-Shakespeare')

let button = document.querySelector("button");

button.addEventListener("click", function () {

  SelectedShakespeare.style.display='flex'

  detailItem.forEach((detail) => {
    detail.classList.add("Details");
  });

  tableSec2.forEach((tr, index) => {
    if (index % 2 === 1) {
      tr.style.backgroundColor = "lightgrey";
    }
  });

  tableSec3.forEach((tr, index) => {
    if (index % 2 === 0) {
      tr.style.backgroundColor = "lightgrey";
    }
  });

  aElem.forEach((a) => {
    a.style.textDecorationStyle = "dotted";
    a.style.color = "#C24016";
    a.style.fontWeight = "800";
  });

  linkStyle.forEach((link) => {
    link.style.textDecorationStyle = "dotted";
    link.style.textDecorationLine = "underline";
    link.style.color = "#C24016";
    link.style.fontWeight = "800";
  });

  let span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "picture_as_pdf";
  iconElement.appendChild(span);
  span.style.fontSize = "15px";
  span.style.fontWeight='800'


  let spanNewOpen=document.createElement('span')
  spanNewOpen.classList.add('material-symbols-outlined')
  spanNewOpen.innerHTML='open_in_new'
  spanNewOpen.style.fontSize='15px'
  spanNewOpen.style.color='green'
  spanNewOpen.style.fontWeight='800'
  mailBox.insertAdjacentElement('afterbegin',spanNewOpen)


henryIcon.insertAdjacentElement('afterbegin',spanNewOpen.cloneNode(true))


  let spanMail = document.createElement("span");
  spanMail.classList.add("material-symbols-outlined");
  spanMail.innerHTML = "mail";

  spanMail.style.fontSize='15px'
  spanMail.style.fontWeight='800'
  mailBox.insertAdjacentElement('afterbegin',spanMail)



  



  
});
