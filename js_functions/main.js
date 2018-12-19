


function messageAlert(){
    alert('Nap time is over!');
}

function add(argue1, argue2){
    var result = argue1 + argue2;
    console.log( +argue1+ ' + ' +argue2+ ' = ' +result);
}

function addWithReturn(aThing1, aThing2){
    var result2 = aThing1 + aThing2;
    return result2;
}

var addWithReturnResult = addWithReturn(8, 16);