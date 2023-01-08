var fields = {}

document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('first_name');
    fields.lastName = document.getElementById('last_name');
    fields.email = document.getElementById('mail');
    fields.age = document.getElementById('age');
    fields.applyFor = document.getElementById('apply_for');
    fields.discord = document.getElementById('discord');
    fields.motivation = document.getElementById('motivation');
})


function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}

function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function isTag(value) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+#[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}?)*$/;
  return regex.test(String(value).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
      field.className = 'placeholderRed';
    } else {
      field.className = '';
    }
   
    return isFieldValid;
}

function isValid() {
  var valid = true;

  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.age, isNumber);
  valid &= fieldValidation(fields.discord, isTag);
  valid &= fieldValidation(fields.motivation, isNotEmpty);

  return valid;
}

class User {
    constructor(firstName, lastName, email, age, applyFor, discord, motivation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.applyfor = applyFor
    this.discord = discord
    this.motivation = motivation
    }
}

async function sendContact() {
    if (isValid()) {
    let usr = new User(first_name.value, last_name.value, mail.value, age.value, apply_for.value, discord.value, motivation.value);

    const webhookBody = {
        // content: '<@!697732349172908093>, <@&1018906578826563674>',
        embeds: [{
          title: 'Contact Form Submitted',
          fields: [
            {name: 'Name', value: `${usr.firstName} ${usr.lastName}`, inline: true},
            {name: 'Email', value: `${usr.email}`, inline: true},
            {name: 'Apply for', value: `${usr.applyfor}`, inline: true},
            {name: "Age", value: `${usr.age}`, inline: true},
            {name: "Discord tag", value: `${usr.discord}`, inline: true},
            {name: "Motivation", value: `${usr.motivation}`, inline: false}
          ]
        }],
      };

      const response = await fetch('https://discord.com/api/v10/webhooks/1022223143638671380/fvRvsqpCJOovg695Z2781ZGmxMelox7kZShOkuYidXMMTjtm4iwkjHmLd96dAV8F8GW4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
      });
      if (response.ok) {
        window.location.replace("/thanks.html")
      } else {
        alert('There was an error! Try again later!');
      }
    } else {
        alert("There was an error. Please check if you have filled in everything")
    }
}