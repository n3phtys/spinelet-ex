import { Agent } from 'app/agent';

export class Battle {
    actors: Agent[] = [];
    // tslint:disable-next-line:no-inferrable-types
    round: number = 0;
    // tslint:disable-next-line:no-inferrable-types
    title: string = '';
    // tslint:disable-next-line:no-inferrable-types
    description: string = '';




    static fromJson(json: string): Battle {
        const cp1: Battle = JSON.parse(json);
        // turn all agents back
        const cp2: Battle = new Battle();
        cp2.actors = Agent.fromJsonArray(JSON.stringify(cp1.actors));
        cp2.round = cp1.round;
        cp2.title = cp1.title;
        cp2.description = cp2.description;
        return cp2;
    }

    static fromJsonArray(json: string): Battle[] {
        const cp: object[] = JSON.parse(json);
        return cp.map(o => Battle.fromJson(JSON.stringify(o)));
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
