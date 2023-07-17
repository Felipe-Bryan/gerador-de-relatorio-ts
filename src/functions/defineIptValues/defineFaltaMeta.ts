import { DadosType } from '../../types/DadosType';
import { inputs } from '../../utils/inputList';
import { getDados } from '../general/getDados';

export function defineFaltaMeta(): void {
  const dados: DadosType = getDados();

  const vendaDia: number = Number(inputs.vendaDiaIpt.value);

  const metaSemana: number = Number(inputs.metaSemanaIpt.value);
  console.log('meta' + metaSemana);

  const vendaSemana: number = dados.vendaSemana + vendaDia;
  console.log('venda' + vendaSemana);

  const faltaMeta: number = metaSemana - vendaSemana;
  console.log('falta' + faltaMeta);

  inputs.faltaMetaIpt.value = String(faltaMeta);
}
