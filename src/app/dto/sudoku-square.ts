export class SudokuSquare {

    constructor() {
        this.value = 0;
        this.possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.imported = false;
    }
    imported: boolean;
    value: number;
    possibilities: Array<number>;

}
