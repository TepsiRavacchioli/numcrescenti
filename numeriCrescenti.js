var n1= n2= n3=0;//per usare scambia devo rendere n1,n2,n3  VARIABILI GLOBALI!!!!!!

function mainHTML() {
    
    n1=document.getElementById('primo').value;
    n2=document.getElementById('secondo').value;
	n3=document.getElementById('terzo').value;
		 //window.alert(n1);
	if (controlloNumerico(n1) && controlloNumerico(n2)&& controlloNumerico(n3) ){
		n1 = parseInt(n1) ;
		n2 = parseInt(n2) ;
		n3 = parseInt(n3) ;
		numeriCrescenti();
	}else{
		alert('ERRRORRE');
		document.getElementById('errore').innerHTML = "ERRORE: TUTTI I TRE INPUT DEVONO ESSERE NUMERI ";
	}
}
function numeriCrescenti(){	
	let risultato ="";
	
    if (n1 > n2) {
		alert(n1+","+n2);       
		[n1, n2] = [n2, n1];//scambiaValori(n1, n2, 1);		
		alert(n1+","+n2);
    }
    if (n1 > n3) {
		alert(n1+","+n3);
		scambiaValori(n1, n3, 2);
		alert(n1+","+n3);
    }   
    if (n2 > n3) {		
		alert(n2+","+n3);
        scambiaValori(n2, n3, 3);
		alert(n2+","+n3);
    }
	
	risultato = risultato+n1+", "+n2+", "+n3;
	document.getElementById('risultato').value = risultato;
	document.getElementById('risultatoTXT').innerHTML = "il numero minore è "+ n1;
}

function controlloNumerico(numString){			
	let risultatoControllo = false;
	
	if (numString !== "" && !isNaN(numString) ){
		risultatoControllo = true;
	}
	return risultatoControllo;
} 	
function pulisciDiv(){
	document.getElementById('errore').innerHTML = "";
}
function scambiaValori(number1, number2,caso){
	
	let temp=0;
	
	    temp = number1;
        number1 = number2;
        number2 = temp;
		alert("function "+number1+","+number2);
		
		switch(caso){
			
			case 1:
			n1=number1;
			n2=number2;
			break;
			
			case 2:
			n1=number1;
			n3=number2;
			break;
			
			case 3:
			n2=number1;			
			n3=number2;
			break;
		}		
		
}

