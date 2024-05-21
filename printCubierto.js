const sc = require("prompt-sync")()
let num

do {
num=sc("elige num: 1, 2, 3") 
if (num ==1) {
    console.log("Se imprime un tenedor");
    pintarTenedor()
    
}else if (num ==2){
    console.log("Se imprime un cuchillo");
    pintarCuchillo()

}else if(num==3){
    console.log("Se imprime una cuchara");
    pintarCuchara()
    }     
    
}
while (num <=3)
    console.log("Error, elige 1, 2 o 3")


function pintarTenedor() {
    console.log("l l  l")
    console.log("l l  l")
    console.log("l l  l")
    console.log("l_l _l")
    console.log("  l   ")
    console.log("  l   ")
    console.log("  l   ")
    console.log("  l   ")
    console.log("  l   ")
    console.log("  l   ")
    console.log("  l"   )    
    
}
function pintarCuchillo() {
    console.log("    l")
    console.log("    l")
    console.log("    l")
    console.log("   l")
    console.log("  l   ")
    console.log("  l   ")
    console.log("  l   ")
    console.log("  l   ")
    console.log("  l   ")
    console.log("  l   ")
    console.log("  l"   )  
}
function pintarCuchara(){
    console.log("l     l")
    console.log("l     l")
    console.log("l     l")
    console.log(" l    l")
    console.log("   l   ")
    console.log("   l   ")
    console.log("   l   ")
    console.log("   l   ")
    console.log("   l   ")
    console.log("   l   ")
    console.log("   l"   )  
}
