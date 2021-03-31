const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//form.addEventListener('click', registration);
const submitButton = document.querySelector('.form button[type="submit"]');
submitButton.addEventListener('click', registration);

async function registration(ev) {
    ev.preventDefault();

    if(!checkRequired([username, email, password, password2])){
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  }

    await fetch('registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.querySelector('.form .form-control input[name=username]').value,
            email: document.querySelector('.form .form-control input[name=email]').value,
            password: document.querySelector('.form .form-control input[name=password]').value,
            password2: document.querySelector('.form .form-control input[name=password2]').value,
        })
    });
    document.querySelector('.form').reset();
    alert("Реєстрація пройшла успішно!");
}

// Event listeners
// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   if(!checkRequired([username, email, password, password2])){
//     checkLength(username, 3, 15);
//     checkLength(password, 6, 25);
//     checkEmail(email);
//     checkPasswordsMatch(password, password2);
//   }

//    await fetch('registration', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             //name: document.querySelector('.form input[name=username]').value,
//             //email: document.querySelector('.form input[name=email]').value,
//             //password: document.querySelector('.form input[name=password]').value,
//             //password2: document.querySelector('.form input[name=password2]').value,
//             name: username.value,
//             email: email.value,
//             password: password.value,
//             password2: password2.value,
//         })
//     });
//     //document.querySelector('.form').reset();
//     form.reset();

//});



