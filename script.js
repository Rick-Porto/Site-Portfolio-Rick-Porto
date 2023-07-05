function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i) =>{
            setTimeout(()=>{
                elemento.innerHTML += Letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.letreiro');
    ativaLetra(titulo);


const ativaMenu = document.querySelector('.bi-list');
    const navMenu = document.querySelector('header .menu')

    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('bi-x')
        navMenu.classList.toggle('ativado')
    })


