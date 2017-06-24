import { Pipe, PipeTransform } from '@angular/core';
import { Agent } from 'app/agent';
import { Woundable } from "app/woundable";

@Pipe({
  name: 'woundpenalty'
})
export class WoundpenaltyPipe implements PipeTransform {

  transform(value: Woundable, args?: any): any {
    const agent = value as Woundable;

    return agent.calculateWoundPenalty();

  }

}
