const cancelamentoService = require('./services/cancelamentoService');
const {cancelamentoDTO} = require('./dto/cancelamentoDto');
const vendas = require('./Vendas.json');
let qtdCancelamento = 0;

const processaCancelamento = () => {
    const parcelaCancelada = setInterval(() => {
      const vendaDTO = cancelamentoDTO(vendas[qtdCancelamento]);
      cancelamentoService.cancelamentoTitulo(vendaDTO)
        .then((cancelamento) => {
          qtdCancelamento++;
          console.log(`Total de Vendas canceladas... ${qtdCancelamento}`);
          console.log(`Cancelamento Titulo ......... ${cancelamento.data.idTitulo}`);
          if (qtdCancelamento == vendas.length){
            clearInterval(parcelaCancelada);
          }
        })
        .catch((error) => {
          console.log('Error', JSON.stringify(error));
          qtdCancelamento ++;
        });
    },9000);
    
};

processaCancelamento();