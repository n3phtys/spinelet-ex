import { Template } from 'app/template';
import { CustomCondition } from 'app/custom-condition';
import { AgentType } from 'app/agent-type.enum';
import { Woundable } from "app/woundable";

export class Actor  implements Woundable {
    public woundpenalty: number;

    public underlyingTemplate: Template;
    public initiative: number;



    damage: number; // decided to go with one damage type
    activeSize: number;
    magnitude: number; // total health points (only change if size changes)
    hasActedThisRound: boolean;
    active: boolean;
    conditions: CustomCondition[];
    backgroundColor: string;


    commitAction() {
        this.hasActedThisRound = true;
        this.calculateBackgroundColor();
    }

    disable() {
        this.active = false;
        this.calculateBackgroundColor();
    }

    enable() {
        this.active = true;
        this.calculateBackgroundColor();
    }

    resetAction() {
        this.hasActedThisRound = false;
        this.calculateBackgroundColor();
    }

    calculateBackgroundColor() {
    if (!this.active) {
         this.backgroundColor =  'grey';
    } else if (this.hasActedThisRound) {
        this.backgroundColor = 'white';
    } else {
        this.backgroundColor = 'lightblue';
    }
}

    getTotalHealth(): number {
        return this.underlyingTemplate.hpWPFour + this.underlyingTemplate.hpWPTwo +
        this.underlyingTemplate.hpWPOne + this.underlyingTemplate.hpWPZero + 1;
    }

    takeWitheringDamage(d: number) {
switch (this.underlyingTemplate.type) {
            case AgentType.Battlegroup: {
                let remaining: number = d;
                while (remaining > 0) {
                    const delta = Math.min(this.magnitude - this.damage, remaining);
                    this.damage += delta;
                    if (this.activeSize === 0 && this.magnitude === this.damage) {
                        break;
                    }
                    if (this.magnitude === this.damage) {
                        this.activeSize -= 1;
                        this.magnitude = this.activeSize + this.getTotalHealth();
                        this.damage = 0;
                    }
                    remaining -= delta;
                }
                break;
            }
            case AgentType.Weak: {
                const delta = Math.min( this.getTotalHealth() - this.damage, d);
                this.damage += delta;
                break;
            }
            case AgentType.Strong: {
                const delta = Math.min( this.getTotalHealth() - this.damage, d);
                this.damage += delta;
                break;
            }
            case AgentType.Special: {
                this.initiative -= d;
                break;
            }
        }
    this.calculateWoundPenalty();
    }

    takeDecisiveDamage(d: number) {
switch (this.underlyingTemplate.type) {
            case AgentType.Battlegroup: {
                let remaining: number = d;
                while (remaining > 0) {
                    const delta = Math.min(this.magnitude - this.damage, remaining);
                    this.damage += delta;
                    if (this.activeSize === 0 && this.magnitude === this.damage) {
                        break;
                    }
                    if (this.magnitude === this.damage) {
                        this.activeSize -= 1;
                        this.magnitude = this.activeSize + this.getTotalHealth();
                        this.damage = 0;
                    }
                    remaining -= delta;
                }
                break;
            }
            case AgentType.Weak: {
                const delta = Math.min( this.getTotalHealth() - this.damage, d);
                this.damage += delta;
                break;
            }
            case AgentType.Strong: {
                const delta = Math.min( this.getTotalHealth() - this.damage, d);
                this.damage += delta;
                break;
            }
            case AgentType.Special: {

                const delta = Math.min( this.getTotalHealth() - this.damage, d);
                this.damage += delta;
                break;
            }
        }
    this.calculateWoundPenalty();
    }

    healDamage(d: number) {
switch (this.underlyingTemplate.type) {
            case AgentType.Battlegroup: {
                let remaining: number = d;
                while (remaining > 0) {
                    const delta = Math.min(this.damage, remaining);
                    this.damage -= delta;
                    if (this.damage === 0 && remaining > 0) {
                        this.activeSize += 1;
                        this.magnitude = this.getTotalHealth() + this.activeSize;
                        this.damage = this.magnitude;
                    }
                    remaining -= delta;
                }
            break;
        }
        default: {
                const delta = Math.min( this.damage, d);
                this.damage -= delta;
        }
    }
    this.calculateWoundPenalty();
    }


    getHpOne(): number {
        return this.underlyingTemplate.hpWPOne;
    }
    getHPZero(): number {
        return this.underlyingTemplate.hpWPZero;
    }
    getHPTwo(): number {
        return this.underlyingTemplate.hpWPTwo;
    }
    getHPFour(): number {
        return this.underlyingTemplate.hpWPFour;
    }
    calculateWoundPenalty(): number {

    let totalDamage = this.damage;
    const hpZeroesLeft = Math.max(0, this.getHPZero() - totalDamage);
    totalDamage = Math.max(0, totalDamage - this.getHPZero());
    const hpOnesLeft = Math.max(0, this.getHpOne() - totalDamage);
    totalDamage = Math.max(0, totalDamage - this.getHpOne());
    const hpTwosLeft = Math.max(0, this.getHPTwo() - totalDamage);
    totalDamage = Math.max(0, totalDamage - this.getHPTwo());
    const hpFoursLeft = Math.max(0, this.getHPFour() - totalDamage);
    totalDamage = Math.max(0, totalDamage - this.getHPFour());
    const hpIncLeft = Math.max(0, 1 - totalDamage);

    let result = 0;
    if (hpIncLeft < 1) {
      result = -8;
    } else if (hpFoursLeft < this.getHPFour()) {
      result = -4;
    } else if (hpTwosLeft < this.getHPTwo()) {
      result = -2;
    } else if (hpOnesLeft < this.getHpOne()) {
      result = -1;
    } else {
      result = 0;
    }
    this.woundpenalty = result;
    return result;

}

}
