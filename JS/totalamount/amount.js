let sum = [
  {
    count: 1,
    price: 0,
    withoutSale: 0,
    beforeSalePrice: 1051,
    cost: 522,
    checked: false,
  },
  {
    count: 200,
    price: 0,
    withoutSale: 0,
    beforeSalePrice: 11500.235,
    cost: 10500.235,
    checked: false,
  },
  {
    count: 2,
    price: 0,
    withoutSale: 0,
    beforeSalePrice: 475,
    cost: 247,
    checked: false,
  },
  {
    count: 1,
    price: 0,
    withoutSale: 0,
    beforeSalePrice: 1051,
    cost: 522,
    checked: false,
  },
  {
    count: 200,
    price: 0,
    withoutSale: 0,
    beforeSalePrice: 11500.235,
    cost: 10500.235,
    checked: false,
  },
  {
    count: 2,
    price: 0,
    withoutSale: 0,
    beforeSalePrice: 475,
    cost: 247,
    checked: false,
  },
]

let bigTotalSum = 0
let bigTotalCount = 0
let bigTotalSumWithOut = 0
let bigTotalDifference = 0



let quantityElement = document.querySelectorAll('.amount_product input')
let totalSum = document.querySelectorAll('.total_sum')
let finalSum = document.querySelectorAll('.main_num')

const plusButtonElement = document.querySelectorAll('.button_plus')
const minusButtonElement = document.querySelectorAll('.button_minus');

