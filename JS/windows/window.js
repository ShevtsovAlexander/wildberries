

const companyicons = document.querySelectorAll(".companyicon");
const mypopup = document.querySelectorAll(".mypopup");

companyicons.forEach((node, idx) => {
  node.addEventListener('mouseover', (e) => {
    mypopup[idx].style.left = 0 + "px";
    mypopup[idx].style.top = 18 + "px";
    mypopup[idx].style.display = 'flex'
    e.preventDefault()
  })
  node.addEventListener('mouseout', (e) => {
    mypopup[idx].style.display = 'none'
    e.preventDefault()
  })
})


