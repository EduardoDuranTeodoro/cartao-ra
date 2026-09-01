# Registro dos testes de tracking

## Atividade: Quebre sua RA

Os testes devem ser realizados utilizando o mesmo código
da aplicação.

Somente as condições de visualização devem ser alteradas.

---

## 1. Visualização normal

### Hipótese

O target deve ser reconhecido e rastreado com estabilidade
quando estiver totalmente visível e com iluminação adequada.

### Resultado

A preencher após realizar o teste.

### Explicação

Em condições normais, a câmera consegue capturar
as características visuais do cartão com maior facilidade.

---

## 2. Maior distância

### Hipótese

Ao aumentar a distância entre a câmera e o cartão,
o reconhecimento pode ficar mais difícil.

### Resultado

A preencher após realizar o teste.

### Explicação

Quando o cartão fica mais distante, ele ocupa uma área
menor na imagem capturada pela câmera.

Com isso, menos detalhes visuais ficam disponíveis
para o algoritmo realizar o tracking.

---

## 3. Cartão inclinado

### Hipótese

O tracking deve continuar funcionando em uma inclinação
moderada, mas pode apresentar dificuldades em ângulos extremos.

### Resultado

A preencher após realizar o teste.

### Explicação

Quando o cartão é inclinado, sua imagem sofre
uma alteração de perspectiva.

Essa mudança pode dificultar a correspondência
das características visuais utilizadas pelo algoritmo.

---

## 4. Cartão parcialmente coberto

### Hipótese

O reconhecimento pode ser perdido quando uma parte
importante do cartão estiver coberta.

### Resultado

A preencher após realizar o teste.

### Explicação

O algoritmo passa a ter menos características
visuais disponíveis para identificar e acompanhar
o target.

---

## 5. Iluminação reduzida

### Hipótese

O reconhecimento tende a ficar mais difícil
quando existe pouca iluminação.

### Resultado

A preencher após realizar o teste.

### Explicação

Com pouca iluminação, a câmera pode capturar
menos detalhes e apresentar uma imagem com mais ruído.

Isso pode prejudicar o reconhecimento e o tracking.

---

# Questão de análise

## Por que o desempenho do reconhecimento e do tracking
pode mudar mesmo quando o código permanece exatamente o mesmo?

O comportamento pode mudar porque o tracking não depende
somente do código da aplicação.

Ele também depende da imagem capturada pela câmera
e das condições físicas do ambiente.

Distância, inclinação, oclusão e iluminação alteram
a quantidade e a qualidade das características visuais
disponíveis para o algoritmo.

Por isso, o mesmo código pode apresentar resultados
diferentes quando as condições de captura são alteradas.

---

# Conclusão

Após realizar todos os testes, devem ser comparados
os resultados obtidos em cada condição.

Também deve ser analisado qual fator prejudicou mais
o reconhecimento e o tracking.

Com base nos resultados, pode-se avaliar se o cartão
precisa ser melhorado, principalmente em relação a:

- detalhes visuais;
- contraste;
- regiões distintas;
- qualidade da imagem;
- iluminação.