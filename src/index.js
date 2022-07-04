//Crie 3 variáveis, cada uma com um array:
//- Comedy
//-Action
//-Fantasy
const comedy = [];
const action = [];
const fantasy = [];
//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
//-title:
//-director:
//-year:

comedy.push(
  {
    title: "Minha Mãe é Uma Peça"
  },
  {
    director: "André Pellenz"
  },
  {
    year: 2013
  }
);

action.push(
  {
    title: "Security"
  },
  {
    director: ["Alain Desrochers", "Les Weldon"]
  },
  {
    year: 2017
  }
);

fantasy.push(
  {
    title: "Encanto"
  },
  {
    director: ["Byron Howard", "Jared Bush"]
  },
  {
    year: 2021
  }
);

console.log("comedy", comedy);
console.log("action", action);
console.log("fantasy", fantasy);

//*DESAFIO EXTRA*

//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console:
//IF: "MY FAVORIT MOVIE IS..."
//ELSE: "NOT EVEN 5 STARS..."
