var tela = document.querySelector("canvas")
var ponteiro = tela.getContext("2d")

    function tracejarLinhas() {
        var linhas = palavraEscolhida.length
            for (i=1; i<= linhas; i++) {
                ponteiro.fillStyle = "white";
                ponteiro.fillRect((i*50)+70, 280, 25, 4);
                ponteiro.strokestyle = "black";
                ponteiro.strokeRect((i*50)+70, 280, 25, 4);
            }
    }

    function preencherLetraCorreta() {
        for (let i=0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra) {
                ponteiro.font = "bold 32px verdana"
                ponteiro.fillStyle = "black";
                ponteiro.fillText(letra, ((i+1)*50)+70, 275, 350);
                acertos +=1;
            }
        }
    }

    function gameOver() {
                ponteiro.font = "bold 80px impact"
                ponteiro.fillStyle = "red";
                ponteiro.fillText("GAME OVER", 320, 150);
    }

    function vencedor() {

            ponteiro.font = "bold 45px arial"
            ponteiro.fillStyle = "white";
            ponteiro.fillText("VOCÊ VENCEU!!!", 310, 150);

    }

    function preencherLetraIncorreta() {        

            if (erros === 1){
                ponteiro.font = "bold 28px arial";
                ponteiro.fillStyle = "navy";
                desenhaLetrasErradas();
            }

            if (erros < 6) {
                ponteiro.font = "bold 28px arial";
                ponteiro.fillStyle = "navy";
                ponteiro.fillText(letra + "-", ((erros+1)*35)+276, 362, 400);
            }
            else {
                ponteiro.font = "bold 28px arial";
                ponteiro.fillStyle = "navy";
                ponteiro.fillText(letra, ((erros+1)*35)+276, 362, 400);
            }
            
            switch (erros) {
                case 1: 
                    desenhaCabeca()
                    break
                case 2:
                    desenhaCorpo()
                    break
                case 3:
                    desenhaBracoEsquerdo()
                    break
                case 4:
                    desenhaBracoDireito()
                    break
                case 5:
                    desenhaPernaDireita()
                    break
                case 6:
                    desenhaPernaEsquerda()
                    desenhaGameOver()
                    break   
            }

    }

    function desenhaLetrasErradas() {    
        ponteiro.fillStyle = "white"
        ponteiro.fillRect(300, 325, 300, 50);
        ponteiro.strokeStyle = "black"
        ponteiro.strokeRect(300, 325, 300, 50);
        
    }    
       
    function desenhaForca() {    
        ponteiro.fillStyle = "sienna"
        ponteiro.fillRect(70, 10, 20, 288);
        ponteiro.strokeStyle = "black"
        ponteiro.strokeRect(70, 10, 20, 288);
    
        ponteiro.fillStyle = "sienna"
        ponteiro.fillRect(90, 20, 160, 20);
        ponteiro.strokeStyle = "black"
        ponteiro.strokeRect(90, 20, 160, 20);
    }    
    
    function desenhaCabeca() {

        //CABEÇA
        ponteiro.fillStyle = "black";
        ponteiro.beginPath();
        ponteiro.arc(250, 70, 30, 0, 2 * 3.14);
        ponteiro.fill();
        
        //OLHOS
        ponteiro.fillStyle = "yellow";
        ponteiro.beginPath();
        ponteiro.arc(238, 60, 5, 0, 2 * 3.14);
        ponteiro.arc(258, 60, 5, 0, 2 * 3.14);
        ponteiro.fill();
        
        ponteiro.fillStyle = "black";
        ponteiro.beginPath();
        ponteiro.arc(238, 60, 2, 0, 2 * 3.14);
        ponteiro.arc(258, 60, 2, 0, 2 * 3.14);
        ponteiro.fill();
        
        //BOCA
        ponteiro.fillStyle = "yellow"
        ponteiro.fillRect(243, 80, 12, 3);
    }
    
    function desenhaCorpo() {
        //CORPO
        ponteiro.fillStyle = "black"
        ponteiro.fillRect(242, 100, 12, 120);
    }

    function desenhaBracoEsquerdo() {
        //BRAÇO ESQUERDO
        ponteiro.lineWidth = 10
    
        ponteiro.fillStyle = "black";
        ponteiro.beginPath();
        ponteiro.moveTo(250, 110);
        ponteiro.lineTo(215, 145);
        ponteiro.stroke();
    }
    
    function desenhaBracoDireito() {
        //BRAÇO DIREITO
        ponteiro.fillStyle = "black";
        ponteiro.beginPath();
        ponteiro.moveTo(250, 110);
        ponteiro.lineTo(295, 145);
        ponteiro.stroke();
    }
     
    function desenhaPernaEsquerda() {
        //PERNA ESQUERDA
        ponteiro.fillStyle = "black";
        ponteiro.beginPath();
        ponteiro.moveTo(250, 190);
        ponteiro.lineTo(225, 225);
        ponteiro.stroke();
    }    

    function desenhaPernaDireita() {
        //PERNA DIREITA
        ponteiro.fillStyle = "black";
        ponteiro.beginPath();
        ponteiro.moveTo(250, 190);
        ponteiro.lineTo(275, 225);
        ponteiro.stroke();
    
    }

    function desenhaGameOver() {
    // GAME OVER

        //CABEÇA
        ponteiro.fillStyle = "black";
        ponteiro.beginPath();
        ponteiro.arc(250, 70, 30, 0, 2 * 3.14);
        ponteiro.fill();
        
        //OLHO ESQUERDO
        ponteiro.lineWidth = 4
        ponteiro.fillStyle = "white";
        ponteiro.beginPath();
        ponteiro.moveTo(234, 60);
        ponteiro.lineTo(242, 70);
        ponteiro.strokeStyle = "white"
        ponteiro.stroke();

        ponteiro.lineWidth = 4
        ponteiro.fillStyle = "white";
        ponteiro.beginPath();
        ponteiro.moveTo(242, 60);
        ponteiro.lineTo(234, 70);
        ponteiro.strokeStyle = "white"
        ponteiro.stroke();

        //OLHO DIREITO
        ponteiro.lineWidth = 4
        ponteiro.fillStyle = "white";
        ponteiro.beginPath();
        ponteiro.moveTo(254, 60);
        ponteiro.lineTo(262, 70);
        ponteiro.strokeStyle = "white"
        ponteiro.stroke();

        ponteiro.lineWidth = 4
        ponteiro.fillStyle = "white";
        ponteiro.beginPath();
        ponteiro.moveTo(262, 60);
        ponteiro.lineTo(254, 70);
        ponteiro.strokeStyle = "white"
        ponteiro.stroke();

    }
    
    function desenhaVencedor() {
        
        //CABEÇA
        ponteiro.fillStyle = "black";
        ponteiro.beginPath();
        ponteiro.arc(250, 70, 30, 0, 2 * 3.14);
        ponteiro.fill();
          
          //OLHOS
        ponteiro.fillStyle = "yellow";
        ponteiro.beginPath();
        ponteiro.arc(238, 60, 5, 0, 2 * 3.14);
        ponteiro.arc(258, 60, 5, 0, 2 * 3.14);
        ponteiro.fill();
          
        ponteiro.fillStyle = "black";
        ponteiro.beginPath();
        ponteiro.arc(238, 60, 2, 0, 2 * 3.14);
        ponteiro.arc(258, 60, 2, 0, 2 * 3.14);
        ponteiro.fill();

        //BOCA
        ponteiro.lineWidth = 4
        ponteiro.fillStyle = "yellow";
        ponteiro.beginPath();
        ponteiro.moveTo(235, 75);
        ponteiro.lineTo(245, 81);
        ponteiro.lineTo(250, 81);
        ponteiro.lineTo(260, 75);
        ponteiro.strokeStyle = "yellow";
        ponteiro.stroke();

        ponteiro.strokeStyle = "black";
        ponteiro.lineWidth = 10
    
        desenhaCorpo();
        desenhaBracoDireito();
        desenhaBracoEsquerdo();
        desenhaPernaDireita();
        desenhaPernaEsquerda();

    }

        

    

