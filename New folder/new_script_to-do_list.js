// Function to toggle between light and dark modes
function toggleMode() {
    let body = document.getElementsByTagName("body")[0];
    let image = document.getElementById("modeToggle");
  
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      image.src = "sun.png";
      image.alt = "Dark Mode";
      // Save the selected mode in localStorage
      localStorage.setItem("mode", "dark");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      image.src = "moon.png";
      image.alt = "Light Mode";
      // Save the selected mode in localStorage
      localStorage.setItem("mode", "light");
    }
  }
  // Check for the saved mode in localStorage and apply it on page load
  document.addEventListener("DOMContentLoaded", function () {
    let savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      // If dark mode was saved, apply dark mode styles
      toggleMode();
    }
  });
  
  
  // add task function 
  function addtask() {
    let text = document.getElementById("task-input").value;
    if (text.length > 0) {
      let para = document.createElement("p");
      let node = document.createTextNode(text);
      para.appendChild(node);
      let element = document.getElementById("addedtask");
      element.appendChild(para);
  
      // Store the input value in local storage
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(text);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }
  
  window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let element = document.getElementById("addedtask");
  
    tasks.forEach(function (taskText) {
      let para = document.createElement("p");
      let node = document.createTextNode(taskText);
      para.appendChild(node);
      element.appendChild(para);
    });
  };
  
  window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});