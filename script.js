let people = 0;
let bottonInclude = document.querySelector('#include');
let text = document.querySelector('#name');
let contador = 0;
let media = 0;
let result = document.querySelector('#result');
let valMedia = document.querySelector('#valMedia');

bottonInclude.addEventListener('click',function(){
    //console.log(contador);
    let somaPeople = people + text.value * 1;
    text.value = '';
    contador = ++contador;
    //console.log(somaPeople);
    //console.log(typeof somaPeople);
    people = somaPeople;
    //return people;
    //return contador;
    media = people/contador;
    //return media;
    if (contador > 1){
        valMedia.textContent = `A média aritimética é ${media}`;
} else {
        
        valMedia.textContent =`A média aritimética é ${media}`;
        result.appendChild(adicionaBotaoReset());
    

}
    //console.log(media);
    //console.log(contador);
    
    text.focus();
    return media, contador, people;

    });

    function adicionaBotaoReset () {
        const botaoReset = document.createElement('button');
        botaoReset.textContent = 'Reset';
        botaoReset.className = "btn btn-outline-light"; 

        botaoReset.addEventListener('click',function(){
            valMedia.textContent ='';
            result.removeChild(botaoReset);
            people = 0;
            contador = 0;
            media = 0;
            somaPeople = 0;
        })
        return botaoReset;
    }

/*let result = 2 + 3;
let frase = `Isso é concatenação com a variável ${result}`;
console.log(result);
console.log(frase);*/

//Muda Cor do Fundo

function changecolor(){
    const menu = document.querySelector('#colors');
    const colors = menu.options[menu.selectedIndex].value;

    document.body.style.background = colors;
    if (colors == 'blue' || colors == 'black'|| colors == 'green'){
        document.body.style.color = 'white';
        } else {
        document.body.style.color = 'black';
        }
}