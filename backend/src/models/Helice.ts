export class Helice {
    private numHelices: number;

    constructor(numHelices: number) {
        this.numHelices = numHelices;
    }

    toString(): string {
        return `${this.numHelices} h?lice/s`;
    }

    toJSON() {
        return { numHelices: this.numHelices };
    }
}
