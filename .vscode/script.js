// Daniel em primeiro lugar
// Daniel em segundo lugar, utiliza o extra para assumir o primeiro
// Daniel em terceiro lugar, utiliza o extra para assumir o segundo
function positions(firstPlace,secondPlace,lastPlace){
 
    let array = []
    if (firstPlace == "Daniel"){
        array [0] = firstPlace
        array [1] = secondPlace
        array [2] = lastPlace
    }
    if
        (segundPlace == "Daniel"){
            array [0] = secondPlace
            array [1] = firstPlace
            array [2] = lastPlace
        }
    if(lastPlace == "Daniel"){
        array [0] = firstPlace
        array [1] = lastPlace
        array [2] = secondPlace  
    }
    console.log("Primeiro colocado: " + array [0])
    console.log("Segundo colocado: " + array [1])
    console.log("Terceiro colocado: " + array[2])
    }
    positions ("Daniel","Rafael", "Manoel")
    positions ("Rafael", "Daniel", "Manoel")
    positions ("Rafael", "Manoel", "Daniel")


