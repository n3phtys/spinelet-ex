import { Pipe, PipeTransform } from '@angular/core';
import { Agent } from 'app/agent';

@Pipe({
  name: 'woundpenalty'
})
export class WoundpenaltyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const agent = value as Agent;

    let totalDamage = agent.damage;
    const hpZeroesLeft = Math.max(0, agent.hpWPZero - totalDamage);
    totalDamage = Math.max(0, totalDamage - agent.hpWPZero);
    const hpOnesLeft = Math.max(0, agent.hpWPOne - totalDamage);
    totalDamage = Math.max(0, totalDamage - agent.hpWPOne);
    const hpTwosLeft = Math.max(0, agent.hpWPTwo - totalDamage);
    totalDamage = Math.max(0, totalDamage - agent.hpWPTwo);
    const hpFoursLeft = Math.max(0, agent.hpWPFour - totalDamage);
    totalDamage = Math.max(0, totalDamage - agent.hpWPFour);
    const hpIncLeft = Math.max(0, 1 - totalDamage);

    if (hpIncLeft < 1) {
      return -8;
    } else if (hpFoursLeft < agent.hpWPFour) {
      return -4;
    } else if (hpTwosLeft < agent.hpWPTwo) {
      return -2;
    } else if (hpOnesLeft < agent.hpWPOne) {
      return -1;
    } else {
      return 0;
    }
  }

}
