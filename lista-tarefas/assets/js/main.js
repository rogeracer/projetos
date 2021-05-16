
const $ = document.querySelector.bind(document);
const inputTarefa = $(".input-tarefas");
const btnTarefa = $(".btn-tarefa");
const tarefas = $(".tarefas");

function criaLi(){
  const li = document.createElement("li");
  return li
}

function criaBotaoApagar(li){
  li.innerText += " ";
  const botao = document.createElement("button");
  botao.innerText = "Apagar";
  botao.setAttribute("class","apagar");
  botao.setAttribute("title","Apagar esta tarefa");
  li.appendChild(botao);
}

function criaTarefa(textoInput){
  const li = criaLi();
  const texto = document.createTextNode(textoInput);
  li.appendChild(texto);
  criaBotaoApagar(li);
  tarefas.appendChild(li);
  salvaTarefas()
}

function limpaTela(){
  inputTarefa.value = "";
  inputTarefa.focus()
}

inputTarefa.addEventListener("keypress", function(event){
  if(!inputTarefa.value) return
  if(event.key === "Enter"){
    criaTarefa(inputTarefa.value);
    limpaTela()
  }
})

btnTarefa.addEventListener("click", function(){
  if(!inputTarefa.value) return

  criaTarefa(inputTarefa.value);
  limpaTela()
})

document.addEventListener("click", function(e){

  if(e.target.classList.contains("apagar")){
    e.target.parentElement.remove();
    salvaTarefas()
  }
})

function salvaTarefas(){
  const listaDeTarefasInput = tarefas.querySelectorAll("li");
  listaDeTarefas = [];
  listaDeTarefasInput.forEach(tarefas=>{
    let tarefa = tarefas.innerText.replace("Apagar","").trim();
    listaDeTarefas.push(tarefa)
  });
  
  let listaDeTarefasJson = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", listaDeTarefasJson)
}

function adicionaTarefasSalvas(){
  let listaDeTarefasJson = localStorage.getItem("tarefas");
  let tarefas = JSON.parse(listaDeTarefasJson);

  tarefas.forEach(tarefa => criaTarefa(tarefa))  
}

adicionaTarefasSalvas()

































/*
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  // botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();

*/