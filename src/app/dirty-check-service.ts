import { DirtyCheckable } from 'app/dirty-checkable';

export abstract class DirtyCheckService<T extends DirtyCheckable> {
    public dirtyArray: T[] = [];
    public persistentArray: T[] = [];

    public localStorageKey: string;

    revertChanges(entityIndex: number): void {
        this.persistentArray[entityIndex].markConsistent();
        this.dirtyArray[entityIndex] = this.entityFromJson(JSON.stringify(this.persistentArray[entityIndex]));
    }

    commitChanges(entityIndex: number): void {
        this.dirtyArray[entityIndex].markConsistent();
        this.persistentArray[entityIndex] = this.entityFromJson(JSON.stringify(this.dirtyArray[entityIndex]));
        this.writeToLocalStorage();
    }

    writeToLocalStorage(): void {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.persistentArray));
    }

    abstract entityFromJson(json: string): T;

    abstract entityArrayFromJson(json: string): T[];

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

    remove(index: number): void {
        // remove from both arrays
        this.persistentArray.splice(index, 1);
        this.dirtyArray.splice(index, 1);

        // persist persistent array
        this.writeToLocalStorage();
    }

    add(entity: T): void {
        // add to both arrays
        const t1: T = this.entityFromJson(JSON.stringify(entity));
        const t2: T = this.entityFromJson(JSON.stringify(entity));
        this.persistentArray.push(t1);
        this.dirtyArray.push(t2);

        // persist persistent array
        this.writeToLocalStorage();
    }
}
