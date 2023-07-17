import { DadosType } from '../../types/DadosType';
import { inputs } from '../../utils/inputList';
import { defineMes } from '../defines/defineMes';

export function saveToStorage() {
  const rotaSap = Number(inputs.rotaSapIpt.value);
  const efetivasSemana = Number(inputs.efetivaSemanaIpt.value);
  const metaDia = Number(inputs.metaDiaIpt.value);
  const metaSemana = Number(inputs.metaSemanaIpt.value);
  const vendaSemana = Number(inputs.vendaSemanaAtualIpt.value);
  const vendaMes = Number(inputs.vendaMesAtualIpt.value);
  const metaMes = Number(inputs.metaMesIpt.value);
  const ddd = Number(inputs.dddIpt.value);
  const tel = Number(inputs.telIpt.value);

  const dadosRota: DadosType = {
    mes: Number(defineMes()),
    rotaSap,
    efetivasSemana,
    metaDia,
    metaSemana,
    vendaSemana,
    vendaMes,
    metaMes,
    ddd,
    tel,
  };

  localStorage.setItem('dadosRota', JSON.stringify(dadosRota));
}
