

<!-- VISUALIZAR NO VSCODE  CTRL + K  V -->


<h1><img  alt="icon_CreatingApplication"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/106508490-37021280-64ab-11eb-81e0-3ca45e0eb38a.png"></img>
... EM CONSTRUÇÃO</h1>


<!------------------------------------ CARD EVENTO-->
<p align="center">
  <img  alt="skills"  width="500" height="236" src="https://user-images.githubusercontent.com/59892368/113923381-dbac1380-97be-11eb-98f7-e4d6a949e37d.PNG">
  </p>
  
 <!------------------------------------ TÍTULO-->
#  Evento Rocketseat [NLW#4] Rumo ao Próximo Nível [ReactJS]  <img  alt="skills"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/113920816-a94ce700-97bb-11eb-8d3d-edbdd6b25eb4.png"> 

> Nesse evento pude conhecer sobre o que é o React JS, como se inicializa um projeto, o reconhecimento do ambiente (o que são aquelas pastas e arquivos que o compõem), recursos mais usados como Componentes, Propriedades e Estado, técnicas de bom uso do CSS e dentre vários outros conhecimentos. A aplicação deste projeto se dá a partir de uma página que segue a Técnica Pomodoro ambientado em um espaço de ideia Gamer. A cada atividade completa, ganhasse XP. 


<!------------------------------------ FERRAMENTAS-->
#### FERRAMENTAS:
<p align="left">
<img  alt="skills"  width="120" height="50" src="https://user-images.githubusercontent.com/59892368/109433254-37c88e80-79ee-11eb-93a1-28f178e89bc0.png">

<img  alt="skills"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/110185477-3255b480-7df1-11eb-8399-07a57b05eefb.png">
</p>

<hr>

> O conteúdo seguirá da seguinte forma: Explicação do início ao fim dos procedimentos e códigos do projeto afim ; Dicas e conteúdos de forma simples e mais clara possível para que sirvam de direcionamento para este Mundo.






<!------------------------------------ 1. NEXT JS -->


  <p>
   <h1 align="rigth"> <img  alt="skills"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/115148941-0bb5ab00-a038-11eb-9028-dff0ba7d9840.png"></img>   Next JS </h1>
</p>

## • O que é o NEXT JS ?

