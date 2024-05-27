export enum StatoMezzo {
    Disponibile = 'disponibile',
    InUso = 'in uso'
}

export enum TipoMezzo {
    Bici = 'bici',
    Scooter = 'scooter',
    Monopattino = 'monopattino'
}

export enum metodoPagamento {
    Bancomat = 'bancomat',
    Cartadicredito = 'carta di credito',
    Applepay = 'apple pay'
}

export interface ICitta {
    nome: string;
    mezziDisponibili: IMezzo[];
    aggiungiMezzo(mezzo: IMezzo): void;
}

export interface IMezzo {
    tipo: TipoMezzo;
    id: number;
    stato: StatoMezzo;
    assegnaUtente(utente: IUtente): void;

}
export interface IUtente {
    nome: string;
    email: string;
    metodoPagamento: metodoPagamento;
    prenotaMezzo(mezzo: IMezzo): void;
}
