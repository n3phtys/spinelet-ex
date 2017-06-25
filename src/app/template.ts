import { AgentType } from 'app/agent-type.enum';
import { Drill } from 'app/drill.enum';
import { DirtyCheckable } from 'app/dirty-checkable';

export class Template implements DirtyCheckable {
    public type: AgentType;
    public hpWPZero: number;
    public hpWPOne: number;
    public hpWPTwo: number;
    public hpWPFour: number;
// do not forget the incapaticated last life

    public title: string;
    description: string;
    avatarUrl: string;
    parryDV: number;
    evasionDV: number;
    soak: number;
    hardness: number;


    damage: number; // decided to go with one damage type
    originalSize: number;
    drill: Drill = Drill.Average;

    dirtyBit: boolean;


    constructor(title: string) {
        this.title = title;
    }

    markDirty(): void {
        this.dirtyBit = true;
    }
    markConsistent(): void {
        this.dirtyBit = true;
    }
}
