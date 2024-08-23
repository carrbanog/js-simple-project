const addBtn = document.querySelectorAll("#addcart");
const cartBody = document.querySelector("#cartbody");
const resultprice = document.querySelector(".resultprice");
let lists = [];

for(i=0; i<addBtn.length; i++){
  addBtn[i].addEventListener("click", addList);
}
function addList(e){
  const pro = e.target.parentElement;
  // console.log(pro.querySelector("img").getAttribute("src"));
  const productName = pro.querySelector("h2").textContent;
  const productPrice = parseInt(pro.querySelector("h3").textContent.replace("원", ""));
  const productImage = pro.querySelector("img").getAttribute("src");
  let targetList = {
    id: Date.now(),
    name: productName,
    price: productPrice,
    image: productImage,
  }
  lists.push(targetList);
  drawList();
}

function drawList(){
  cartBody.innerHTML = "";
  lists.forEach(e => {
    cartBody.innerHTML += `        
    <tr id="${e.id}">
      <td>${e.name}</td>
      <td>${e.price}</td>
      <td><img src="${e.image}"></td>
      <td><button><i class="fa-solid fa-x"></i></button></td>
    </tr>`
    const deleteBtn = document.querySelectorAll(".fa-x");
    deleteBtn.forEach((e) => {
      e.addEventListener("click", deleteList);
    }) 
    addPrice();
  })
}

function deleteList(e){
  // console.log(e.target.parentElement.parentElement.parentElement);
  const row = e.target.closest("tr");
  
  lists = lists.filter(e => {
    return e.id !== parseInt(row.id);
  })
  row.remove();
  addPrice();
}

function addPrice(){
  let price = 0;
  lists.forEach(e => {
    price = price + e.price;
    // console.log(price);
  })
  resultprice.innerHTML = price;
}