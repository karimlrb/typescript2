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
    const currentCloseFormBtn = currentContainer.querySelector('.close-form-btn') as HTMLButtonElement;
    const currentForm = currentContainer.querySelector('form') as HTMLFormElement; 
    // On lui rajoute l'eventListeners
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
    closingFormBtnListeners(currentCloseFormBtn)
    addFormSubmitListeners(currentForm);
}

function deleteBtnListeners(btn: HTMLButtonElement){
    btn.addEventListener("click", handleContainerDeletion);
}

function addItemBtnListeners(btn:HTMLButtonElement){
    btn.addEventListener("click", handleAddItem);
}

// Si on a accès au bouton c'est q'un formulaire est ouvert(de base le bouton & form sont caché)
// On a plus qu'a toggleForm le form ouvert
function closingFormBtnListeners(btn:HTMLButtonElement){
    btn.addEventListener("click",() => toggleForm(actualBtn,actualForm,false))
}

function addFormSubmitListeners(form: HTMLFormElement){
    form.addEventListener("submit", createNewItem)
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

function createNewItem(e:Event) {
    // Sinon la page va se refresh
    e.preventDefault();
    // Validation
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least 1 character long";
        // Après l'erreur on sort, on ne veut pas lire la suite
        return;
    } else {
        // Si on avait le message d'erreur et qu'on re submit il faut vider le message
        actualValidation.textContent="";
    }
    // Création Item
    const itemContent = actualTextInput.value;
    const li =`<li class="item" draggable="true">
                <p>${itemContent}</p>
                <button>x</button>
              </li>
             `;
        actualUL.insertAdjacentHTML("beforeend", li);
    const item = actualUL.lastElementChild as HTMLLIElement;
    const liBtn = item.querySelector('button') as HTMLButtonElement;
    handleItemDeletion(liBtn);
    actualTextInput.value = "";

}
// On prend le bouton qui est fourni par handleItmDeletion(btn) plus haut
// Le parent du bouton est le LI qu'on veut remove
function handleItemDeletion(btn:HTMLButtonElement){
    btn.addEventListener("click", () => {
        const liToRemove = btn.parentElement as HTMLLIElement;
        liToRemove.remove();
    } )
}