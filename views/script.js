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
  // Update the below page from templates/homepage.ejs
  // get the homepage.ejs file
  fetch('templates/list.ejs')
    .then((res) => res.text())
    .then((data) => {
      const content = document.getElementById('content');
      content.innerHTML = data;
    })
    .catch((err) => console.log(err));
});
