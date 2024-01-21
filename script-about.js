 let fullImgBox = document.getElementById("fullImgBox");
    let fullImg = document.getElementById("fullImg");
    
    function openFullImg(pic)  {
        fullImgBox.style.display = "flex";
        fullImg.src = pic;
    }
    
    function closeFullImg()  {
        fullImgBox.style.display = "none";
    }
    
birthdayButton.addEventListener("click",function(){
    alert("HAPPY BIRTHDAY!!!");
});

function checkNumber() {
    let number = document.getElementById("number").value;
    if (number > 0) {
        document.getElementById("result").innerHTML = "The number is positive";
    } else if (number < 0) {
        document.getElementById("result").innerHTML = "The number is negative";
    } else {
        document.getElementById("result").innerHTML = "The number is zero";
    }
}
    