const bigTotalSumElement = document.querySelectorAll('.big_total_sum');
const bigTotalCountElement = document.querySelectorAll('.total_count');
const bigTotalSumWithOutElement = document.querySelectorAll('.big_total_sum_withoutSale');
const bigTotalDifferenceElement = document.querySelectorAll('.big_total_difference');
const main_checkbox_label_input = document.querySelectorAll('.main_checkbox_label_input');
const main_label_input = document.querySelectorAll('.checkbox');
const main_label_input_empty = document.querySelectorAll('.empty');
const main_label_input_empty1 = document.querySelectorAll('.empty1');
const main_label_input_total = document.getElementById('main_label_input_total');
const main_label_input_total2 = document.getElementById('main_label_input_total_2');
const text_good_info_1 = document.getElementById('text_good_info_1');
const text_good_info_2 = document.getElementById('text_good_info_2');
const span_h4_2 = document.getElementById('span_h4_2');
const span_h4 = document.getElementById('span_h4');
const header_basket_icon_num2 = document.getElementById('header_basket_icon_num2');
const header_basket_icon_num2_2 = document.getElementById('header_basket_icon_num2_2');
const header_basket_icon_num = document.querySelectorAll('.header_basket_icon_num2');
const case_over_200 = document.querySelectorAll('.case_over_200');
const case_over_200_num = document.querySelectorAll('.case_over_200_num');
const case_over_200_2 = document.querySelectorAll('.case_over_200_2');
const hide_block_inf = document.querySelectorAll('.hide_block_inf');
const a = document.querySelectorAll('.a');
const b = document.querySelectorAll('.b');
const red_shar = document.querySelectorAll('.red_shar');
const clickFunc2 = (item, checkValue, idx) => {
  sum[idx] = {...sum[idx], checked: checkValue}
  if (checkValue) {
    item.setAttribute("checked", "checked");
    bigTotalSum += (sum[idx].cost * sum[idx].count) / 2
    bigTotalCount += (sum[idx].count) /2
    bigTotalSumWithOut += (sum[idx].beforeSalePrice * sum[idx].count)/2
    bigTotalDifference = -(bigTotalSumWithOut - bigTotalSum)
    if(main_label_input_total2.checked) {
      span_h4_2.innerHTML = `Оплатить ${bigTotalSum.toLocaleString().split(',')[0]} сом`
    }
    if(main_label_input_total.checked) {
      span_h4.innerHTML = `Оплатить ${bigTotalSum.toLocaleString().split(',')[0]} сом`
    }
for (let i=0; i < 6; i++) {
  plusButtonElement[i].removeAttribute('disabled')
  minusButtonElement[i].removeAttribute('disabled')
}

    if (sum[idx].count > 1 ) {
      minusButtonElement[idx].style.color = "#000"
    }

    if (sum[idx].count === 2) {
      plusButtonElement[idx].style.color = "rgba(0, 0, 0, 0.20)"
    }

    if(sum[idx].count > 1) {
      red_shar[idx].style.display = 'flex'
      case_over_200_num[0].style.display = 'flex'
      case_over_200_num[1].style.display = 'flex'
    } else {
      red_shar[idx].style.display = 'none'
      case_over_200_num[0].style.display = 'none'
      case_over_200_num[1].style.display = 'none'
    }


    if(idx === 1 || 2) {
      case_over_200_2[0].style.display = 'block'
      case_over_200_2[1].style.display = 'block'
      hide_block_inf[0].style.display = 'block'
      hide_block_inf[1].style.display = 'block'
      a[0].style.display = 'flex'
      b[0].style.display = 'flex'
      a[1].style.display = 'flex'
      b[1].style.display = 'flex'
      case_over_200[0].style.display = 'block'
      case_over_200[2].style.display = 'block'
      case_over_200[4].style.display = 'block'
      case_over_200[6].style.display = 'block'
    }

  } else {
    item.removeAttribute( "checked");
    bigTotalSum = 0
    bigTotalCount = 0
    bigTotalSumWithOut = 0
    bigTotalDifference = 0

    if(idx === 1 || 2) {
      case_over_200_2[0].style.display = 'none'
      case_over_200_2[1].style.display = 'none'
      hide_block_inf[0].style.display = 'none'
      hide_block_inf[1].style.display = 'none'
      a[0].style.display = 'none'
      b[0].style.display = 'none'
      a[1].style.display = 'none'
      b[1].style.display = 'none'
      case_over_200[0].style.display = 'none'
      case_over_200[2].style.display = 'none'
      case_over_200[4].style.display = 'none'
      case_over_200[6].style.display = 'none'
    }
  }




  bigTotalSumElement.forEach((item) => {
    item.innerHTML = bigTotalSum.toLocaleString()
  })
  bigTotalCountElement.forEach((item) => {
    item.innerHTML = bigTotalCount.toLocaleString()
  })
  bigTotalSumWithOutElement.forEach((item) => {
    item.innerHTML = bigTotalSumWithOut.toLocaleString()
  })
  bigTotalDifferenceElement.forEach((item) => {
    item.innerHTML = bigTotalDifference.toLocaleString()
  })
}
let sum0;
const clickFunc = (item, checkValue, idx) => {
  sum[idx] = {...sum[idx], checked: checkValue}
    if (checkValue) {
    item.setAttribute("checked", "checked");
    bigTotalSum += (sum[idx].cost * sum[idx].count)
    bigTotalCount += (sum[idx].count)
       sum0 = (sum[0].count)
    bigTotalSumWithOut += (sum[idx].beforeSalePrice * sum[idx].count)
    bigTotalDifference = -(bigTotalSumWithOut - bigTotalSum)
    if(main_label_input_total2.checked) {
      span_h4_2.innerHTML = `Оплатить ${bigTotalSum.toLocaleString().split(',')[0]} сом`
    }
    if(main_label_input_total.checked) {
      span_h4.innerHTML = `Оплатить ${bigTotalSum.toLocaleString().split(',')[0]} сом`
    }

      plusButtonElement[idx].removeAttribute('disabled')
      minusButtonElement[idx].removeAttribute('disabled')
      if (sum[idx].count > 1 ) {
        minusButtonElement[idx].style.color = "#000"
      }

      if (sum[idx].count === 2) {
        plusButtonElement[idx].style.color = "rgba(0, 0, 0, 0.20)"
      }

      if(sum[idx].count === 1) {
        red_shar[idx].style.display = 'none'
      } else red_shar[idx].style.display = 'flex'

      if (  header_basket_icon_num[3].innerHTML === '1') {
        red_shar[4].style.display = 'none'
      }
      if (  header_basket_icon_num[3].innerHTML === '2') {
        red_shar[4].style.display = 'flex'
      }
      if (  header_basket_icon_num[5].innerHTML === '1') {
        red_shar[6].style.display = 'none'
      }
      if (  header_basket_icon_num[5].innerHTML === '2') {
        red_shar[6].style.display = 'flex'
      }

      if(idx === 1) {
        case_over_200_2[0].style.display = 'block'
        hide_block_inf[0].style.display = 'block'
        a[0].style.display = 'flex'
        b[0].style.display = 'flex'
      } else if(idx === 0 ) {
        case_over_200[0].style.display = 'block'
        hide_block_inf[0].style.display = 'block'
      } else if (idx === 2) {
        case_over_200[2].style.display = 'block'
        hide_block_inf[0].style.display = 'block'
      }
      if(idx === 4) {
        case_over_200_2[1].style.display = 'block'
        hide_block_inf[1].style.display = 'block'
        a[1].style.display = 'flex'
        b[1].style.display = 'flex'
    } else if(idx === 3 ) {
        case_over_200[4].style.display = 'block'
        hide_block_inf[1].style.display = 'block'
      } else if (idx === 5) {
        case_over_200[6].style.display = 'block'
        hide_block_inf[1].style.display = 'block'
      }


    } else {
    item.removeAttribute( "checked");
      if (idx === 4) {

        a[1].style.display = 'none'
        b[1].style.display = 'none'
        if(case_over_200[4].style.display === 'block' || case_over_200[6].style.display === 'block') {
          hide_block_inf[1].style.display = 'block'
          case_over_200_2[1].style.display = 'none'
        } else {
          case_over_200[4].style.display = 'none'
          case_over_200[6].style.display = 'none'
          hide_block_inf[1].style.display = 'none'
          case_over_200_2[1].style.display = 'none'

        }
      } else if(idx === 3 ) {
        case_over_200[4].style.display = 'none'
        if((case_over_200_2[1].style.display  === 'block') || (case_over_200[6].style.display === 'block')) {
          hide_block_inf[1].style.display = 'block'
        } else {
          case_over_200_2[1].style.display = 'none'
          case_over_200[6].style.display = 'none'
          hide_block_inf[1].style.display = 'none'
        }
      } else if (idx === 5) {
        case_over_200[6].style.display = 'none'
        if((case_over_200_2[1].style.display  === 'block') || (case_over_200[4].style.display === 'block')) {
          hide_block_inf[1].style.display = 'block'
        } else {
          case_over_200_2[1].style.display = 'none'
          case_over_200[4].style.display = 'none'
          hide_block_inf[1].style.display = 'none'
        }
      }
      if (idx === 1) {

        a[0].style.display = 'none'
        b[0].style.display = 'none'
        if(case_over_200[0].style.display === 'block' || case_over_200[2].style.display === 'block') {
          hide_block_inf[0].style.display = 'block'
          case_over_200_2[0].style.display = 'none'
        } else {
          case_over_200_2[0].style.display = 'none'
          case_over_200[0].style.display = 'none'
          case_over_200[2].style.display = 'none'
          hide_block_inf[0].style.display = 'none'
          case_over_200_2[0].style.display = 'none'

        }
      } else if(idx === 0 ) {
        case_over_200[0].style.display = 'none'
          if((case_over_200_2[0].style.display  === 'block') || (case_over_200[2].style.display === 'block')) {
            hide_block_inf[0].style.display = 'block'
          } else {
            case_over_200_2[0].style.display = 'none'
            case_over_200[2].style.display = 'none'
            hide_block_inf[0].style.display = 'none'
          }
      } else if (idx === 2) {
        case_over_200[2].style.display = 'none'
        if((case_over_200_2[0].style.display  === 'block') || (case_over_200[0].style.display === 'block')) {
          hide_block_inf[0].style.display = 'block'
        } else {
          case_over_200_2[0].style.display = 'none'
          case_over_200[0].style.display = 'none'
          hide_block_inf[0].style.display = 'none'
        }
      }

      for (let i=0; i < 6; i++) {
        plusButtonElement[i].removeAttribute('disabled')
        minusButtonElement[i].removeAttribute('disabled')
      }

      bigTotalSum -= (sum[idx].cost * sum[idx].count)
    bigTotalCount -= (sum[idx].count)
    bigTotalSumWithOut -= (sum[idx].beforeSalePrice * sum[idx].count)
    bigTotalDifference = -(bigTotalSumWithOut - bigTotalSum)
  }

  bigTotalSumElement.forEach((item) => {
    item.innerHTML = bigTotalSum.toLocaleString()
  })
  bigTotalCountElement.forEach((item) => {
    item.innerHTML = bigTotalCount.toLocaleString()
  })
  bigTotalSumWithOutElement.forEach((item) => {
    item.innerHTML = bigTotalSumWithOut.toLocaleString()
  })
  bigTotalDifferenceElement.forEach((item) => {
    item.innerHTML = bigTotalDifference.toLocaleString()
  })


}

