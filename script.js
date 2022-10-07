//Declaração de Variáveis Globais

const alfabeto = ['A', 'B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V','W', 'X', 'Y', 'Z', 'Ç']

let palavras = ["BRASIL", "ITALIA", "FRANÇA", "ARGENTINA", "ALEMANHA", "EQUADOR", "URUGUAI", "AUSTRALIA", "BELGICA", "CANADA", "CAMAROES", "CROACIA", "CATAR", "DINAMARCA", "GANA", "HOLANDA", "INGLATERRA", "IRA", "JAPAO", "MARROCOS", "MEXICO", "POLONIA", "GALES", "PORTUGAL", "SENEGAL", "RUSSIA", "SERVIA", "SUIÇA", "TUNISIA" ]

let totalPalavras = palavras.length-1

let index

let letra

let palavraEscolhida

let letrasTecladas = []

let totalLetras

let erros = 0

let acertos = 0

let novaPalavra


//-----------------------------------------------------------


// INICIA JOGO PELA TELA PRINCIPAL

function iniciarJogo() {
    sortearPalavra();
    tracejarLinhas();
    desenhaForca();

    var audio = new Audio('a8.wav');
    audio.addEventListener('canplaythrough', function() {
    audio.play();
    });    

        document.onkeydown = (e) => {
            letra = e.key.toUpperCase()
        
            if (letra != 0 && erros < 6 && acertos < palavraEscolhida.length) {
                verificarLetra();
            }      
        };
    
}

//-----------------------------------------------------------


// INICIA JOGO PELA TELA DE ADICIONAR PALAVRAS

function novoJogo2() {
    document.getElementById("inputPalavras").hidden = true;
    document.getElementById("btn4").hidden = true;
    iniciarJogo()        
}

//-----------------------------------------------------------

// RECARREGA PÁGINA 

function novoJogo() {
    document.location.reload(true)    
}

//-----------------------------------------------------------


// SORTEIA PALAVRA ALEATORIAMENTE

function sortearPalavra() {
   index = Math.round(Math.random() *totalPalavras);
   palavraEscolhida = palavras[index];
    console.log(palavraEscolhida +" " +  palavraEscolhida.length)
}

//-----------------------------------------------------------


// VERIFICA LETRA DIGITADA E TOMA TODAS AS AÇÕES

function verificarLetra() {

    if (alfabeto.includes(letra)) {
        if (letrasTecladas.includes(letra)) {

                var audio = new Audio('a7.wav');
                audio.addEventListener('canplaythrough', function() {
                audio.play();
                alert("Essa letra já foi digitada!");
                });    

        }    
        else {
            totalLetras = letrasTecladas.length
            letrasTecladas[totalLetras] = letra;
                if (palavraEscolhida.includes(letra)) {
                    preencherLetraCorreta();

                    if (palavraEscolhida.length === acertos) {
                        vencedor();
                        desenhaVencedor();
                        document.getElementById("btn3").hidden = false;

                        var audio = new Audio('a10.wav');
                        audio.addEventListener('canplaythrough', function() {
                        audio.play();
                        }); 
                    }   
                        else {
                            var audio = new Audio('a2.wav');
                            audio.addEventListener('canplaythrough', function() {
                            audio.play();
                            });  
                    }

                }
                else {
                    erros += 1;  
                    preencherLetraIncorreta();

                        if (erros < 6) {
                            var audio = new Audio('a9.mp3');
                            audio.addEventListener('canplaythrough', function() {
                            audio.play();
                            });
                        }
                    
                        if (erros === 6){                           
                            var audio = new Audio('a3.wav');
                            audio.addEventListener('canplaythrough', function() {
                            audio.play();
                            gameOver() 
                            });

                            document.getElementById("btn3").hidden = false; 
                        }
  
                }     
        }    
        } 
    else{ 
        var audio = new Audio('a7.wav');
        audio.addEventListener('canplaythrough', function() {
        audio.play();
        alert("Carácter Inválido");
        });  
        
    }           
}

//------------------------------------------------------------


// SALVA NOVAS PALAVRAS

function salvar() {
    let novaPalavra = document.getElementById('inputPalavras')
    palavras[totalPalavras + 1] = (novaPalavra.value.toUpperCase())
    document.getElementById('inputPalavras').value ='';
    totalPalavras +=1;
}

//------------------------------------------------------------




// AJUSTES ITENS NA TELA

// PRIMEIRA TELA
document.getElementById("canva").hidden = true;
document.getElementById("btn3").hidden = true;
document.getElementById("inputPalavras").hidden = true;
document.getElementById("btn4").hidden = true;
document.getElementById("btn5").hidden = true;

// INICIANDO JOGO
document.getElementById("botaoIniciar")
.addEventListener("click", () => {
document.getElementById("btn1").hidden = true;
document.getElementById("btn2").hidden = true;
document.getElementById("canva").hidden = false;
}, false);


// INICIANDO JOGO PELA TELA DE ADIÇÃO DE PALAVRAS
document.getElementById("novoJogo2")
.addEventListener("click", () => {
document.getElementById("btn1").hidden = true;
document.getElementById("btn2").hidden = true;
document.getElementById("canva").hidden = false;
document.getElementById("btn5").hidden = true;
}, false);


// TELA DE ADIÇÃO DE PALAVRAS
document.getElementById("botaoAdd")
.addEventListener("click", () => {
document.getElementById("btn1").hidden = true;
document.getElementById("btn2").hidden = true;
document.getElementById("inputPalavras").hidden = false;
document.getElementById("btn4").hidden = false;
document.getElementById("btn5").hidden = false;    
}, false);


