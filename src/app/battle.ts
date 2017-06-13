import { Agent } from 'app/agent';

export class Battle {
    actors: Agent[];
    round: number;
    title: string;
    description: string;




    static fromJson(json: string): Battle {
        const cp = JSON.parse(json);
return Object.setPrototypeOf(cp, Battle.prototype);
    }


    increaseRound() {
        this.round += 1;
        this.actors.forEach(a => a.hasActedThisRound = false);
    }

    toJson(): string {
        return JSON.stringify(this)
    }

    clone(): Battle {
        return Battle.fromJson(this.toJson());
    }
}
