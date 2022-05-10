let arr = [];
let toDo = document.querySelector('input');
let button = document.querySelector('button');
let inputToDoList = '';
let sortConteiner = document.querySelector('.conteiner-sorting');
let sortButton = document.querySelector('.sorting');
let sortUp = document.querySelector('.sorting__down');


// if (sortButton.style.display === 'block'){
// 	sortButton.style.display = 'none';
// 	sortUp.style.display = 'block';
// } else {
// 	sortButton.style.display = 'block';
// 	sortUp.style.display = 'none';
// }


sortConteiner.addEventListener('click', sortingToDo);
button.addEventListener('click', clickButton);
toDo.addEventListener('input', inputToDo);
document.addEventListener('keydown', func);
let taskToDo = document.querySelector('.task-to-do');
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


	let newElement = document.createElement('div');
	taskToDo.append(newElement);
	newElement.innerText = inputToDoList;
	let classListNewElement = newElement.classList;
	classListNewElement.add('toDoElement');
	let elementDelete = document.createElement('div');
	newElement.append(elementDelete);
	let classListDelete = elementDelete.classList;
	classListDelete.add('deleteTodo');
	inputToDoList = '';
	toDo.value = '';
	elementDelete.addEventListener("click", clickDeleteButton);
	taskToDo.style.display = 'block'
	console.log(arr);
}




function clickDeleteButton() {
	let elementDiv = this.closest(".toDoElement");
	elementDiv.remove();
	let str = elementDiv.innerText;
	let elementRemove = arr.indexOf(str);
	arr.splice(elementRemove, 1);
	taskToDo.innerText == ""
		? (taskToDo.style.display = "none")
		: (taskToDo.style.display = "block");
}

function sortingToDo() {

	let sortArray = [...arr].sort((a, b) => {
		if (upSorted) {
			return (a < b) ? 1
				: (a > b) ? -1 : 0;

		}
		return (a < b) ? -1
			: (a > b) ? 1 : 0;
	});
	taskToDo.innerText = '';
	sortArray.forEach((el) => {
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

	if (sortButton.style.display === 'block') {
		sortButton.style.display = 'none';
		sortUp.style.display = 'block';
	} else {
		sortButton.style.display = 'block';
		sortUp.style.display = 'none';
	}

	upSorted = !upSorted;

	console.log(sortArray);
}

