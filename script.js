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
{"palavra": "demagogia", "dica": "uso de discursos populistas para ganhar apoio político"},
{"palavra": "flexão verbal", "dica": "mudança na forma do verbo de acordo com o tempo, modo, pessoa e número"},
{"palavra": "advérbio de intensidade", "dica": "advérbio que modifica um verbo, indicando grau de intensidade"},
{"palavra": "marca registrada", "dica": "símbolo legalmente protegido que representa uma empresa ou produto"},
{"palavra": "telejornalismo", "dica": "produção e transmissão de notícias na televisão"},
{"palavra": "boletim informativo", "dica": "relatório breve com notícias recentes"},
{"palavra": "anáfora", "dica": "repetição de uma palavra no início de frases ou versos"},
{"palavra": "catáfora", "dica": "referência a algo que será mencionado posteriormente no discurso"},
{"palavra": "programação", "dica": "escrita de código de computador para criar software"},
{"palavra": "Brasil", "dica": "País campeão da Copa do Mundo de 2002"},
{"palavra": "jurisdição", "dica": "autoridade legal de um tribunal para julgar casos"},
{"palavra": "habeas corpus", "dica": "ordem para que uma pessoa detida seja apresentada em tribunal"},
{"palavra": "empatia", "dica": "habilidade de entender e compartilhar os sentimentos de outra pessoa"},
{"palavra": "etnografia", "dica": "método de pesquisa que envolve o estudo detalhado de culturas e sociedades"},
{"palavra": "etnocentrismo", "dica": "tendência de julgar outras culturas com base nos valores da própria cultura"},
{"palavra": "biodegradável", "dica": "que pode ser decomposto por processos naturais"},
{"palavra": "ecossistema", "dica": "comunidade de organismos e seu ambiente físico"},
{"palavra": "julgamento", "dica": "processo de tomada de decisão em um tribunal"},
{"palavra": "sociolinguística", "dica": "estudo das relações entre linguagem e sociedade"},
{"palavra": "diversidade linguística", "dica": "variedade de línguas e dialetos em uma região ou comunidade"},
{"palavra": "comunicação interna", "dica": "troca de informações dentro de uma organização"},
{"palavra": "relações públicas", "dica": "gestão da comunicação entre uma organização e seu público"},
{"palavra": "gravidade", "dica": "força que atrai os corpos em direção ao centro da Terra"},
{"palavra": "inércia", "dica": "tendência de um objeto em repouso permanecer em repouso"},
{"palavra": "reagente", "dica": "substância que participa de uma reação química"},
{"palavra": "ácido", "dica": "substância com pH menor que 7, que pode corroer materiais"},
{"palavra": "constelação", "dica": "grupo de estrelas que formam uma figura no céu"},
{"palavra": "nebulosa", "dica": "nuvem de gás e poeira interestelar no espaço"},
{"palavra": "terremoto", "dica": "movimento brusco da crosta terrestre causado por tensão acumulada"},
{"palavra": "equação", "dica": "expressão matemática que relaciona duas quantidades com um sinal de igual"},
{"palavra": "teorema", "dica": "afirmação matemática que foi provada de forma rigorosa"},
{"palavra": "cirurgia", "dica": "procedimento médico que envolve intervenção física no corpo"},
{"palavra": "diagnóstico", "dica": "determinação da natureza de uma doença ou condição médica"},
{"palavra": "geometria", "dica": "ramo da matemática que estuda formas, tamanhos e propriedades espaciais"},
{"palavra": "teorema de Pitágoras", "dica": "relação entre os lados de um triângulo retângulo: a² + b² = c²"},
{"palavra": "equação quadrática", "dica": "equação de segundo grau, geralmente com uma incógnita"},
{"palavra": "coeficiente", "dica": "número que multiplica uma variável em uma expressão algébrica"},
{"palavra": "média", "dica": "valor obtido somando um conjunto de números e dividindo pelo número de elementos"},
{"palavra": "desvio padrão", "dica": "medida de dispersão que indica o quanto os valores de um conjunto se afastam da média"},
{"palavra": "plano cartesiano", "dica": "sistema de coordenadas que usa eixos perpendiculares para representar pontos no espaço"},
{"palavra": "ponto de interseção", "dica": "ponto onde duas ou mais retas se encontram no plano cartesiano"},
{"palavra": "juros simples", "dica": "cálculo de juros sobre o capital original ao longo do tempo"},
{"palavra": "amortização", "dica": "pagamento gradual de uma dívida por meio de prestações regulares"},
{"palavra": "fração", "dica": "número que representa uma parte de um todo, com um numerador e um denominador"},
{"palavra": "raiz quadrada", "dica": "número que, quando multiplicado por si mesmo, resulta em um número específico"},
{"palavra": "ângulo", "dica": "medida da abertura entre duas retas que se encontram em um ponto comum"},
{"palavra": "circunferência", "dica": "perímetro de um círculo, dado por 2π vezes o raio"},
{"palavra": "matriz", "dica": "arranjo retangular de números ou elementos organizados em linhas e colunas"},
{"palavra": "equação linear", "dica": "equação que descreve uma linha reta no plano cartesiano"},
{"palavra": "número primo", "dica": "número natural maior que 1 que só é divisível por 1 e por ele mesmo"},
{"palavra": "sistema de equações", "dica": "conjunto de duas ou mais equações com múltiplas incógnitas"},
{"palavra": "derivada", "dica": "taxa de variação instantânea de uma função em relação a uma variável"},
{"palavra": "integral", "dica": "operação matemática que representa a área sob uma curva em um gráfico"},
{"palavra": "polinômio", "dica": "expressão matemática composta por termos que envolvem variáveis elevadas a expoentes inteiros"},
{"palavra": "logaritmo", "dica": "função matemática inversa da exponenciação, que mede o expoente ao qual uma base deve ser elevada para obter um número específico"},
{"palavra": "equação exponencial", "dica": "equação na qual a incógnita está no expoente"},
{"palavra": "teoria dos conjuntos", "dica": "área da matemática que estuda coleções de objetos"},
{"palavra": "geometria analítica", "dica": "ramo da geometria que utiliza métodos da álgebra para resolver problemas geométricos"},
{"palavra": "matriz de coeficientes", "dica": "matriz que representa os coeficientes de um sistema de equações lineares"},
{"palavra": "álgebra linear", "dica": "ramo da matemática que estuda vetores e matrizes"},
{"palavra": "razão", "dica": "número que expressa a relação entre duas grandezas"},
{"palavra": "proporção", "dica": "equação que relaciona duas ou mais razões, indicando que elas são equivalentes"},
{"palavra": "meio-termo", "dica": "valor que está no meio de dois números em uma proporção"},
{"palavra": "regra de três", "dica": "método de encontrar um valor desconhecido em uma proporção usando três valores conhecidos"},
{"palavra": "juros compostos", "dica": "sistema de cálculo de juros em que os juros são calculados sobre o montante acumulado anteriormente"},
{"palavra": "montante", "dica": "total acumulado em uma conta devido a depósitos ou investimentos, incluindo juros"},
{"palavra": "elemento", "dica": "substância pura que não pode ser decomposta em substâncias mais simples por meios químicos"},
{"palavra": "molécula", "dica": "agrupamento de átomos que representa a menor unidade de uma substância química"},
{"palavra": "reação química", "dica": "processo no qual substâncias químicas interagem para formar novas substâncias"},
{"palavra": "tabela periódica", "dica": "arranjo dos elementos químicos em ordem crescente de número atômico"},
{"palavra": "cinemática", "dica": "ramo da física que estuda o movimento de objetos sem se preocupar com as causas desse movimento"},
{"palavra": "força", "dica": "interação que causa uma mudança na velocidade ou na forma de um objeto"},
{"palavra": "energia", "dica": "capacidade de fazer trabalho ou causar uma mudança em um sistema"},
{"palavra": "gravidade", "dica": "força que atrai os corpos em direção ao centro da Terra"},
{"palavra": "óptica", "dica": "ramo da física que estuda a luz e a visão"},
{"palavra": "eletricidade", "dica": "fenômeno físico relacionado à carga elétrica e ao movimento de elétrons"},
{"palavra": "termodinâmica", "dica": "ramo da física que estuda as relações entre calor, energia e trabalho"},
{"palavra": "mecânica quântica", "dica": "teoria da física que descreve o comportamento de partículas subatômicas"},
{"palavra": "som", "dica": "vibrações mecânicas que se propagam como ondas através de um meio"},
{"palavra": "genética", "dica": "ramo da biologia que estuda a hereditariedade e a variação genética"},
{"palavra": "ecossistema", "dica": "comunidade de organismos e seu ambiente físico"},
{"palavra": "evolução", "dica": "processo pelo qual as espécies de seres vivos mudam ao longo do tempo"},
{"palavra": "biodiversidade", "dica": "variedade de vida na Terra, incluindo a diversidade de espécies"},
{"palavra": "metabolismo", "dica": "conjunto de reações químicas que ocorrem dentro de um organismo"},
{"palavra": "crescimento celular", "dica": "aumento no tamanho e na quantidade de células de um organismo"},
{"palavra": "homeostase", "dica": "capacidade dos organismos de manter um equilíbrio interno estável"},
{"palavra": "adaptabilidade", "dica": "capacidade de um organismo de se ajustar ao seu ambiente"},
{"palavra": "mitose", "dica": "processo de divisão celular no qual uma célula mãe se divide em duas células filhas idênticas"},
{"palavra": "meiose", "dica": "processo de divisão celular no qual uma célula mãe se divide em quatro células filhas com metade do número de cromossomos"},
{"palavra": "genoma", "dica": "conjunto completo de genes de um organismo"},
{"palavra": "mutação", "dica": "mudança na sequência de DNA que pode levar a variações genéticas"},
{"palavra": "ecologia", "dica": "estudo das interações entre organismos e seu ambiente"},
{"palavra": "bioma", "dica": "região geográfica com características ecológicas específicas"},
{"palavra": "bactéria", "dica": "microorganismo unicelular que pode ser benéfico ou prejudicial aos seres humanos"},
{"palavra": "vírus", "dica": "agente infeccioso composto por material genético envolvido por uma cápsula protéica"},
{"palavra": "fotossíntese", "dica": "processo pelo qual os organismos produzem energia usando a luz solar"},
{"palavra": "parasitismo", "dica": "relação simbiótica na qual um organismo se beneficia à custa de outro"},
{"palavra": "cromossomo", "dica": "estrutura que contém informações genéticas em forma de DNA"},
{"palavra": "hereditariedade", "dica": "transmissão de características genéticas de uma geração para a seguinte"},
{"palavra": "organismo autotrófico", "dica": "organismo que produz seu próprio alimento por meio da fotossíntese"},
{"palavra": "heterotrofia", "dica": "obtenção de alimentos a partir de fontes externas, em oposição à produção interna"},
{"palavra": "sistema imunológico", "dica": "conjunto de órgãos e células que defendem o corpo contra infecções"},
{"palavra": "biotecnologia", "dica": "uso de organismos vivos ou processos biológicos para desenvolver produtos ou tecnologias"},
{"palavra": "sociedade", "dica": "grupo de indivíduos que compartilham valores, normas e interações sociais"},
{"palavra": "cultura", "dica": "conjunto de valores, crenças, normas e práticas compartilhadas por um grupo social"},
{"palavra": "estratificação social", "dica": "divisão da sociedade em camadas ou estratos com base em características socioeconômicas"},
{"palavra": "mobilidade social", "dica": "capacidade de um indivíduo ou grupo de mudar de posição na hierarquia social"},
{"palavra": "globalização", "dica": "processo de interconexão e interdependência entre sociedades em escala global"},
{"palavra": "alienação", "dica": "sentimento de isolamento ou desapego das normas e valores da sociedade"},
{"palavra": "ideologia", "dica": "conjunto de ideias, crenças e valores que sustentam uma ordem social ou política"},
{"palavra": "conflito social", "dica": "disputas e desacordos entre diferentes grupos ou classes na sociedade"},
{"palavra": "identidade social", "dica": "percepção de quem somos em relação à sociedade e aos grupos aos quais pertencemos"},
{"palavra": "etnocentrismo", "dica": "tendência de julgar outras culturas com base nos valores da própria cultura"},
{"palavra": "movimento social", "dica": "grupo organizado de pessoas que busca mudanças sociais específicas"},
{"palavra": "parágrafo", "dica": "unidade de texto que apresenta uma ideia ou tópico específico"},
{"palavra": "coerência", "dica": "qualidade de um texto que faz com que as ideias estejam logicamente conectadas"},
{"palavra": "coesão", "dica": "relação lógica e fluidez entre as partes de um texto"},
{"palavra": "argumentação", "dica": "apresentação de argumentos lógicos para sustentar uma posição ou opinião"},
{"palavra": "tese", "dica": "afirmação central ou ponto de vista que um texto procura defender"},
{"palavra": "introdução", "dica": "parte inicial de um texto que apresenta o tema e a tese"},
{"palavra": "desenvolvimento", "dica": "parte do texto que explora e explica a tese, apresentando argumentos e evidências"},
{"palavra": "conclusão", "dica": "parte final de um texto que resume os pontos principais e reafirma a tese"},
{"palavra": "revisão", "dica": "processo de correção e aprimoramento de um texto antes de sua finalização"},
{"palavra": "estilo", "dica": "a maneira particular de um autor escrever, incluindo escolhas de vocabulário e tom"},
{"palavra": "paráfrase", "dica": "reformulação de um texto ou trecho com as mesmas ideias, mas palavras diferentes"},
{"palavra": "revisão gramatical", "dica": "análise e correção de erros de gramática e sintaxe em um texto"},
{"palavra": "vocabulário", "dica": "conjunto de palavras que uma pessoa conhece e utiliza em sua escrita"},
{"palavra": "plágio", "dica": "ato de copiar o trabalho de outra pessoa sem dar o devido crédito"},
{"palavra": "paralelismo", "dica": "uso de estruturas gramaticais semelhantes em uma frase ou texto"},
{"palavra": "narração", "dica": "gênero de texto que conta uma história ou sequência de eventos"},
{"palavra": "descrição", "dica": "gênero de texto que cria uma imagem vívida de um objeto, pessoa ou lugar"},
{"palavra": "argumentação", "dica": "gênero de texto que apresenta argumentos para defender um ponto de vista"},
{"palavra": "exposição", "dica": "gênero de texto que explica um conceito, ideia ou processo de forma clara"},
{"palavra": "reescrita", "dica": "ato de revisar e reescrever partes de um texto para melhorar sua clareza ou impacto"},
{"palavra": "altruísmo", "dica": "comportamento que envolve ajudar os outros sem esperar nada em troca"},
{"palavra": "procrastinação", "dica": "hábito de adiar tarefas ou decisões para o futuro"},
{"palavra": "ambivalência", "dica": "estado de ter sentimentos conflitantes ou contraditórios em relação a algo"},
{"palavra": "resiliência", "dica": "capacidade de se adaptar e se recuperar de adversidades ou desafios"},
{"palavra": "efêmero", "dica": "algo que é passageiro ou de curta duração"},
{"palavra": "empatia", "dica": "habilidade de compreender e compartilhar os sentimentos de outra pessoa"},
{"palavra": "eufemismo", "dica": "expressão suave usada para substituir uma expressão mais direta ou desagradável"},
{"palavra": "paradoxo", "dica": "situação que envolve contradição aparente ou surpreendente"},
{"palavra": "narcisismo", "dica": "excesso de amor próprio ou preocupação consigo mesmo"},
{"palavra": "cacofonia", "dica": "combinação desagradável de sons em uma palavra ou frase"},
{"palavra": "paradigma", "dica": "modelo ou padrão que serve como referência em um campo específico"},
{"palavra": "inovação", "dica": "introdução de algo novo ou aprimoramento de ideias existentes"},
{"palavra": "precisão", "dica": "qualidade de ser exato, correto ou minucioso"},
{"palavra": "dicotomia", "dica": "divisão de algo em duas partes distintas ou opostas"},
{"palavra": "ironia", "dica": "expressão que sugere o oposto do que as palavras realmente significam"},
{"palavra": "ambiguidade", "dica": "situação em que uma palavra ou frase pode ter múltiplos significados"},
{"palavra": "perplexidade", "dica": "estado de confusão ou incerteza"},
{"palavra": "analogia", "dica": "comparação entre coisas diferentes para ressaltar semelhanças"},
{"palavra": "abstrato", "dica": "algo que não é concreto ou tangível, mas conceitual ou mental"},
{"palavra": "paródia", "dica": "imitação cômica ou satírica de uma obra ou estilo"},
{"palavra": "visão", "dica": "um dos cinco sentidos, permite enxergar o mundo"},
{"palavra": "audição", "dica": "um dos cinco sentidos, permite ouvir sons e ruídos"},
{"palavra": "olfato", "dica": "um dos cinco sentidos, permite detectar odores e aromas"},
{"palavra": "tato", "dica": "um dos cinco sentidos, permite sentir o contato com objetos e texturas"},
{"palavra": "paladar", "dica": "um dos cinco sentidos, permite saborear alimentos e identificar sabores"},
{"palavra": "aprendizado", "dica": "processo de adquirir conhecimento ou habilidades por meio do estudo ou da experiência"},
{"palavra": "memorização", "dica": "ato de armazenar informações na memória"},
{"palavra": "percepção", "dica": "capacidade de perceber e interpretar estímulos do ambiente"},
{"palavra": "concentração", "dica": "foco mental em uma tarefa ou atividade específica"},
{"palavra": "motivação", "dica": "força interna que impulsiona a pessoa a agir ou buscar objetivos"},

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
