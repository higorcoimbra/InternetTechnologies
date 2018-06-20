/***************Expressionismo Abstrato - Funções de Parsing ***************/
// fazer um macroparsing para os elementos atômicos
// fazer uma função para parse da data

//título da introdução do movimento artístico
function titulo(){return exprAbstr.introd.titulo;}
//subtítulo da introdução do movimento artístico
function subtitulo(){return exprAbstr.introd.subtitulo;}
//número de parágrafos do texto de introdução do movimento artístico
function nParagIntrod(){return exprAbstr.introd.texto.length;}
//texto de um parágrafo da introdução dado o respectivo índice
function paragIntrod(iParag){return exprAbstr.introd.texto[iParag];}
//número de pintores do movimento artístico
function nPintores(){return exprAbstr.pintores.length;}
//objeto pintor dado o respectivo índice (acesso aos elementos atômicos - macroparsing)
function pintor(iPintor){return exprAbstr.pintores[iPintor];}
//data de nascimento ou morte um pintor dado seu respectivo índice (em formato [número] de [mês] de [ano]) e o tipo de data desejado.
function data(iPintor, tipo){
	var meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
	var datStr, dia, mes, ano, datExtenso;
	if(tipo == "nascimento") datStr = exprAbstr.pintores[iPintor].dataNasc;
 	if(tipo == "morte") datStr = exprAbstr.pintores[iPintor].dataMorte;
	ano = datStr.substring(0,4);
	mes = parseInt(datStr.substring(4,6), 10);
	dia = datStr.substring(6,9);
	datExtenso = dia + " de " + meses[mes-1] + " de " + ano;
	return datExtenso;
}
//número de parágrafos da descrição de um pintor dado seu respectivo índice
function nParagPintorDesc(iPintor){return exprAbstr.pintores[iPintor].texto.length;}
//texto de um parágrafo da descrição de um pintor dado o índice do pintor e o índice do parágrafo
function paragPintorDesc(iPintor, iParag){return exprAbstr.pintores[iPintor].texto[iParag];}
//número de obras de um pintor dado seu respectivo índice
function nObras(iPintor){return exprAbstr.pintores[iPintor].obras.length;}
//título da obra de um pintor dado o índice do pintor e o índice da obra
function tituloObra(iPintor, iObra){return exprAbstr.pintores[iPintor].obras[iObra].titl;}
//ano da obra de um pintor dado o índice do pintor e o índice da obra
function anoObra(iPintor, iObra){return exprAbstr.pintores[iPintor].obras[iObra].ano;}
//nome do ficheiro de imagem da obra de um pintor dado o índice do pintor e o índice da obra
function fichImagObra(iPintor, iObra){return exprAbstr.pintores[iPintor].obras[iObra].imag;}
//texto de descrição da obra de um pintor dado o índice do pintor e o índice da obra
function descObra(iPintor, iObra){return exprAbstr.pintores[iPintor].obras[iObra].texto;}

