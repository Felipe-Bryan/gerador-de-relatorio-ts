import { definePercentMes } from '../defineIptValues/definePercentMes';
import { defineVendaMesAtual } from '../defineIptValues/defineVendaMesAtual';

export function calcMes(): void {
  defineVendaMesAtual();
  definePercentMes();
}
