let palavra = "";
let tamanhoPalavra = 0;
let letrasReveladas = 0;

$(document).ready(function(){
	inicializar();
});

//Reiniciar
$(".btn-reset").click(inicializar);	// clicando em recomeçar
$('body').keyup(function(e){
	if(e.keyCode == "32") {
		inicializar();
	}
}); // pressionando a barra de espaço

let palavras = [
	{"palavra": "morango","dica": "fruta"},
	{"palavra": "leite","dica": "bebida"},
	{"palavra": "cachorro","dica": "animal"},
	{"palavra": "elefante","dica": "animal"},
	{"palavra": "tomate","dica": "fruta"},
	{"palavra": "Abacate","dica": "Fruta"},
	{"palavra": "Amora","dica": "Fruta"},
	{"palavra": "Ameixa","dica": "Fruta"},
	{"palavra": "Acerola","dica": "Fruta"},
	{"palavra": "Banana","dica": "Fruta"},
	{"palavra": "Caqui","dica": "Fruta"},
	{"palavra": "Caju","dica": "Fruta"},
	{"palavra": "Cereja","dica": "Fruta"},
	{"palavra": "Carambola","dica": "Fruta"},
	{"palavra": "Damasco","dica": "Fruta"},
	{"palavra": "Figo","dica": "Fruta"},
	{"palavra": "Framboesa","dica": "Fruta"},
	{"palavra": "Goiaba","dica": "Fruta"},
	{"palavra": "Guaraná","dica": "Fruta"},
	{"palavra": "Jaca","dica": "Fruta"},
	{"palavra": "Jabuticaba","dica": "Fruta"},
	{"palavra": "Jambolão","dica": "Fruta"},
	{"palavra": "Kiwi","dica": "Fruta"},
	{"palavra": "Laranja","dica": "Fruta"},
	{"palavra": "Limão","dica": "Fruta"},
	{"palavra": "Melancia","dica": "Fruta"},
	{"palavra": "Melão","dica": "Fruta"},
	{"palavra": "Maçã","dica": "Fruta"},
	{"palavra": "Maracujá","dica": "Fruta"},
	{"palavra": "Mamão","dica": "Fruta"},
	{"palavra": "Manga","dica": "Fruta"},
	{"palavra": "Nectarina","dica": "Fruta"},
	{"palavra": "Pêra","dica": "Fruta"},
	{"palavra": "Pitanga","dica": "Fruta"},
	{"palavra": "Pêssego","dica": "Fruta"},
	{"palavra": "Romã","dica": "Fruta"},
	{"palavra": "Tomate","dica": "Fruta"},
	{"palavra": "Tangerina","dica": "Fruta"},
	{"palavra": "Uva","dica": "Fruta"},
	{"palavra": "Aranha","dica": "Animal"},
	{"palavra": "Anta","dica": "Animal"},
	{"palavra": "Arara","dica": "Animal"},
	{"palavra": "Águia","dica": "Animal"},
	{"palavra": "Boi","dica": "Animal"},
	{"palavra": "Boto","dica": "Animal"},
	{"palavra": "Baleia","dica": "Animal"},
	{"palavra": "Cobra","dica": "Animal"},
	{"palavra": "Cavalo","dica": "Animal"},
	{"palavra": "Camaleão","dica": "Animal"},
	{"palavra": "Coelho","dica": "Animal"},
	{"palavra": "Dromedário","dica": "Animal"},
	{"palavra": "Elefante","dica": "Animal"},
	{"palavra": "Égua","dica": "Animal"},
	{"palavra": "Esquilo","dica": "Animal"},
	{"palavra": "Foca","dica": "Animal"},
	{"palavra": "Formiga","dica": "Animal"},
	{"palavra": "Fuinha","dica": "Animal"},
	{"palavra": "Furão","dica": "Animal"},
	{"palavra": "Girafa","dica": "Animal"},
	{"palavra": "Gazela","dica": "Animal"},
	{"palavra": "Garça","dica": "Animal"},
	{"palavra": "Gorila","dica": "Animal"},
	{"palavra": "Hipopótamo","dica": "Animal"},
	{"palavra": "Hiena","dica": "Animal"},
	{"palavra": "Hamster","dica": "Animal"},
	{"palavra": "Iguana","dica": "Animal"},
	{"palavra": "Javali","dica": "Animal"},
	{"palavra": "Jacaré","dica": "Animal"},
	{"palavra": "Jiboia","dica": "Animal"},
	{"palavra": "Jumento","dica": "Animal"},
	{"palavra": "Lagarta","dica": "Animal"},
	{"palavra": "Lesma","dica": "Animal"},
	{"palavra": "Lula","dica": "Animal"},
	{"palavra": "Lagartixa","dica": "Animal"},
	{"palavra": "Morsa","dica": "Animal"},
	{"palavra": "Mosca","dica": "Animal"},
	{"palavra": "Mosquito","dica": "Animal"},
	{"palavra": "Macaco","dica": "Animal"},
	{"palavra": "Naja","dica": "Animal"},
	{"palavra": "Ornitorrinco","dica": "Animal"},
	{"palavra": "Ovelha","dica": "Animal"},
	{"palavra": "Onça","dica": "Animal"},
	{"palavra": "Pato","dica": "Animal"},
	{"palavra": "Pavão","dica": "Animal"},
	{"palavra": "Porco","dica": "Animal"},
	{"palavra": "Panda","dica": "Animal"},
	{"palavra": "Quati","dica": "Animal"},
	{"palavra": "Quero-Quero","dica": "Animal"},
	{"palavra": "Rato","dica": "Animal"},
	{"palavra": "Rinoceronte","dica": "Animal"},
	{"palavra": "Rã","dica": "Animal"},
	{"palavra": "Sapo","dica": "Animal"},
	{"palavra": "Tartaruga","dica": "Animal"},
	{"palavra": "Tatu","dica": "Animal"},
	{"palavra": "Tarantula","dica": "Animal"},
	{"palavra": "Urubu","dica": "Animal"},
	{"palavra": "Urso","dica": "Animal"},
	{"palavra": "Vaca","dica": "Animal"},
	{"palavra": "Vespa","dica": "Animal"},
	{"palavra": "Vagalume","dica": "Animal"},
	{"palavra": "Zebra","dica": "Animal"},
	{"palavra": "Zangão","dica": "Animal"},
	{"palavra": "Anel","dica": "Objeto"},
	{"palavra": "Apontador","dica": "Objeto"},
	{"palavra": "Almofada","dica": "Objeto"},
	{"palavra": "Borracha","dica": "Objeto"},
	{"palavra": "Bacia","dica": "Objeto"},
	{"palavra": "Bicicleta","dica": "meio de transporte"},
	{"palavra": "Bola","dica": "Objeto para esporte"},
	{"palavra": "Camisa","dica": "Objeto"},
	{"palavra": "Chaveiro","dica": "Objeto"},
	{"palavra": "Câmera","dica": "Objeto"},
	{"palavra": "Carimbo","dica": "Objeto"},
	{"palavra": "Dado","dica": "Objeto"},
	{"palavra": "Dedal","dica": "Objeto"},
	{"palavra": "Dicionário","dica": "Objeto"},
	{"palavra": "Espelho","dica": "Objeto"},
	{"palavra": "Escova","dica": "Objeto"},
	{"palavra": "Faca","dica": "Objeto"},
	{"palavra": "Fax","dica": "Objeto telecomunicação"},
	{"palavra": "Garrafa","dica": "Objeto"},
	{"palavra": "Haltere","dica": "Objeto pra musculação"},
	{"palavra": "Harpa","dica": "Objeto"},
	{"palavra": "Helicóptero","dica": "Objeto"},
	{"palavra": "Ioio","dica": "Objeto"},
	{"palavra": "Jarra","dica": "Objeto"},
	{"palavra": "chinelo","dica": "calçado"},
	{"palavra": "Lápis","dica": "Objeto"},
	{"palavra": "Máscara","dica": "Objeto"},
	{"palavra": "Navalha","dica": "Objeto"},
	{"palavra": "Óculos","dica": "Objeto"},
	{"palavra": "Pincel","dica": "Objeto"},
	{"palavra": "Parafuso","dica": "Objeto"},
	{"palavra": "Quadro","dica": "Objeto"},
	{"palavra": "Rádio","dica": "Objeto"},
	{"palavra": "Relógio","dica": "Objeto"},
	{"palavra": "Sandália","dica": "Objeto"},
	{"palavra": "Torneira","dica": "Objeto"},
	{"palavra": "Vela","dica": "Objeto"},
	{"palavra": "Xícara","dica": "Objeto"},
	{"palavra": "Zarabatana","dica": "Objeto"},
	{"palavra": "ótimo", "dica": "sinônimo de excelente"},
{"palavra": "escuro", "dica": "antônimo de claro"},
{"palavra": "desfazer", "dica": "iniciar com o prefixo 'des'"},
{"palavra": "felizmente", "dica": "terminar com o sufixo 'mente'"},
{"palavra": "DNA", "dica": "material genético"},
{"palavra": "célula", "dica": "unidade básica da vida"},
{"palavra": "Einstein", "dica": "físico famoso pela teoria da relatividade"},
{"palavra": "Shakespeare", "dica": "renomado escritor inglês"},
{"palavra": "Renascimento", "dica": "movimento cultural europeu do século XV"},
{"palavra": "Guerra Civil", "dica": "conflito histórico nos Estados Unidos"},
{"palavra": "caipira", "dica": "dialeto brasileiro típico do interior"},
{"palavra": "carioca", "dica": "habitante do Rio de Janeiro"},
{"palavra": "robótica", "dica": "estudo de robôs"},
{"palavra": "algoritmo", "dica": "sequência de passos para resolver um problema"},
{"palavra": "montanha", "dica": "formação natural elevada"},
{"palavra": "oceano", "dica": "grande corpo de água salgada"},
{"palavra": "pandemia", "dica": "epidemia global de doença"},
{"palavra": "sustentabilidade", "dica": "práticas para proteger o meio ambiente"},
{"palavra": "impressionismo", "dica": "movimento artístico do século XIX"},
{"palavra": "cinematografia", "dica": "arte de criar filmes"},
{"palavra": "tucano", "dica": "ave de bico grande e colorido"},
{"palavra": "caipora", "dica": "espírito protetor da floresta na mitologia tupi"},
{"palavra": "democracia", "dica": "sistema de governo pelo povo"},
{"palavra": "corrupção", "dica": "prática ilegal de desvio de recursos públicos"},
{"palavra": "nutrição", "dica": "ciência da alimentação saudável"},
{"palavra": "meditação", "dica": "prática para relaxamento mental"},
{"palavra": "destino", "dica": "local de viagem ou turismo"},
{"palavra": "passaporte", "dica": "documento de identificação internacional"},
{"palavra": "saudade", "dica": "sentimento profundo de falta ou nostalgia"},
{"palavra": "verbo", "dica": "parte do discurso que expressa ação"},
{"palavra": "substantivo", "dica": "palavra que nomeia seres, objetos ou conceitos"},
{"palavra": "adjetivo", "dica": "palavra que descreve qualidades de seres e objetos"},
{"palavra": "romance", "dica": "gênero literário que narra histórias fictícias"},
{"palavra": "poesia", "dica": "forma artística de expressão por meio de versos"},
{"palavra": "personagem", "dica": "ser fictício que participa de uma história"},
{"palavra": "acento", "dica": "sinal gráfico que indica a pronúncia de uma palavra"},
{"palavra": "parágrafo", "dica": "unidade de texto que aborda uma ideia específica"},
{"palavra": "argumento", "dica": "razões e evidências usadas para sustentar uma opinião"},
{"palavra": "metáfora", "dica": "figura de linguagem que compara duas coisas sem 'como'"},
{"palavra": "ironia", "dica": "figura de linguagem que expressa o oposto do que se diz"},
{"palavra": "sujeito", "dica": "termo da oração que realiza a ação do verbo"},
{"palavra": "objeto direto", "dica": "termo que recebe diretamente a ação do verbo"},
{"palavra": "sinônimo", "dica": "relação de semelhança entre palavras de significado próximo"},
{"palavra": "antônimo", "dica": "palavra de significado oposto a outra"},
{"palavra": "sílaba", "dica": "unidade de som na formação de palavras"},
{"palavra": "consoante", "dica": "som de fala produzido com obstrução do fluxo de ar"},
{"palavra": "prefixo", "dica": "elemento que se coloca antes de uma palavra para modificar seu significado"},
{"palavra": "eufemismo", "dica": "expressão suave usada para atenuar algo desagradável"},
{"palavra": "hipérbole", "dica": "exagero intencional para enfatizar uma ideia"},
{"palavra": "modernismo", "dica": "movimento literário do século XX que rompeu com as tradições"},
{"palavra": "romantismo", "dica": "movimento literário do século XIX que enfatizou a emoção e a natureza"},
{"palavra": "eloquência", "dica": "capacidade de falar com fluência e persuasão"},
{"palavra": "retórica", "dica": "arte de argumentar e persuadir por meio da fala ou escrita"},
{"palavra": "interpretação", "dica": "ação de compreender e extrair significado de um texto"},
{"palavra": "contexto", "dica": "conjunto de circunstâncias que envolvem um texto ou palavra"},
{"palavra": "tese", "dica": "proposição central de um texto acadêmico"},
{"palavra": "citação", "dica": "uso de trechos de outros textos para apoiar um argumento"},
{"palavra": "norma", "dica": "conjunto de regras que regem o uso correto da língua"},
{"palavra": "variação", "dica": "diferenças na forma como as pessoas usam a língua"},
{"palavra": "sujeito simples", "dica": "sujeito composto por apenas um núcleo"},
{"palavra": "objeto indireto", "dica": "termo que completa o sentido do verbo com preposição"},
{"palavra": "Machado de Assis", "dica": "grande escritor brasileiro do século XIX"},
{"palavra": "curupira", "dica": "personagem lendário da floresta na mitologia brasileira"},
{"palavra": "medusa", "dica": "ser mitológico com serpentes no lugar de cabelos"},
{"palavra": "treta", "dica": "gíria que significa 'confusão' ou 'briga'"},
{"palavra": "bilinguismo", "dica": "habilidade de falar duas línguas fluentemente"},
{"palavra": "tradução", "dica": "ato de converter um texto de uma língua para outra"},
{"palavra": "concordância verbal", "dica": "acordo entre o verbo e seu sujeito em número e pessoa"},
{"palavra": "crase", "dica": "fenômeno de fusão do artigo 'a' com a preposição 'a'"},
{"palavra": "realismo", "dica": "movimento literário que retrata a sociedade de forma objetiva"},
{"palavra": "modernismo", "dica": "movimento literário que valoriza a ruptura com convenções"},
{"palavra": "resenha", "dica": "texto que analisa e comenta uma obra ou evento"},
{"palavra": "carta formal", "dica": "documento escrito com linguagem polida e respeitosa"},
{"palavra": "fonema", "dica": "unidade sonora mínima que distingue palavras na língua"},
{"palavra": "encontro consonantal", "dica": "combinação de duas ou mais consoantes em uma palavra"},
{"palavra": "variedade linguística", "dica": "diferenças na língua de acordo com grupos sociais"},
{"palavra": "preconceito linguístico", "dica": "discriminação com base no modo de falar"},
{"palavra": "manchete", "dica": "título de destaque em uma notícia"},
{"palavra": "editorial", "dica": "artigo de opinião em jornal ou revista"},
{"palavra": "análise sintática", "dica": "estudo da estrutura das frases e orações"},
{"palavra": "discurso direto", "dica": "forma de apresentar as palavras exatamente como foram ditas"},
{"palavra": "personificação", "dica": "atribuição de características humanas a objetos ou animais"},
{"palavra": "linguística comparativa", "dica": "comparação de línguas para entender suas relações"},
{"palavra": "pragmática", "dica": "estudo do uso da linguagem em contextos reais"},
{"palavra": "gíria", "dica": "linguagem informal usada em grupos específicos"},
{"palavra": "registro culto", "dica": "forma mais formal da língua usada em situações acadêmicas ou profissionais"},
{"palavra": "linguagem corporal", "dica": "comunicação por meio de gestos, expressões e postura"},
{"palavra": "mímica", "dica": "representação de palavras ou ações sem usar palavras"},
{"palavra": "lusofonia", "dica": "conjunto de países que falam português"},
{"palavra": "CPLP (Comunidade dos Países de Língua Portuguesa)", "dica": "organização de países lusófonos"},
{"palavra": "alfabetização", "dica": "processo de aprendizado da leitura e escrita"},
{"palavra": "letramento", "dica": "habilidade de usar a leitura e a escrita de forma eficaz"},
{"palavra": "acronímia", "dica": "formação de palavras a partir das iniciais de outras palavras"},
{"palavra": "apócrifo", "dica": "termo usado para descrever textos de origem duvidosa ou não autênticos, muitas vezes relacionados a escrituras religiosas"},
{"palavra": "ambiguidade", "dica": "presença de múltiplos significados em uma palavra ou frase"},
{"palavra": "polissemia", "dica": "um termo que possui vários significados relacionados"},
{"palavra": "voz passiva", "dica": "construção verbal em que o sujeito sofre a ação do verbo"},
{"palavra": "argumentação", "dica": "processo de apresentar argumentos para convencer ou persuadir"},
{"palavra": "debate", "dica": "discussão formal de um tópico, frequentemente com argumentos opostos"},
{"palavra": "resumo", "dica": "síntese breve de um texto ou obra"},
{"palavra": "aliteração", "dica": "repetição de sons consonantais no início de palavras próximas"},
{"palavra": "onomatopeia", "dica": "palavra que imita o som que descreve"},
{"palavra": "persuasão", "dica": "ato de influenciar ou convencer alguém por meio da comunicação"},
{"palavra": "entrevista", "dica": "conversa formal entre um entrevistador e um entrevistado"},
{"palavra": "jurisprudência", "dica": "conjunto de decisões judiciais que estabelecem precedentes legais"},
{"palavra": "litígio", "dica": "conflito legal entre partes que buscam uma solução nos tribunais"},
{"palavra": "proficiência linguística", "dica": "habilidade de usar uma língua de forma fluente e eficaz"},
]

