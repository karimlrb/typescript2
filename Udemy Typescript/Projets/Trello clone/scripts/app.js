"use strict";
const itemsContainer = document.querySelectorAll('.items-container');
// Function qui sert à rajouter tous les listeners
function addContainerListeners(currentContainer) {
    // On trouve le bon bouton ici
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    // On lui rajoute l'eventListeners
    deleteBtnListeners(currentContainerDeletionBtn);
}
function deleteBtnListeners(btn) {
    btn.addEventListener("click", handleContainerDeletion);
}
itemsContainer.forEach((container) => {
    addContainerListeners(container);
});
function handleContainerDeletion(e) {
    // btn est le bouton sur lequel on a cliqué
    const btn = e.target;
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')];
    const containers = [...document.querySelectorAll('.items-container')];
    // On cherche l'index de btn (le bouton cliqué), une fois trouvé on supprime le container car il a le même
    containers[btnsArray.indexOf(btn)].remove();
}
