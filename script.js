//array of numbers from array of strings
function aonfaos(aos /*array of strings*/){
    for (let i=0; i<aos.length; i++){
        aos[i] = +aos[i]
    }
    return aos
}

