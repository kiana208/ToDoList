//=> Select Datas For Add Todos:
const addTodoForm = $(".add-todo");
const addTodoInput = $("#newTodoInput");

//=> Select Datas For Show Todos:
const todoShowBox = $(".todos-list");
const todosInfo = [];

//=> Create Functions:
//Click Setting Buttons:
const removeTodo = (id) => {
  Swal.fire({
    title: "Are you sure to delete?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      //   $(`#${id}`).remove();
      const todosUpdate = todosInfo.map((item) => item.id !== id);
      console.log(todosUpdate);
      construc(todosUpdate);
      if (todosInfo.length === 0) {
        console.log(56666);
        alert(5555);
        $(".todo-list").html(
          `<li class="empty-state"> تسکی برای انجام موجود نیست </li>`
        );
      }
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
};

//Constructor:
const construc = (todoItem) => {
  todoItem.map((item, index) => {
    newTodo = $(`
        <li id="${item.id}" class="todo d-flex justify-content-between align-items-center">
            <div class="todo-info">
                <input type="checkbox" name="checkTodo" id="checkTodo" />
                <label for="checkTodo" class="todo-title">${item.title}</label>
            </div>
            <div class="todo-setting d-flex gap-2">
                <button type="button" class="todo-btn edit-btn">Edit</button>
                <button type="button" class="todo-btn edit-btn" onclick="removeTodo('${item.id}')">Delete</button>
            </div>
        </li>
    `);
    if (index === todosInfo.length - 1) {
      todoShowBox.append(newTodo);
    }
    newTodo = "";
  });
};

//=> Events:

//Submit Form:
addTodoForm.on("submit", (event) => {
  event.preventDefault();
  const todo = {};
  if (addTodoInput.val() !== "") {
    todo.id = crypto.randomUUID();
    todo.title = addTodoInput.val();
    todo.isComplete = false;
    todo.createAt = new Date();
    todosInfo.push(todo);
    construc(todosInfo);
    addTodoInput.val("");
  }
});
