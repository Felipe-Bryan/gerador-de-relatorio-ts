import { inputs } from '../../utils/inputList';

export function defineVendaMesAtual(): void {
  const currentVendaMes = Number(inputs.vendaMesIpt.value);
  const newVendaDia = Number(inputs.vendaDiaIpt.value);

  const vendaMesValue = currentVendaMes + newVendaDia;

  inputs.vendaMesAtualIpt.value = String(vendaMesValue);
}
