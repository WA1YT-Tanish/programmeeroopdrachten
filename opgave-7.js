module.exports = {gemiddelde}

/* Algoritmiek opgave #7
   Opdracht: pas de functie zo aan, dat de functie het gemiddelde geeft
   van een array met getallen.
   Ga ervan uit dat de parameter cijfers een array met numbers is.
   Hint: je hebt een for-loop en cijfers.length nodig
*/
 //het goede antword is 8.75
function gemiddelde(cijfers) {
  // cijfers is een array
  var uitkomst = undefined;
  if(cijfers.length != 0){
    uitkomst = 0;
  
  for(var teller = 0; teller < cijfers.length; teller = teller +1)
    uitkomst =uitkomst + cijfers[teller]
  }
 
  uitkomst = uitkomst / cijfers.length;
  return uitkomst;
}