main_checkbox_label_input.forEach((item, idx) => {
  item.addEventListener("click", function(event){
  for(let i = 0; i < main_label_input.length; i++) {
    if(item.checked) {
      main_label_input_empty[i].style.display = 'none'
      main_label_input_empty1[i].style.display = 'block'
      clickFunc2(main_label_input[i], true, i)
    } else {
      main_label_input_empty[i].style.display = 'block'
      main_label_input_empty1[i].style.display = 'none'
      clickFunc2(main_label_input[i], false, i)
    }
  }
})
});



main_label_input.forEach((item,idx) => {
  item.addEventListener('click', () => {

    if (item.checked) {
      main_label_input_empty[idx].style.display = 'none'
      main_label_input_empty1[idx].style.display = 'block'
      clickFunc(item, true, idx)

    } else {
      main_label_input_empty[idx].style.display = 'block'
      main_label_input_empty1[idx].style.display = 'none'
      clickFunc(item, false, idx)

    }
  })

})

main_label_input_total.addEventListener('change', () => {
  if(main_label_input_total.checked) {
        text_good_info_1.style.display = 'none';
        span_h4.innerHTML = `Оплатить ${bigTotalSum.toLocaleString().split(',')[0]} сом`
      } else {
    text_good_info_1.style.display = 'block';
    span_h4.innerHTML = 'Заказать'
  }
})
main_label_input_total2.addEventListener('change', () => {
  if(main_label_input_total2.checked) {
        text_good_info_2.style.display = 'none';
        span_h4_2.innerHTML = `Оплатить ${bigTotalSum.toLocaleString().split(',')[0]} сом`
      } else {
    text_good_info_1.style.display = 'block';
    span_h4_2.innerHTML = 'Заказать'
  }
})



