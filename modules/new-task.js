function addNewTask(title)// 5
{
  var taskLi = document.createElement('li');
//tworzenie elementów dokumentu na nowo
  taskLi.classList.add('single-task');/* 6 to jest potrzebne, ponieważ pomiędzy kolejnymi wyświetlanymi zadanimi jest wpisane
 .single-task
  {
    margin-bottom: 16px;
  }, a później w funkcji prepareTaskHTML(title) używamy tego stylu*/
  taskLi.innerHTML = prepareTaskHTML(title);// 7 //wprowadzamy cały HTML odpowiedzialny za tworzenie elementów dokumentu, gdy pojedynczy element będzie gotowy to wstawiamy go do elementu li (var taskLi u góry)
//ponadto przekazywany jest title do funkcji prepareTaskHTML

  //Events - toggle and delete,  przełączanie stanu wykonane, niewykonane
  var toggleCompleteBtn = taskLi.querySelector('.toggle-complete-btn');// 14 //zapisanie do zmiennych wybranych przycisków
  var deleteBtn = taskLi.querySelector('.delete-task-btn');                 //wybranie przycisków w każdym nowym elemencie

  toggleCompleteBtn.addEventListener('click', function()// 15a1
  {
    toggleTaskComplete(this);
  });

  deleteBtn.addEventListener('click', function()// 15b1
  {
    deleteTask(this);
  });

  //Add task to DOM
  tasksContainer.appendChild(taskLi);// 8 //pojedynczy element li dodawany jest do container 9
}

function prepareTaskHTML(title)
{
  return '<div class="input-group"> '+
    '  <span class="input-group-btn">'+
    '    <button class="btn btn-default toggle-complete-btn"><i class="fa fa-check"></i></button>'+
    '  </span>'+
      '  <input type="text" class="form-control" placeholder="Tytuł zadania..." value="' + title + '">'+
    '  <span class="input-group-btn">'+
    '    <button class="btn btn-danger delete-task-btn" type="submit"><i class="fa fa-times"></i></button>'+
'  </div>';
}
//Dodawanie nowych zadań, za pomocą zdarzenia submit
function bindAddTaskEvents() // 10 //przypisujemy zdarzenia do obsługi dodawania nowego zadania
{
  //w momencie wysłania formularza // on submit //submit odznacza zdarzenie wysłania formularza
  newTaskForm.addEventListener('submit', function(event)// 12b
  {
    event.preventDefault();//zapobiegnięcie przeładowaniu strony po wciśnięciu entera

    var title2 = this.querySelector('input').value;// 13

    if(title2)// 14 sprawdzenie czy coś jest wpisanego w title w formularzu
    {
      //dodanie nowego tytułu zadania do listy
      addNewTask(title2);
    }
  });
}
