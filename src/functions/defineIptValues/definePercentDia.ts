import { inputs } from '../../utils/inputList';

export function definePercentDia(): void {
  const newVendaDia = Number(inputs.vendaDiaIpt.value);

  let porcentDia = ((newVendaDia / Number(inputs.metaDiaIpt.value)) * 100).toFixed(1);

  if (porcentDia == 'Infinity') {
    porcentDia = '0';
  }

  inputs.porcentDiaIpt.value = porcentDia;
}
