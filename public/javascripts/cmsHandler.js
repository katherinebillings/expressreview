(() => {
  // cms handler stub
  console.log('cms handler loaded');

  let submitButton = document.querySelector('.add-data'),
      form = document.querySelector('form');


  function addRecord(e) {
    e.preventDefault();

    var formData = new FormData(form);
    strData = {};

    for (var [key, value] of formData.entries()) {
      console.log(key, value);

      strData[key] = value;
    }

    let url = "api/";

    //run a fetch and do a post
    fetch(url, {
      method : 'post',
      headers : {
        'Accept' : 'application/json, text-plain */*',
        'Content-type' : 'application/json'
      },

      body : JSON.stringify(strData)
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  }


  submitButton.addEventListener('click', addRecord);
})();
