export interface Woundable {
    woundpenalty: number;
    damage: number;

    getHpOne(): number;
    getHPZero(): number;
    getHPTwo(): number;
    getHPFour(): number;

    calculateWoundPenalty(): number;

    /*
    {

    let totalDamage = this.damage;
    const hpZeroesLeft = Math.max(0, this.getHPZero() - totalDamage);
    totalDamage = Math.max(0, totalDamage - this.getHPZero());
    const hpOnesLeft = Math.max(0, this.getHpOne() - totalDamage);
    totalDamage = Math.max(0, totalDamage - this.getHpOne());
    const hpTwosLeft = Math.max(0, this.getHPTwo() - totalDamage);
    totalDamage = Math.max(0, totalDamage - this.getHPTwo());
    const hpFoursLeft = Math.max(0, this.getHPFour() - totalDamage);
    totalDamage = Math.max(0, totalDamage - this.getHPFour());
    const hpIncLeft = Math.max(0, 1 - totalDamage);

    let result = 0;
    if (hpIncLeft < 1) {
      result = -8;
    } else if (hpFoursLeft < this.getHPFour()) {
      result = -4;
    } else if (hpTwosLeft < this.getHPTwo()) {
      result = -2;
    } else if (hpOnesLeft < this.getHpOne()) {
      result = -1;
    } else {
      result = 0;
    }
    this.woundpenalty = result;
    return result;

}
*/
}
