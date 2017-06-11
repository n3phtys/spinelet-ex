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
    hardness: number;
    initiative: number;
    hpWPZero: number;
    hpWPOne: number;
    hpWPTwo: number;
    hpWPFour: number;

// do not forget the incapaticated last life

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
        might: number, basicHP: number, basicSoak: number, hardness: number,
        evasion: number, parry: number
        ): Agent {
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
        entitity.magnitude = basicHP + size + 1; // +1 for incapicated
        entitity.active = true;
        entitity.conditions = [];
        return entitity;
    }


    // weak individual
    static WeakIndividual(soak: number, hardness: number, title: string, description: string,
        hpWPZero: number, hpWPOne: number, hpWPTwo: number, hpWPFour: number,
        evasion: number, parry: number
        ): Agent {
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
        return entitity;
    }


    // strong individual
    static StrongIndividual(soak: number, hardness: number, title: string, description: string,
        hpWPZero: number, hpWPOne: number, hpWPTwo: number, hpWPFour: number,
        evasion: number, parry: number
        ): Agent {
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
        return entitity;
    }

    // special individual
    static SpecialIndividual(soak: number, hardness: number, title: string, description: string,
        hpWPZero: number, hpWPOne: number, hpWPTwo: number, hpWPFour: number,
        evasion: number, parry: number
        ): Agent {
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
        return entitity;
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


export const PREMADE_AGENTS: Agent[] = [
    Agent.Battlegroup('Battlegroup (Battle Ready Troops)',
        'A standard unit of about 50 soldiers well trained and armed',
        Drill.Average, 2, 0, 6, 8, 0, 2, 4),
    Agent.WeakIndividual(6, 0, 'Militia soldier', 'The weakest kind of mortal soldier that is worth tracking.', 1, 2, 2, 1, 2, 2),
    Agent.StrongIndividual(8, 4, 'Wyvern', 'A Wyvern. Some can be used as mounts', 3, 3, 3, 1, 4, 3),
    Agent.SpecialIndividual(12, 4, 'Deathclaw', 'You should run now', 3, 5, 5, 4, 4, 6),
    Agent.SpecialIndividual(14, 7, 'Arete-Series Artificial Hero', 'Sparring partner for Dawn Castes', 10, 0, 0, 0, 6, 7),
    Agent.SpecialIndividual(16, 10, 'Experienced Dragon-Blood', 'A military directed Dragonblooded of Essence 3 carrying artifact weaponry',
    1, 7, 7, 1, 0, 5)
] as Agent[];
