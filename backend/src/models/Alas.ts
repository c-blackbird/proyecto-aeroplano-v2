export class Alas {
    private numAlasFrente: number;
    private numAlasCola: number;

    constructor(numAlasFrente: number, numAlasCola: number) {
        this.numAlasFrente = numAlasFrente;
        this.numAlasCola = numAlasCola;
    }

    toString(): string {
        return `Alas frontales: ${this.numAlasFrente}, posteriores: ${this.numAlasCola}`;
    }

    toJSON() {
        return {
            numAlasFrente: this.numAlasFrente,
            numAlasCola: this.numAlasCola
        };
    }
}
