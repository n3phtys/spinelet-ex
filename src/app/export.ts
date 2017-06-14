import { Agent } from 'app/agent';
import { Battle } from 'app/battle';

export class Export {


    public static fromJson(json: string): Export {
        const raw = JSON.parse(json) as Export;
        const result = new Export(Agent.fromJsonArray(
            JSON.stringify(raw.templates)), Battle.fromJsonArray(
                JSON.stringify(raw.battles)), raw.index);
        return result;
    }


    constructor(public templates: Agent[], public battles: Battle[], public index: number) {
    }

}
