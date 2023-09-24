function ValidMail() {
  let output;

  const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  const myMail = document.querySelectorAll('.input_mail');
  const mailErr = document.querySelectorAll('.err_mail');
  const mailLabel = document.querySelectorAll('.label_mail');

  myMail.forEach((node, idx) => {

    const valid = re.test(node.value);

    if (valid) {
      output = ' ';
      node.style.color = '#000'
      node.style.borderBottomColor =  'rgba(0, 0, 0, 0.20)';
      mailLabel[idx].innerHTML = 'Почта'
    } else if(!node.value) {
      output = 'Укажите электронную почту';
      node.style.color = '#F55123'
      node.style.borderBottomColor =  '#F55123';
      mailErr[idx].style.color = '#F55123';
      mailLabel[idx].innerHTML = 'Почта'
      node.placeholder = ' ';
    } else {
      output = 'Проверьте адрес электронной почты';
      node.style.color = 'red'
      node.style.borderBottomColor =  'red';
      mailErr[idx].style.color = 'red';
      mailLabel[idx].innerHTML = 'Почта'
    }
    mailErr[idx].innerHTML = output;
    return valid;
  })
}

function keyUp() {
  let output;

  const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  const myMail = document.querySelectorAll('.input_mail');
  const mailErr = document.querySelectorAll('.err_mail');
  myMail.forEach((node, idx) => {

    const valid = re.test(node.value);

    if (valid) {
      output = ' ';
      node.style.color = '#000'
      node.style.borderBottomColor =  'rgba(0, 0, 0, 0.20)';
      mailErr[idx].innerHTML = output;
    }
  })

}

function ValidPhone() {
  let output;

  const re = /^(\+[0-9])\s[0-9]{3}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/;
  const myPhone = document.querySelectorAll('.input_number');
  const phoneErr = document.querySelectorAll('.err_number');
  const phoneLabel = document.querySelectorAll('.label_number');
  myPhone.forEach((node, idx) => {


    const valid = re.test(node.value);

    if (valid) {
      output = ' ';
      node.style.color = '#000'
      node.style.borderBottomColor = 'rgba(0, 0, 0, 0.20)';
    } else if (!node.value) {
      output = 'Укажите номер телефона';
      node.style.color = '#F55123'
      node.style.borderBottomColor = '#F55123';
      phoneErr[idx].style.color = '#F55123';
      phoneLabel[idx].innerHTML = 'Телефон'
      node.placeholder = ' ';

    } else {
      output = 'Формат: +9 999 999 99 99';
      node.style.color = 'red'
      node.style.borderBottomColor = 'red';
      phoneErr[idx].style.color = 'red';
    }
    phoneErr[idx].innerHTML = output;
    return valid;
  })

}