<p>
 O Next JS é considerado um framework em cima do React. Sendo o React uma biblioteca de construção de interfaces, o Next traz ferramentas e estruturas já pré definidas para renderização estática e pelo o lado do servidor, possui suporte ao Typescript e um serviço de tratamento de rotas muito interessante. Por exemplo, é muito comum ter rotas em aplicações : página de contato / página de produto / páginas de carrinhos... O Next já nos proporciona uma estrutura para implementarmos isso, sem precisar configurar por fora. Na Web há 3 tipos principais de aplicações sendo elas: SSG, SPA e SSR.
 </p> 
 
 <ul>
  
  
  
  <li>
  <h2> SSG </h2>
  
  É considerada uma página estática, ou seja, simplesmente HTML, CSS E JS. Há como gerar esse tipo de página por meio de geradores como: Gatsby, Hexo, dentre outros. O NextJS também permite esta opção de aplicação. A aplicação SSG (Static Site Generator) funciona da seguinte maneira: 
  
  
  <video  alt="gif_"  src="https://user-images.githubusercontent.com/59892368/115715919-01a0ee80-a34f-11eb-9279-f03e62df0d94.mp4"></video>
  <h6>Fonte Vídeo:  <a href="https://youtu.be/1zhT23VDVDc">Franck Abgrall</a></p> </h6> 



  
  A partir do momento que o usuário acessa o endereço da página estática, é feita requisições para uma API, os conjuntos de dados são pegos e junto com arquivos de template/componentes são gerados os arquivos HTML, CSS e JS. Logo depois os arquivos sobem para um servidor(que pode ser inclusive uma CDN¹) e não haverá necessidade de nenhum processo ocorrendo no lado do servidor mais, ou seja, TODA navegação da página já está disponível para o usuário. De maneira simplificada, no estático é gerado um arquivo final da sua página, esse arquivo final é armazenado em algum servidor que quando requisitado direciona-o para uma CDN¹ (que é um servidor de acesso mais próximo em que a sua página será armazenada) e entrega para um usuário. Depois deste processo a página ficará pronta para acesso de forma completa incluindo as meta-tags e tudo mais.
  
  ¹* CDN : é abreviação de Content Delivery Network (ou Rede de Distribuição de Conteúdo). É uma rede de servidores que armazenam réplicas de conteúdos de outros sites, afim de entregarem de forma mais rápida por serem mais próximos geograficamente de onde você está acessando.
  
  <li>
  Vantagens:
  
  - Uso quase nulo do servidor
  - Pode ser servido numa CDN (melhor cache)
  - Melhor performance entre todos
  - Flexibilidade para usar qualquer servidor
  - Ótimo SEO
  </li>
  
  <li>
  Desvantagem:
  
  - Tempo de build pode ser muito alto
  - Dificuldade para escalar em aplicações grandes
  - Dificuldade para realizar atualizações constantes
 
  </li>

  
  
  
  
  
  </li>
  
  
  <li>
  <h2> SPA</h2>
  A Aplicação de Página Única criada pelo os famosos React/ Angular/ VueJS proporcionam uma experiência toda (ou quase toda) do lado do cliente, trazendo transições mais elegantes e suaves. O funcionamento se dá da seguinte maneira:


  <video  alt="gif_"  src="https://user-images.githubusercontent.com/59892368/116795218-b2269500-aaa9-11eb-83bd-41b6bc586188.mp4"></video>
  <h6>Fonte Vídeo:  <a href="https://youtu.be/4-Lel1oaV7M">Franck Abgrall</a></p> </h6> 






No momento em que o usuário acessa o site, um esqueleto da aplicação (HTML sem conteúdo) é requisitado. Esse esqueleto será uma estrtutura que não possui o conteúdo ali de fato, ou seja, no primeiro momento o usuário receberá apenas uma página "oca", compostas por tags que fará requições para uma API por meio do arquivo app.js. A partir daí as mudanças de conteúdo da páginas serão rápidas e mais suaves, isso porque o próprio JavaScript faz todo o trabalho do lado do Cliente. 
  
  
   <li>
  Vantagens:
  
  - Permite páginas ricas em interações sem recarregar
  - Site rápido após o load inicial
  - Ótimo para aplicações web
  - Possui diversas bibliotecas
  </li>
  
  <li>
  Desvantagem:
  
  - Load inicial pode ser muito grande
  - Performance imprevisível
  - Dificuldades no SEO
  - A maioria do conteúdo não é indexado
 
  </li>
  
 
<li>
  <h2> SSR </h2>

  E é aqui onde o NextJS se encaixa. A Renderização do Lado do Servidor (SSR) veio para melhorar a questão do SEO do SPA, já que no primeiro carregamento se recebe a página em branco para depois injetar o JavaScript.  


  <video  alt="gif_"  src="https://user-images.githubusercontent.com/59892368/116796117-69bea580-aab0-11eb-87a9-a1abd6901b2d.mp4"></video>
  <h6>Fonte Vídeo:  <a href="https://youtu.be/0bvo6UKkNDA">Franck Abgrall</a></p> </h6> 

 


Quando um usuário acessa esse tipo de página, um requisição é feita para o servidor, e todos os arquivos necessários da página principalmente o JS são montado primeiro no lado do servidor para depois ser entregue. Esse processo melhora a questão de busca do Google, por exmeplo, já que no SPA fica de forma oculta.


 <li>
  Vantagens:
  
  - Ótimo em SEO
  - Meta tags com previews mais adequados
  - Melhor performance para o usuário (o conteúdo vai ser visto mais rápido)
  - Código compartilhado com o backend em Node
  - Menor processamento no lado do usuário
  </li>
  
  <li>
  Desvantagem:
  
  - TTFB (Time to first byte) maior, o servidor vai preparar todo o conteúdo para entregar
  - HTML maior
  - Reload completo nas mudanças de rota
 
 
  </li>



  
  </li>
  
 </ul>






