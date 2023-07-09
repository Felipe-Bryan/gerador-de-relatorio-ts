export function getDados() {
  let info = JSON.parse(localStorage.getItem('dadosRota') || '{}');

  if (!info.rotaSap) {
    info = {
      mes: 0,
      rotaSap: 0,
      efetivasSemana: 0,
      vendaSemana: 0,
      vendaMes: 0,
      metaDia: 0,
      metaSemana: 0,
      metaMes: 0,
      ddd: 0,
      tel: 0,
    };
  }

  return info;
}
