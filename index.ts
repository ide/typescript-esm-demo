import * as ip from 'ip';
import nullthrows from 'nullthrows';

export function getAddress(): string {
  return nullthrows(ip.address());
}
