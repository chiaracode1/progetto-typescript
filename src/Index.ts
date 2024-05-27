import { TipoMezzo, metodoPagamento } from "./Interface";
import { Citta, Mezzo, Utente } from "./Class";


// UTENTE
const utente1 = new Utente("Chiara", "email@gmail.com", metodoPagamento.Bancomat);
const utente2 = new Utente("Eleonora", "nomail@gmail.com", metodoPagamento.Cartadicredito);
const utente3 = new Utente("Ilaria", "simail@gmail.com", metodoPagamento.Applepay);

// CITTA
const citta1 = new Citta("Roma");
const citta2 = new Citta("Milano");
const citta3 = new Citta("Napoli");

// MEZZI
const mezzo1 = new Mezzo(TipoMezzo.Monopattino, 1);
const mezzo2 = new Mezzo(TipoMezzo.Scooter, 2); 
const mezzo3 = new Mezzo(TipoMezzo.Bici, 3);


// MEZZI CITTA
citta1.aggiungiMezzo(mezzo1);
citta2.aggiungiMezzo(mezzo2);
citta3.aggiungiMezzo(mezzo3);


// OUTPUT
console.log(`Utente ${utente1.nome} prenota il mezzo ${mezzo1.tipo} nella città di ${citta1.nome} con metodo di pagamento ${utente1.metodoPagamento}`);
console.log(`Utente ${utente2.nome} prenota il mezzo ${mezzo2.tipo} nella città di ${citta2.nome} con metodo di pagamento ${utente2.metodoPagamento}`);
console.log(`Utente ${utente3.nome} prenota il mezzo ${mezzo3.tipo} nella città di ${citta3.nome} con metodo di pagamento ${utente3.metodoPagamento}`);
