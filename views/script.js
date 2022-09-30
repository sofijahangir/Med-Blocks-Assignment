const homeBtn = document.getElementById('homeBtn');

homeBtn.addEventListener('click', () => {
  // Update the below page from templates/homepage.ejs
  // get the homepage.ejs file
  fetch('templates/homepage.ejs')
    .then((res) => res.text())
    .then((data) => {
      const content = document.getElementById('content');
      content.innerHTML = data;
    })
    .catch((err) => console.log(err));
});

const regBtn = document.getElementById('regBtn');
regBtn.addEventListener('click', () => {
  // Update the below page from templates/homepage.ejs
  // get the homepage.ejs file
  fetch('templates/register.ejs')
    .then((res) => res.text())
    .then((data) => {
      const content = document.getElementById('content');
      content.innerHTML = data;
    })
    .catch((err) => console.log(err));
});

const listBtn = document.getElementById('listBtn');
listBtn.addEventListener('click', () => {
  let count = 0;
  // Update the below page from templates/homepage.ejs
  // fetch /list api
  fetch('/list')
    .then((res) => res.json())
    .then((data) => {
      // alert(data);
      // Create nested list of patients from the data like json data

      const content = document.getElementById('content');
      content.innerHTML = '';
      const ul = document.createElement('ul');
      data.forEach((patient) => {
        const li = document.createElement('li');
        // Increment the serial number

        li.innerHTML = `Patient ${++count}`;
        ul.appendChild(li);
        // Create nested list inside the li with name dob and phone number
        const ul2 = document.createElement('ul');
        const li2 = document.createElement('li');
        li2.innerHTML = `Name :- ${patient.firstName} ${patient.lastName}`;
        ul2.appendChild(li2);
        const li3 = document.createElement('li');
        li3.innerHTML = `Date of Birth :- ${patient.dateOfBirth}`;
        ul2.appendChild(li3);
        const li4 = document.createElement('li');
        li4.innerHTML = `Phone :- ${patient.phone}`;
        ul2.appendChild(li4);
        li.appendChild(ul2);
      });
      content.appendChild(ul);
    })

    .catch((err) => console.log(err));
});
