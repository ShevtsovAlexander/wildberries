

const old_price = document.querySelectorAll(".old_price");
const modal = document.querySelectorAll(".old_price_inf");

old_price.forEach((node, idx) => {
  node.addEventListener('mouseover', (e) => {
    modal[idx].style.display = 'flex'
    e.preventDefault()
  })
  node.addEventListener('mouseout', (e) => {
    modal[idx].style.display = 'none'
    e.preventDefault()
  })
})


