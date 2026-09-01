/*
==========================================================
 CARTÃO PROFISSIONAL EM REALIDADE AUMENTADA

 Aula 02

 Tecnologias:
 - MindAR
 - A-Frame
 - Image Tracking
 - JavaScript
==========================================================
*/


/* ==========================================================
   ELEMENTOS HTML
========================================================== */

const intro =
    document.getElementById("intro");


const startButton =
    document.getElementById("startButton");


const status =
    document.getElementById("status");


const scene =
    document.getElementById("arScene");


const target =
    document.getElementById("target");



/* ==========================================================
   FUNÇÃO PARA ALTERAR STATUS
========================================================== */

function setStatus(message) {

    status.textContent = message;

}



/* ==========================================================
   INICIAR EXPERIÊNCIA
========================================================== */

startButton.addEventListener(
    "click",
    async () => {

        /*
        Verifica se o arquivo targets.mind existe.

        Esse arquivo será criado pelo aluno a partir
        do cartão profissional.
        */

        try {

            const response =
                await fetch(
                    "assets/targets/targets.mind",
                    {
                        method: "HEAD",
                        cache: "no-store"
                    }
                );


            /*
            Se o arquivo não existir,
            interrompe o processo.
            */

            if (!response.ok) {

                throw new Error(
                    "targets.mind não encontrado"
                );

            }


            /*
            Esconde a tela inicial.
            */

            intro.style.display = "none";


            /*
            Ativa a interface AR.
            */

            document.body.classList.add(
                "ar-active"
            );


            setStatus(
                "Iniciando câmera..."
            );


            /*
            Obtém o sistema MindAR.
            */

            const arSystem =
                scene.systems[
                    "mindar-image-system"
                ];


            if (arSystem) {

                /*
                Inicia o reconhecimento
                de imagem.
                */

                await arSystem.start();


                setStatus(
                    "Aponte a câmera para o cartão"
                );

            }

            else {

                setStatus(
                    "MindAR não foi carregado."
                );

            }

        }


        catch (error) {

            console.error(error);


            setStatus(
                "Target não encontrado"
            );


            /*
            Mensagem explicando o que falta.
            */

            alert(
                "O projeto está pronto, mas o arquivo " +
                "assets/targets/targets.mind não foi incluído " +
                "porque o cartão/target não faz parte desta entrega. " +
                "Compile seu próprio cartão no MindAR e coloque " +
                "o arquivo nesse caminho."
            );

        }

    }
);



/* ==========================================================
   TARGET ENCONTRADO
========================================================== */

target.addEventListener(
    "targetFound",
    () => {

        setStatus(
            "Cartão reconhecido ✓"
        );

    }
);



/* ==========================================================
   TARGET PERDIDO
========================================================== */

target.addEventListener(
    "targetLost",
    () => {

        setStatus(
            "Cartão perdido — reposicione a câmera"
        );

    }
);



/* ==========================================================
   RESPONSIVIDADE
========================================================== */

window.addEventListener(
    "resize",
    () => {

        if (
            document.body.classList.contains(
                "ar-active"
            )
        ) {

            setStatus(
                "Aponte a câmera para o cartão"
            );

        }

    }
);