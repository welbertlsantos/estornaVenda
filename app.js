const cancelamentoService = require('./services/cancelamentoService');
const {cancelamentoDTO} = require('./dto/cancelamentoDto');
const vendas = require('./Vendas.json');
const fs = require('fs');

let qtdCancelamento = 0;

const processaCancelamento = async () => {
  try {
    let retorno = [];  
    const intervaloCancelamento = setInterval(async () => {
      for(const venda of vendas) {
        console.log('Iniciando cancelamento.....');
        cancelamentoService.cancelamentoTitulo(cancelamentoDTO(venda))
          .then((result) => {
            qtdCancelamento++;
            console.log(`Total de Vendas canceladas... ${qtdVendaRealizada}`);
            console.log(`Cancelamento Titulo ......... ${result.data.idTitulo}`);
            retorno.push({idTitulo: result.data.idTitulo});

            if (qtdCancelamento > vendas.length) {
              console.log("Interrompendo a execução...");
              clearInterval(intervaloCancelamento);
              fs.writeFileSync('cancelamento.json',JSON.stringify(retorno));
            } 
          })
          .catch(() => {
            console.log('Erro do processo de cancelamento...');
          })
      }
    }, 7000);
  } catch (error) {
    console.log('Error', error);
  }
};

processaCancelamento();