$(function () {
  function renderTodoItems() {
    $todosList.children().remove();

    todo_items.forEach(function (todo) {
      $todosList.append(todoTemplate(todo));
    });
  }

  function promptDelete(e) {
    e.preventDefault();

    $('div').show();

    $('div#modal').attr('data-todo-id', $(e.target).closest('li').data('id'));
  }

  function closeModals(e) {
    if (e !== undefined) {
      e.preventDefault();
    }

    $('div').hide();
  }

  function deleteTodo(e) {
    e.preventDefault();

    var todoId = Number($(e.target).closest('div#modal').attr('data-todo-id'));

    $todosList.find(`li[data-id="${todoId}"]`).remove();

    todo_items = todo_items.filter(function (todo) {
      return todo.id !== todoId;
    });

    closeModals();
    // renderTodoItems();
  }

  var todoTemplate = Handlebars.compile($('script[type="text/x-handlebars-template"]').html());

  var todo_items = [
    { id: 1, title: 'Homework' },
    { id: 2, title: 'Shopping' },
    { id: 3, title: 'Calling Mom' },
    { id: 4, title: 'Coffee with John '}
  ];

  var $todosList = $('ul');
  
  renderTodoItems();

  $todosList.on('click', 'a', promptDelete);

  $('button#delete-todo').on('click', deleteTodo);
  
  $('div#modal-background').on('click', closeModals);
  $('button#cancel-delete').on('click', closeModals);
});