<!------------------------------------ 2. REACT JS-->

  <p>
   <h1 align="rigth"> <img  alt="skills"  width="50" height="50" src="https://user-images.githubusercontent.com/59892368/110185477-3255b480-7df1-11eb-8399-07a57b05eefb.png"></img>  React JS </h1>
</p>

 
 
 
## • Tá, mas o que é o React ?
<p>
  O React é uma biblioteca de construção de interfaces de uma performance e fluidez agradável e satisfatória, onde a base é feita com JavaScript. Possibilitando interfaces que são chamadas de reativas as ações do usuário. Por exemplo, em uma página onde se quer deletar um produto, ocorrerá todo o processo de exclusão da parte BackEnd (NodeJS) e, sem que a página recarregue novamente, aquele produto visual desaparece. Hoje, 2021, grandes empresas como o Facebook ; Walmart ; Instagram ; Airbnb ; Discord...  utilizam essa tecnologia. 
 </p> 
 
 ## • Conceitos Importantes !
> Entendendo e praticando o uso desses 3 conceitos, seremos capazes de trabalhar e construir boa parte das aplicações dentro do REACT. Darei exemplo e explicarei da forma mais próxima possível da realidade. Vamos lá!  

 <ul>
  
<li>
  <h2>Componentes </h2>
<hr>
  Componentes são partes que podem ser criadas de forma isoladas no React, e que acabam compondo um todo dentro de uma aplicação. É desenvolvido a partir do JavaScript, assim como toda a sua aplicação. Esse conceito foi adotado como uma forma de facilitar a manutenção do código, a legibilidade e o reproveitamento do mesmo. Você provalmente, antes de estar aqui imerso no React, já desenvolveu uma página pessoal utilizando apenas HTML5, CSS3 E JS. Não? Eu recomendo que faça pelo menos uma página pessoal do zero ou uma réplica utilizando essas três ferramentas. Você irá perceber o quão difícil fica de se localizar no código depois de uma escrita super extensa e linear. Vamos ilustrar a ideia da seguinte forma, vamos supor que há duas cômodas e você tem que arrumar a sua roupa. A primeira cômoda (Figura 1) tem uma gaveta só, já a segunda cômoda tem várias gavetas. Concorda que nas duas você consegue arrumar? Mas e na hora de tirar as roupas? Consegue localizar onde colocou o pijama?
  
  <!------------------------------------ CARD EVENTO-->
<p align="center">
  <img  alt="skills"  width="560" height="387" src="https://user-images.githubusercontent.com/59892368/113941443-7879ab80-97d5-11eb-8fe6-107a6f3e0685.png">
  </p>
  
  Os componentes aqui no React podem e dão o livre arbítrio para a personalização única. Mas como fazemos isso? Segue uns trechos de código para dar aquela clareada nas ideias:
  
  1- Primeiro, a partir de uma convenção, criamos uma pasta "components" e um arquivo que será um componente Botão chamado, por exemplo, "Button.tsx ou .jsx"
  
  
  <p align="center">
  <img  alt="skills"  width="244" height="365" src="https://user-images.githubusercontent.com/59892368/113945575-fbeacb00-97dc-11eb-98cf-7a796daee2c0.png">
  </p>
  
  2 -  Criação do componente.
  ~~~tsx
export function Button() {  // <= Observe o nome da function e o nome na declaração do componente respectivamente "... Button()"  -  <Button />
  return(
  //E toda modificação feita aqui dentro, impactará em todos os elementos pertercentes a este componenente ná página.
    <button type="button"> 
      Botão 
      <strong> Teste </strong>
    </button>
);

}
~~~
 
 3 - Agora vamos no arquivo "App.tsx" espécie de um Main para montar a página que queremos a partir dos componentes. Vamos inserir o Botão que construímos assim:
 
   ~~~tsx
