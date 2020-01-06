var a ;
var b ;
var resultat;
var operation;

a = window.prompt('Enter the first Num');
a = parseFloat(a);

operation = window.prompt('Operation');

b = window.prompt('Enter the sec Num');

b = parseFloat(b);

while((isNaN(a))&&(isNaN(b))){

switch (operation) {

	case "+":
    resultat=a+b;
	break;

	case "-" :
	resultat=a-b;
	break;

	case "*" :
	resultat=a*b;
	break;

	case "/" :
    if(b==0)
	{
		alert("you cant divide on 0!!!");

		b = window.prompt('Try again');
	}
    
    resultat=a/b;
    break;

	default :
	alert("respecter les regles mathématiques");

}

}

alert("Refresh the page");

if (isNaN(resultat)){

	alert("repeat the operation");
}
else{
	document.write( a + operation + b +"=" +resultat );
}
/*
while(isNaN(resultat)){
document.write( a + operation + b +"=" +resultat );	
}
*/




