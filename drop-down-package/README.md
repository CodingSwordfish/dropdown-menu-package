# dropdown-menu-package


// structure of the html

<!-- <div class="dropdown" data-trigger="click hover">
        <button class="dropdown-button">Dropdown</button>
        <ul class="dropdown-menu">
            <li><a href="#item1">Item 1</a></li>
            <li><a href="#item2">Item 2</a></li>
            <li><a href="#item3">Item 3</a></li>
        </ul>
    </div> -->

    <!-- Add the CSS styles as desired to toggle the click and hover functionalities -->

    <!-- how to import and use the modules

    import { Dropdown } from 'wagoki-dropdown-menu';

document.addEventListener('DOMContentLoaded', () => {
  const dropdownElement = document.querySelector('.dropdown');
  const dropdown = new Dropdown(dropdownElement, 'hover click'); // Supports both hover and click
});


import { initDropdowns } from 'wagoki-dropdown-menu';

document.addEventListener('DOMContentLoaded', () => {
  initDropdowns('hover click'); // Applies to all dropdowns with the default or dataset trigger
}); -->
