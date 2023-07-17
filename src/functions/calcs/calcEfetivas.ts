import { defineEfetivas } from '../defineIptValues/defineEfetivas';
import { definePercentEfetivas } from '../defineIptValues/definePercentEfetivas';

export function calcEfetivas(): void {
  defineEfetivas();
  definePercentEfetivas();
}
