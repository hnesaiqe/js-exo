var conteneur =document.querySelector("div.conteneur");

function myFunction(event){

    var elt = event.target;
    if(elt.tagName === 'IMG'){
        if(event.type === 'mouseover'){
            elt.src = elt.dataset.srcDestination;
        }else {
            document.getElementById("myDiv").style.borderStyle = "solid"      
          }
    }

}
conteneur.addEventListener('mouseover', myFunction);
conteneur.addEventListener('mouseout', myFunction);