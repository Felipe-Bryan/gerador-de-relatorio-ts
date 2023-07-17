import { DadosType } from '../../types/DadosType';
import { inputs } from '../../utils/inputList';
import { defineDataIpt } from './defineDataIpt';
import { getDados } from '../general/getDados';
import { defineMetaDia } from './defineMetaDia';

export function defineInitValues() {
  const dados: DadosType = getDados();
  defineDataIpt();

  inputs.rotaSapIpt.value = String(dados.rotaSap);
  inputs.efetivaSemanaIpt.value = String(dados.efetivasSemana);
  inputs.metaSemanaIpt.value = String(dados.metaSemana);
  inputs.vendaSemanaIpt.value = String(dados.vendaSemana);
  inputs.vendaMesIpt.value = String(dados.vendaMes);
  inputs.metaMesIpt.value = String(dados.metaMes);
  inputs.dddIpt.value = String(dados.ddd);
  inputs.telIpt.value = String(dados.tel);
  inputs.faltaMetaIpt.value = String(Number(inputs.metaSemanaIpt.value) - Number(inputs.vendaSemanaIpt.value));

  defineMetaDia();
}
