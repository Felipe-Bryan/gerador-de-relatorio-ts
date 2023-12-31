import { DadosType } from '../../types/DadosType';
import { inputs } from '../../utils/inputList';
import { defineDiasRestantesSemana } from '../defines/defineDiasRestantesSemana';
import { getDados } from '../general/getDados';

export function defineMetaDia() {
  const dados: DadosType = getDados();
  const diasRestantes = defineDiasRestantesSemana();
  const newMetaSemana = Number(inputs.metaSemanaIpt.value);

  let metaSemana: number;

  if (dados.metaSemana !== newMetaSemana) {
    metaSemana = newMetaSemana;
  } else {
    metaSemana = dados.metaSemana;
  }

  const vendaSemana: number = Number(inputs.vendaSemanaIpt.value);
  const metaDia = (metaSemana - vendaSemana) / diasRestantes;

  inputs.metaDiaIpt.value = metaDia.toFixed(2);
}
