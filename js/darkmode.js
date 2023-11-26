// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Attach the event listener to the modeToggle element
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('click', toggleTheme);
});

// Function to toggle between dark and light mode
function toggleTheme() {
    const body = document.body;
    const modeCheckbox = document.getElementById('modeCheckbox');

    // Check the current state of the checkbox
    if (modeCheckbox.checked) {
        // If checked, enable dark mode by adding a class
        body.classList.add('dark-theme');
        // Save the theme preference and checkbox state to localStorage
        localStorage.setItem('theme', 'dark');
        localStorage.setItem('checkboxState', 'checked');
    } else {
        // If unchecked, disable dark mode by removing the class
        body.classList.remove('dark-theme');
        // Save the theme preference and checkbox state to localStorage
        localStorage.setItem('theme', 'light');
        localStorage.setItem('checkboxState', 'unchecked');
    }
}

// Function to check and set the initial theme preference and checkbox state
function checkInitialTheme() {
    const body = document.body;
    const modeCheckbox = document.getElementById('modeCheckbox');

    // Retrieve the theme preference and checkbox state from localStorage
    const savedTheme = localStorage.getItem('theme');
    const savedCheckboxState = localStorage.getItem('checkboxState');

    if (savedTheme === 'dark') {
        // If the saved theme is dark, enable dark mode
        body.classList.add('dark-theme');
    } else {
        // Otherwise, enable light mode (or default styles)
        body.classList.remove('dark-theme');
    }

    if (savedCheckboxState === 'checked') {
        // If the saved checkbox state is checked, set the checkbox accordingly
        modeCheckbox.checked = true;
    } else {
        // Otherwise, set the checkbox to unchecked
        modeCheckbox.checked = false;
    }
}

// Call the function to check and set the initial theme preference and checkbox state
checkInitialTheme();

// // Function to toggle between dark and light mode
//     function toggleTheme() {
//         console.log('Toggle function called');
//         const themeStylesheet = document.getElementById('themeStylesheet');
//         const modeCheckbox = document.getElementById('modeCheckbox');
//          const body = document.body;
//         console.log('Checkbox status:', modeCheckbox.checked);
//
//     // Check the current state of the checkbox
//         if (modeCheckbox.checked) {
//               // If checked, set to dark mode
//               // themeStylesheet.setAttribute('data-theme', 'dark');
//               body.classList.add('dark-theme');
//               localStorage.setItem('theme', 'dark'); //add this
//       } else {
//               // If unchecked, remove the data-theme attribute (light mode)
//               // themeStylesheet.setAttribute('data-theme', 'light');
//               body.classList.remove('dark-theme');
//               localStorage.setItem('theme', 'light'); //add this
//           }
// }
// // Function to check and set the initial theme preference
// function checkInitialTheme() {
//     const body = document.body;
//     // Retrieve the theme preference from localStorage
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//         // If the saved theme is dark, enable dark mode
//         body.classList.add('dark-theme');
//     } else {
//         // Otherwise, enable light mode (or default styles)
//         body.classList.remove('dark-theme');
//     }
// }
//
// // Call the function to check and set the initial theme preference
// checkInitialTheme();
