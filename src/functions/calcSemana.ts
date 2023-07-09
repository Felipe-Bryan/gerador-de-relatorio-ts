import { inputs } from '../utils/inputList';

export function calcSemana() {
  const vendaSemana = Number(inputs.vendaSemanaIpt.value);
  const newVendaSemana = vendaSemana + Number(inputs.vendaDiaIpt.value);

  inputs.vendaSemanaAtualIpt.value = String(newVendaSemana);

  const metaSemana = Number(inputs.metaSemanaIpt.value);
  // inputs.metaDiaIpt.value = String(defineMetaDia());

  let porcentDia: any = ((Number(inputs.vendaDiaIpt.value) / Number(inputs.metaDiaIpt.value)) * 100).toFixed(1);

  if (porcentDia == 'Infinity') {
    porcentDia = 0;
  }
  inputs.porcentDiaIpt.value = porcentDia;

  let porcentSemana: any = (
    (Number(inputs.vendaSemanaAtualIpt.value) / Number(inputs.metaSemanaIpt.value)) *
    100
  ).toFixed(1);

  if (porcentSemana == 'Infinity') {
    porcentSemana = 0;
  }

  let faltaMeta: any = Number(inputs.metaSemanaIpt.value) - newVendaSemana;

  if (faltaMeta <= 0) {
    faltaMeta = '-';
  }

  inputs.faltaMetaIpt.value = String(faltaMeta);
  inputs.porcentSemanaIpt.value = porcentSemana;
}
