//============================== VARIÁVEIS ====================================

//primeiro vamos criar uma variável para todas as estrelas
let arrayStars = returnStars();

const URL_estrela_cheia = 'url("https://raw.githubusercontent.com/jeffalves33/Desafio---TutorMundi/main/img/estrela_cheia.svg") no-repeat rgb(255, 255, 255)';
const URL_estrela_vazia = 'url("https://raw.githubusercontent.com/jeffalves33/Desafio---TutorMundi/388da852990eda44462004e20c9261ce0a36a5bb/img/estrela_vazia.svg") no-repeat rgb(255, 255, 255)';





//============================== FUNÇÕES ====================================

/* retorna um array em que cada índice contem uma das 5 estrelas do layout pelo seu id */
function returnStars(){
    let arrayStars = new Array(5);
    //adicionamos a propriedade linkavel para termos mais controle 
    for(var i = 0; i < 5; i++){
        arrayStars[i]                       = document.querySelector("#star-" + (i+1));
        arrayStars[i].style.background      = "url('https://raw.githubusercontent.com/jeffalves33/Desafio---TutorMundi/388da852990eda44462004e20c9261ce0a36a5bb/img/estrela_vazia.svg') no-repeat"
    }

    return arrayStars;
}

/*função responsável por mudar a cor das estrelas assim que clicadas */
function starChoice(numberStar){
    //estrela clicada está marcada
    if(arrayStars[numberStar - 1].style.background == URL_estrela_cheia){
        for(var i = numberStar; i < 5; i++) arrayStars[i].style.background = URL_estrela_vazia;
    }

    //estrela clicada NÃO está marcada
    else{
        for(var i = 0; i < numberStar; i++) arrayStars[i].style.background = URL_estrela_cheia;
    }
}