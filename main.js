const lib={
    Find:(array,fn) => {
        let valReq=0;
        for(let i=0; i<array.length; i++){
            if(fn(array[i],i) === true){
               valReq = array[i];
            }
        }
        return valReq
    },
    Map:(array,fn) => {
        const newArr=[];
        for(let i=0; i<array.length; i++){
                newArr.push(fn(array[i]));
        }
        return newArr
    },
    findInx:(array,fn) => {
        let valReq=-1;
        for(let i=0; i<array.length; i++){
            if(fn(array[i],i) === true){
                return i;
            }
        }
        return valReq
    },
    Foreach: (array, fn) => {
        for(let i=0; i<array.length; i++){
            fn(array[i], i, array)
        }
    },
    Filter:(array, fn) => {
        const reqData=[];
        for(let i=0; i<array.length; i++){
            if(fn(array[i], i, array)){
                reqData.push(array[i]);
            }
        }
        return reqData;
    },
    contains:(array, value) => {
        const type = Array.isArray(value);
        if(type == false){
            for(let i=0; i<array.length; i++){
                if(array[i] === value){  
                    return true;       
                }
                else{
                    return false;
                }
            }
        }
        else{
            for(let j=0; j<array.length; j++){
                for(let k=0; k<value.length; k++){
                    if(array[j] == value[k]){  
                        return true;       
                    }
                    else{
                        return false;
                    }
                }
            }
        }
    },
    pluck:(array,index) => {
        let newArr=[];
        for(let i=0; i<array.length; i++){
            if(i == index){
                newArr.push(array[index]);
            }
        }
        return newArr;
    },
    whithOut:(array,n) => {
        let newArr=[];
        for(let i=0; i<array.length; i++){
            if(array[i] !== n){
                newArr.push(array[i]);
            }
        }
        return newArr;
    }
};

let users = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
let names = ['Peter', 'Erick', 'Hans', 'Martin'];
const ages=[1,2,3,4,6,9];

let printFind = lib.Find(ages, (age) => age > 4);
let printMap = lib.Map(ages, (number) => number * 2);
let printFindIndex = lib.findInx(names,(nameInd) => nameInd == 'Hans');

let printFilter = lib.Filter(ages, (Age) => Age > 2);
let printContains = lib.contains(users,[{name: 'moe', age: 40}]);
let printWhitout = lib.whithOut(names, 'Martin');
let printPluck = lib.pluck(users, 2);

console.log(printFind);
console.log(printMap);
console.log(printFindIndex);
let printForeach = lib.Foreach(ages, (ageList) => console.log(ageList));
console.log(printFilter);
console.log(printContains);
console.log(printWhitout);
console.log(printPluck);
