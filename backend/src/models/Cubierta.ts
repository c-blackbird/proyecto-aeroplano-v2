export class Cubierta {
    private cabinaTripulacion: boolean;
    private cabinaVuelo: boolean;
    private sistemaEmergencia: boolean;
    private numTanquesCombustible: number;
    private numPuertasSalidas: number;

    constructor(
        cabinaTripulacion: boolean,
        cabinaVuelo: boolean,
        sistemaEmergencia: boolean,
        numTanquesCombustible: number,
        numPuertasSalidas: number
    ) {
        this.cabinaTripulacion = cabinaTripulacion;
        this.cabinaVuelo = cabinaVuelo;
        this.sistemaEmergencia = sistemaEmergencia;
        this.numTanquesCombustible = numTanquesCombustible;
        this.numPuertasSalidas = numPuertasSalidas;
    }

    toString(): string {
        let mensaje = "Cubierta: ";
        if (this.cabinaVuelo) mensaje += "vuelo, ";
        if (this.cabinaTripulacion) mensaje += "tripulaci?n, ";
        if (this.sistemaEmergencia) mensaje += "emergencia, ";
        mensaje += `${this.numTanquesCombustible} tanques, ${this.numPuertasSalidas} puertas`;
        return mensaje;
    }

    toJSON() {
        return {
            cabinaTripulacion: this.cabinaTripulacion,
            cabinaVuelo: this.cabinaVuelo,
            sistemaEmergencia: this.sistemaEmergencia,
            numTanquesCombustible: this.numTanquesCombustible,
            numPuertasSalidas: this.numPuertasSalidas
        };
    }
}
