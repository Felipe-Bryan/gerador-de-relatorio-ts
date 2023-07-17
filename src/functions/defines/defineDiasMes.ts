import { defineDia } from './defineDia';
import { defineMes } from './defineMes';

export function defineDiasMes(): number {
  const dia = defineDia();
  const mes = defineMes();
  let anoBissexto: boolean = false;

  let anoAtual = new Date().getFullYear();
  if (anoAtual % 4 === 0 && anoAtual % 1 !== 0) {
    anoBissexto = true;
  } else {
    anoBissexto = false;
  }

  if (mes == '01' || mes == '03' || mes == '05' || mes == '07' || mes == '08' || mes == '10' || mes == '12') {
    return 31;
  } else if (mes == '02' && anoBissexto) {
    return 29;
  } else if (mes == '02' && !anoBissexto) {
    return 28;
  } else {
    return 30;
  }
}
