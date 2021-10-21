// chiedre difficoltà 
let cointainerEl = document.querySelector('.cointainer')
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

//genera griglia

for (let i = 0 ; i < Math.sqrt(nCelle); i++) {
    //creo div riga
   let divRig = document.createElement('div')
   divRig.className = 'riga'
  
   for (let y = 0 ; y <  Math.sqrt(nCelle); y++){
       //creo div cella 
       let divCell = document.createElement('div')
       divCell.className = 'celle'
       divCell.innerHTML = i * Math.sqrt(nCelle) + y + 1
       divRig.append(divCell)
   
     cointainerEl.append(divRig)

     //addEventListener
     divCell.addEventListener('click', function () {
        this.style.backgroundColor = 'lightblue'
     })
    }
 
}
