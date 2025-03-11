const contactName = document.querySelector("#name-contact");
const contactNumber = document.querySelector("#tel-number");
const submitButton = document.querySelector("#submit-button");
const tBody = document.querySelector("#corpo-tabela");

const registerName = new Set();
const registerNumber = new Set();

//Declarando functions

function clearInput(){
    contactName.value = "";
    contactNumber.value = "";
}

// Funcao para validar dados
function validarDados(nameValue, numberValue) {
    const alert = document.querySelector("#alert-id");
    const numberRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    
    // Verifica se o nome está vazio
    if (nameValue === ""){
        if (alert) {
            alert.textContent = "Por favor, insira um nome válido.";
            alert.classList.add("alerta");
            
            setTimeout(() => {
                alert.textContent = "";
                alert.classList.remove("alerta")
            }, 3000); 
        }
            return false;
    }
    
    // Verifica se o nome já está em uso
    if (registerName.has(nameValue)){
        if (alert){
            alert.textContent = "Este nome já está sendo utilizado!";
            alert.classList.add("alerta");

            setTimeout(() => {
                alert.textContent = "";
                alert.classList.remove("alerta");
            }, 3000);
        }
        return false;
    }

    // Verifica se o número de telefone é válido
    if (!numberRegex.test(numberValue)){
            if (alert){
                alert.textContent = "Por favor, digite um número de telefone válido no formato (xx) xxxxx-xxxx ou (xx) xxxx-xxxx.";
                alert.classList.add("alerta");
            
                setTimeout(() => {
                    alert.textContent = "";
                    alert.classList.remove("alerta");
                }, 3000);
            }
            return false;
    }

    // Verifica se o número já está em uso
    if (registerNumber.has(numberValue)){
        if (alert) {
            alert.textContent = "Este número já está sendo utilizado!";
            alert.classList.add("alerta");

            setTimeout(() => {
                alert.textContent = "";
                alert.classList.remove("alerta");
            }, 3000);
        }
        return false
    }

    return true
}

// Funcao para adicionar contatos na tabela
function addContact(nameValue, numberValue){
    const newRow = document.createElement("tr")
    const nameCell = document.createElement("td");
    const numberCell = document.createElement("td");

    nameCell.textContent = nameValue;
    numberCell.textContent = numberValue;

    newRow.appendChild(nameCell);
    newRow.appendChild(numberCell);

    tBody.appendChild(newRow);

}

// // Evento submitButton
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = contactName.value.trim();
    const numberValue = contactNumber.value.trim();

    if (validarDados(nameValue, numberValue)) {
        registerName.add(nameValue);
        registerNumber.add(numberValue);
        addContact(nameValue, numberValue);
    }

    clearInput();
    

    console.log(numberValue);
    console.log(nameValue);
    console.log(registerName);
    console.log(registerNumber);
})