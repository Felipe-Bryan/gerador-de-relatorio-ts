import { inputs } from '../../utils/inputList';

export default function defineVendaSemanaAtual(): void {
  const currentVendaSemana = Number(inputs.vendaSemanaIpt.value);
  const newVendaDia = Number(inputs.vendaDiaIpt.value);

  inputs.vendaSemanaAtualIpt.value = String(currentVendaSemana + newVendaDia);
}