function inicializar() {
	$(".btn").attr("disabled",false);
	$(".campo-dica").show();
	$(".btn-letra").show();
	$(".palavrachave").text("");
	$(".resultado").text("");
	letrasReveladas = 0;
	
	let objNovaPalavra = gerarPalavra();
	palavra = objNovaPalavra.palavra.toUpperCase();
	tamanhoPalavra = palavra.length;
	
	setarCampos(objNovaPalavra);
}

function gerarPalavra() {
	let nAleatorio = Math.floor(Math.random() * palavras.length);
	return palavras[nAleatorio];
}

function setarCampos(objPalavra) {
	$(".tentativas-restantes").text(5);
	$(".campo-dica").text(objPalavra.dica);
	
	let palavraEncoberta = palavra.replace(/[^0-9|-| ]/g,"_");
	let spanLetraEncoberta = [];
	let palavraEncobertaArr = palavraEncoberta.split("");
	setarPalavraOculta(palavraEncobertaArr)
}

// função recebe palavra e cria um span para cada letra
function setarPalavraOculta(palavraArr) {
	$(".palavrachave").text("");
	palavraArr.forEach(function(letra) {
		let spanLetra = document.createElement("span");
		$(spanLetra).addClass("spanLetra");
		$(spanLetra).append(letra);
		$(".palavrachave").append(spanLetra);
	});
}