import {Button} from './components/Button'

function App() {
  return (
  
  //Aqui o componente pode ser chamado quantas vezes quiser
  
    <div>
      <Button />    
      <Button />
      <Button /> 
    </div>
  );
}

export default App;
~~~
  

  
</li>

<hr>
<li>
  <h2>Propriedades  </h2>
  <hr>
  
  1- Agora vamos supor que queiramos passar informações; parâmetros para dentro dos componentes. Um exemplo que podemos dar é: usamos 3 Button na página, mas queremos mudar a cor de cada um de forma individualizada. Como podemos fazer isso? Sigamos a ideia:
  
~~~tsx
import {Button} from './components/Button'

function App() {
  return (
  
    <div>
      <Button color="red" />    // Essa forma é muito parecida com o atributo no HTML como <img src="" alt=""/>, onde o src e o alt são uma espécie de propriedades.
      <Button color="blue" />
      <Button color="green" /> 
    </div>
  );
}

export default App;
~~~
 2-  Nesse instante dará erro porque o componente não espera receber uma propriedade, ainda não adaptamos a "...function button()". Resolvemos este problema da seguinte maneira: 
  
 ~~~tsx
 interface ButtonProps{ // Aqui é definido quais propriedades, neste caso o Button, irá receber.
    color:string;
 }
 
export function Button(props: ButtonProps) {  //<= Dessa forma readaptamos para a passagem de propriedade
  return(
 
    // Obs: o retorno da props.color será as propriedades passadas, neste exemplo, red ou blue ou green.
 
    <button type="button" style={{backgroundColor:props.color}}> // passando a propriedade para o style do button. 
    {props.color}  //  <= Observe que utilizamos {}, isso possibilita o uso de uma varíavel JS para que possamos ter acesso ao que foi passado como propriedade.
    </button>
);

}
~~~
   Bonus: Podemos readaptar o código para que ele receba um texto, aquele que irá alterar o nome que será mostrado no botão, por exemplo. É feito assim:
   
   ~~~tsx
import {Button} from './components/Button'

function App() {
  return (
  
    <div>
      // O texto será passado entre as TAG Button 
      <Button color="red"> 
         Botão 01
      </button>  
      
      
      <Button color="blue">
         Botão 02
       </button>  
      <Button color="green">
         Botão 03
       </button>  
       
    </div>
  );
}

export default App;
~~~
 
 Logo que você executar dará um erro. Isso, novamente, porque não atualizamos a estrutura para o recebimento desse texto que estamos passando entre as TAGs Button. No REACT o que é passado dentro de um componente é chamado de Children, e este também é uma propriedade.
 
  ~~~tsx
 interface ButtonProps{ // Aqui é definido quais propriedades, neste caso o Button, irá receber.
    color:string;
    children: string;
 }
 
export function Button(props: ButtonProps) {  //<= Dessa forma readaptamos para a passagem de propriedade
  return(
 
    // Obs: o retorno da props.color será as propriedades passadas, neste exemplo, red ou blue ou green.
 
    <button type="button" style={{backgroundColor:props.color}}> // passando a propriedade para o style do button.
    {props.children}  //  <= o texto será passado aqui por meio do Children.
    </button>
);

}
~~~
 
</li>

<hr>
<li>
   <h2>  Estado </h2>
<hr>
  Imagina que você queira armazenar um informação dentro do Botão, uma informação que irá mudar de acordo com o click, por exemplo. Nesse caso utilizaremos o conceito de Estado, o famoso Hook no React.
  Aqui passaremos um valor para o botão, podemos iniciar com o número 1, por exemplo. A cada click, esse valor será acrescido de +1. Mão na massa!!! 
  
  
~~~tsx
 import {useState} from 'react';

 interface ButtonProps{ 
    color:string;
    children: string;
 }
 
