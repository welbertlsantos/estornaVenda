const {contaCorrentes} = require('../config/contas');

exports.cancelamentoDTO = ({idTitulo, dataDebito, cpfCnpj}) => {
  const conta = contaCorrentes.find((conta) => conta.cpfCnpj === cpfCnpj);
  
  return {
    idTitulo: idTitulo,
    dataSolicitacaoCancelamento: dataDebito,
    codFormaCredito: '1',
    codBanco: '001',
    numeroAgencia: conta.agencia,
    codDvAgencia: conta.dv,
    numeroConta: conta.contaCorrente,
    codDvConta: conta.dvConta,
    variacaoPoupanca: null,
    trcoDvConta: null,
    protocoloAtendimento: '83789728871',
    tipoPessoa: 1,
    cpfCnpj: cpfCnpj,
    idCanalSolicitacao: '3',
    numeroAgenciaAcld: '1',
    codDvAgenciaAcld: '1',
    codTipoAtendimento: '1',
    idParceiro: 4
  }

};