import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABCD');
// sessionStorage.setItem('mi-key', 'ABCD');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);

todoList.todos.forEach(todo => crearTodoHtml(todo));
// todoList.todos.forEach(crearTodoHtml); // Opción valida cuando solo es un argumento

// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);

console.log('todos', todoList.todos);

