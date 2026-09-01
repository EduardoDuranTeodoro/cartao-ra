# Cartão Profissional em Realidade Aumentada

Projeto desenvolvido para a atividade prática de
Realidade Aumentada - Aula 02.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- A-Frame
- MindAR
- Image Tracking
- GitHub Pages

---

# Objetivo

Criar uma experiência de Realidade Aumentada na qual
um cartão profissional seja utilizado como target.

Após o reconhecimento do cartão pela câmera do celular,
informações profissionais são apresentadas em uma camada
virtual.

---

# Observação importante

O cartão profissional/target NÃO foi incluído nesta entrega.

Isso foi feito intencionalmente.

O projeto está preparado para receber posteriormente
o arquivo:

assets/targets/targets.mind

---

# Estrutura

cartao-ra/

├── index.html

├── README.md

├── CONFIG.txt

├── css/

│   └── style.css

├── js/

│   └── app.js

├── assets/

│   ├── images/

│   │   └── README.txt

│   │
│   └── targets/

│       └── README.txt

└── docs/

    └── TESTES_TRACKING.md

---

# Informações apresentadas

A experiência apresenta quatro blocos principais:

1. Apresentação profissional
2. Sobre mim
3. Habilidades
4. Projetos

Além desses blocos, existe um elemento central
animado utilizando transformação de rotação.

---

# Transformações

A aplicação utiliza os conceitos de:

Position

Rotation

Scale

Esses conceitos são utilizados nos elementos
da cena A-Frame.

---

# Como adicionar o target

Primeiramente, crie o cartão profissional.

Depois utilize o compilador de Image Targets
do MindAR.

Gere o arquivo .mind.

Renomeie para:

targets.mind

Depois coloque o arquivo dentro de:

assets/targets/

O caminho final deverá ser:

assets/targets/targets.mind

---

# Publicação no GitHub Pages

Depois de adicionar o target:

1. Crie um repositório no GitHub.

2. Envie todos os arquivos do projeto.

3. Acesse Settings.

4. Acesse Pages.

5. Selecione a branch main.

6. Selecione a pasta root.

7. Salve.

8. Aguarde o GitHub Pages publicar.

A aplicação deverá ser acessada utilizando HTTPS.

---

# Teste no celular

Abra a URL do GitHub Pages pelo celular.

Permita o acesso à câmera.

Aponte a câmera para o cartão.

Aguarde o reconhecimento.

Após o reconhecimento, os conteúdos
da Realidade Aumentada deverão aparecer.

---

# Testes de tracking

Os testes devem ser realizados em diferentes
condições:

- Visualização normal
- Maior distância
- Cartão inclinado
- Cartão parcialmente coberto
- Iluminação reduzida

Os resultados devem ser registrados em:

docs/TESTES_TRACKING.md

---

# Referências

MindAR:

https://hiukim.github.io/mind-ar-js-doc/

MindAR - exemplos:

https://hiukim.github.io/mind-ar-js-doc/examples/basic/

A-Frame:

https://aframe.io/docs/

GitHub Pages:

https://docs.github.com/pages