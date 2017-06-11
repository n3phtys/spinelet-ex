import { AgentType } from 'app/agent-type.enum';
import { Drill } from 'app/drill.enum';
import { CustomCondition } from 'app/custom-condition';
import { Damage } from 'app/damage.enum';

export class Agent {

    title: string;
    description: string;
    parryDV: number;
    evasionDV: number;
    soak: number;
    initiative: number;
    hpWPZero: number;
    hpWPOne: number;
    hpWPTwo: number;
    hpWPFour: number;
    damageLethal: number;
    damageBashing: number;
    damageAggravated: number;
    type: AgentType;
    might: number;
    size: number;
    drill: Drill;
    magnitude: number;
    hasActedThisRound: boolean;
    active: boolean;
    conditions: CustomCondition[];

    // battlegroup
    static Battlegroup(title: string, description: string,
        drill: Drill, size: number,
        might: number, basicHP: number, basicSoak: number,
        evasion: number, parry: number
        ) {
            const entitity = new Agent();
        entitity.title = title;
        entitity.description = description;
        entitity.parryDV = parry;
        entitity.evasionDV = evasion;
        entitity.soak = basicSoak + size;
        entitity.initiative = 0;
        entitity.hpWPZero = 0;
        entitity.hpWPOne = 0;
        entitity.hpWPTwo = 0;
        entitity.hpWPFour = 0;
        entitity.damageAggravated = 0;
        entitity.damageBashing = 0;
        entitity.damageLethal = 0;
        entitity.type = AgentType.Battlegroup;
        entitity.might = might;
        entitity.size = size;
        entitity.drill = drill;
        entitity.magnitude = basicHP + size;
        entitity.active = true;
        entitity.conditions = [];
    }


    // weak individual
    static WeakIndividual(soak: number, title: string, description: string,
        hpWPZero: number, hpWPOne: number, hpWPTwo: number, hpWPFour: number,
        evasion: number, parry: number
        ) {
            const entitity = new Agent();
        entitity.title = title;
        entitity.description = description;
        entitity.parryDV = parry;
        entitity.evasionDV = evasion;
        entitity.soak = soak;
        entitity.initiative = 0;
        entitity.hpWPZero = hpWPZero;
        entitity.hpWPOne = hpWPOne;
        entitity.hpWPTwo = hpWPTwo;
        entitity.hpWPFour = hpWPFour;
        entitity.damageAggravated = 0;
        entitity.damageBashing = 0;
        entitity.damageLethal = 0;
        entitity.type = AgentType.Weak;
        entitity.might = 0;
        entitity.size = 0;
        entitity.drill = Drill.Average;
        entitity.magnitude = 0;
        entitity.active = true;
        entitity.conditions = [];
    }


    // strong individual
    static StrongIndividual(soak: number, title: string, description: string,
        hpWPZero: number, hpWPOne: number, hpWPTwo: number, hpWPFour: number,
        evasion: number, parry: number
        ) {
            const entitity = new Agent();
        entitity.title = title;
        entitity.description = description;
        entitity.parryDV = parry;
        entitity.evasionDV = evasion;
        entitity.soak = soak;
        entitity.initiative = 0;
        entitity.hpWPZero = hpWPZero;
        entitity.hpWPOne = hpWPOne;
        entitity.hpWPTwo = hpWPTwo;
        entitity.hpWPFour = hpWPFour;
        entitity.damageAggravated = 0;
        entitity.damageBashing = 0;
        entitity.damageLethal = 0;
        entitity.type = AgentType.Strong;
        entitity.might = 0;
        entitity.size = 0;
        entitity.drill = Drill.Average;
        entitity.magnitude = 0;
        entitity.active = true;
        entitity.conditions = [];
    }

    // special individual
    static SpecialIndividual(soak: number, title: string, description: string,
        hpWPZero: number, hpWPOne: number, hpWPTwo: number, hpWPFour: number,
        evasion: number, parry: number
        ) {
            const entitity = new Agent();
        entitity.title = title;
        entitity.description = description;
        entitity.parryDV = parry;
        entitity.evasionDV = evasion;
        entitity.soak = soak;
        entitity.initiative = 0;
        entitity.hpWPZero = hpWPZero;
        entitity.hpWPOne = hpWPOne;
        entitity.hpWPTwo = hpWPTwo;
        entitity.hpWPFour = hpWPFour;
        entitity.damageAggravated = 0;
        entitity.damageBashing = 0;
        entitity.damageLethal = 0;
        entitity.type = AgentType.Special;
        entitity.might = 0;
        entitity.size = 0;
        entitity.drill = Drill.Average;
        entitity.magnitude = 0;
        entitity.active = true;
        entitity.conditions = [];
    }



    decreaseInitiative(d: number) {

    }
    increaseInitiative(d: number) {

    }
    setInitiative(i: number) {

    }

    increaseSize(d: number) {

    }
    decreaseSize(d: number) {

    }

    takeWitheringDamage(d: number) {
    switch (this.type) {
            case AgentType.Battlegroup: {

                break;
            }
            case AgentType.Weak: {

                break;
            }
            case AgentType.Strong: {

                break;
            }
            case AgentType.Special: {

                break;
            }
        }
    }

    takeDecisiveDamage(d: number, level: Damage) {
        switch (this.type) {
            case AgentType.Battlegroup: {

                break;
            }
            case AgentType.Weak: {

                break;
            }
            case AgentType.Strong: {

                break;
            }
            case AgentType.Special: {

                break;
            }
        }
    }
}
