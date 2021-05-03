//array of numbers from array of strings
function aonfaos(aos /*array of strings*/){
    for (let i=0; i<aos.length; i++){
        aos[i] = +aos[i]
    }
    return aos
}

//array from bounds
//includes both the start and end
function arrayFromBounds(start, end){
    var ret = [];
    for(let i=0; i< end-start+1; i++){
        ret.push(start + i);
    }
    return ret
}

//return whether an number (in the form of an array) is self divisible
//advise using function aonfaos above
function selfDivisible(array, number){
    for(let i=0; i<array.length; i++){
        if(number%array[i] != 0){
            return false
        }
    }
    return true
}
