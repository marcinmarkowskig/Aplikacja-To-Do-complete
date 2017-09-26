//Variables
var newTaskForm = document.querySelector('.add-new-task-container form');// 12a //pozwala na wybranie całego formularza
var tasksContainer = document.querySelector('.tasks-container ul');// 9 //wybrany pojemnik na zmienne

//On DOM load
//plik odpowiada za mechanikę całej aplikacji
document.addEventListener('DOMContentLoaded', function()// 1 //zapis oznacza, że aplikacja zacznie działać, kiedy całe drzewo DOM będzie już załadowane
{
  bindAddTaskEvents();// 11 //funckja, aby działał formularz do wpisywania nowych zadan
  showTasks();// 2 //kiedy funkcja będzie gotowa odwołujemy się do funkcji showTasks()
});//nasłuchiwacz nasłuchuje, że gdy pojawi się zdarzenie 'DOMContentLoaded' ma się wykonać funkcja showTasks()
//wyświetlenie listy zadań
