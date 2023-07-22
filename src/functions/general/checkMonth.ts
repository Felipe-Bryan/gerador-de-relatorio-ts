import { DadosType } from '../../types/DadosType';
import { inputs } from '../../utils/inputList';
import { defineMes } from '../defines/defineMes';
import { getDados } from './getDados';

function clearData() {
  const dados = getDados();
  const newDados: DadosType = {
    mes: Number(defineMes()),
    ddd: dados.ddd,
    efetivasDR: 0,
    efetivasFR: 0,
    efetivasSemana: 0,
    metaMes: 0,
    metaSemana: 0,
    programadas: 0,
    rotaSap: dados.rotaSap,
    tel: dados.tel,
    vendaMes: 0,
    vendaSemana: 0,
  };

  localStorage.setItem('dadosRota', JSON.stringify(newDados));
}

export function checkMonth() {
  let confirmation = confirm('Deseja iniciar um novo mês?');

  if (confirmation) {
    clearData();
    inputs.metaDiaIpt.value = '';
    inputs.efetivaSemanaIpt.value = '';
    inputs.vendaSemanaIpt.value = '';
    inputs.vendaMesIpt.value = '';
    inputs.metaSemanaIpt.value = '';
    inputs.metaMesIpt.value = '';
    inputs.faltaMetaIpt.value = '';
  }
}
