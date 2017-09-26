// funkcja odpowiada za wyświetlanie zadań na liście
function showTasks()//3a
{
  tasks.forEach(function(title)// 3b //przesyłam pobrany tytuł do funkcji addNewTask, która specjalizuje się w dodawaniu zadania do dokumentu HTML
  //tasks.forEach(function(element)-tak powinno być, tylko na potrzeby programu słowo element zastępujemy słowem title
  {
    addNewTask(title);// 4 //do funkcji przekazywane są kolejne nazwy zadań z pliku, funkcja dodaje kolejne tytuły z lity do dokumentu HTML
  });
}
//Toggle complete
function toggleTaskComplete(task) // 15a2
{
  task.classList.toggle('btn-success');
}

//Delete task
function deleteTask(task)// 15b2
{
  var liToDelete = task.closest('li');//wybieramy element li, który chcemy usunąć, musimy wybrać najbliższy element iksa (X)
  task.closest('ul').removeChild(liToDelete);
  //rodzic.removeChild();
}
