

const courier = document.querySelectorAll('.modal_delivery_check_info')
const but = document.querySelectorAll('.modal_delivery_check_buttons div')

but[1].setAttribute("style", 'border: 2px solid #CB11AB;border-radius: 24px;')


function atPoint() {
  courier[0].style.display = 'none'
  courier[1].style.display = 'flex'
  but[0].setAttribute("style", 'border: 2px solid #CB11AB;border-radius: 24px;')
  but[1].setAttribute("style", ' ')


}
  // border-radius: 24px;
function atCourier() {
  courier[1].style.display = 'none'
  courier[0].style.display = 'flex'
  but[1].setAttribute("style", 'border: 2px solid #CB11AB;border-radius: 24px;')
  but[0].setAttribute("style", ' ')

}