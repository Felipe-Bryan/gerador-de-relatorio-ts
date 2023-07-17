import { meses } from '../../utils/meses';

export function defineMes(): string {
  return meses[new Date().getMonth()];
}
