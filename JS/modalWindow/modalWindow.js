
document.addEventListener('DOMContentLoaded', function() {

  const modalButtons = document.querySelectorAll('.js_open_modal1'),
    overlay = document.querySelector('.overlay'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  modalButtons.forEach(function(item){
    item.addEventListener('click', function(event) {
      event.preventDefault();
      const modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
      modalElem.classList.add('active');
      overlay.classList.add('active');
    });
  });

  closeButtons.forEach(function(item){

    item.addEventListener('click', function(e) {

      document.querySelector('.modal.active').classList.remove('active');
      overlay.classList.remove('active');
    });

    overlay.addEventListener('click', function() {
      document.querySelector('.modal.active').classList.remove('active');
      this.classList.remove('active');
    });


  })
});


