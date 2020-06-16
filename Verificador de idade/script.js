function verificar() {
    var data = new Date()//puxando a data do pc
    var ano = data.getFullYear()//ano com 4 digitos
    var fano = document.getElementById('txtano')//aqui pega a informaçao passada do usuario no ano de nsc
    var res = document.querySelector('div#res')//onde mostrara o resultdo
    if (fano.value.length == 0 || Number.value > ano ) {
         window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)//especificar que é number
        var genero = ''
        var img = document.createElement('img')//criando uma tag img dinamicamente   
        img.setAttribute('id', 'foto')//criando um id dinamicamente

        if (fsex[0].checked) {//se a opçao for a 0 no sexo 
            genero = 'Homen'
            if (idade >= 0 && idade <= 10 ) {
                //criança
               img.setAttribute('src', 'criança M.jpg')
            }else if (idade <= 20 ) {
                //jovem    
                img.setAttribute('src', 'jovem M.jpg')            
            }else if (idade < 50 ) {
                //adulto
                img.setAttribute('src', 'adulto M.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idoso M.jpg')
            }
        }else if (fsex[1].checked){// se a opção for 1 no sexo
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10 ) {
                //criança
                img.setAttribute('src', 'criança F.jpg')
            } else if(idade <= 20 ) {
                //jovem
                img.setAttribute('src', 'jovem F.jpg')
            }else if (idade <= 50) {
                //adulto
                img.setAttribute('src','adulto F.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'idoso F.jpg')
            }
        }
        res.style.textAlign = 'center'//centralizando o resultado
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//adicionando img depois do texto acima
    }
    
}