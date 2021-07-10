// break and continue

let arr = [10, 40, 20, 70, 80, 30, 90, 10];
for(let i=0; i<arr.length; i++){
    if(arr[i]>70){
        break; // break
    }
    console.log(arr[i]);
}
// 10
// 40
// 20
// 70

let newArr = [90, 45, 50, 20, 10, 70, 90];
for(let i=0; i<newArr.length; i++){
    if(newArr[i] === 50){
        continue; // continue
    }
    console.log(newArr[i]);
}
// 90
// 45
// 20
// 10
// 70
// 90