export function Button(props: ButtonProps) { 
     //useState() retorna dois valores [array], sendo a primeira que recebe o valor inicial definidido como 1 (useState(1)) e o segundo como uma função responsável pela a atualização do valor, e por meio desta sintaxe conseguimos acessá-las.
     
    const [counter,setCounter] = useState(1) // <= A função useState() será a responsável pela a atualização do valor ao longo dos clicks.
    
    function increment() {
    
    }
    
    
  return(
 
 
    <button type="button" style={{backgroundColor:props.color}}> 
    {props.children}  <strong> {counter}  </strong> // Aqui é passado a variável dos valores numéricos "counter".
    </button>
);

}
~~~

Nessa etapa, se você clicar no botão, nada acontecerá. Temos que criar uma função responsável por essa mudança. Bom... Você que veio de outras linguagens, provalmente já deva estar pensando em como fazer essa alteração do counter, e a seguinte solução seria utilizar counter ++ dentro de uma função, por exemplo. No React não é aceito, pois diante do useState(), por de trás do React, é utilizado o conceito de imutabilidade. Mas o que seria isso? A imutabilidade é muito utilizada na programação funcional (pesquise um pouco) afim de conseguir comparar dois valores de uma variável de uma forma mais simples para conseguir entender o que mudou naquela variável, para então o react conseguir exibir o novo valor dessa variável de uma forma mais simples. Agora vamos imaginar que temos um Vetor, uma 
Array com vários objetos dentro com várias propriedades e lá dentro foi feita uma única modificação. Seria muito trabalhoso para o React fazer uma varredura nesses dois Arrays, pesquisando por essas alterações. Por isso quando é utilizando o conceito de Imutabilidade, a alteração nunca ocorre na variável já existente, pelo ao contrário, será criada uma nova variável, e o "setCounter" que recebe um valor do "useState()" é responsável por essa nova criação para o "counter". Demonstraremos da seguinte forma:
  
  
  ~~~tsx
 import {useState} from 'react';

 interface ButtonProps{ 
    color:string;
    children: string;
 }
 
export function Button(props: ButtonProps) { 
  
     
    const [counter,setCounter] = useState(1) // <= A função useState() será a responsável pela a atualização do valor ao longo dos clicks.
    
    function increment() {
    setCounter(counter+1);  // <= Responsável por criar um novo valor para counter. O  valor de counter NÃO é modificado, e sim criado!
    }
    
    
  return(
 
 
    <button 
    type="button" 
    style={{backgroundColor:props.color}}
    onClick={increment}  // Função de click no botão chamando outra função "incrrement".
    > 
    {props.children}  <strong> {counter}  </strong>
    </button>
);

}
~~~

Agora faça o teste !
</li>

</ul>
 
 
  
<!------------------------------------  CSS-->
  <p>
   <h1 align="rigth"> <img  alt="skills"  width="55" height="55" src="https://user-images.githubusercontent.com/59892368/114207309-a0325600-9932-11eb-9a26-2e8466a2aa7c.png"></img>  2. CSS </h1>
</p>

>Aqui será abordado dicas de boas práticas no uso do CSS e mágicas que podemos fazer com esta ferramenta.


<hr>

<ul>
  
  <li>
  Declaração de varíaveis com cores : quando iniciei os estudos em CSS, não imaginava como fazer a declaração de variáveis. E cá está, desta forma podemos reutilizar as cores por meio de nomes familiares ao invés de hexadecimal. 
 
  Declarando variáveis de cores:
  ~~~css
  :root{
    --white:#fff;
    --background:#f2f3f5;
    --gray-line:#DCDDE0;
    --text:#666666;
    --text-highlight:#B3B9FF;
    --title:#2E384D;
    --red:#E83F5B;
    --green:#4CD62B;
    --blue:#5965E0;
    --blue-dark:#4953B8;
    --blue-twitter:#2AA9E0;
}
  ~~~
  
  Uso:
  
  ~~~css
body{
    background: var(--background);
    color:var(--text);
}
  ~~~
  
  
  
  </li>
</ul>



 
 
 
 
 
 
 

 
 