sum.forEach((node, idx) => {
  const prevState  = {...sum[idx]}
  sum[idx] = {
    ...sum[idx],
    price: (prevState.cost * (prevState.count)).toLocaleString().split(',')[0],
    withoutSale: (prevState.beforeSalePrice * (prevState.count)).toLocaleString().split(',')[0]
  }


  finalSum[idx].innerHTML = sum[idx].price
  totalSum[idx].innerHTML = sum[idx].withoutSale
  quantityElement[idx].setAttribute('value', sum[idx].count)

    if (sum[idx].count > 1 ) {
      minusButtonElement[idx].style.color = "#000"
    }

  if (sum[idx].count === 2) {
    plusButtonElement[idx].style.color = "rgba(0, 0, 0, 0.20)"
  }

  plusButtonElement[idx].setAttribute('disabled','disabled')
  minusButtonElement[idx].setAttribute('disabled','disabled')

  if(minusButtonElement[idx].getAttribute('disabled')) {
    minusButtonElement[idx].style.color = "rgba(0, 0, 0, 0.20)"
  } else {
    minusButtonElement[idx].style.color = "#000"
  }


})



plusButtonElement.forEach((item, index) => {


  item.addEventListener('click',  () => {
    const prevState  = {...sum[index]}
    sum[index] = {
      ...sum[index],
      count: prevState.count + 1,
      price: (prevState.cost * (prevState.count + 1)).toLocaleString().split(',')[0],
      withoutSale: (prevState.beforeSalePrice * (prevState.count + 1)).toLocaleString().split(',')[0]
    }

    if (sum[index].count > 1) {
      minusButtonElement[index].style.color = "#000"
    }
   if(sum[index].count === 2) {
      plusButtonElement[index].style.color = "rgba(0, 0, 0, 0.20)"
    }


    if (sum[index].count <= quantityElement[index].getAttribute('max')) {
      minusButtonElement[index].removeAttribute('disabled')
      finalSum[index].innerHTML = sum[index].price
      totalSum[index].innerHTML = sum[index].withoutSale
      quantityElement[index].setAttribute('value', sum[index].count)
      bigTotalSum +=  sum[index].cost
      bigTotalCount +=  1
      bigTotalSumWithOut +=  sum[index].beforeSalePrice
      bigTotalDifference = -(bigTotalSumWithOut - bigTotalSum)



      bigTotalSumElement.forEach((item,indx) => {
        item.innerHTML = bigTotalSum.toLocaleString().split(',')[0]
        if(main_label_input_total2.checked) {
          span_h4_2.innerHTML = `Оплатить ${bigTotalSum.toLocaleString().split(',')[0]} сом`
        }
        if(main_label_input_total.checked) {
          span_h4.innerHTML = `Оплатить ${bigTotalSum.toLocaleString().split(',')[0]} сом`
        }
      })
      bigTotalCountElement.forEach((item,indx) => {
        item.innerHTML = bigTotalCount.toLocaleString().split(',')[0]

        if (index === 1) {
          let newDateNum = sum[index].count - 184;
          document.getElementById('184').innerHTML = `184`
          header_basket_icon_num2.innerHTML = `${newDateNum}`
          case_over_200_2[0].style.display = 'block'
          a[0].style.display = 'flex'
          if(newDateNum <= 0) {
            case_over_200_2[0].style.display = 'none'
            a[0].style.display = 'none'
          }

          if(newDateNum === 1) {
            case_over_200_num[0].style.display = 'none'
            case_over_200_num[1].style.display = 'none'
          }
          if(newDateNum > 1) {
            case_over_200_num[0].style.display = 'flex'
            case_over_200_num[1].style.display = 'flex'
          }
        }
        if (index === 0) {
          header_basket_icon_num[index].innerHTML = sum[index].count
        }
        if (index === 2) {
          header_basket_icon_num[index].innerHTML = sum[index].count
        }

          if ( header_basket_icon_num[indx].innerHTML === '2') {
            red_shar[indx].style.display = 'flex'
            console.log(indx)
          }
        if (  header_basket_icon_num[3].innerHTML === '1') {
          red_shar[4].style.display = 'none'
        }
        if (  header_basket_icon_num[3].innerHTML === '2') {
          red_shar[4].style.display = 'flex'
        }
        if (  header_basket_icon_num[5].innerHTML === '1') {
          red_shar[6].style.display = 'none'
        }
        if (  header_basket_icon_num[5].innerHTML === '2') {
          red_shar[6].style.display = 'flex'
        }


        if (index === 4) {
          let newDateNum = sum[index].count - 184;
          document.getElementById('184_2').innerHTML = `184`
          header_basket_icon_num2_2.innerHTML = `${newDateNum}`
          case_over_200_2[1].style.display = 'block'
          a[1].style.display = 'flex'
          if(newDateNum <= 0) {
            case_over_200_2[1].style.display = 'none'
            a[1].style.display = 'none'
          }

          if(newDateNum === 1) {
            case_over_200_num[0].style.display = 'none'
            case_over_200_num[1].style.display = 'none'
          }
          if(newDateNum > 1) {
            case_over_200_num[0].style.display = 'flex'
            case_over_200_num[1].style.display = 'flex'
          }
        }
        if (index === 3) {
          header_basket_icon_num[index].innerHTML = sum[index].count

        }
        if (index === 5) {
          header_basket_icon_num[index].innerHTML = sum[index].count
        }



      })
      bigTotalSumWithOutElement.forEach((item,indx) => {
        item.innerHTML = bigTotalSumWithOut.toLocaleString().split(',')[0]
      })
      bigTotalDifferenceElement.forEach((item,indx) => {
        item.innerHTML = bigTotalDifference.toLocaleString().split(',')[0]
      })

    } else if(sum[index].count > quantityElement[index].getAttribute('max')) {
      minusButtonElement[index].removeAttribute('disabled')
      plusButtonElement[index].setAttribute('disabled','disabled')
      quantityElement[index].setAttribute('value', quantityElement[index].getAttribute('max'))
    }
  })
})




