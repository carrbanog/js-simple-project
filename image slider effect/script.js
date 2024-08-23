document.querySelector("#next").onclick = function(){
  let lists = document.querySelectorAll(".item");
  console.log(lists);
  document.querySelector(".slide").appendChild(lists[0]);
  //자식의 첫 번째 요소를 slide클래스이 마지막 요소 추가
}

document.querySelector("#previous").onclick = function(){
  let lists = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(lists[lists.length - 1])
}