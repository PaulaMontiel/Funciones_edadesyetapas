const age = prompt( "¿Qué edad tienes?");

const  Etapas= function (age) {
    if ( age >= 1 && age < 4) {
      alert( "Eres un toddler." );
    } else if (age >= 4 && age < 6){
        alert(" Eres un Preschooler.");
    } else if (age >= 5 && age < 13){
        alert (" Eres un Gradeschooler. ");
    } else if (age>=12 && age < 19){
        alert ("Eres un teenager.");
    } else if ( age>=18 && age<22 ){
        alert( " Eres un young adult. ");
    } else if (" "){
        alert (" Error campo no ingresado");
    } else {
        alert("Eres un Adulto.");
    }
  }


  Etapas(age);