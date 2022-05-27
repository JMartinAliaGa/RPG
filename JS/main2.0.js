let roll; //Guarda tirada de dado.

const pnj = {
    ac: 16,
    hp: 36,
    atq: 6,
    dado: 5,
}

class Npc {
    constructor(ac,hp,atq,dado){
        this.ac = ac;
        this.hp = hp;
        this.atq = atq; 
        this.dado = dado;
    }
}
const pj = new Npc (14,50,4,7);

//Funcion generadora de tiradas de dados  
const tirarDado = x => Math.floor((Math.random()*x) + 1);

//Emulador de batalla V.1.0
function encuentro  (jugadorPj, jugadorPnj ) {
    
    while (jugadorPj.hp > 0 && jugadorPnj.hp > 0) {
       
        if(tirarDado(20)+jugadorPj.atq >= jugadorPnj.ac){

            roll = tirarDado(jugadorPj.dado) + jugadorPj.atq;
            jugadorPnj.hp-= roll;
            
            console.log("npc hp: " + jugadorPnj.hp);
            console.log("PJ Daño -"+ roll);
            console.log("\n");
        }
        else(console.log("El jugador fallo..."))

       if (jugadorPnj.hp > 0 && (tirarDado(20)+jugadorPnj.atq >= jugadorPj.ac)) {
            roll = tirarDado(jugadorPnj.dado) + jugadorPnj.atq;
            jugadorPj.hp-= roll;
            
            console.log("jugador hp: "+jugadorPj.hp);
            console.log("pnj daño: -"+ roll);
            console.log("\n");
       } else (console.log("El enemigo fallo...")); 
           
       
       
    }
}    

encuentro(pj,pnj);