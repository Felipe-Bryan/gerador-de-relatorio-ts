import { inputs } from '../utils/inputList';
import { calcSemana } from './calcSemana';

export function calcDia() {
  const currentVendaSemana = Number(inputs.vendaSemanaIpt.value);
  const currentVendaMes = Number(inputs.vendaMesIpt.value);
  const newVendaDia = Number(inputs.vendaDiaIpt.value);

  const vendaSemanaValue = currentVendaSemana + newVendaDia;
  const vendaMesValue = currentVendaMes + newVendaDia;

  let porcentDia = ((newVendaDia / Number(inputs.metaDiaIpt.value)) * 100).toFixed(1);

  if (porcentDia == 'Infinity') {
    porcentDia = '0';
  }

  inputs.vendaSemanaAtualIpt.value = String(vendaSemanaValue);
  inputs.vendaMesAtualIpt.value = String(vendaMesValue);
  inputs.porcentDiaIpt.value = porcentDia;

  inputs.faltaMetaIpt.value = String(Number(inputs.metaSemanaIpt.value) - vendaSemanaValue);

  let porcentMes = ((Number(inputs.vendaMesAtualIpt.value) / Number(inputs.metaMesIpt.value)) * 100).toFixed(1);

  if (porcentMes == 'Infinity') {
    porcentMes = '0';
  }

  inputs.porcentMesIpt.value = porcentMes;

  let porcentSemana = ((Number(inputs.vendaSemanaAtualIpt.value) / Number(inputs.metaSemanaIpt.value)) * 100).toFixed(
    1
  );

  if (porcentSemana == 'Infinity') {
    porcentSemana = '0';
  }

  inputs.porcentSemanaIpt.value = porcentSemana;
  calcSemana();
}
