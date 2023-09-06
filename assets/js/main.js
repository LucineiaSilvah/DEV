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