minusButtonElement.forEach((item, index) => {

  item.addEventListener('click',  () => {
    const prevState  = {...sum[index]}
    sum[index] = {
      ...sum[index],
      count: prevState.count - 1,
      price: (prevState.cost * (prevState.count - 1)).toLocaleString().split(',')[0],
      withoutSale: (prevState.beforeSalePrice * (prevState.count - 1)).toLocaleString().split(',')[0]
    }

    if (sum[index].count === 1) {
      minusButtonElement[index].style.color = "rgba(0, 0, 0, 0.20)"
      plusButtonElement[index].style.color = "#000"
    }


    if (sum[index].count <= quantityElement[index].getAttribute('max') && sum[index].count >= quantityElement[index].getAttribute('min')) {
      plusButtonElement[index].removeAttribute('disabled')
      finalSum[index].innerHTML = sum[index].price
      totalSum[index].innerHTML = sum[index].withoutSale
      quantityElement[index].setAttribute('value', sum[index].count)
      bigTotalSum -=  sum[index].cost
      bigTotalCount -=  1
      bigTotalSumWithOut -=  sum[index].beforeSalePrice
      bigTotalDifference = -(bigTotalSumWithOut - bigTotalSum)


      bigTotalSumElement.forEach((item,indx) => {
        item.innerHTML = bigTotalSum.toLocaleString().split(',')[0]
        if(main_label_input_total2.checked) {
          span_h4_2.innerHTML = `Оплатить ${bigTotalSum.toLocaleString().split(',')[0]} сом`
        }
        if(main_label_input_total.checked) {
          span_h4.innerHTML = `Оплатить ${bigTotalSum.toLocaleString().split(',')[0]} сом`
        }
      })
      bigTotalCountElement.forEach((item,indx) => {
        item.innerHTML = bigTotalCount.toLocaleString().split(',')[0]


        if (index === 1) {
          let newDateNum = sum[index].count - 184;
          document.getElementById('184').innerHTML = `184`
          header_basket_icon_num2.innerHTML = `${newDateNum}`
          case_over_200_2[0].style.display = 'block'
          a[0].style.display = 'flex'
          if(newDateNum <= 0) {
            case_over_200_2[0].style.display = 'none'
            a[0].style.display = 'none'
          }

          if(newDateNum === 1) {
            case_over_200_num[0].style.display = 'none'
            case_over_200_num[1].style.display = 'none'
          }
          if(newDateNum > 1) {
            case_over_200_num[0].style.display = 'flex'
            case_over_200_num[1].style.display = 'flex'
          }
        }
        if (index === 0) {
          header_basket_icon_num[0].innerHTML = sum[index].count
          if ( sum[0].count === 1) {
            red_shar[0].style.display = 'none'
          } else if ( sum[0].count === 2) {
            red_shar[0].style.display = 'flex'
          }
        }
        if (index === 2) {
          header_basket_icon_num[2].innerHTML = sum[index].count
          if ( sum[index].count === 1) {
            red_shar[2].style.display = 'none'
          } else if ( sum[index].count === 2) {
            red_shar[1].style.display = 'flex'
          }
        }

        if (index === 4) {
          let newDateNum = sum[index].count - 184;
          document.getElementById('184_2').innerHTML = `184`
          header_basket_icon_num2_2.innerHTML = `${newDateNum}`
          case_over_200_2[1].style.display = 'block'
          a[1].style.display = 'flex'
          if(newDateNum <= 0) {
            case_over_200_2[1].style.display = 'none'
            a[1].style.display = 'none'
          }

          if(newDateNum === 1) {
            case_over_200_num[0].style.display = 'none'
            case_over_200_num[1].style.display = 'none'
          }
          if(newDateNum > 1) {
            case_over_200_num[0].style.display = 'flex'
            case_over_200_num[1].style.display = 'flex'
          }
        }

        if (index === 3) {
          header_basket_icon_num[3].innerHTML = sum[3].count
          if ( sum[3].count === 1) {
            red_shar[4].style.display = 'none'
          } else if ( sum[3].count === 2) {
            red_shar[4].style.display = 'flex'
          }

        }
        if (index === 5) {
          header_basket_icon_num[5].innerHTML = sum[5].count
          if ( sum[5].count === 1) {
            red_shar[6].style.display = 'none'
          } else if (   sum[5].count === 2) {
            red_shar[6].style.display = 'flex'
          }
        }

        if (  header_basket_icon_num[2].innerHTML === '1') {
          red_shar[2].style.display = 'none'
        }
        if (  header_basket_icon_num[2].innerHTML === '2') {
          red_shar[2].style.display = 'flex'
        }

        if (  header_basket_icon_num[3].innerHTML === '1') {
          red_shar[4].style.display = 'none'
        }
        if (  header_basket_icon_num[3].innerHTML === '2') {
          red_shar[4].style.display = 'flex'
        }
         if (  header_basket_icon_num[5].innerHTML === '1') {
                  red_shar[6].style.display = 'none'
                }
         if (  header_basket_icon_num[5].innerHTML === '2') {
                  red_shar[6].style.display = 'flex'
                }



      })
      bigTotalSumWithOutElement.forEach((item) => {
        item.innerHTML = bigTotalSumWithOut.toLocaleString().split(',')[0]
      })
      bigTotalDifferenceElement.forEach((item) => {
        item.innerHTML = bigTotalDifference.toLocaleString().split(',')[0]
      })

    } else if (sum[index].count <= quantityElement[index].getAttribute('min')){
      plusButtonElement[index].removeAttribute('disabled')
      minusButtonElement[index].setAttribute('disabled','disabled')
      quantityElement[index].setAttribute('value', quantityElement[index].getAttribute('min'))
    }
  })
})




