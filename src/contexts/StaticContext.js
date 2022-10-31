import React from "react";

// Este es el objeto con el valor inicial, es un objeto al 
// que se puede acceder desde cualquier sitio
const Context = React.createContext({ 
    name: "Sin provider", 
    studing: true 
});

export default Context;
