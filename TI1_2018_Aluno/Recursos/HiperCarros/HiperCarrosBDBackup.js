/*************** Hipercarros - Base de Dados ****************/
var hCarros=[
	{
		titulo:"Hipercarros - Top 15",
		apres:[
			"‘Supercarro’, ou ‘carro superdesportivo’ são classificações aplicadas a automóveis cujos desempenho e qualidade gerais são muito superiores, relativamente aos desempenho e qualidade médias dos automóveis de uma determinada época. Por exemplo, o ‘Collins English Dictionary’ define um ‘supercarro’, especificamente, como ‘um carro muito caro, muito rápido e muito potente’. Os supercarros são produzidos em quantidades excecionalmente reduzidas, quase sempre sob encomenda e, com muita fabricação e montagem manuais. É por isso que são tão exclusivos.",
			
			"O desempenho de um supercarro excede frequentemente os desempenhos dos automóveis desportivos, ditos de ‘gama alta’. Os super carros costumam utilizar materiais pouco convencionais, como fibra de carbono, Kevlar e ligas metálicas com alumínio, magnésio, molibdénio ou titânio, para reduzir o peso e, simultaneamente, reforçar a estrutura. Por esta razão costumam ser muito mais dispendiosos do que um carro desportivo de altas prestações produzido em massa.",
			
			"Há várias reputadas marcas de supercarros, como a Bugatti, a Koenigsegg, a SSC, a Pagani, a McLaren, a Lamborghini, a Ferrari, a Aston Martin, a VW/Porsche, etc., como também há fabricantes de carros mais comuns que também fabricam supercarros, como a Mercedes, ou a BMW. Além destes existem propostas de supercarros por parte de pequenos construtores ou modificadores menos conhecidos do público em geral.",
			
			"Porém, um outro conceito tem vindo a estabelecer-se neste contexto: o ‘hipercarro’. Genericamente, um hipercarro é um supercarro que se destaca de entre os demais supercarros por razões extraordinárias de potência, de binário, de velocidade máxima ou de aceleração. Por exemplo, imaginemos um critério arbitrário para a categoria de supercarro, que estabeleça, potências superiores a 500 cv, binários superiores a 500 Nm, velocidades máximas superiores a 325 km/h e aceleração dos 0-100 km/h em menos do que 4 segundos. Assim, um critério, igualmente arbitrário, para a categoria de hipercarro, poderá estabelecer, potências superiores a 1000 cv, binários superiores a 1000 Nm, velocidades máximas superiores a 400 km/h e aceleração dos 0-100 km/h em menos do que 3 segundos.",
			
			"Com esse critério foi elaborada a presente lista de 15 hipercarros, onde se destacam os construtores Bugatti, Koenigsegg e SSC, com 9 hipercarros. Obviamente, não se trata de uma lista exaustiva, mas apenas uma escolha baseada em notoriedade. Uma única exceção ao referido critério é o ‘Lamborghini Aventador LP1600-4 Mansory Carbonado GT’, com uma velocidade máxima de 375 km/h, mas que foi incluído pela sua extraordinária aceleração 0-100 km/h em 2.3 segundos.",
		]
	},
	{
		marcaModelo:"Bugatti Veyron",
		versao:"EB 16.4",
		texto:[
			"O Bugatti Veyron EB 16.4 é um hipercarro de motor central, desenhado e desenvolvido na Alemanha por Hartmut Warkuss, Jozef Kaban e Wolfgang Schreiber, do Grupo Volkswagen e fabricado, a partir de 2005, em Molsheim, na França, pela Bugatti Automobiles. A partir de 2010, a Bugatti começou a oferecer a possibilidade de personalizar cores interiores e exteriores do automóvel, através da aplicação ‘Veyron 16.4 Configurator’.",
			
			"Na versão original, o Veyron atingia a velocidade máxima de 407 km/h, sendo eleito o carro da década (2001-2010) pelo programa ‘Top Gear’ da BBC. Destaque-se o motor W16, de 8 litros e quatro turbos, o equivalente a dois V8 biturbo juntos de 4 litros cada (cada cilindro contém 4 válvulas, totalizando 64 válvulas) e o sistema de tração integral permanente, associado a uma rapidíssima caixa de velocidades que efetua mudanças em 150 milissegundos."
		],
		dados:{
			ano:2005, peso:1888, cilindrada:7993, tipoMotor: 'W16', 
			potencia:1001, rotPotencia:6400, binario:1200, rotBinario:4000, 
			velMaxima:407, acel_0_100:2.8,
			comp:4462, larg:1998, alt:1159
		},
		imags:["M010.jpg", "M011.jpg", "M012.jpg", "M013.jpg"]
	},
	{
		marcaModelo:"Koenigsegg CCXR",
		versao:"Special Edition 4.8 V8 S",
		texto:[
			"O Koenigsegg CCX foi criado pela construtora sueca ‘Koenigsegg Automotive AB’, visando o mercado americano dos hipercarros. O CCX sucede ao modelo CCR que foi homologado em 2004 como o 3.º carro de série mais rápido do mundo. O modelo CCXR foi, em 2009, considerado pela Forbes como um dos 10 mais belos carros de sempre.",
			
			"O CCXR Special Edition está equipado com um sofisticado motor V8 de 4,8 litros em alumínio com dois turbo-compressores e que pode utilizar, como combustível, tanto bio-etanol E85 ou E100, como gasolina de 98 octanas. É com o bio-etanol E100 que ultrapassa os 1000 cavalos de potência e uma velocidade máxima superior aos 400 km/h. No ano do seu lançamento, 2008, esta edição especial era o carro mais caro do mundo."
		],
		dados:{
			ano:2008, peso:1280, cilindrada:4800, tipoMotor: 'V8', 
			potencia:1004, rotPotencia:7000, binario:1361, rotBinario:5600, 
			velMaxima:409, acel_0_100:3,
			comp:4293, larg:1996, alt:1120
		},
		imags:["M020.jpg", "M021.jpg", "M022.jpg", "M023.jpg"]
	},
	{
		marcaModelo:"Koenigsegg Agera",
		versao:"S 5.0 V8 Hundra",
		texto:[
			"O Koenigsegg Agera foi apresentado em 2010 pela construtora sueca ‘Koenigsegg Automotive AB’, para suceder ao modelo CCX, tendo, desde logo, sido eleito ‘hipercarro do ano de 2010’ pela revista ‘Top Gear Magazine’. O modelo Agera foi desenvolvido segundo três versões sucessivas: a versão R (2011), a versão S (2013) e a versão One:1 (2014).",
			
			"O Agera S foi desenvolvido para mercados com carência de bio-etanol, sendo otimizado para rodar com gasolina, produzindo 1.016 cavalos, contra 960 do Agera R com o mesmo combustível. Uma versão especial, com faixas de ouro 24 quilates, comemorativa do centésimo Koenigsegg vendido, Agera S Hundra (‘Hundra’ significa ‘Cem’ em Sueco), é ainda mais potente, produzindo 1.028 cavalos com gasolina (com bio-etanol a potência eleva-se a 1.200 cavalos mas não é sustentável)."
		],
		dados:{
			ano:2013, peso:1415, cilindrada:5032, tipoMotor: 'V8', 
			potencia:1028, rotPotencia:7100, binario:1378, rotBinario:4100, 
			velMaxima:401, acel_0_100:2.9,
			comp:4293, larg:1996, alt:1120
		},
		imags:["M030.jpg", "M031.jpg", "M032.jpg", "M033.jpg"]
	},
	{
		marcaModelo:"Hennessey Venom GT",
		versao:"(versão única)",
		texto:[
			"O Hennessey Venom GT, apresentado em 2010, é fabricado pela firma americana de tuning ‘Hennessey Performance Engineering’. O Venom GT usa um chassi altamente modificado da Lotus com diversas componentes do Lotus Exige e Elise, e um motor V8 de 7 litros da Chevrolet.",
			
			"Em 2013, o Venom GT bateu um novo recorde do Guinness Book, de aceleração 0-300 km/h, em 13,63 segundos. Em 2014, numa pista de testes, o Venom atingiu a velocidade de 435 km/h, mais 4 km/h do que o carro de série mais rápido do mundo, à data, o Bugatti Veyron Super Sport. Porém, tal velocidade não foi homologada pelo Guinness, por razões regulamentares: não fez o teste nos dois sentidos (a favor do vento e contra o vento) e não tinha ainda vendido um mínimo de 30 unidades para ser homologado como carro de série. "
		],
		dados:{
			ano:2010, peso:1220, cilindrada:6162, tipoMotor: 'V8', 
			potencia:1030, rotPotencia:6500, binario:1396, rotBinario:4200, 
			velMaxima:418, acel_0_100:2.6,
			comp:4655, larg:1960, alt:1135
		},
		imags:["M040.jpg", "M041.jpg", "M042.jpg", "M043.jpg"]
	},
	{
		marcaModelo:"Koenigsegg Agera",
		versao:"One:1 5.0 V8 ",
		texto:[
			"O Koenigsegg Agera foi apresentado em 2010 pela construtora sueca ‘Koenigsegg Automotive AB’, para suceder ao modelo CCX, tendo, desde logo, sido eleito ‘hipercarro do ano de 2010’ pela revista ‘Top Gear Magazine’. O modelo Agera foi desenvolvido segundo três versões sucessivas: a versão R (2011), a versão S (2013) e a versão One:1 (2014). ",
			
			"O Agera One:1 deve o seu nome à relação 1:1 entre a potência (1.360 cv) e o peso (1.360 kg). Porém, esta relação refere-se à sua configuração para pista, otimizada para uso de bio-etanol e com sacrifício de atributos de ‘carro de rua’, como, por exemplo, a entrada de ar no teto removível que, a par da redução do compartimento frontal por razões aerodinâmicas, impede guardar o teto nesse compartimento. Uma versão mais conforme ao uso corrente em estrada, otimizada para gasolina, pesa 1435 kg e fica-se pelos 1100 cavalos."
		],
		dados:{
			ano:2011, peso:1435, cilindrada:5032, tipoMotor: 'V8', 
			potencia:1100, rotPotencia:7100, binario:1491, rotBinario:4100, 
			velMaxima:420, acel_0_100:3,
			comp:4293, larg:1996, alt:1120
		},
		imags:["M050.jpg", "M051.jpg", "M052.jpg", "M053.jpg"]
	},
	{
		marcaModelo:"Zenvo ST1",
		versao:"(versão única)",
		texto:[
			"O Zenvo ST1 foi produzido, desde 2009, pela fabricante de automóveis Troels Vollertsen, dono da ‘Zenvo Automotive’ na ilha dinamarquesa de Zelândia. Foram fabricados penas 15 carros por encomenda, todos vendidos a clientes selecionados e aprovados.",
			
			"O Zenvo ST1 foi desenhado por Christian Brandt e Jesper Hermann e é o primeiro hipercarro dinamarquês, o único carro, até hoje, fabricado pela Zenvo. Apresenta algumas inovações tecnológicas e usa um motor V8 de 6,8 litros, turboalimentado e sobrealimentado e montado a mão. O chassi é de aço, o monocoque é de alumínio e a carroceria é em fibra de carbono. A maioria das componentes é originária de fabricantes alemães e americanos. "
		],
		dados:{
			ano:2009, peso:1688, cilindrada:6797, tipoMotor: 'V8', 
			potencia:1104, rotPotencia:6900, binario:1430, rotBinario:4500, 
			velMaxima:375, acel_0_100:3,
			comp:4665, larg:2041, alt:1198
		},
		imags:["M060.jpg", "M061.jpg", "M062.jpg", "M063.jpg"]
	},
	{
		marcaModelo:"Porsche",
		versao:"9ff GT9R",
		texto:[
			"O modelo 9ff GT9R é construído pelo alemão Jan Fatthauer na sua firma de tuning ‘9ff’, através de uma série de modificações e reconstruções do modelo Porsche 911 GT3 R (tipo 997). O motor de tipo boxer de 6 cilindros, de posicionamento traseiro no modelo original, foi completamente reconstruído e passa a ter posicionamento central no 9ff GT9R. Para efeitos de libertação de peso, o interior do carro foi simplificado e foram retirados todos os elementos de conforto considerados dispensáveis.",
			
			"Foram implementadas duas configurações de motor, uma com 738 cavalos e outra com 1120 cavalos. Dos 150 caros fabricados, apenas 20 receberam esta configuração de hipercarro que permitiu atingir a velocidade máxima de 412 km/h."
		],
		dados:{
			ano:2009, peso:1346, cilindrada:4000, tipoMotor: 'F6', 
			potencia:1120, rotPotencia:7850, binario:1518, rotBinario:5970, 
			velMaxima:412, acel_0_100:3,
			comp:4733, larg:1860, alt:1180
		},
		imags:["M070.jpg", "M071.jpg", "M072.jpg", "M073.jpg"]
	},
	{
		marcaModelo:"Koenigsegg Agera",
		versao:"R 5.0 V8",
		texto:[
			"O Koenigsegg Agera foi apresentado em 2010 pela construtora sueca ‘Koenigsegg Automotive AB’, para suceder ao modelo CCX, tendo, desde logo, sido eleito ‘hipercarro do ano de 2010’ pela revista ‘Top Gear Magazine’. O modelo Agera foi desenvolvido segundo três versões sucessivas: a versão R (2011), a versão S (2013) e a versão One:1 (2014). ",
			
			"O Agera R pode utilizar, como combustível, tanto bio-etanol E85 ou E100, como gasolina de 98 octanas. É com o bio-etanol que atinge os 1024 cavalos. A especial configuração adaptativa da asa traseira, confere-lhe características aerodinâmicas revolucionárias que permitiram a homologação de uma velocidade de 430 km/h. Destaca-se também o preciso sistema de travagem, demonstrado pelo piloto de testes Robert Serwanski, que travou a fundo, de 300 até 0 km/h, em linha reta, sem precisar de colocar as mãos no volante."
		],
		dados:{
			ano:2012, peso:1415, cilindrada:5032, tipoMotor: 'V8', 
			potencia:1124, rotPotencia:7100, binario:1523, rotBinario:4100, 
			velMaxima:430, acel_0_100:3,
			comp:4293, larg:1996, alt:1120
		},
		imags:["M080.jpg", "M081.jpg", "M082.jpg", "M083.jpg"]
	},
	{
		marcaModelo:"SSC Ultimate",
		versao:"Aero TT",
		texto:[
			"O SSC Ultimate Aero Twin Turbo é produzido pela construtora americana ‘SSC North America’, anteriormente conhecido como ‘Shelby SuperCars’. Foi o primeiro carro de produção em série mais rápido do mundo e manteve esse título desde a data do seu lançamento, 2006,  até 2010, quando foi batido, por razões regulamentares, pelo Bugatti Veyron 16.4 Grand Sport Vitesse. Retomou o título, ainda em 2010, passando-o ao seu sucessor, SSC Tuatara TT, em 2011.",
			
			"Os SSC Ultimate Aero TT são carros ‘brutais’ para ‘grandes pilotos’, pois são vendidos sem quaisquer ajudas eletrónicas, como sistemas de travagem anti-bloqueio (ABS) ou sistemas de controlo de tração ou de estabilidade (TCS, ESC, ESP). Segundo Jerod Shelby, o dono da SSC, a filosofia inicial de conceção deste carro foi construir um clássico de pilotagem: o seu condutor deve sentir o carro com os seus próprios sentidos e governá-lo com os seus próprios pés e mãos."
		],
		dados:{
			ano:2008, peso:1250, cilindrada:6348, tipoMotor: 'V8', 
			potencia:1183, rotPotencia:6950, binario:1603, rotBinario:6150, 
			velMaxima:432, acel_0_100:2.9,
			comp:4474, larg:2101, alt:1092
		},
		imags:["M090.jpg", "M091.jpg", "M092.jpg", "M093.jpg"]
	},
	{
		marcaModelo:"Bugatti Veyron",
		versao:"EB 16.4 Grand Sport Vitesse",
		texto:[
			"O Bugatti Veyron 16.4 Grand Sport Vitesse é um desenvolvimento do, já anteriormente melhorado roadster Bugatti Veyron EB 16.4, Grand Sport, desta vez, com o motor do Super Sport. O chassis também foi modificado para suportar o aumento da potência do motor e para melhorar a aerodinâmica do veículo na estrada. O seu desempenho não fica longe das performances do Super Sport, isto é: aceleração dos 0 aos 100 km/h em 2,5 segundos, dos 0 aos 200 km/h em 6,7 segundos e dos 0 aos 300 km/h em 14,6 segundos.",
			
			"O presidente da Bugatti, Wolfgang Dürheimer, revelou que o sucesso do Super Sport o convenceu a lançar uma versão mais veloz da variante roadster do Veyron e que, uma vez mais, os engenheiros conseguiram demonstrar que a Bugatti é capaz de redefinir os limites daquilo que é tecnicamente possível, com o intuito de proporcionar uma experiência extraordinária de condução."
		],
		dados:{
			ano:2010, peso:1990, cilindrada:7993, tipoMotor: 'W16', 
			potencia:1184, rotPotencia:6400, binario:1300, rotBinario:4000, 
			velMaxima:410, acel_0_100:2.6,
			comp:4462, larg:1998, alt:1159
		},
		imags:["M100.jpg", "M101.jpg", "M102.jpg", "M103.jpg"]
	},
	{
		marcaModelo:"Bugatti Veyron",
		versao:"W16 Super Sport",
		texto:[
			"O Bugatti Veyron 8.0 litre W16 Super Sport é topo de linha da família Veyron. O motor 8.0 de 16 cilindros com quatro turbos foi atualizado para gerar 1.200 cv de potência e 1500 Nm de binário. Com isso, o Super Sport apresentou um novo recorde de velocidade de 431 km/h. Por razões de segurança e, mais especificamente, para proteger os pneus, a velocidade máxima do modelo de produção será limitada a 415 km/h.",
			
			"O carro tem outras novidades como caixa de velocidade de sete velocidades, a embraiagem dupla e uma nova suspensão. Para reduzir o peso, o carro é feito em nova estrutura de fibra de carbono, o que inclui partes internas do carro. Algumas modificações exteriores ajudam a distingui-lo do Veyron padrão: dois ductos integrados no teto, novas entradas de ar frontais, compartimentam do motor, para-choque traseiro com difusor duplo e um novo sistema de escape."
		],
		dados:{
			ano:2013, peso:1838, cilindrada:7993, tipoMotor: 'W16', 
			potencia:1200, rotPotencia:6400, binario:1500, rotBinario:4000, 
			velMaxima:431, acel_0_100:2.6,
			comp:4462, larg:1998, alt:1159
		},
		imags:["M110.jpg", "M111.jpg", "M112.jpg", "M113.jpg"]
	},
	{
		marcaModelo:"SSC Tuatara",
		versao:"6.9L V8 TT",
		texto:[
			"O SSC Tuatara 6.9L V8 Twin Turbo é produzido pela construtora americana ‘SSC North America’, anteriormente conhecido como ‘Shelby SuperCars’. É o sucessor do ‘brutal’ SSC Ultimate Aero TT, que também lhe herdou o record de velocidade para carros de série, mas desenvolvido segundo uma filosofia conceptual diversa: o SSC Tuatara TT teria maiores performances mas seria um carro futurista e mais ‘civilizado’, capaz de ser confortavelmente conduzido dentro das cidades. Essas melhores performances seriam conseguidas graças à exaustiva utilização de componentes muito leves, em alumínio e fibra de carbono e simplificação do habitáculo.",
			
			"O SSC Tuatara TT foi equipado com o motor mais potente do seu antecessor, um V8 de 6.9 litros, profundamente remodelado, chegando a atingir, num teste específico, uma potência de 1700 cavalos e uma velocidade de ponta de 444 km/h. "
		],
		dados:{
			ano:2011, peso:1247, cilindrada:6942, tipoMotor: 'V8', 
			potencia:1320, rotPotencia:6800, binario:1610, rotBinario:5000, 
			velMaxima:435, acel_0_100:2.6,
			comp:4430, larg:1991, alt:1092
		},
		imags:["M120.jpg", "M121.jpg", "M122.jpg", "M123.jpg"]
	},
	{
		marcaModelo:"Lamborghini Aventador",
		versao:"LP1600-4 Mansory Carbonado GT",
		texto:[
			"O Mansory Carbonado GT é construído a partir do Lamborghini Aventador, pela empresa modificadora de carros de luxo ‘Mansory’, em Brand, Alemanha. Este hipercarro resultou de uma completa reformulação do supercarro italiano, desde logo, no impacto visual, pois todos os painéis originais foram substituídos por uma trama especial de fibra de carbono, semelhante à usada nos aviões de caça furtivos.",
			
			"São muitas mais as alterações ao original: para-choques, entradas de ar, asas e spoilers, suspensões, eixos e rodas, coletores e ponteiras de escape, tampa do motor e saias laterais para dirigir o ar para dentro do motor, etc., e, muito especialmente, esse motor V12 de 6,5 litros totalmente reformulado, com dois maciços turbocompressores, capaz de sustentar a potência de 1600 cavalos e uma inultrapassável aceleração 0-100 km/h em 2.3 segundos."
		],
		dados:{
			ano:2014, peso:1555, cilindrada:6498, tipoMotor: 'V12', 
			potencia:1500, rotPotencia:6000, binario:1200, rotBinario:6000, 
			velMaxima:375, acel_0_100:2.3,
			comp:4780, larg:2030, alt:1136
		},
		imags:["M130.jpg", "M131.jpg", "M132.jpg", "M133.jpg"]
	},
	{
		marcaModelo:"Koenigsegg Regera",
		versao:"(versão única)",
		texto:[
			"O Koenigsegg Regera foi apresentado em 2015 pela construtora sueca ‘Koenigsegg Automotive AB’, para ser produzido a partir de 2016,  segundo Christian von Koenigsegg, como o hipercarro mais requintado e avançado do mundo. De facto, este carro impressiona, tanto pelo altíssimo nível de design automóvel como pela extensa lista de inovações tecnológicas.",
			
			"Desde logo, a combinação de um motor V8 twin-turbo de 5,0 litros com três motores elétricos Yasa, conjugando-se tudo numa potência máxima de 1500 cavalos às 7000 rpm. Porém essa conjunção permite sustentar potências da ordem dos 1300 cavalos em rotações relativamente mais baixas, de 5000 rpm. Em suma, as novidades tecnológicas aplicadas no Regera, fazem dele, segundo von Koenigsegg, o primeiro carro ‘totalmente robotizado’."
		],
		dados:{
			ano:2016, peso:1628, cilindrada:5065, tipoMotor: 'V8 + 3Elec', 
			potencia:1500, rotPotencia:7000, binario:1565, rotBinario:4100, 
			velMaxima:410, acel_0_100:2.7,
			comp:4560, larg:2050, alt:1100
		},
		imags:["M140.jpg", "M141.jpg", "M142.jpg", "M143.jpg"]
	},
	{
		marcaModelo:"Bugatti Chiron",
		versao:"(versão única)",
		texto:[
			"O Bugatti Chiron foi a grande estrela do Salão Automóvel de Genebra, que decorreu entre fevereiro e março de 2016. Sucessor do Bugatti Veyron, o Chiron foi batizado em homenagem ao piloto monegasco Louis Chiron, que correu pela Bugatti nas décadas de 20 e 30 e foi o piloto com maior sucesso da Bugatti. ",
			
			"Segundo a marca, o Bugatti Chiron é o carro mais avançado, mais potente, mais rápido, mais luxuoso e mais exclusivo do mundo. De facto, este hipercarro tem 1.500 cavalos, atinge velocidades perto dos 440 km/h e acelera dos zero aos 100 km/h em 2,5 segundos. E custa 2,6 milhões de dólares à saída da fábrica. A potência do Chiron é obtida com um robusto motor de 8 litros, com 16 cilindros combinado com uma transmissão automatizada de dupla embraiagem e sete velocidades. Grande novidade é a estreia de um sofisticado chassis adaptativo com cinco programas de atuação adaptados a diferentes circunstâncias de piso e de velocidade."
		],
		dados:{
			ano:2016, peso:1995, cilindrada:7993, tipoMotor: 'W16', 
			potencia:1500, rotPotencia:6000, binario:1600, rotBinario:4000, 
			velMaxima:438, acel_0_100:2.5,
			comp:4544, larg:2038, alt:1212
		},
		imags:["M150.jpg", "M151.jpg", "M152.jpg", "M153.jpg"]
	}
];
