var total_number = document.querySelectorAll(".bton").length;

var array=[];

var j=1;

var  number_found = false;


$(document).ready(function () {
  $(".show-preview").empty();;
});
// linear search algorithm implemented
function linear_search(key){
  var preview_simulation =  "";
     var ide ="#button-"+j;
     if(array[j-1]===key){
       number_found = true;
           document.querySelector(ide).classList.add("change-color");
           preview_simulation = "Vị trí hiện tại là " +(j)+ " có giá trị là "+array[j-1] + " giống với giá trị cần tìm là " +  key +  " ==> DỪNG LẠI THUẬT TOÁN => Giá trị " + key + " được tìm thấy ở ô thứ " + j;
            document.querySelector(".ans").innerHTML="Số " + key +" Đã Được Tìm Thấy Ở Cột Số "+ j;
            $(".show-preview").append(preview_simulation);
          console.log(preview_simulation);
 
     }
     else{
       document.querySelector(ide).classList.add("change-color");
        setTimeout(function(){
        document.querySelector(ide).classList.remove("change-color");
        if(j===10)
         document.querySelector(".ans").innerHTML="Số " + key +" Không Thể Tìm Thấy !";
        if(j<=9){
          preview_simulation = "<p> Vị trí hiện tại là " +(j)+ " có giá trị là "+array[j-1] + " khác với giá trị cần tìm là " +  key +  " ==> Tiếp tục tìm kiếm số cạnh bên là " + array[j]+"</p>";
          $(".show-preview").append(preview_simulation);
          console.log(preview_simulation);

        j=j+1;
        linear_search(key); }

        },1000);
    }
}

$(".show-preview").css({
  position: "absolute",
  top: "259px", // Điều chỉnh giá trị này để thay đổi vị trí dọc
  left: 0,
  padding: "10px",
  background: "rgb(0, 28, 109)",
  color: "#ffffff", // Thay đổi giá trị này thành màu văn bản mong muốn
  border: "1px solid #ffffff",
  borderRadius: "5px",
  width: "550px",
  overflow: "auto",
});

// generates the list of the random number
function  random_number_generate(){
for(var i=1;i<=total_number;i++){
   var num = Math.floor((Math.random()*100))+1;
   array.push(num);
   document.querySelector("#button-"+i).innerHTML = num;
  }
}




// when user click that search button this function trrigers
document.querySelector("#search").addEventListener("click",function(){

  var string_key = document.querySelector("#key").value;
  var key = parseInt(string_key);
    if(key>=0&&key<=99){
       linear_search(key);
   }
else{
   alert("vui lòng nhập số hợp lệ :)");
   document.querySelector("#key").value=null;
 }
});


//when user click on that reset button , this function trrigers
document.querySelector("#clear").addEventListener("click",function(){
  // Xóa mọi thông báo hiện tại
  $(document).ready(function () {
    $(".show-preview").empty();
  });
  if(number_found===true)
    $(document).ready(function () {
      $(".show-preview").empty();;
    });
  else {
    var notFoundMessage = "<p>Số không được tìm thấy. Bắt đầu một tìm kiếm mới.</p>";
    $(".show-preview").append(notFoundMessage);
    console.log(notFoundMessage);
  }
  document.querySelector("#button-"+j).classList.remove("change-color");
  document.querySelector("#key").value=null;
  document.querySelector(".ans").innerHTML = null;

  number_found = false;
  j = 1;
  array =[];
  random_number_generate();
});

random_number_generate();

// Phát nhạc nền
var backgroundMusic = document.getElementById("backgroundMusic");
backgroundMusic.play(); 