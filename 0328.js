function a() {
    return 10; // 10을 반환하는 함수
};
const b = function() {}; // 빈 함수
const c = () => {}; // 빈 화살표 함수

a(); // 함수 a 호출
function a () {
 console.log("return 실행전"); // "return 실행전"을 출력
 return; // 반환문
 console.log("return 실행 후"); // 이 부분은 실행되지 않음
};
a(); // 함수 a 호출

function aa(w, x, y, z) {
    console.log(w, x, y, z); // 매개변수 w, x, y, z를 출력
}
aa(1,2,3); // 1 2 3 undefined 출력
aa(1,2,3,4); // 1 2 3 4 출력
aa(1,2,3,4,5); // 1 2 3 4 출력 (5는 무시됨)

function minus(x,y) {
    const a = 100; // 상수 a 선언
    return(x-y)*a; // (x-y) * a를 반환
};
console.log(minus(5,3)); // 함수 내에서 상수 선언 후 반환값 출력

const func= ()=>{
    return () => {console.log("abc")}; // "abc"를 출력하는 함수를 반환
};
const innerFunc = func();
innerFunc(); // "abc" 출력

const func2 = (msg) => {
    return ()=> {console.log(msg)}; // 매개변수 msg를 출력하는 함수를 반환
};
func2("hello")(); // "hello" 출력

//함수를 반환하는 함수
const human = {
    name: "Ahn",
    year: 2001,
    gender: "M",
}

console.log(human.name, human.year, human.gender); // human 객체의 속성 출력
console.log(human["name"], human["year"], human["gender"]); // human 객체의 속성 출력
human.hobby = "soccer"; // human 객체에 hobby 속성 추가
console.log(human.hobby); // human 객체의 hobby 속성 출력

const debug = {
    msg : "hello",
    log : function(value){
        console.log(value); // 매개변수 value를 출력하는 함수
    },
};
debug.log('hi') // 'hi' 출력

null === null; // true
NaN === NaN; // false
undefined === undefined; // true
// {} === {}; // error
// ({} === {}); // false JavaScript는 값이 아닌 참조로 개체를 비교하므로 이 조건은 항상 'false'을(를) 반환

const human2 = {
    name: "Ahn",
    year: 2001,
    second : {
        name: "Kim",
        year: 2002,
    },
}

console.log(human2.name, human2.year, human2.second.name, human2.second.year); // human2 객체의 속성 출력
const family = [
    {name: "Ahn", gender: "M"},
    {name: "Kim", gender: "F"},
];
//?.옵셔널 체이닝 연산자 = undefined가 발생해도 에러가 발생하지 않음
console.log(family[0]?.name); // "Ahn" 출력
console.log(human2.third?.name); // undefined 출력

const aaa = {
    name: 'Ahn',
}
const bbb = aaa;

const array = [{j: 'k'}, {l: 'm'}];
const ref = array;
console.log(array === ref); // 배열은 같은 배열을 참조하므로 true 출력
// console.log([...array] === [...ref]) // 배열 내부의 객체는 다른 객체로 인식되어 false 출력 = 얕은 복사
const deep = JSON.parse(JSON.stringify(array))//객체를 문자열로 변환
console.log(deep === array); // false 출력 = 깊은 복사
//구조분해할당
const person = {name: 'Ahn'};
const {name} = person;
console.log(name); // person 객체의 name 속성 출력
console.log(person)

const obj = {m: 1, n: 2}
const {m, n} = obj;

const array2 = [1,2,3,4,5];
const [one,two,three,four,five] = array2;
console.log(one, two, three, four, five); // 배열의 요소 출력

let a1 =1;
let b1 =2;
[a1, b1] = [b1, a1];//배열의 구조분해할당을 이용해 변수의 값을 교환

const arr = [1,5,3,4]
arr.forEach((n,i) => { //n은 배열의 요소, i는 인덱스
    console.log(n,i)
})
const numbers = [];
for (let n = 1; n <=5; n++) {
    numbers.push(n);
}
console.log(numbers); // [1,2,3,4,5] 출력
const numbers2 = Array(5).fill(1).map((v,i) => i+1);
console.log(numbers2); // [1,2,3,4,5] 출력

newArr = arr.map((v,i) => {return v*2});
console.log(newArr) // [2,10,6,8] 출력

//find(), findIndex(), filter()
arr.find((v,i) => {return v>1}); // 1보다 큰 첫 번째 요소인 5를 반환, 만약 값이 없으면 undefined를 반환 

const nested = [{age:24},{age:27},{age:30}];
nested.includes({age:24}); 
console.log(nested.find((v)=> v.age === 24)) // {age:24} 출력

arr.findIndex((v,i) => {return v>1}); // 1보다 큰 첫 번째 요소의 인덱스인 1을 반환, 만약 값이 없으면 -1을 반환

arr.filter((v,i) => {return v>1}); // 1보다 큰 요소인 [5,3,4]를 반환, 만약 값이 없으면 빈 배열을 반환

arr.sort((a,b) => a-b); // 오름차순 정렬
arr.sort((a,b) => b-a); // 내림차순 정렬    

arr.reduce((a,c) => {
    return a+c}
    ,0);
arr.every((v) => v!==null); // 모든 요소가 null이 아니면 true 반환
const arr2 = [1,3,5,null];
console.log(arr2.some((v) => v===null)); // 하나라도 null이면 true 반환

const arr3 = [1,2,3,4,5];
const arr4 = [6,7,8,9,10];
const arr5 = [...arr3, ...arr4]; // arr3와 arr4를 합친 배열 생성
console.log(arr5); // [1,2,3,4,5,6,7,8,9,10] 출력