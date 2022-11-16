let pizzas =[
    {
        Nombre: "pizza de muzarella",
        ID: 1,
        Ingredientes: "Salsa de tomate ,muzarella ,aceitunas verdes ,oregano ,",
        precio: 1000,
    },

    {
        Nombre: "napolitana",
        ID: 2,
        Ingredientes: "salsa de tomate ,mozzarella ,rodaja de tomate ,sal ,ajo ,perejil ,aceitunas",
        precio: 1200,
    },

    {
        nombre: "fugazza",
        ID: 3,
        Ingredientes: "mozzarella ,cebolla ,pimienta ,oregano ,aceite de oliva ,aceitunas negras ,",
        precio: 1500,
    },

    {
        Nombre: "Calabresa",
        ID: 4,
        Ingredientes: "mozzarella ,provolone ,morrones ,oregano ,pimienta ,aceitunas ,calabresa",
        precio: 1800,
    },

    {
        Nombre: "Vegana",
        ID: 5,
        Ingredientes: "queso paparella ,salsa de tomate ,aceitunas verdes ,oregano ,alioli de albaca",
        precio: 2100,
    },

    {
        Nombre: "especial de la india",
        ID: 6,
        Ingredientes: "queso paparella ,berenjenas grilladas con morrones rojos y verdes ,cebollas y curry ,salsa de tomate ,semilla de sesamo y albaca",
        precio: 2500,
    },   
];



// a)  Las pizzas que tengan un id impar.

let idpares = pizzas.filter((producto) =>{
    return producto.ID % 2 === 0
} )


// console.log(idpares);


idpares.forEach( (pizzas)  => {
    // console.log(`Las pizzas ${pizzas.Nombre} tienen id par`);
})



// b) ¿Hay alguna pizza que valga menos de $600?

let pizzascompreciosMayorA = (precio) => {
    return pizzas.some( (pizzas) => {
        return pizzas.precio < precio;
    })
        ? console.log(`Hay pizzas con precio mayor a $${precio}`)
        : console.log(`No hay pizzas con precio mayor a $${precio}`);
}

// pizzascompreciosMayorA(600)



// c) El nombre de cada pizza con su respectivo precio.


let nombreypreciodepizzas = pizzas.filter( (pizzas) =>{
    return pizzas.nombre && pizzas.precio;
});


// console.log(nombreypreciodepizzas );

nombreypreciodepizzas.forEach( (pizzas) =>{
    console.log(`La pizza ${pizzas.nombre}, tiene un valor de ${pizzas.precio}`);
});




