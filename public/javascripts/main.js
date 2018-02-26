(() => {
  let getButton = document.querySelectorAll('.getButton'),
      deleteButton = document.querySelector('.deleteRecord');

  function getData() {
    let url = `api/${this.id}`; //does the

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function deleteARecord() {
    debugger;
    let url = `api/${this.id}`; //does the same as ?car + this.id

    fetch(url, {method : 'delete' })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getButton.forEach(button => button.addEventListener('click', getData));
  deleteButton.addEventListener('click', deleteARecord);
})();
