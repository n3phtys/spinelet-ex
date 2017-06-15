import { AgentType } from 'app/agent-type.enum';
import { Drill } from 'app/drill.enum';
import { CustomCondition } from 'app/custom-condition';

export class Agent {

    title: string;
    description: string;
    // tslint:disable-next-line:no-inferrable-types
    avatarUrl: string = 'https://i.imgur.com/62u4HpI.png';
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

    damage: number; // decided to go with one damage type
    type: AgentType = AgentType.Special;
    might: number;
    size: number;
    drill: Drill = Drill.Average;
    magnitude: number; // total health points (only change if size changes)
    hasActedThisRound: boolean;
    active: boolean;
    conditions: CustomCondition[];

    background_color: string;


    // battlegroup
    static Battlegroup(title: string, description: string, avatarUrl: string,
        drill: Drill, size: number,
        might: number, basicHP: number, basicSoak: number, hardness: number,
        evasion: number, parry: number
        ): Agent {
            const entitity = new Agent();
        entitity.title = title;
        entitity.avatarUrl = avatarUrl;
        entitity.description = description;
        entitity.parryDV = parry;
        entitity.evasionDV = evasion;
        entitity.soak = basicSoak + size;
        entitity.hardness = hardness;
        entitity.initiative = 0;
        entitity.hpWPZero = basicHP;
        entitity.hpWPOne = 0;
        entitity.hpWPTwo = 0;
        entitity.hpWPFour = 0;
        entitity.damage = 0;
        entitity.type = AgentType.Battlegroup;
        entitity.might = might;
        entitity.size = size;
        entitity.drill = drill;
        entitity.magnitude = basicHP + size + 1; // +1 for incapicated
        entitity.active = true;
        entitity.conditions = [];
        entitity.recomputeBackgroundColor();
        return entitity;
    }


    // weak individual
    static WeakIndividual(soak: number, hardness: number, title: string, description: string, avatarUrl: string,
        hpWPZero: number, hpWPOne: number, hpWPTwo: number, hpWPFour: number,
        evasion: number, parry: number
        ): Agent {
            const entitity = new Agent();
        entitity.title = title;
        entitity.avatarUrl = avatarUrl;
        entitity.description = description;
        entitity.parryDV = parry;
        entitity.evasionDV = evasion;
        entitity.soak = soak;
        entitity.hardness = hardness;
        entitity.initiative = 0;
        entitity.hpWPZero = hpWPZero;
        entitity.hpWPOne = hpWPOne;
        entitity.hpWPTwo = hpWPTwo;
        entitity.hpWPFour = hpWPFour;
        entitity.damage = 0;
        entitity.type = AgentType.Weak;
        entitity.might = 0;
        entitity.size = 0;
        entitity.drill = Drill.Average;
        entitity.magnitude = 0;
        entitity.active = true;
        entitity.conditions = [];
        entitity.recomputeBackgroundColor();
        return entitity;
    }


    // strong individual
    static StrongIndividual(soak: number, hardness: number, title: string, description: string, avatarUrl: string,
        hpWPZero: number, hpWPOne: number, hpWPTwo: number, hpWPFour: number,
        evasion: number, parry: number
        ): Agent {
            const entitity = new Agent();
        entitity.title = title;
        entitity.avatarUrl = avatarUrl;
        entitity.description = description;
        entitity.parryDV = parry;
        entitity.evasionDV = evasion;
        entitity.soak = soak;
        entitity.hardness = hardness;
        entitity.initiative = 0;
        entitity.hpWPZero = hpWPZero;
        entitity.hpWPOne = hpWPOne;
        entitity.hpWPTwo = hpWPTwo;
        entitity.hpWPFour = hpWPFour;
        entitity.damage = 0;
        entitity.type = AgentType.Strong;
        entitity.might = 0;
        entitity.size = 0;
        entitity.drill = Drill.Average;
        entitity.magnitude = 0;
        entitity.active = true;
        entitity.conditions = [];
        entitity.recomputeBackgroundColor();
        return entitity;
    }

    // special individual
    static SpecialIndividual(soak: number, hardness: number, title: string, description: string, avatarUrl: string,
        hpWPZero: number, hpWPOne: number, hpWPTwo: number, hpWPFour: number,
        evasion: number, parry: number
        ): Agent {
            const entitity = new Agent();
        entitity.title = title;
        entitity.avatarUrl = avatarUrl;
        entitity.description = description;
        entitity.parryDV = parry;
        entitity.evasionDV = evasion;
        entitity.soak = soak;
        entitity.hardness = hardness;
        entitity.initiative = 0;
        entitity.hpWPZero = hpWPZero;
        entitity.hpWPOne = hpWPOne;
        entitity.hpWPTwo = hpWPTwo;
        entitity.hpWPFour = hpWPFour;
        entitity.damage = 0;
        entitity.type = AgentType.Special;
        entitity.might = 0;
        entitity.size = 0;
        entitity.drill = Drill.Average;
        entitity.magnitude = 0;
        entitity.active = true;
        entitity.conditions = [];
        entitity.recomputeBackgroundColor();
        return entitity;
    }

