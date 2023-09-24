

const buttons = document.querySelectorAll('.main_checkbox_button')
const arrow = document.querySelectorAll('.arrow')
const mainProd = document.querySelectorAll('.main_products')
const linear = document.querySelectorAll('.linear')
const main_missing_title = document.getElementById('main_missing_title')
const main_missing_title1 = document.getElementById('main_missing_title1')
const main_checkbox_label1 = document.getElementById('main_checkbox_label1')
const main_checkbox_label2 = document.getElementById('main_checkbox_label2')


  buttons.forEach((node, idx) => {
    node.addEventListener("click", function () {
      const panel = mainProd[idx];
      if (panel.style.display === "flex") {
        panel.style.display = "none";
        main_checkbox_label1.style.display = 'none'
        main_checkbox_label2.style.display = 'none'
        main_missing_title.style.display = 'flex'
        main_missing_title1.style.display = 'flex'
        arrow[idx].classList.add('arrow_active')
        arrow[idx].classList.remove('arrow_deactive')
        if ((idx === 0 || 1) ) {
         let index = 1
          linear[index].classList.add('linear_hide')
        } else if(idx === 2 || 3) {
          let index = 2
          linear[index].classList.add('linear_hide')
        }
        linear[idx].classList.add('linear_hide')
      } else {
        panel.style.display = "flex";
        main_checkbox_label1.style.display = 'flex'
        main_checkbox_label2.style.display = 'flex'
        main_missing_title.style.display = 'none'
        main_missing_title1.style.display = 'none'
        arrow[idx].classList.remove('arrow_active')
        arrow[idx].classList.add('arrow_deactive')
        if ((idx === 2) ) {
          linear[1].classList.remove('linear_hide')
        } else if ((idx === 3)) {
          linear[1].classList.add('linear_hide')
        } else linear[idx].classList.remove('linear_hide')
      }
    });
  })


