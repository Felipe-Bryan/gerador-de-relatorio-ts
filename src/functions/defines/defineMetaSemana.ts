import { inputs } from '../../utils/inputList';
import { defineDiasRestantesMes } from './defineDiasRestantesMes';
import { defineDiasRestantesSemana } from './defineDiasRestantesSemana';

export const defineMetaSemana = () => {
  const metaSemana = Number(inputs.metaSemanaIpt.value);

  if (metaSemana === 0) {
    const metaMes = Number(inputs.metaMesIpt.value);

    const diasRestantesMes = defineDiasRestantesMes();
    const diasRestantesSemana = defineDiasRestantesSemana();

    const faltaMetaMes = metaMes / diasRestantesMes;

    return faltaMetaMes * diasRestantesSemana;
  }

  return metaSemana;
};