    static buildFromTemporaryAgent(agent: Agent): Agent {
        if (agent.type === AgentType.Battlegroup) {
            return this.Battlegroup(agent.title, agent.description, agent.avatarUrl,
            agent.drill, agent.size, agent.might, agent.hpWPZero, agent.soak, agent.hardness,
            agent.evasionDV, agent.parryDV);
        } else if (agent.type === AgentType.Special) {
            return this.SpecialIndividual(agent.soak, agent.hardness, agent.title, agent.description,
            agent.avatarUrl, agent.hpWPZero, agent.hpWPOne, agent.hpWPTwo, agent.hpWPFour,
            agent.evasionDV, agent.parryDV);
        } else if (agent.type === AgentType.Strong) {
            return this.StrongIndividual(agent.soak, agent.hardness, agent.title, agent.description,
            agent.avatarUrl, agent.hpWPZero, agent.hpWPOne, agent.hpWPTwo, agent.hpWPFour,
            agent.evasionDV, agent.parryDV);
        } else {
            return this.WeakIndividual(agent.soak, agent.hardness, agent.title, agent.description,
            agent.avatarUrl, agent.hpWPZero, agent.hpWPOne, agent.hpWPTwo, agent.hpWPFour,
            agent.evasionDV, agent.parryDV);
        }
    }

    static fromJsonArray(json: string): Agent[] {
        const cp: object[] = JSON.parse(json);
        return cp.map(o => Object.setPrototypeOf(o, Agent.prototype));
    }

    static fromJson(json: string): Agent {
        const cp = JSON.parse(json);
return Object.setPrototypeOf(cp, Agent.prototype);
    }


    public decreaseInitiative(d: number) {
        // TODO: implement more
        this.initiative -= d;
    }
    public increaseInitiative(d: number) {

        // TODO: implement more
        this.initiative += d;
    }
    public setInitiative(i: number) {

        // TODO: implement more
        this.initiative = i;
    }

    increaseSize(d: number) {

    }
    decreaseSize(d: number) {

    }

    getTotalHealth(): number {
        return this.hpWPFour + this.hpWPTwo + this.hpWPOne + this.hpWPZero + 1;
    }

    takeWitheringDamage(d: number) {
    switch (this.type) {
            case AgentType.Battlegroup: {
                let remaining: number = d;
                while (remaining > 0) {
                    const delta = Math.min(this.magnitude - this.damage, remaining);
                    this.damage += delta;
                    if (this.size === 0 && this.magnitude === this.damage) {
                        break;
                    }
                    if (this.magnitude === this.damage) {
                        this.size -= 1;
                        this.magnitude = this.size + this.getTotalHealth();
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
        switch (this.type) {
            case AgentType.Battlegroup: {
                let remaining: number = d;
                while (remaining > 0) {
                    const delta = Math.min(this.magnitude - this.damage, remaining);
                    this.damage += delta;
                    if (this.size === 0 && this.magnitude === this.damage) {
                        break;
                    }
                    if (this.magnitude === this.damage) {
                        this.size -= 1;
                        this.magnitude = this.size + this.getTotalHealth();
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
        switch (this.type) {
            case AgentType.Battlegroup: {
                let remaining: number = d;
                while (remaining > 0) {
                    const delta = Math.min(this.damage, remaining);
                    this.damage -= delta;
                    if (this.damage === 0 && remaining > 0) {
                        this.size += 1;
                        this.magnitude = this.getTotalHealth() + this.size;
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

    recomputeBackgroundColor() {
        if (!this.active) {
     this.background_color =  'grey';
    } else if (this.hasActedThisRound) {
this.background_color = 'white';
    } else {
this.background_color =       'lightblue';
    }
    }



    toJson(): string {
        return JSON.stringify(this)
    }

    clone(): Agent {
        return Agent.fromJson(this.toJson());
    }

}



export const PREMADE_AGENTS: Agent[] = [
    Agent.Battlegroup('Battlegroup (Battle Ready Troops)',
        'A standard unit of about 50 soldiers well trained and armed',
        'https://qph.ec.quoracdn.net/main-qimg-f1d0a1149889f9bdd807f218fe533478-c',
        Drill.Average, 2, 0, 6, 8, 0, 2, 4),
    Agent.WeakIndividual(6, 0, 'Militia soldier', 'The weakest kind of mortal soldier that is worth tracking.',
    'https://www.celestialheavens.com/heroespedia/images/4/48/H5Peasant.jpg', 1, 2, 2, 1, 2, 2),
    Agent.StrongIndividual(8, 4, 'Wyvern', 'A Wyvern. Some can be used as mounts',
    'https://vignette3.wikia.nocookie.net/criticalrole/images/e/e8/Wyvern.jpg/revision/latest?cb=20150810045153', 3, 3, 3, 1, 4, 3),
    Agent.SpecialIndividual(12, 4, 'Deathclaw', 'You should run now',
    'https://vignette1.wikia.nocookie.net/fallout/images/0/01/FNV_DeathclawAlpha.png', 3, 5, 5, 4, 4, 6),
    Agent.SpecialIndividual(14, 7, 'Arete-Series Artificial Hero', 'Sparring partner for Dawn Castes',
    'https://cdnb.artstation.com/p/assets/images/images/004/721/353/large/dmitry-lyapin-final-image.jpg?1485792698', 10, 0, 0, 0, 6, 7),
    Agent.SpecialIndividual(16, 10, 'Experienced Dragon-Blood', 'A military directed Dragonblooded of Essence 3 carrying artifact weaponry',
    'https://cdn.obsidianportal.com/assets/109213/DragonBloodedCover.jpg',
    1, 7, 7, 1, 0, 5)
] as Agent[];
