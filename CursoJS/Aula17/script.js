
function contar(){
    let ini = document.getElementById('txtini');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso');
    let res= document.getElementById('res');

   if (ini.nodeValue.length == 0 || fim.nodeValue.length == 0 || passo.nodeValue.length){
       window.alert('FALTAM DADOS');
   }




        // res.style.textAlign = 'center';
        // res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        // res.appendChild(img);
    }

