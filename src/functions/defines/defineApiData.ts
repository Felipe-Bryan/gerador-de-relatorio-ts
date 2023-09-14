import { inputs } from '../../utils/inputList';

export const defineApiData = () => {
  const data = {
    rota: inputs.rotaSapIpt.value,
    valor: Number(inputs.vendaDiaIpt.value),
    programadas: Number(inputs.programadasIpt.value),
    efetivasFR: Number(inputs.efetivasFRIpt.value),
    efetivasDR: Number(inputs.efetivasDRIpt.value),
  };

  return data;
};
