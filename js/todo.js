// 1. Todo 리스트 추가하기
// 2. Todo 리스트 삭제하기
// 3. Todo 리스트 저장하기(localStorage, JSON.stringfy)
// 4. Todo 리스트 가져오기(JSON.parse, foreach)
// 5. localstorage에 Todo 리스크가 있으면 먼저 로딩
// 6. newTodo를 {text: newTodo, id:Date.now()}의 Object로 변형
//  (리스트 삭제하면 localstorage에서도 삭제하기 위한 ID 추가)
// 7. array의 filter() 동작 이해
// 8. 드디어 삭제 => localStorage의 id는 integer
//   li.id는 string => parseInt() 사용
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function loadToDos() {
    JSON.parse(localStorage.getItem(TODOS_KEY));
    // console.log(`loaded todos: ${toDos}`);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !==parseInt(li.id));
    saveToDos();
}

function paintToDO(newTodoObj)
{
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = newTodoObj.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDO(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDO);
    // parsedToDos.forEach((item) => paintToDO(item));
}

