const botao = document.querySelector('.fa-angles-up');
const corpo = document.querySelector('html')

document.addEventListener('scroll', vereficar)

function vereficar(){
  if(scrollY > 400){
    botao.style.visibility = 'visible'
  }else{
    botao.style.visibility = 'hidden'
  }
}


botao.addEventListener('click',()=>{
  window.scrollTo({
    top:0
  })
})

let menu = document.querySelector('.fa-bars');
menu.addEventListener('click', ()=>{
  let menuLista = document.querySelector('.menu__lista')
  menuLista.classList.toggle('mostrarMenu');
  
})

let modo = document.getElementById('mode')
 
   modo.addEventListener('click', ()=> {
   document.querySelector('.container').classList.toggle('white')

  



 })
 
 
