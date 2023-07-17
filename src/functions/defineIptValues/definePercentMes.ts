import { inputs } from '../../utils/inputList';

export function definePercentMes(): void {
  let porcentMes = ((Number(inputs.vendaMesAtualIpt.value) / Number(inputs.metaMesIpt.value)) * 100).toFixed(1);

  if (porcentMes == 'Infinity') {
    porcentMes = '0';
  }

  inputs.porcentMesIpt.value = porcentMes;
}