function keyUp2() {
  let output;

  const re = /^(\+[0-9])\s[0-9]{3}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/;
  const myPhone = document.querySelectorAll('.input_number');
  const phoneErr = document.querySelectorAll('.err_number');
  myPhone.forEach((node, idx) => {

    const valid = re.test(node.value);

    if (valid) {
      output = ' ';
      node.style.color = '#000'
      node.style.borderBottomColor = 'rgba(0, 0, 0, 0.20)';
      phoneErr[idx].innerHTML = output
    }
  })

}
function ValidName() {
  let output;
  const re = /^[А-ЯЁ][а-яё]+$/;
  const myName = document.querySelectorAll('.input_name');
  const nameErr = document.querySelectorAll('.err_name');
  const nameLabel = document.querySelectorAll('.label_name');

  myName.forEach((node, idx) => {

    const valid = re.test(node.value);
console.log(valid)
    if (valid) {
      output = ' ';
      node.style.color = '#000'
      node.style.borderBottomColor = 'rgba(0, 0, 0, 0.20)';
    } else if (!node.value) {
      output = 'Укажите имя';
      node.style.color = '#F55123'
      node.style.borderBottomColor = '#F55123';
      nameErr[idx].style.color = '#F55123';
      nameLabel[idx].innerHTML = 'Имя'
      node.placeholder = ' ';
    } else {
      output = 'Неккоректное имя пользователя';
      node.style.color = 'red'
      node.style.borderBottomColor = 'red';
      nameErr[idx].style.color = 'red';
    }
    nameErr[idx].innerHTML = output;
    return valid;
  })
}
function keyUp3() {
  let output;
  const re = /^[А-ЯЁ][а-яё]+$/;
  const myName = document.querySelectorAll('.input_name');
  const nameErr = document.querySelectorAll('.err_name');
  myName.forEach((node, idx) => {

    const valid = re.test(node.value);
    if (valid) {
      output = ' ';
      node.style.color = '#000'
      node.style.borderBottomColor = 'rgba(0, 0, 0, 0.20)';
      nameErr[idx].innerHTML = output
    }
  })
}
function ValidSerName() {
  let output;


  const re = /^[А-ЯЁ][а-яё]+$/;
  const mySerName = document.querySelectorAll('.input_sername');
  const SerNameErr = document.querySelectorAll('.err_sername');
  const SerNameLabel = document.querySelectorAll('.label_sername');

  mySerName.forEach((node, idx) => {

    const valid = re.test(node.value);

    if (valid) {
      output = ' ';
      node.style.color = '#000'
      node.style.borderBottomColor = 'rgba(0, 0, 0, 0.20)';
    } else if (!node.value) {
      output = 'Введите фамилию';
      node.style.color = '#F55123'
      node.style.borderBottomColor = '#F55123';
      SerNameErr[idx].style.color = '#F55123';
      SerNameLabel[idx].innerHTML = 'Фамилия'
      node.placeholder = ' ';

    } else {
      output = 'Неккоректная фамилия пользователя';
      node.style.color = 'red'
      node.style.borderBottomColor = 'red';
      SerNameErr[idx].style.color = 'red';
    }
    SerNameErr[idx].innerHTML = output;
    return valid;
  })
}


function keyUp4() {
  let output;

  const re = /^[А-ЯЁ][а-яё]+$/;
  const mySerName = document.querySelectorAll('.input_sername');
  const SerNameErr = document.querySelectorAll('.err_sername');

  mySerName.forEach((node, idx) => {

    const valid = re.test(node.value);
    if (valid) {
      output = ' ';
      node.style.color = '#000'
      node.style.borderBottomColor = 'rgba(0, 0, 0, 0.20)';
      SerNameErr[idx].innerHTML = output
    }
  })
}
function ValidInn() {
  let output;


  const re = /^[0-9]{14}$/;
  const myInn = document.querySelectorAll('.input_inn');
  const innErr = document.querySelectorAll('.err_inn');
  const innLabel = document.querySelectorAll('.label_inn');

  myInn.forEach((node, idx) => {
    const valid = re.test(node.value);
    if (valid) {
      output = ' ';
      node.style.color = '#000'
      node.style.borderBottomColor = 'rgba(0, 0, 0, 0.20)';
    } else if (!node.value) {
      output = 'Укажите ИНН';
      node.style.color = '#F55123'
      node.style.borderBottomColor = '#F55123';
      innErr[idx].style.color = '#F55123';
      innLabel[idx].innerHTML = 'ИНН'
      node.placeholder = ' ';

    } else {
      output = 'Проверьте ИНН';
      node.style.color = 'red'
      node.style.borderBottomColor = 'red';
      innErr[idx].style.color = 'red';
    }
    innErr[idx].innerHTML = output;
    return valid;
  })
}

function keyUp5() {
  let output;


  const re = /^[0-9]{14}$/;
  const myInn = document.querySelectorAll('.input_inn');
  const innErr = document.querySelectorAll('.err_inn');

  myInn.forEach((node, idx) => {
    const valid = re.test(node.value);
    if (valid) {
      output = ' ';
      node.style.color = '#000'
      node.style.borderBottomColor = 'rgba(0, 0, 0, 0.20)';
      innErr[idx].innerHTML = output

    }
  })

}
