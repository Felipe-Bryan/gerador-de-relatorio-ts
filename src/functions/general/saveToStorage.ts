import { DadosType } from '../../types/DadosType';
import { inputs } from '../../utils/inputList';
import { defineMes } from '../defines/defineMes';
import { getDados } from './getDados';

export function saveToStorage() {
  const rotaSap = Number(inputs.rotaSapIpt.value);
  const newProgramadas = Number(inputs.programadasIpt.value);
  const newEfetivasDR = Number(inputs.efetivasDRIpt.value);
  const newEfetivasFR = Number(inputs.efetivasFRIpt.value);
  const efetivasSemana = Number(inputs.efetivaSemanaIpt.value);
  const metaSemana = Number(inputs.metaSemanaIpt.value);
  const vendaSemana = Number(inputs.vendaSemanaAtualIpt.value);
  const vendaMes = Number(inputs.vendaMesAtualIpt.value);
  const metaMes = Number(inputs.metaMesIpt.value);
  const ddd = Number(inputs.dddIpt.value);
  const tel = Number(inputs.telIpt.value);

  const dados: DadosType = getDados();
  const efetivasDR = newEfetivasDR + dados.efetivasDR;
  const efetivasFR = newEfetivasFR + dados.efetivasFR;
  const programadas = newProgramadas + dados.programadas;

  const dadosRota: DadosType = {
    mes: Number(defineMes()),
    rotaSap,
    efetivasSemana,
    metaSemana,
    vendaSemana,
    vendaMes,
    metaMes,
    ddd,
    tel,
    efetivasDR,
    efetivasFR,
    programadas,
  };

  localStorage.setItem('dadosRota', JSON.stringify(dadosRota));
}
