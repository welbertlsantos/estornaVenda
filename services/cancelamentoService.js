const axios = require('axios');

exports.cancelamentoTitulo = async (cancelamento) => {
  try {

    const resultCancelamento = await axios({
      headers: {'Content-Type': 'application/json'},
      method: 'POST',
      url: 'https://apis-dev.brasilcap.info/solicitacoes/solicitacoes?x_action=cancelarTituloVotorantim',
      data: cancelamento
    });
    return resultCancelamento;
  } catch (error) {
    throw error(error);
  }
};