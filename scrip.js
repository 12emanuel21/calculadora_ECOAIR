
const resul = document.getElementById("resul");





resul.addEventListener("click",(e)=>{
    let GPM = document.getElementById("gpm").value;

    let nd = document.getElementById("nd").value;
    
    let nde = document.getElementById("nde").value;
    
    let nre = document.getElementById("nre").value;

    let chec = document.getElementById("checkid").checked;
    
    let text = document.getElementById("texto");

    
    if(chec){
        
        let gg = GPM *30/100;
        let rr = parseFloat(GPM) + parseFloat(gg);

    let numDecimal = 0.00378;

    let galonMes = parseInt(rr) * nd*2;

    let galonM3 = galonMes * numDecimal;

    let rel = nde * parseInt(rr) * nre ;
     rel = rel * numDecimal;


      console.log(parseInt(rr))
 console.log(galonMes)
 console.log(galonM3)
   console.log(rel)  

   text.innerHTML ="GPM promedio:   "+rr+"<br>" +"Galones Tratados al mes:  "+galonMes+"<br>"+"Galones Tratados en m3:  "+galonM3+"<br>"+"m3 purgados al mes:  "+rel

            
        } else{
            let numDecimal2 = 0.00378;

            let galonMes2 = GPM * nd*2;
        
            let galonM32 = galonMes2 * numDecimal2;
        
            let rel2 = nde * GPM * nre ;
             rel2 = rel2 * numDecimal2;
        
             text.innerHTML ="GPM promedio:   "+GPM+"<br>" +"Galones Tratados al mes:  "+galonMes2+"<br>"+"Galones Tratados en m3:  "+galonM32+"<br>"+"m3 purgados al mes:  "+rel2

              console.log(GPM)
         console.log(galonMes2)
         console.log(galonM32)
           console.log(rel2) 
        }
        

    
  
  
});
