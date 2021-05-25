
function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value > ano || fano.value.length == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }

    else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');

        if(fsex[0].checked){
            genero = 'Homem';

            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'imagens/boy.jpg');
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/youngman.jpg');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/man.jpg');

            }else{
                //idoso
                img.setAttribute('src', 'imagens/oldman.jpg');
            }

        }else if(fsex[1].checked){
            genero = 'Mulher';
            
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'imagens/girl.jpg');
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/youngwoman.jpg');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/woman.jpg');
            }else{
                //idoso
                img.setAttribute('src', 'imagens/oldwoman.jpg');
            }

        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }

}