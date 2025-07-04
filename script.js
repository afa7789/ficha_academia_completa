function showWorkout(index) {
    // Remove active class from all table cells
    const cells = document.querySelectorAll('.workout-cell');
    cells.forEach(cell => cell.classList.remove('active'));
    
    // Hide all workout contents
    const contents = document.querySelectorAll('.workout-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Show selected workout
    document.getElementById(`workout-${index}`).classList.add('active');
    
    // Find and highlight the clicked cell by finding the cell that calls this exact workout
    cells.forEach(cell => {
        if (cell.getAttribute('onclick') === `showWorkout(${index})`) {
            cell.classList.add('active');
        }
    });
}

function showAllWorkouts() {
    // Remove active class from all table cells
    const cells = document.querySelectorAll('.workout-cell');
    cells.forEach(cell => cell.classList.remove('active'));
    
    // Show all workout contents
    const contents = document.querySelectorAll('.workout-content');
    contents.forEach(content => content.classList.add('active'));
}
