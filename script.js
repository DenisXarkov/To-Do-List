let arr = [];// массив с тасками
let toDo = document.querySelector('input');
let button = document.querySelector('button');
let inputToDoList = '';
let sortButton = document.querySelector('.sorting');
sortButton.addEventListener('click', sortingToDo);
button.addEventListener('click', clickButton);
toDo.addEventListener('input', inputToDo);
document.addEventListener('keydown', func);
let taskToDo= document.querySelector('.task-to-do');
let upSorted = false;

function func(e) {
	if (e.key !== 'Enter') return;
	clickButton();
}


function inputToDo(e) {
	inputToDoList = e.target.value;

}


function clickButton() {

	if (inputToDoList !== '') {
		arr.push(inputToDoList);
	} else {
		return null;
	}


	// let taskToDo = document.querySelector('.task-to-do');
	let newElement = document.createElement('div');
	taskToDo.append(newElement);
	newElement.innerText = inputToDoList;
	let classListNewElement = newElement.classList;
	classListNewElement.add('toDoElement');
	let elementDelete = document.createElement('div');
	newElement.append(elementDelete);
	// elementDelete.innerText = '';
	let classListDelete = elementDelete.classList;
	classListDelete.add('deleteTodo');
	inputToDoList = '';
	toDo.value = '';
	elementDelete.addEventListener("click", clickDeleteButton);
	taskToDo.style.display = 'block'
	console.log(arr);
}

// let toDoDelete = document.querySelector('.task-to-do');
// toDoDelete.addEventListener('click', begin);
// function begin(el){
// 	let parentElement= toDoDelete.parentElement;
// 	toDoDelete.remove();
// 	console.log(parentElement)

// }


function clickDeleteButton() {
	// находим ближайший к кликнутой кнопке элемент - его надо будет удалить
	let elementDiv = this.closest(".toDoElement");
	elementDiv.remove();
	let str = elementDiv.innerText;
	//по внутреннему тексту этого элемента находим его индекс в массиве
	let elementRemove = arr.indexOf(str);
	// по найденному индексу удаляем элемент в массиве
	arr.splice(elementRemove, 1);
	// проверяем, если в блоке всех задач не осталось задач, то делаем весь блок невидимым
	taskToDo.innerText == ""
		? (taskToDo.style.display = "none")
		: (taskToDo.style.display = "block");
}

function sortingToDo() {
	taskToDo.innerText == '' ? null : sortButton.style.backgroundImage = 'url(/images/sort_3.svg)';
	// taskToDo.innerText == '' ? null : upSorted = false ? 
	// sortButton.style.background ='url(/images/sort_3.svg)':
	// sortButton.style.background ='url(/images/sotr_2.svg)';

	let sortArray = [...arr].sort((a,b)=>{
		if(upSorted){
			return (a < b) ? 1 
			: (a > b) ? -1 : 0;
		}
		return (a < b) ? -1 
		: (a > b) ? 1 : 0;
	});
	taskToDo.innerText='';
	sortArray.forEach((el)=>{
		let newElement = document.createElement('div');
		taskToDo.append(newElement);
		newElement.innerText = el;
		let classListNewElement = newElement.classList;
		classListNewElement.add('toDoElement');
		let elementDelete = document.createElement('div');
		newElement.append(elementDelete);
		// elementDelete.innerText = '';
		let classListDelete = elementDelete.classList;
		classListDelete.add('deleteTodo');
		elementDelete.addEventListener("click", clickDeleteButton);
	})
	upSorted = !upSorted;
	console.log(sortArray);
}

