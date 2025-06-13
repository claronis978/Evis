const mensagens = [
  `Hoje é dia dos namorados, mas não só o dia dos namorados.
Hoje é o dia do amor, porquê aliás, não existe namorados se não existe amor.
O amor, ele não é apenas entre namorados, existe vários.
Existe entre filhos e pais, amigos, namorados, almas gêmeas (isso nem precisando ser namorados, porque existem amigos que são almas gêmeas).
Agora vamo lá.`,
  `Sei que pode ser estranho receber algo assim de mim, eu entendo.
E é meio complicado escrever isso, porque minha criatividade tá horrível, e também tenho medo que possa parecer outra coisa.`,
  `Nunca que eu imaginei que estaria tão próxima de você, como eu estou agora.
Você não tem noção o quanto eu ainda fico assim quando a gente conversa.
Porque até então, a gente mal conversava.
E poder ter momentos ao seu lado, se torna um privilégio a cada milésimo de segundo.
A partir do momento que eu comecei a te conhecer, eu fiquei tipo... "mdxxx como assim, ela é assim?!"`,
  `Você é uma garota incrível, e muito especial, e não posso esquecer de falar da beleza, que meu deus, é uma beleza surreal.
Sua beleza supera todas as obras de arte existente nesse mundo, todas as maravilhas que foram feitas nesse mundo, você está entre elas.
O brilho dos seus olhos fechando quando oc sorrir, em falar em sorriso... o seu é lindo demais.
Tudo em você é perfeito, da cabeça aos pés.
Quero te lembrar, que você é maravilhosa, uma garota que eu não tenho nem palavras o suficiente pra falar tudo.
Muito obrigado por fazer parte da minha vida, e muito obrigado por deixar eu participar de momentos com você.
Eu lhe amooo beeeem muitão Maria Evilane ❤️`
];

let indiceMensagem = 0;
let animando = false;

function iniciarSurpresa() {
  const botao = document.getElementById("botao-inicial");
  const urso = document.getElementById("urso");
  const musica = document.getElementById("musica");
  const coracao = document.getElementById("coracao");

  botao.style.display = "none";

  // Link de música
  musica.src = "https://www.youtube.com/embed/0CEkbD3nepI?autoplay=1";
  musica.style.display = "block";

  setTimeout(() => {
    urso.style.display = "block";
    urso.classList.add("pedalando");
  }, 1000);

  setTimeout(() => {
    coracao.style.display = "block";
  }, 9000);
}

function mostrarMensagem() {
  const bola = document.getElementById("bola");
  const mensagem = document.getElementById("mensagem");
  const coracao = document.getElementById("coracao");
  const urso = document.getElementById("urso");

  coracao.style.display = "none";

  urso.classList.remove("pedalando");
  urso.classList.add("sair-esquerda");

  bola.style.display = "block";
  bola.style.top = "50%";
  bola.style.left = "50%";

  const positions = [
    { left: "0%", top: "50%" },
    { left: "100%", top: "50%" },
    { left: "50%", top: "100%" },
    { left: "50%", top: "0%" },
    { left: "50%", top: "50%" },
  ];

  let index = 0;

  function moverBola() {
    if (index >= positions.length) {
      bola.style.display = "none";
      mostrarTextoMensagem();
      return;
    }
    bola.style.transition = "all 0.7s ease-in-out";
    bola.style.left = positions[index].left;
    bola.style.top = positions[index].top;
    index++;
    setTimeout(moverBola, 800);
  }

  setTimeout(moverBola, 1500);
}

function mostrarTextoMensagem() {
  const mensagem = document.getElementById("mensagem");

  atualizarMensagem(); // mostra a primeira mensagem

  mensagem.classList.remove("slide-saindo");
  mensagem.classList.add("revelar");

  mensagem.style.display = "block";
  mensagem.style.pointerEvents = "auto";

  // Exibir setas só depois que a mensagem estiver visível
  setTimeout(() => {
    mostrarSetas();
  }, 200);
}

function mostrarSetas() {
  const setaEsq = document.getElementById("seta-esquerda");
  const setaDir = document.getElementById("seta-direita");

  if (indiceMensagem === 0) {
    setaEsq.style.display = "none";
    setaDir.style.display = "flex";
  } else if (indiceMensagem === mensagens.length - 1) {
    setaEsq.style.display = "flex";
    setaDir.style.display = "none";
  } else {
    setaEsq.style.display = "flex";
    setaDir.style.display = "flex";
  }
}

function atualizarMensagem() {
  const texto = document.getElementById("texto-mensagem");
  texto.textContent = mensagens[indiceMensagem];
}

function mudarMensagem(direcao) {
  if (animando) return;

  if ((indiceMensagem === 0 && direcao === -1) || (indiceMensagem === mensagens.length - 1 && direcao === 1)) {
    return;
  }

  animando = true;

  const mensagem = document.getElementById("mensagem");

  mensagem.classList.remove("revelar");
  mensagem.classList.add("slide-saindo");

  setTimeout(() => {
    indiceMensagem += direcao;
    atualizarMensagem();
    mostrarSetas();

    mensagem.classList.remove("slide-saindo");
    mensagem.classList.add("revelar");

    animando = false;
  }, 500);
}
