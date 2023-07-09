import { defineDiasMes } from './defineDiasMes';

export function defineDiasRestantesMes(): number {
  const diasMes = defineDiasMes();
  const dia = new Date().getDate();
  return diasMes - dia;
}
