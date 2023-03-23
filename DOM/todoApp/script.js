// DOM Selectors
// get the elements by class name

// const elements= document.getElementsByClassName('list-group-item');
// console.log(elements)

// get elements by TagName

// const elements=document.getElementsByTagName('li')
// console.log(elements)

// get element using Id

// const header=document.getElementById('main-header')
// console.log(header)

// task: diff document.querySelector, document.querySelectorAll

// variables
var form= document.getElementById('addForm')
var todoList= document.getElementById('items')


// event listener
form.addEventListener('submit', addTodo)
todoList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterTodos)

// functions
function addTodo(e){
    e.preventDefault()

    // get input value from user
    var newTodo= document.getElementById('item').value

    // create a newli element
    var li=document.createElement('li')

    // add all classes to new Todo
    li.className= 'list-group-item'

    // add new todo to li
    li.textContent= newTodo

    // create new del button
    var deleteBtn= document.createElement('button')

    // add classes to the button
    deleteBtn.className= 'btn btn-danger brn-sm float-end delete'

    // addtext to delete btn
    deleteBtn.textContent= 'delete'

    // append button to into list
    li.appendChild(deleteBtn)

    // append that list into unordered list
    todoList.append(li)

    //

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Confirm')){
            console.log(e.target.parentElement)
            var li= e.target.parentElement
            todoList.removeChild(li)
        }
    }
}

function filterTodos(e){
    var text= e.target.value.toLowerCase()
    var todos= todoList.getElementsByTagName('li')

    // convert todos to array
    Array.from(todos).forEach(function (todo){
        var todoName= todo.firstChild.textContent
        console.log(todoName.toLowerCase().indexOf(text) !=-1)

        if(todoName.toLowerCase().indexOf(text) !=-1){
            todo.style.display= 'block'
        } else{
            todo.style.display= 'none'
        }
    })

}