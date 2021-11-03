const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>;

// Function qui sert à rajouter tous les listeners
function addContainerListeners(currentContainer:HTMLDivElement){
    // On trouve le bon bouton ici
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;
    // On lui rajoute l'eventListeners
    deleteBtnListeners(currentContainerDeletionBtn)
}

function deleteBtnListeners(btn: HTMLButtonElement){
    btn.addEventListener("click", handleContainerDeletion)
}

itemsContainer.forEach((container:HTMLDivElement) => {
    addContainerListeners(container);
})

function handleContainerDeletion(e :MouseEvent){
    // btn est le bouton sur lequel on a cliqué
    const btn = e.target as HTMLButtonElement;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')] as HTMLButtonElement[];
    const containers = [...document.querySelectorAll('.items-container')] as HTMLDivElement[];
    // On cherche l'index de btn (le bouton cliqué), une fois trouvé on supprime le container car il a le même
    containers[btnsArray.indexOf(btn)].remove();
}

