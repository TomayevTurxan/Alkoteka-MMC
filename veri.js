let list = document.getElementById("list");
  let ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "veri.json", true);
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
    console.log(ourData[0]);
  };
  ourRequest.send();

function renderHTML(data) {
  var htmlString = "";
  
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    htmlString += `<div class="col-md-3 item">
    <div class="imgbox" style ="background-image: url(${data[i].image})">
        <div class="shadow"></div>
    </div>
    <div class="textbox">
        <span class="sale">satış</span>
        <span class="category">${data[i].category}</span>
        <h2>${data[i].name}</h2>
    </div>
  </div>`
    console.log(data[i].image);
  }
  list.insertAdjacentHTML("beforeend", htmlString);
}
