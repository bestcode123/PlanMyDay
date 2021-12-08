function onLoad() {
    var destination = document.getElementById('todo_destination')
    var todoListItems = localStorage.getItem('noofoentries_tdl')

    console.log(todoListItems)
}

window.onload = onLoad

