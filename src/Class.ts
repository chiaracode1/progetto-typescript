import { ICitta, IMezzo, IUtente, StatoMezzo, TipoMezzo, metodoPagamento } from "./Interface";

export class Citta implements ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];

    constructor(nome: string) {
        this.nome = nome;
        this.mezziDisponibili = [];
    }

    aggiungiMezzo(mezzo: IMezzo): void {
        this.mezziDisponibili.push(mezzo);
    }
}

export class Mezzo implements IMezzo {
    tipo: TipoMezzo;
    id: number;
    stato: StatoMezzo;

    constructor(tipo: TipoMezzo, id: number) {
        this.tipo = tipo;
        this.id = id;
        this.stato = StatoMezzo.Disponibile; 
    }

    assegnaUtente(utente: IUtente): void {
        if (this.stato === StatoMezzo.Disponibile) {
            this.stato = StatoMezzo.InUso;
            console.log(`Mezzo ID ${this.id} assegnato all'utente ${utente.nome}`);
        } else {
            console.log(`Mezzo ID ${this.id} non disponibile, stato attuale: ${this.stato}`);
        }
    }
}

export class Utente implements IUtente {
    nome: string;
    email: string;
    metodoPagamento: metodoPagamento;

    constructor(nome: string, email: string, metodoPagamento: metodoPagamento) {
        this.nome = nome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    
    prenotaMezzo(mezzo: IMezzo): void {
    }
}