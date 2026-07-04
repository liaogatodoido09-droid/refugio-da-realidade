// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){
            destino.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Criar estrelas
const estrelas = document.getElementById("estrelas");

if(estrelas){

    for(let i = 0; i < 120; i++){

        const estrela = document.createElement("div");

        estrela.classList.add("estrela");

        estrela.style.left = Math.random()*100+"vw";
        estrela.style.top = Math.random()*100+"vh";

        estrela.style.animationDuration =
        (2 + Math.random()*5)+"s";

        estrela.style.animationDelay =
        Math.random()*5+"s";

        estrelas.appendChild(estrela);

    }

}

// Animação ao rolar a página
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("mostrar");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>observer.observe(card));

/* ESTRELAS */

#estrelas{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

pointer-events:none;

z-index:-1;

}

.estrela{

position:absolute;

width:2px;

height:2px;

background:white;

border-radius:50%;

animation:piscar infinite;

}

@keyframes piscar{

0%{

opacity:.2;

transform:scale(1);

}

50%{

opacity:1;

transform:scale(2);

}

100%{

opacity:.2;

transform:scale(1);

}

}

/* ANIMAÇÃO DOS CARDS */

.card{

opacity:0;

transform:translateY(50px);

}

.card.mostrar{

opacity:1;

transform:translateY(0);

transition:1s;

}
