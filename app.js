

// Faire un todolist avec Bootstrap et JavaScript avec les possibilités suivantes:

// 1- ajout d'une tâche : l'utilisateur peut ajouter n tâches qu'il veut
// 2: List des tâches :l'utilisateur doit voir la liste des tâches ajoutées
// 3: Actions: chaque tâche doit avoir 3 bouttons :


// to do (background du tâche en rouge)
// doing (background du tâche en orange)
// Done (background du tache en vert)
// Par defaut la tâche doit etre en rouge (to do)
// s'il clique sur doing la couleur doit changer en orange , et en verte s'il clique sur done.

// _______________________________________________________________________________________________________

// Recuperation des Id

let inptEcrutre = document.getElementById("inpt");
let bouttonsAjouter = document.getElementById("monBoutton");
let container = document.getElementById("zoneText");

// STORAGE
zoneText.innerHTML = localStorage.getItem("list")
const del = document.querySelectorAll(".sup")

   for(let span of del ){
     span.onclick = () => retirer(span.parentElement);

    }


fo.onsubmit= () =>{

     let listeTache = document.createElement("li")
     listeTache.textContent =inpt.value
     zoneText.appendChild(listeTache)

     let supprimer = document.createElement("span")
     supprimer.textContent= "Supprimer"
     supprimer.classList.add("sup")
     
    supprimer.onclick = () => retirer(listeTache);

     listeTache.appendChild(supprimer)
     
     

    //  aJout des Bouttons
    let toDoBtn = document.createElement("button")
    toDoBtn.textContent= "To do"
    listeTache.appendChild(toDoBtn)

    toDoBtn.onclick =function bac() {listeTache.style.backgroundColor="red"}

    let doing = document.createElement("button")
    doing.textContent= "Doing"
    listeTache.appendChild(doing)
    doing.onclick =function bac() {listeTache.style.backgroundColor="orange"}
   


    let done = document.createElement("button")
    done.textContent= "Done"
    listeTache.appendChild(done)
    done.onclick =function bac() {listeTache.style.backgroundColor="green"}

    // _______________________________________________________________
    // supprimer.onclick= function retirer(element){
    //   element = listeTache.remove()
    //    localStorage.setItem("list" , zoneText.innerHTML)
    //   // element = listeTache.remove()
      
    // }

     inpt.value=""
     console.log(inpt.value)
    localStorage.setItem("list" , zoneText.innerHTML)


     return false;
}



// Fonction pour supprimer la tâche

function retirer(element){
  element.remove();
  localStorage.setItem("list" , zoneText.innerHTML)

}
