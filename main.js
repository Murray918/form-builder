// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function() {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();

// -------- Your Code Goes Below this Line --------

let formHTML = document.getElementById('fields');

for (let i = 0; i < formData.length; i++){
  let timput = document.createElement('input');




  if (formData[i].type === 'select') {
    let selector = document.createElement('select');
    let optionInfo = formData[i].options;
    formHTML.appendChild(selector);
    selector.setAttribute('type', formData[i].type);
    selector.setAttribute('label', formData[i].label);
    selector.setAttribute('id', formData[i].id);
    selector.setAttribute('placeholder', formData[i].label);


    for (let i = 0; i < optionInfo.length; i++) {
      let opt = document.createElement('option');


      opt.setAttribute('value', optionInfo[i].value);
      opt.setAttribute('label', optionInfo[i].label);
      selector.appendChild(opt);


      console.log(optionInfo);
    }


  }else if (formData[i].type === 'textarea'){
    let textplace = document.createElement('textarea');
    textplace.setAttribute('type', formData[i].type);
    textplace.setAttribute('label', formData[i].label);
    textplace.setAttribute('id', formData[i].id);
    formHTML.appendChild(textplace);
  }else {
    timput.setAttribute('type', formData[i].type);
    timput.setAttribute('label', formData[i].label);
    timput.setAttribute('id', formData[i].id);
    timput.setAttribute('placeholder', formData[i].label);
    formHTML.appendChild(timput);
  }

}


console.log(formHTML);
