import { DadosType } from '../../types/DadosType';

export function getDados() {
  let info: DadosType = JSON.parse(localStorage.getItem('dadosRota') || '{}');

  if (!info.rotaSap) {
    info = {
      mes: 0,
      rotaSap: 0,
      efetivasSemana: 0,
      vendaSemana: 0,
      vendaMes: 0,
      metaSemana: 0,
      metaMes: 0,
      ddd: 0,
      tel: 0,
      efetivasDR: 0,
      efetivasFR: 0,
      programadas: 0,
    };
  }

  return info;
}
