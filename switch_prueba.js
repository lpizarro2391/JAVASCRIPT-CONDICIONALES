var a=0,b=0, opcion=0, r=0;
a=prompt("Ingrese el valor de a :");
b=prompt("Ingrese el  valor de b:");
opcion=prompt("Ingrese el número correspondiente a la operación que desea ejecutar:\n 1. r = a + b \n 2. r = a - b \n 3. a * b \n (*) Si ingresas un valor diferente a éstos numeros se ejecutar la operación r= a / b" );

a= Number(a);
b=Number(b);
opcion = Number(opcion);

switch (opcion) {
  case 1:
    r = a + b;
    break;
  case 2:
    r = a - b;
    break;
  case 3:
    r = a * b;
    break;
    default:
    r = a / b;
    break;
}
alert("El valor de r:"+r)
