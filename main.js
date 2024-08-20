const caixaPricipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "quem ganhou a bola de ouro em 2018?",
        alternativas:[
            {
                texto: "A) cristiano ronaldo",
                afirmacao: "Afirmação 1a alternativa"
            },
            {
                texto: "B) luka modric",
                afirmacao: "Afirmação 2a alternativa"
               
            },
        ]
    },
    
    {
        enunciado: "qual o time com mais titulos do brasileirão?",
        alternativas:[
            {
                texto: "A) palmeiras",
                afirmacao: "Afirmação 1a alternativa"
               
            },
            {
                texto: "B) flamengo",
                afirmacao: "Afirmação 2a alternativa"
               
            },
        ]
    },
    
    {
        enunciado: "qual o segundo time com mais titulos da liga dos campeões da UEFA?",
        alternativas:[
            {
                texto: "A) bayern de munique",
                afirmacao: "Afirmação 1a alternativa"          
               
            },
            {
                texto: "B) milan",
                afirmacao: "Afirmação 2a alternativa"
               
            },
        ]
    },
    
    {
        enunciado: "qual jogador que ganhou mais ganhou premier league?",
        alternativas:[
            {
                texto: "A) rayn gigg",
                afirmacao: "Afirmação 1a alternativa"
               
            },
            {
                texto: "B) paul scholes",
                afirmacao: "Afirmação 2a alternativa"
             
            },
        ]
    },
    
    ]
    
    let atual = 0;
    let perguntaAtual;
    function mostraPergunta(){
        caixaAlternativas.textContent="";
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntas[atual].enunciado;
        mostraAlternativas();
    }
    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", function(){
                atual++;
                mostraPergunta();
            });        
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }
    mostraPergunta();