export class TrenAterrizaje {
    private numNeumaticos: number;
    private numAmortiguadores: number;
    private fijoRetractil: boolean;

    constructor(numNeumaticos: number, numAmortiguadores: number, fijoRetractil: boolean) {
        this.numNeumaticos = numNeumaticos;
        this.numAmortiguadores = numAmortiguadores;
        this.fijoRetractil = fijoRetractil;
    }

    toString(): string {
        let mensaje = "Tren de Aterrizaje: ";
        mensaje += this.fijoRetractil ? "retr?ctil, " : "fijo, ";
        mensaje += `${this.numNeumaticos} neum?ticos, ${this.numAmortiguadores} amortiguadores`;
        return mensaje;
    }

    toJSON() {
        return {
            numNeumaticos: this.numNeumaticos,
            numAmortiguadores: this.numAmortiguadores,
            fijoRetractil: this.fijoRetractil
        };
    }
}
