import { defineDia } from './defineDia';
import { defineDiasMes } from './defineDiasMes';

export function defineDiasRestantesMes(): number {
  const diasMes = defineDiasMes();
  const dia = defineDia();
  return diasMes - dia;
}
