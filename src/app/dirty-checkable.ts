export interface DirtyCheckable {
    markDirty(): void;

    markConsistent(): void;
}
