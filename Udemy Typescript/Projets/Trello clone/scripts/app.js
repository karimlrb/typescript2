"use strict";
const itemsContainer = document.querySelectorAll('.items-container');
let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
// Function qui sert à rajouter tous les listeners
function addContainerListeners(currentContainer) {
    // On trouve le bon bouton ici
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn');
    const currentCloseFormBtn = currentContainer.querySelector('.close-form-btn');
    const currentForm = currentContainer.querySelector('form');
    // On lui rajoute l'eventListeners
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
    closingFormBtnListeners(currentCloseFormBtn);
    addFormSubmitListeners(currentForm);
}
function deleteBtnListeners(btn) {
    btn.addEventListener("click", handleContainerDeletion);
}
function addItemBtnListeners(btn) {
    btn.addEventListener("click", handleAddItem);
}
// Si on a accès au bouton c'est q'un formulaire est ouvert(de base le bouton & form sont caché)
// On a plus qu'a toggleForm le form ouvert
function closingFormBtnListeners(btn) {
    btn.addEventListener("click", () => toggleForm(actualBtn, actualForm, false));
}
function addFormSubmitListeners(form) {
    form.addEventListener("submit", createNewItem);
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
function handleAddItem(e) {
    const btn = e.target;
    // Si actualContainer j'ai cliqué et il y'en a un ouvert, donc si c'est vrai j'apple toggleForm et je le ferme avec false
    if (actualContainer) {
        toggleForm(actualBtn, actualForm, false);
    }
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}
function toggleForm(btn, form, action) {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
// Dès qu'in clique sur un container on a accés à tous ses éléments inside
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUL = actualContainer.querySelector('ul');
    actualForm = actualContainer.querySelector('form');
    actualTextInput = actualContainer.querySelector('input');
    actualValidation = actualContainer.querySelector('.validation-msg');
}
function createNewItem(e) {
    // Sinon la page va se refresh
    e.preventDefault();
    // Validation
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least 1 character long";
        // Après l'erreur on sort, on ne veut pas lire la suite
        return;
    }
    else {
        // Si on avait le message d'erreur et qu'on re submit il faut vider le message
        actualValidation.textContent = "";
    }
    // Création Item
    const itemContent = actualTextInput.value;
    const li = `<li class="item" draggable="true">
                <p>${itemContent}</p>
                <button>x</button>
              </li>
             `;
    actualUL.insertAdjacentHTML("beforeend", li);
    const item = actualUL.lastElementChild;
    const liBtn = item.querySelector('button');
    handleItemDeletion(liBtn);
    actualTextInput.value = "";
}
// On prend le bouton qui est fourni par handleItmDeletion(btn) plus haut
// Le parent du bouton est le LI qu'on veut remove
function handleItemDeletion(btn) {
    btn.addEventListener("click", () => {
        const liToRemove = btn.parentElement;
        liToRemove.remove();
    });
}
//  Add New Container
const addContainerBtn = document.querySelector('.add-container-btn');
const addContainerForm = document.querySelector('.add-new-container form');
const addContainerFormInput = document.querySelector('.add-new-container input');
const validationNewContainer = document.querySelector('.add-new-container .validation-msg');
// Attention a select addContainerCloseBtn avec .close-add-list et pas close-form-btn sinon ça marche pas
const addContainerCloseBtn = document.querySelector('.close-add-list');
const addNewContainer = document.querySelector('.add-new-container');
const containersList = document.querySelector('.main-content');
// Ouverture du form au click sur Add an other btn
addContainerBtn.addEventListener("click", () => {
    toggleForm(addContainerBtn, addContainerForm, true);
});
// Fermeture du form au click sur la x
addContainerCloseBtn.addEventListener("click", () => {
    toggleForm(addContainerBtn, addContainerForm, false);
});
// Au submit il faut ecrire le V-msg ou ecrire l'input
addContainerForm.addEventListener("submit", createNewContainer);
function createNewContainer(e) {
    e.preventDefault();
    // Ici ce n'est pas actualInput mais addContainerFormInput car on est dans 4ème block apart
    if (addContainerFormInput.value.length === 0) {
        validationNewContainer.textContent = "Must be at least 1 character long";
        return;
    }
    else {
        validationNewContainer.textContent = "";
    }
    const itemsContainer = document.querySelector('.items-container');
    //  cloneNode -> méthode qui permet de cloner un noeu
    const newContainer = itemsContainer.cloneNode();
    const newContainerContent = `
     <div class="top-container">
       <h2>${addContainerFormInput.value}</h2>
       <button class="delete-container-btn">x</button>
     </div>
     <ul></ul>
     <button class="add-item-btn">Add an item</button>
     <form autocomplete="off">
       <div class="top-form-container">
         <label for="item">Add a new item</label>
         <button type="button" class="close-form-btn">x</button>
       </div>
       <input type="text" id="item" />
       <span class="validation-msg"></span>
       <button type="submit">Submit</button>
     </form>
     `;
    // Node.insertBefore() insère un nœud avant un nœud de référence en tant qu'enfant d'un nœud parent spécifié.
    // On vient l'insérer juste avant le addNewContainer
    newContainer.innerHTML = newContainerContent;
    containersList.insertBefore(newContainer, addNewContainer);
    //  On vide le'inputet on rapelle addContainerListeners
    // On crée un container mais il faut lui ajouter tous les eventlisteners
    addContainerFormInput.value = "";
    addContainerListeners(newContainer);
}
