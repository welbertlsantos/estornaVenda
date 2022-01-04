const axios = require('axios');

exports.cancelamentoTitulo = (cancelamento) => new Promise((resolve, reject) => {
  axios({
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    url: 'https://apis-dev.brasilcap.info/solicitacoes/solicitacoes?x_action=cancelarTituloVotorantim',
    data: cancelamento
  })
    .then((result) => {
      resolve(result);
    })
    .catch((error) => {
      reject(error);
      console.log(`Erro no cancelamento do titulo: ${cancelamento.idTitulo} `);
    });
});
