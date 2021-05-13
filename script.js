let responsive = document.querySelector('.toggle');
let view = document.querySelector('.navbar');
let content = document.querySelector('.content')

responsive.addEventListener("click" , function () {
  if (view.style.display === "none"){
    view.style.display = 'block',
    content.style.display ='none';
    
  }
  else{
    view.style.display = 'none',
    content.style.display ='block';
  }
});