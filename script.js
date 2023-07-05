function typing(element){
        const arrText = element.innerHTML.split('');
        element.innerHTML = '';
        arrText.forEach((Leter, i) =>{
            setTimeout(()=>{
                element.innerHTML += Leter;
            }, 75 * i);
        });
    }

const titulo = document.querySelector('.letreiro');
typing(titulo);


  