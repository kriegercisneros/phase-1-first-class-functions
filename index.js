function receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(){
    return  function namedFunc(){}
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('anonymous function')
    }
}


// function runFiveMiles() {
//     console.log("Go for a five-mile run");
//   }
// // runFiveMiles();


// function liftWeights() {
//     console.log("Pump iron");
// }
// // liftWeights();
  
//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }
// // swimFortyLaps();

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }
// // exerciseRoutine( ()=> {console.log('arrow')})    

// function returnFunc(){
//     return  function () {console.log('return function')};
// }
// newFunc = returnFunc()

// console.log(newFunc);

// newFunc();