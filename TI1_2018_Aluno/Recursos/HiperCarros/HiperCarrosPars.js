/*************** Hipercarros - Funções de Parsing ****************/
//Título da apresentação dos hipercarros;
function titulo(){return hCarros[0].titulo;}
//Número de parágrafos do texto da apresentação dos hipercarros
function nParagsApres(){return hCarros[0].apres.length;}
//Texto de um parágrafo da apresentação, dado o respetivo índice
function paragApres(iParag){return hCarros[0].apres[iParag]};
//Número de carros
function numCarros(){return hCarros.length-1};
//Marca/Modelo de um carro, dado o respetivo índice (não há índice 0)
function marcaModelo(iCarro){return hCarros[iCarro].marcaModelo;}
//Versão da Marca/Modelo de um carro, dado o respetivo índice
function versao(iCarro){return hCarros[iCarro].versao;}
//Número de parágrafos do texto descritivo de um hipercarro, dado o seu índice
function nParagsDescr(iCarro){return hCarros[iCarro].texto.length;}
//Texto de um parágrafo do texto descritivo de um hipercarro, dados o índice do hipercarro e o índice do parágrafo
function paragDescr(iCarro, iParag){return hCarros[iCarro].texto[iParag];};
//ano de lançamento de um hipercarro, dado o seu índice
function ano(iCarro){return hCarros[iCarro].dados.ano;}
//peso (kg) de um hipercarro, dado o seu índice
function peso(iCarro){return hCarros[iCarro].dados.peso;}
//cilindrada (cm3) de um hipercarro, dado o seu índice
function cilindrada(iCarro){return hCarros[iCarro].dados.cilindrada;}
//tipo de motor de um hipercarro, dado o seu índice
function tipoMotor(iCarro){return hCarros[iCarro].dados.tipoMotor;}
//potência máxima (cv) de um hipercarro, dado o seu índice
function potencia(iCarro){return hCarros[iCarro].dados.potencia;}
//rotação (rot/m)em que se atinge a máxima de um hipercarro, dado o seu índice
function rotPotencia(iCarro){return hCarros[iCarro].dados.rotPotencia;}
//binário máximo (N.m) de um hipercarro, dado o seu índice
function binario(iCarro){return hCarros[iCarro].dados.binario;}
//rotação em que se atinge o binário máximo de um hipercarro, dado o seu índice
function rotBinario(iCarro){return hCarros[iCarro].dados.rotBinario;}
//velocidade máxima (km/h) de um hipercarro, dado o seu índice
function velMaxima(iCarro){return hCarros[iCarro].dados.velMaxima;}
//tempo mínimo (seg) de aceleração de um hipercarro (0 - 100 km/h), dado o seu índice
function acel_0_100(iCarro){return hCarros[iCarro].dados.acel_0_100;}
//comprimento (mm) de um hipercarro, dado o seu índice
function comprimento(iCarro) {return hCarros[iCarro].dados.comp;}
//largura (mm) de um hipercarro, dado o seu índice
function largura(iCarro) {return hCarros[iCarro].dados.larg;}
//altura (mm) de um hipercarro, dado o seu índice
function altura(iCarro) {return hCarros[iCarro].dados.alt;}
//Número de imagens ilustrativas de um carro, dado o seu respetivo índice
function numImags(iCarro){return hCarros[iCarro].imags.length;}
//Nome do ficheiro de uma imagem ilustrativa de um carro, dados o índice do carro e o índice da imagem
function imag(iCarro, iImag){return hCarros[iCarro].imags[iImag];}