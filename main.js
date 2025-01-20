let name = document.getElementById("name");

let km = document.getElementById("km");

let eta = document.getElementById("eta");

let container = document.getElementById("container-bottom");

let submit = document.getElementById("invia");

let reset = document.getElementById("reset");

/*let prezzoBase = 0.21 * km.value

const scontomin = 0.20

const scontoover = 0.40*/

let prezzofinale;

let costo = document.getElementById("costo");

let namefinal = document.getElementById("name-b");

let offerta = document.getElementById("offerta");

let carrozza = document.getElementById("carrozza");

let cp = document.getElementById("cp");

namefinal.textContent = name.value ;
    
carrozza.textContent = Math.floor(Math.random() * 9) + 1 ;

cp.textContent = Math.floor(Math.random() * 99999) + 10000 ;

submit.addEventListener("click", function() {

    if (eta.value == "min"){
        container.style.display = 'block';

        prezzofinale = prezzoBase * scontomin

        offerta.textContent = `Offerta minorenni`
    }
    else if (eta.value == "over"){
        container.style.display = 'block';

        prezzofinale = prezzoBase * scontoover

        offerta.textContent = `Offerta over 60`
    }
    else{
        container.style.display = 'block';

        prezzofinale = prezzoBase

        offerta.textContent = `Nessuna offerta`
    }

    costo.textContent = prezzofinale ;

})

reset.addEventListener("click", function() {
    name.value = ``
    km.value = ``
})


