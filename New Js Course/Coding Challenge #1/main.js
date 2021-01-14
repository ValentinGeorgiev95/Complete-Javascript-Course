let players1 = ['de gea', 'martial', 'rashford', 'fernandes', 'cavani', 'vidic', 'ferdinand', 'valencia', 'rafael', 'scholes', 'carrick'];
let players2 = ['van der sar', 'young', 'lingard', 'giggs', 'rooney', 'van persia', 'berbatov', 'tevez', 'fletcher', 'neville', 'brown'];

let manchesterUnited1Gk = players1[0];
players1.shift();
let manchesterUnited1FieldPlayers = [...players1];
console.log(manchesterUnited1FieldPlayers, 'manchesterUnited1FieldPlayers');

let manchesterUnited2Gk = player2[0];
players2.shift();
let manchesterUnited2FieldPlayers = [...players2];
console.log(manchesterUnited2FieldPlayers, 'manchesterUnited2FieldPlayers');

let allPlayers = [...players1, ...players2];
console.log(allPlayers, 'allPlayers');

let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final, 'players1Final');

let odds = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5
}