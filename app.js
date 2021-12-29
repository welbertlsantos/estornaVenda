const cancelamentoService = require('./services/cancelamentoService');
const {cancelamentoDTO} = require('./dto/cancelamentoDto');
const vendas = require('./Vendas.json');
const fs = require('fs');

let qtdCancelamento = 0;

const processaCancelamento = async () => {
  try {
    let retorno = [];  
    for(const venda of vendas) {
      const cancelamento = await cancelamentoService.cancelamentoTitulo(cancelamentoDTO(venda));
      if (cancelamento) {
        qtdCancelamento++;
        console.log(`Total de Vendas canceladas... ${qtdCancelamento}`);
        console.log(`Cancelamento Titulo ......... ${cancelamento.data.idTitulo}`);
        retorno.push({idTitulo: cancelamento.data.idTitulo});
      }
    }
    fs.writeFileSync('cancelamento.json',JSON.stringify(retorno));
  } catch (error) {
    console.log('Error', JSONS.stringify(error));
  }
};

processaCancelamento();