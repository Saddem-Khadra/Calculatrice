var person;
var ordinateur;


person = window.prompt('choose Between:(Rock,Paper,Seasor)');

ordinateur = Math.floor(Math.random()*3);

switch(ordinateur)
{
    case 0:
           ordinateur='Rock';
           if (person=='Paper')
            {document.write('Winner');}
           else if (person=='Seasor')
            {document.write('Loser');}
           else
            {document.write('Even');}
    break; 

    case 1:
           ordinateur='Paper';
           if (person=='Seasor')
            {document.write('Winner');}
           else if (person=='Rock')
            {document.write('Loser');}
           else{
            document.write('Even');}
    break;

    case 2:
            ordinateur='Seasor';
            if (person=='Rock')
                {document.write('Winner');}
            else if (person=='Paper')
                {document.write('Loser');}
            else
                {document.write('Even');}
    break;

    default:  
    break;

}





