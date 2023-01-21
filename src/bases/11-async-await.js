//!Async: Convierte una funcion en una promesa es decir un callback
//!await: va de la mano SIEMPRE con Async y lo que hace es esperar que se haga
//!la promesa y luego puede pasar hacer la siguiente linea 
//!Para manejar errores en una funcion async, se debe utilizar el try, catch

const getImagen= async () =>{
    try {
        const apiKey = 'AiyWk9zuXSArGDI3OCWes1UUE9fHOOxb';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
        const url = data.images.original.url;
        console.log(url);
        const img =document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
    }
    
}

getImagen();
