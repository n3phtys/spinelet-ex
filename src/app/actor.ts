import { Template } from 'app/template';
import { CustomCondition } from 'app/custom-condition';
import { AgentType } from 'app/agent-type.enum';

export class Actor {

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
    }

}
