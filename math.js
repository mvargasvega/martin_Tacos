const square = number => {
    return number * number;
};

// console.log(square(2));
// console.log(square(4));

let scores = [1,8,9,10,30,2,7]
const sumOfScores = scores => {
    for(let i = 0; i < scores.length; i++){
        console.log(scores[i])
    }
};

// sumOfScores(scores);


let pokemonTrainer ={
    "name" : "Alex",
    "pokemonTeam": ["Charmander","Squirtle","Psyduck"],
    "badges":{
        "jhoto":8,
        "kanto":6,
        "newRegion":0
    },
    "master": true
}

console.log("This pokemon trainer name is:" +pokemonTrainer.name);