import { DirtyCheckable } from 'app/dirty-checkable';

export abstract class DirtyCheckService<T extends DirtyCheckable> {
    public dirtyArray: T[] = [];
    public persistentArray: T[] = [];

    public localStorageKey: string;

    revertChanges(entityIndex: number): void {
        if (this.dirtyArray.length > entityIndex && entityIndex >= 0) {
            this.persistentArray[entityIndex].markConsistent();
            this.dirtyArray[entityIndex] = this.entityFromJson(JSON.stringify(this.persistentArray[entityIndex]));
        }
    }

    commitChanges(entityIndex: number): void {
        if (this.dirtyArray.length > entityIndex && entityIndex >= 0) {
            this.dirtyArray[entityIndex].markConsistent();
            this.persistentArray[entityIndex] = this.entityFromJson(JSON.stringify(this.dirtyArray[entityIndex]));
            this.writeToLocalStorage();
        }
    }

    writeToLocalStorage(): void {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.persistentArray));
    }

    abstract entityFromJson(json: string): T;

    abstract entityArrayFromJson(json: string): T[];

    cloneEntity(t: T): T {
        return this.entityFromJson(JSON.stringify(t));
    }

    loadFromLocalStorageAndReturnDirty(): T[] {
        const json = localStorage.getItem(this.localStorageKey);
        if (json != null && json.trim().length > 0) {
            this.dirtyArray = this.entityArrayFromJson(json);
            this.persistentArray = this.entityArrayFromJson(json);
        } else {
            this.dirtyArray = [];
            this.persistentArray = [];
        }
        return this.dirtyArray;
    }

    initialize() {
        this.loadFromLocalStorageAndReturnDirty();
    }

    remove(entityIndex: number): void {
        if (this.dirtyArray.length > entityIndex && entityIndex >= 0) {
            // remove from both arrays
            this.persistentArray.splice(entityIndex, 1);
            this.dirtyArray.splice(entityIndex, 1);

            // persist persistent array
            this.writeToLocalStorage();
        }
    }

    // return index of new entity
    add(entity: T): number {
        // add to both arrays
        const t1: T = this.entityFromJson(JSON.stringify(entity));
        const t2: T = this.entityFromJson(JSON.stringify(entity));
        const index = this.persistentArray.length;
        this.persistentArray.push(t1);
        this.dirtyArray.push(t2);

        // persist persistent array
        this.writeToLocalStorage();
        return index;
    }
}
