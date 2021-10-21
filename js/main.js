// chiedre difficoltà 
let cointainerEl = document.querySelector('.cointainer')
let numBtnclick = 0
let isFinita = false
let difficoltaUser
do{
    difficoltaUser = prompt ('Scegli la difficoltà da 1 a 3')
}while (difficoltaUser != '1' && difficoltaUser != '2' && difficoltaUser != '3') 

//in base alla difficolta assegnamo il numero di quadretti
let nCelle 

if (difficoltaUser == '1'){
    nCelle = 100
}else if (difficoltaUser == '2') {
    nCelle = 81
}else {
    nCelle = 49
}

const nBomba = []
while(nBomba.length<16){
    //estraggo il numero random (con max ncell)
    let nRandom = Math.floor((Math.random() * nCelle) + 1);
    //se non c e gia tra le bombe lo aggiungo
    if (!nBomba.includes(nRandom)) {
        nBomba.push(nRandom)
    }
}
console.log(nBomba)

//genera griglia

for (let i = 0 ; i < Math.sqrt(nCelle); i++) {
    //creo div riga
   let divRig = document.createElement('div')
   divRig.className = 'riga'
  
   for (let y = 0 ; y <  Math.sqrt(nCelle); y++){
       //creo div cella 
       let divCell = document.createElement('div')
       divCell.className = 'celle'
       let numero = i * Math.sqrt(nCelle) + y + 1
       divCell.innerHTML = numero

        //addEventListener
        if(nBomba.includes(numero)){
            divCell.addEventListener('click', function () {
                if (!isFinita){
                    this.style.backgroundColor = 'red'
                     alert('Hai perso')
                     isFinita = true
                    
                }  
        })
        }else {
            divCell.addEventListener('click', function () {
                if (!isFinita){
                    if( this.style.backgroundColor != 'lightblue'){
                    this.style.backgroundColor = 'lightblue'
                    numBtnclick = numBtnclick + 1
                    if (numBtnclick == nCelle - 16) {
                        alert('Hai vinto')
                        isFinita = true
                       
                    }
                }
                }
                
            })
        }

       divRig.append(divCell)
    }
    cointainerEl.append(divRig)

}