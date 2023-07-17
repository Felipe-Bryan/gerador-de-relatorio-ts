import { semana } from '../../utils/semana';

export function defineDiaSemana(): string {
  return semana[new Date().getDay()];
}