// Função - Pressionando Letras
$(".btn-letra").click(function(){
	$(this).attr("disabled",true)
	let letraSelecionada = $(this).data("letra");
	validarJogada(letraSelecionada);
});

$(document).on("keypress",function(e){ // Quando usuário usar o teclado
	let letraPressionada = String.fromCharCode(e.which).toUpperCase();
	
	let todosBotoes = $(".btn-letra");
	todosBotoes.each(function(botao){
		let valorBotao = $(this).data("letra");
		if(valorBotao == letraPressionada) {
			if(!$(this).attr("disabled") == true) {
				$(this).attr("disabled",true);
				validarJogada(letraPressionada);
			}
		}
	});
})

function validarJogada(letra) {
	let ocorrencias = verificarOcorrencias(letra);
	
	if(ocorrencias.length > 0) {
		revelarLetras(ocorrencias);
		if(letrasReveladas == tamanhoPalavra) {
			fimDeJogo(true);
		}
	} else {
		let tentativas = $(".tentativas-restantes").text();
		if(tentativas == 0) {
			fimDeJogo(false);
		} else {
			$(".tentativas-restantes").text(tentativas-1);
		}
	}
}

function verificarOcorrencias(letra) {
	let ocorrencias = [];
	let c = 0;
	let palavraLetras = palavra.split("");
	palavraLetras.forEach(function(letraAtual){
		if(letraAtual == letra) {
			ocorrencias.push(c);
		} else if(letraAtual == "Ç" && letra == "C") { // Verificando se letra é Ç
			ocorrencias.push(c);
		} else if(/[\xC0-\xC6]/.test(letraAtual) && letra == "A") { // Verificando se é A c/ acento
			ocorrencias.push(c);
		} else if(/[\xC8-\xCB]/.test(letraAtual) && letra == "E") { // Verificando se é E c/ acento
			ocorrencias.push(c);
		} else if(/[\xCC-\xCF]/.test(letraAtual) && letra == "I") { // Verificando se é I c/ acento
			ocorrencias.push(c);
		} else if(/[\xD2-\xD6]/.test(letraAtual) && letra == "O") { // Verificando se é O c/ acento
			ocorrencias.push(c);
		} else if(/[\xD9-\xDC]/.test(letraAtual) && letra == "U") { // Verificando se é U c/ acento
			ocorrencias.push(c);
		}
		c++;
	});
	letrasReveladas += ocorrencias.length;
	return ocorrencias;
}

