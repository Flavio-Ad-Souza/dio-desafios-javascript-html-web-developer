let input = gets();

let qtdEntradas = parseInt(input);
let nivelEnergia;


let C = qtdEntradas;

for(let i = 0; i < qtdEntradas; i++){
    input = gets();
    nivelEnergia = parseInt(input);
    
    let N = nivelEnergia;
    if(N > 8000){
        print ("Mais de 8000!")
    }else{
        print ("Inseto!")
    }
}