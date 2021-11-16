function dodajStavku(event){
    event.preventDefault();
    var tekst = document.querySelector('input').value;
    if(tekst){
        var novaStavka= '<li class="stavka">' + tekst + '<button class="mali">&times;</button></li>'
        document.querySelector('.lista').insertAdjacentHTML('afterbegin',novaStavka);
        event.target.reset();
    }
}
document.querySelector('form').addEventListener('submit',dodajStavku);

function obrisiEl(dogadjaj){
     console.log(dogadjaj.target.classList[0]==='mali');
    if(dogadjaj.target.classList[0]==='mali')
    {
       dogadjaj.target.parentNode.parentNode.removeChild(dogadjaj.target.parentNode);
        }
     }

 document.querySelector('.lista'),addEventListener('click',obrisiEl);