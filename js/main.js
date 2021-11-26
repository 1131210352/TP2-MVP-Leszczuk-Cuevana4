
const yourkey = '612689dd'
const d = document
const datoLS = JSON.parse(localStorage.getItem('peliRecibido'))

    if(datoLS != null){
        mostraDatos(datoLS)
    }

const btn = d.getElementById("buscarBtn")

btn.addEventListener('click', (event) => {
    event.preventDefault()
    let input = d.getElementById('buscar')
    obtenerDatosPelis(input.value)
})
function obtenerDatosPelis(peli) {
    fetch(`https://www.omdbapi.com/?t=${peli}&apikey=${yourkey}&`)

    .then(response => response.json())
    .then(data => {

        limpiarPantalla()
        mostraDatos(data)
        guardarUltBusqueda(data)
        console.log(data)
        })
    
    .catch(err=>console.log(err))

}

function limpiarPantalla(){
    let detPeli=d.getElementById('detallePeli')

    if(detPeli){
        detPeli.remove();
    }

}

function mostraDatos(data){
    let div_global = d.getElementById('divPelis');
        let div = d.createElement('div');
        div.setAttribute('id', 'detallePeli'); 
        let h2 = d.createElement('h2');
        let img = d.createElement('img');
        let sinopsis = d.createElement('p');
        sinopsis.setAttribute('id', 'sinopsis');
        let punt = d.createElement('p');
        punt.setAttribute('id', 'puntuacion');
        
        div.appendChild(img);
        div.appendChild(h2); 
        div.appendChild(punt);
        div.appendChild(sinopsis);
        div_global.appendChild(div);
        img.src= `${data.Poster}`;
        h2.innerHTML = ` ${data.Title}`;
        punt.innerHTML =`${data.Ratings[0].Value} ✪`;
        sinopsis.innerHTML = `<span id="spanSinopsis">Sinopsis</span> <br> ${data.Plot}`;

}

/*function pelisDestacadas(){
    
    var movie= obtenerDatosPelis("friends")
    

    console.log(movie)
}*/

function guardarUltBusqueda(data){
    localStorage.setItem( 'peliRecibido', JSON.stringify(data))
}

(function(d) {
    var config = {
      kitId: 'zsn7qcp',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);