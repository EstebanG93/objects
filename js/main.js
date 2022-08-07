let prod=0;
let pay = 0;
let estado=0;
let cuenta = 0;
let subto=0;
let cuenta_tax=0;
let cantidad = 0;
let cantidad_total=0;
let med_pago = 0;

const suma = (a,b) => a+b;
const resta = (a,b) => a-b;
const multi = (a,b) => a*b;
const division = (a,b) => a/b;
const taxes = a => a*0.21;

function Estado(){
    estado = parseFloat(prompt("Ingrese la opción deseada:\n\n1. Añadir producto.\n2. Ir a pagar."));

    while(estado>2 || estado<1 || estado%1!=0 || isNaN(estado)){
        alert("Ingrese una opción válida!");
        estado = parseFloat(prompt("Ingrese la opción deseada:\n\n1. Añadir producto.\n2. Ir a pagar."));
    }
}

function AddProduct (){
    prod = parseFloat(prompt("Por favor indique el producto que desea:\n\n1. Sandwich: USD 3.5 c/u\n2. Ensalada: USD 4.5\n3. Hamburguesa: USD 6.5\n4. Hot Dog: USD 4.99\n5. Coca-Cola: USD 3\n6. Pepsi: USD 2.8\n7. Fanta: USD 2.5"));

    while(prod>7 || prod<1 || prod%1!=0 || isNaN(prod)){
        alert("Ingrese una opción válida!");
        prod = parseFloat(prompt("Por favor indique el producto que desea:\n\n1. Sandwich: USD 3.5 c/u\n2. Ensalada: USD 4.5\n3. Hamburguesa: USD 6.5\n4. Hot Dog: USD 4.99\n5. Coca-Cola: USD 3\n6. Pepsi: USD 2.8\n7. Fanta: USD 2.5"));
    }

    switch(prod){
        case 1:
            console.log("Producto: Sandwich");
            pay=3.5;
            break;        
        case 2:
            console.log("Producto: Ensalada");
            pay=4.5;
            break;        
        case 3:
            console.log("Producto: Hamburguesa");
            pay=6;
            break;
        case 4:
            console.log("Producto: Hot Dog");
            pay=4.99;
            break;
        case 5:
            console.log("Producto: Coca-Cola");
            pay=3;
            break;
        case 6:
            console.log("Producto: Pepsi");
            pay=2.8;
            break;
        case 7:
            console.log("Producto: Fanta");
            pay=2.5;
            break;
    }

    cantidad=parseFloat(prompt("Ingrese la cantidad solicitada:"));

    while(cantidad%1!=0 || isNaN(cantidad)){
        alert("Ingrese una opción válida!");
        cantidad=parseFloat(prompt("Ingrese la cantidad solicitada:"));
    }

    console.log("Cantidad:",cantidad);
}

function Payment(method){
    let cuotas=0;
    let valor_cuota=0;
    if(method==2){
        cuotas=parseFloat(prompt("Ingrese cantidad de cuotas:"));
        while(cuotas<1 || cuotas%1!=0 || isNaN(cuotas)){
            alert("ingrese un valor válido!");
            cuotas=parseFloat(prompt("Ingrese cantidad de cuotas:"));
        }
        valor_cuota=division(suma(subto,cuenta_tax),cuotas);
    }else{
        cuotas=1;
        valor_cuota=suma(subto,cuenta_tax);
    }
    alert("El pago se realizará en "+cuotas+" pago(s) de USD "+valor_cuota);
}

alert("Bienvenido!");
Estado();

while(estado!=2){
    AddProduct();
    
    cuenta=multi(pay,cantidad);
    console.log("Subtotal:\nUSD ",cuenta);
    console.log(taxes(cuenta));
    cuenta_tax=suma(cuenta_tax,taxes(cuenta));
    subto=suma(subto,cuenta);
    cantidad_total=suma(cantidad_total,cantidad);
        Estado();
}
alert("Cantidad ítems: "+cantidad_total+"\nSubtotal: USD "+subto+"\nIVA: USD "+cuenta_tax);

med_pago=parseFloat(prompt("Ingrese el medio de pago:\n\n1. Débito / Efectivo.\n2. Crédito."));

while(med_pago%1!=0 || med_pago>2 || med_pago<1 || isNaN(med_pago)){
    alert("ingrese un valor válido!");
    med_pago=parseFloat(prompt("Ingrese el medio de pago:\n\n1. Débito / Efectivo.\n2. Crédito."));
}

Payment(med_pago);