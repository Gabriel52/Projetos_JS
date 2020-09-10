//------------ INICIALIZADOR--------------
window.addEventListener('load', start);

//ARRAY PARAR GUARDAR AS INFORMAÇÕES - VÁRIAVEIS GLOBAIS
let globalNames = ['Ana','Bruno', 'Gabriel'];
let inputName = document.querySelector('#inputName');
let insertButton = document.querySelector('#insertButton');
let isEditing = false;
let currentIndex = null;


//------------ INICIALIZADOR--------------
function start(){
    preventFormSubmit();
    render();

    inputName.addEventListener('keyup', handleSend);
    insertButton.addEventListener('click', handleSend);
}

//------------ FUNÇÃO PARA MELHORAR O DESEMPENHO --------------

function preventFormSubmit(){
    const form = document.querySelector('form');
    form.addEventListener('submit', cancelSubmit)   
}
function cancelSubmit(event){
    event.preventDefault(); 
}

//------------ FUNÇÃO PARA RENDERIZAR --------------
function render(){
    let divNames = document.getElementById('divNames');
    divNames.innerHTML = '';

    let ul = document.createElement('ul');
    for(let i =0; i < globalNames.length; i++){
        

        let currentName = globalNames[i];
        let li = document.createElement('li');
        let btn = buttonDelete(i);
        let span = nameSpan(currentName, i);
        

        li.appendChild(btn);
        li.appendChild(span);
        ul.appendChild(li);

    }
    divNames.appendChild(ul);
    
}

//------------ INSERIR OS DADOS --------------
function handleSend(event){
    if(event.key ==='enter' || event.type ==='click'){
        if(!isEditing){
        insertData(inputName.value);
        }
        else{
            updateName(inputName.value)
        }
        inputName.value = '';
        isEditing = false;
    }

    function insertData(newName){
        globalNames.push(newName);
        render();
        
    }
    function updateName(newName){
        globalNames[currentIndex] = newName;
        render();
    }
}

//------------ EXCLUIR OS DADOS --------------
function buttonDelete(index){
    let btn = document.createElement('button')
    btn.textContent = 'Excluir'
    
    btn.addEventListener('click', ()=>{
            globalNames.splice(index, 1);
            render();
        });

    return btn;
}


//------------ ATUALIZAR OS DADOS --------------
function nameSpan(currentName, index){
    let span = document.createElement('span');
    span.textContent = currentName;
    span.addEventListener('click', ()=>{
        isEditing = true;
        currentIndex = index;
        inputName.value = currentName;
        inputName.focus();
    })
    return span;
} 

