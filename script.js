let arr = [];
let toDo = document.querySelector('input');
let button = document.querySelector('button');
let inputToDoList='';
button.addEventListener('click',clickButton);
toDo.addEventListener('input',inputToDo);
// document.addEventListener('keydown',clickButton);


function inputToDo(e){
inputToDoList=e.target.value;

}


function clickButton(){

	if(inputToDoList !== ''){
	arr.push(inputToDoList);
	}else{
		return null;
	}
let taskToDo= document.querySelector('.task-to-do');
let newElement = document.createElement('div');
taskToDo.append(newElement);
newElement.innerText=inputToDoList;
let classListNewElement = newElement.classList;
classListNewElement.add('toDoElement');
let elementDelete = document.createElement('div');
newElement.append(elementDelete);
// elementDelete.innerText = '';
let classListDelete = elementDelete.classList;
classListDelete.add('deleteTodo');
inputToDoList='';
toDo.value = '';

taskToDo.style.display='block'
console.log(arr);
}

let toDoDelete = document.querySelector('.task-to-do');
toDoDelete.addEventListener('click', begin);
function begin(el){
	let parentElement= toDoDelete.parentElement;
	toDoDelete.remove();
	console.log(parentElement)

}