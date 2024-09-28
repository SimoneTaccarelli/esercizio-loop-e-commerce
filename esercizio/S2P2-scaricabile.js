// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
   isAmbassador:true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [340, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

let somma = 0
let percentuale = 0.70
let clienti = [] 
let carrello = 0



clienti.push(marco,paul,amy)



for (i=0 ; i < prices.length ; i++){
  somma += prices[i] 
}

for(i=0 ; i < clienti.length ; i++ ){
  if (utenteCheEffettuaLAcquisto.isAmbassador === true){
    carrello = somma * percentuale
    
      if (carrello<100){
      console.log('Ciao ' + utenteCheEffettuaLAcquisto ['name'] + ' ' + 'sei un ambassador potrai usufruire del 30% di sconto questo è il totale del tuo carrello €' + ' ' + (carrello + shippingCost) +' '+ 'costi di spedizione' )
      }
      else{
      console.log('Ciao ' + utenteCheEffettuaLAcquisto ['name'] + ' ' + 'sei un ambassador potrai usufruire del 30% di sconto questo è il totale del tuo carrello €' + ' ' + carrello + ' ' + 'e dato che hai speso sopra i €100 la spedizione per te è gratuita ') 
      }
  }
  else{
    carrello = somma
    if (carrello<100){
      console.log('Ciao ' + utenteCheEffettuaLAcquisto ['name'] + ' ' + 'non sei un ambassador il totale del tuo carrello è di € ' + ' ' + (carrello + shippingCost) +' '+ 'costi di spedizione' )
    }
    else{
      console.log('Ciao ' + utenteCheEffettuaLAcquisto ['name'] + ' ' + 'non sei un ambassador il totale del tuo carrello è di € ' + ' ' + carrello + ' ' + 'e dato che hai speso sopra i €100 la spedizione per te è gratuita ')
    }

  }
  
}

let ambassador = []

for(i=0 ; i < clienti.length ; i++ ){
  if(clienti[i].isAmbassador === true){
    ambassador.push(clienti[i])
  }

}
console.log(ambassador)

for(i = 0 ; i < clienti.length ; i++){
  if(clienti[i].isAmbassador === true){
  console.log('nome utente ' + clienti[i].name + ' ' + 'cognome utente' + clienti[i].lastName + ' ' +'è un ambassador')
  }
  else {
    console.log('nome utente ' + clienti[i].name + ' ' + 'cognome utente' + clienti[i].lastName + ' ' +'non è un ambassador')
  }
}

