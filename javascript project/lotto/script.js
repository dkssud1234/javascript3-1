var lotto = [];
while(lotto.length < 6){
    var num = parseInt(Math.random () * 45+ 1);
    if(lotto.indexOf(num) == -1) { //num이 lotto에 없으면
        lotto.push(num); //num을 lotto에 추가
    
    }
}
lotto.sort((a,b) => a-b); //sort()는 문자열로 인식해서 정렬하기 때문에 숫자로 인식하게 하기 위해 함수를 추가해줌

document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball2'>" + lotto[1] + "</div>");
document.write("<div class='ball ball3'>" + lotto[2] + "</div>");
document.write("<div class='ball ball4'>" + lotto[3] + "</div>");
document.write("<div class='ball ball5'>" + lotto[4] + "</div>");
document.write("<div class='ball ball6'>" + lotto[5] + "</div>");



//0.0000000000000000 ~ 0.9999999999999999
// num * 45 -> 0.~~~~~~44.~~~~~~
// num * 45 + 1 -> 1.~~~~~~45.~~~~~~
//parseInt(num * 45 + 1) -> 1~45
// 로또 1~45까지의 숫자 중 하나를 뽑아서 출력