<!------------------------------------ 1. GIT -->
  <p>
   <h1 align="rigth"> <img  alt="skills"  width="35" height="35" src="https://user-images.githubusercontent.com/59892368/113143478-9017c980-9202-11eb-953a-d9fadb426759.png"></img>  1. Git </h1>
</p>



```
> git init         // inicializar

> ls -h            // comando para verificar se o arquivo .git existe. 
```


>Este comando é usado para inicializar as funcionalidades dessa ferramenta de controle de versão (GIT). Como estamos trabalhando com o REACT, no momento da inicialização do projeto com o comando > npx create-react-app my-app, o arquivo Git já passa a existir.


<hr>

```
> git status
```


> Como já diz o nome, faz a verificação de status de arquivos do seu projeto. Mostra os novos arquivos que foram adicionados, arquivos modificados e excluídos. Também são exibidas informações sobre arquivos pendentes de commit, ou seja, arquivos que ainda não foram adicionados a linha de versionamento.

<hr>

```
> git add . ou  src/App.css (por exemplo)
```


>Este comando possibilita a adição e registro em uma etapa chamada Staged Area, é uma etapa em que prepara os arquivos em uma linha do tempo de forma local para que possamos inserí-los em um repositório. Podemos adicionar todos os arquivos com o "." ou escolher o arquivo em específico como "src/App.css", por exemplo. O > git status pode ser usado logo depois deste comando. Os aquivos adicionados ficarão com a cor verde.

<hr>

```
> git commit -m "mensagem"
```


>Utiliza-se o commit para registrar o ponto por meio de uma mensagem. Esta etapa é obrigatória logo depois de adicioná-los, pois será como uma mensagem de lembrete e direcionamento do que foi feito. Atenção! Até esta etapa os registros são feitas de forma local, logo após que são feitas os envios para a Nuvem (GitHub, GitLab...).


<hr>

```
> git log
```

>Mostra todos os pontos de Commits feitos ao longo dos registros do projeto, o Autor e a Data.

<hr>

```
> git remote add origin endereçoRepositório.git
```


>Logo após ter criado o repositório no Github, por exemplo, iremos conectar o caminho Local com o da Nuvem. 

<hr>

```
> git push -u origin nomeRamificação(master, por exemplo)
```


> Este trecho é executado para o envio do projeto para nuvem e para a criação da Branch (ramificação) com o nome main, por exemplo. Sendo o primeiro acesso, ele pedirá o Username e a Senha do repositório da Nuvem destino.


<hr>

```
> git checkout -b nomeDaNovaBranch
```


> Trabalharemos sempre em equipe e para isso os comandos referentes aos outros ramos são muito comuns. Primeiro criaremos uma brach diferente da principal em que o projeto está.











<ul>
  
<li>

</li>


<li>
  
</li>

</ul>



<!-- ------------------------------------------------------------------------------------->
<!-- -------------------------------------------- Bibliography  ------------------------>
<!-- ------------------------------------------------------------------------------------->


<h3 align="center"><img  alt="icon_Sources"  width="35" height="35" src="https://user-images.githubusercontent.com/59892368/106905459-11f3e680-66db-11eb-9c4d-6b45c1cb8c16.png"></img>BIBLIOGRAPHY:</h3>

<p > 1. ROCKETSEAT. O que é API? REST e RESTful?, 2019. Available in: <<a href="https://youtu.be/ghTrp1x_1As">https://youtu.be/ghTrp1x_1As</a>> . Access in: 22 de abril de 2021.   </p>

<p > 2. WILLIAN JUSTEN. NextJS, Gatsby ou Create React App? Entendendo os conceitos de SSR, SSG e SPA., 2020. Home page. Available in: <<a href="https://willianjusten.com.br/nextjs-gatsby-ou-create-react-app-entendendo-os-conceitos-de-ssr-ssg-e-spa/">https://willianjusten.com.br/nextjs-gatsby-ou-create-react-app-entendendo-os-conceitos-de-ssr-ssg-e-spa/</a>> . Access in: 22 de abril de 2021.   </p>

<hr>



