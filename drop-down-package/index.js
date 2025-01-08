export class Dropdown {
    constructor(dropdownElement, trigger = 'click') {
      this.dropdown = dropdownElement;
      this.button = this.dropdown.querySelector('.dropdown-button');
      this.menu = this.dropdown.querySelector('.dropdown-menu');
      this.trigger = dropdownElement.dataset.trigger || trigger; // Use data-trigger or fallback
      this._init();
     
    }
  
    _init() {
      // Setup hover functionality
      if (this.trigger.includes('hover')) {
        this.dropdown.addEventListener('mouseenter', () => this.show());
        this.dropdown.addEventListener('mouseleave', () => this.hide());
      }
  
      // Setup click functionality
      if (this.trigger.includes('click')) {
        this.button.addEventListener('click', (event) => {
          event.stopPropagation();
          this.toggle();
        });
  
        document.addEventListener('click', (event) => {
          if (!this.dropdown.contains(event.target)) {
            this.hide();
          }
        });
      }
    }
  
    show() {
      this.menu.classList.add('visible');
    }
  
    hide() {
      this.menu.classList.remove('visible');
    }
  
    toggle() {
      this.menu.classList.toggle('visible');
    }
  }
  
  
  
  
  export function initDropdowns(trigger = 'click') {
    document.querySelectorAll('.dropdown').forEach((dropdownElement) => {
      const triggerType = dropdownElement.dataset.trigger || trigger;
      new Dropdown(dropdownElement, triggerType);
    });
  }
  

  