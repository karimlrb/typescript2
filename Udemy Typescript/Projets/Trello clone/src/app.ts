const itemsContainer = document.querySelectorAll('.items-container') as NodeListOf<HTMLDivElement>;

let actualContainer: HTMLDivElement,
    actualBtn:HTMLButtonElement,
    actualUL:HTMLUListElement,
    actualForm:HTMLFormElement,
    actualTextInput:HTMLInputElement,
    actualValidation:HTMLSpanElement;

// Function qui sert à rajouter tous les listeners
function addContainerListeners(currentContainer:HTMLDivElement){
    // On trouve le bon bouton ici
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn') as HTMLButtonElement;
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn') as HTMLButtonElement;
    // On lui rajoute l'eventListeners
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
}

function deleteBtnListeners(btn: HTMLButtonElement){
    btn.addEventListener("click", handleContainerDeletion);
}

function addItemBtnListeners(btn:HTMLButtonElement){
    btn.addEventListener("click", handleAddItem);
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

function handleAddItem(e:MouseEvent){
    const btn = e.target as HTMLButtonElement;
    // Si actualContainer j'ai cliqué et il y'en a un ouvert, donc si c'est vrai j'apple toggleForm et je le ferme avec false
    if (actualContainer) {
        toggleForm(actualBtn, actualForm, false)
    }
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}

function toggleForm(btn:HTMLButtonElement, form:HTMLFormElement,action:boolean){
    if (!action) {
        form.style.display="none";
        btn.style.display="block";
    }else if (action){
        form.style.display="block";
        btn.style.display="none";
    }
}

// Dès qu'in clique sur un container on a accés à tous ses éléments inside
function setContainerItems(btn: HTMLButtonElement){
    actualBtn = btn;
    actualContainer = btn.parentElement as HTMLDivElement;
    actualUL = actualContainer.querySelector('ul') as HTMLUListElement;
    actualForm = actualContainer.querySelector('form') as HTMLFormElement;
    actualTextInput = actualContainer.querySelector('input') as HTMLInputElement;
    actualValidation = actualContainer.querySelector('.validation-msg') as HTMLSpanElement;
}
