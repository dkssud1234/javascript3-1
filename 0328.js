function a() {
    return 10;
};
const b = function() {};
const c = () => {};

a();
function a () {
 console.log("return 실행전");
 return;
 console.log("return 실행 후");
};
a();

function aa(w, x, y, z) {
    console.log(w, x, y, z);
}
aa(1,2,3); // 1 2 3 undefined 출력
aa(1,2,3,4); // 1 2 3 4 출력
aa(1,2,3,4,5); // 1 2 3 4 출력 (5는 무시됨)

function minus(x,y) {
    const a = 100;
    return(x-y)*a;
};
console.log(minus(5,3)); //함수내에서 상수 선언 후 반환값 출력

const func= ()=>{
    return () => {console.log("abc")};
};
const innerFunc = func();
innerFunc(); //abc 출력

const func2 = (msg) => {
    return ()=> {console.log(msg)};
};
func2("hello")(); //hello 출력