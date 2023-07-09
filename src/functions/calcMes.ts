import { inputs } from '../utils/inputList';

export function calcMes() {
  const vendaMes = Number(inputs.vendaMesIpt.value);
  let newVendaMes = vendaMes + Number(inputs.vendaDiaIpt.value);

  inputs.vendaMesAtualIpt.value = String(newVendaMes);

  let porcentMes: any = ((Number(inputs.vendaMesAtualIpt.value) / Number(inputs.metaMesIpt.value)) * 100).toFixed(1);

  if (porcentMes == 'Infinity') {
    porcentMes = 0;
  }

  inputs.porcentMesIpt.value = porcentMes;
}
