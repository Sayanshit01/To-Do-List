        // Sample data to be displayed in the table
        var sampleTasks = [];

        // Function to show the "Add Task" modal
        function showAddTaskModal() {
            $("#addTaskModal").modal('show');
        }

        // Function to add a task
        function addTask() {
            var taskDescription = document.querySelector("#addTaskTextArea").value;
            var taskResponsiblePerson = document.querySelector("#addResponsiblePerson").value;
            var taskETA = document.querySelector("#addETA").value;

            var task = {
                taskDescription: taskDescription,
                taskResponsiblePerson: taskResponsiblePerson,
                taskETA: taskETA,
            };

            sampleTasks.push(task);

            // Clear the form
            document.querySelector("#taskInputForm").reset();

            // Close the modal
            $("#addTaskModal").modal('hide');

            // Update the table with the new task
            createHtmlFromStorage();
        }

        // Function to generate table rows from stored tasks
        function createHtmlFromStorage() {
            var html = '';
            for (var i = 0; i < sampleTasks.length; i++) {
                var task = sampleTasks[i];
                html += '<tr>';
                html += '<td>' + (i + 1) + '</td>';
                html += '<td>' + task.taskDescription + '</td>';
                html += '<td>' + task.taskResponsiblePerson + '</td>';
                html += '<td>' + task.taskETA + '</td>';
                html += '<td><i class="bi bi-check-circle-fill" onclick="markAsDone(' + i + ')"></i><i class="bi bi-pencil-square" onclick="editTask(' + i + ')"></i></td>';
                html += '</tr>';
            }

            document.querySelector("#taskTableBody").innerHTML = html;
        }

        // Function to mark a task as done
        function markAsDone(index) {
            sampleTasks.splice(index, 1);
            createHtmlFromStorage();
        }

        // Function to edit a task (this is a placeholder, you can add the "Edit Task" modal)
        function editTask(index) {
            // Placeholder for editing a task
            // You can implement this part separately.
        }

        // Initialize the table with sample data
        createHtmlFromStorage();