function revelarLetras(ocorrencias) {
	let palavraOculta = $(".palavrachave").text().split("");
	let palavraChave = palavra.split("");
	ocorrencias.forEach(function(ocorrencia){
		palavraOculta[ocorrencia] = palavraChave[ocorrencia];
	});
	setarPalavraOculta(palavraOculta);
}

// Fim de Jogo
function fimDeJogo(resultado) {
	$(".btn-letra").fadeOut(500);
	$(".campo-dica").fadeOut(500);
	$(".palavrachave").text(palavra);
	if(resultado == false) {
		gameOver();
	} else {
		vitoria();
	}
}

function gameOver() {
	$(".resultado").text("Fim de Jogo!");
}

function vitoria() {
	$(".resultado").text("Vitória!");
	atualizaPontuacao();
	atualizarJSONusuario();
}

function atualizaPontuacao() {
	let pontosUsuario = parseInt($(".pontuacao").text());
	let tentativasRestantes = $(".tentativas-restantes").text();
	let pontuacao = 0;
	switch(tentativasRestantes) {
		case "5":
		pontuacao = 15;
		break;
		case "4":
		pontuacao = 12;
		break;
		case "3":
		pontuacao = 10;
		break;
		case "2":
		pontuacao = 8;
		break;
		case "1":
		pontuacao = 5;
		break;
		case "0":
		pontuacao = 3;
		break;
	}
	let novaPontuacaoUsuario = pontosUsuario + pontuacao;
	$(".pontuacao").text(novaPontuacaoUsuario);
}

// Botões de Informação
$(".btn-pontuacao").click(function(){
	$(".lista-pontuacao").slideToggle(100);
});

$(".btn-instrucoes").click(function(){
	$(".lista-instrucoes").slideToggle(100);
});
