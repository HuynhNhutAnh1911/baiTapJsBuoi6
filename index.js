// bài 1 
function ketQua(){
    var sum = 0;
    for(var i= 0 ;sum < 10000 ; i ++){
        sum+=i;
        document.getElementById("result1").innerHTML= `Số Nguyên Dương Nhỏ Nhất Là : ${i}`;
    }
}
 
// bài 2 
function tinhTong(){
    var x = document.getElementById("txt-x").value;
    var n = document.getElementById("txt-n").value;
    var sum = 0;

    for( var i = 1 ; i<=n ; i++){
        sum += Math.pow(x, i);
        document.getElementById("result2").innerHTML= `Tổng là : ${sum}`;
    }
}

// bài 3
function tinhGiaiThua(){
    var n = document.getElementById("txt-so").value;
    var sum =1;
    for (var i =1; i <=n ; i++ ){
        sum = sum*i;
        document.getElementById("result3").innerHTML= `Giai thừa của ${n} là  ${sum}`;
    } 
}
// bài 4 
function taoDiv(){
    var contentHTML= " ";
    for(var i = 1 ; i <= 10; i +=1){
        if(i%2==0){
         contentHTML+=`<div class="bg-danger text-white p-2">Div chẵn ${i} </div>`;
        }else{
         contentHTML+= `<div class="bg-primary text-white  p-2">Div lẻ  ${i} </div>`;
         
        }  
       
        document.getElementById("content").innerHTML=contentHTML;
     }
    
}