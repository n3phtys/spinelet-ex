import { AgentType } from 'app/agent-type.enum';
import { Drill } from "app/drill.enum";

export class Template {
    public hpWPFour: number;
    public type: AgentType;
    public hpWPTwo: number;
    public hpWPZero: number;
    public hpWPOne: number;
    public title: string;
    description: string;
    // tslint:disable-next-line:no-inferrable-types
    avatarUrl: string = 'https://i.imgur.com/62u4HpI.png';
    parryDV: number;
    evasionDV: number;
    soak: number;
    hardness: number;

// do not forget the incapaticated last life

    damage: number; // decided to go with one damage type
    originalSize: number;
    drill: Drill = Drill.Average;



    constructor(title: string) {
        this.title = title;
    }
}
