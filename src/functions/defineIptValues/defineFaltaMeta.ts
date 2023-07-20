import { DadosType } from '../../types/DadosType';
import { inputs } from '../../utils/inputList';
import { getDados } from '../general/getDados';

export function defineFaltaMeta(): void {
  const dados: DadosType = getDados();

  const vendaDia: number = Number(inputs.vendaDiaIpt.value);

  const metaSemana: number = Number(inputs.metaSemanaIpt.value);

  const vendaSemana: number = dados.vendaSemana + vendaDia;

  const faltaMeta: number = metaSemana - vendaSemana;

  inputs.faltaMetaIpt.value = String(faltaMeta);
}
