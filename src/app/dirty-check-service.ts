export interface DirtyCheckService {
    revert(index: number);

    commit(Index: number);
}
