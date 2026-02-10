//Prince Rajput
// 2400290120190
//CS4C
//Practical 1
//--------------A------------------
const sum = (...num)=>{
    total = 0
    num.forEach((n)=>{
        total =total+n
    })
    console.log(total)
};
sum(1,2,3,4,5,6,7,8,10,100)

//---------------B-----------------
function showDetails(name,...skills){
    console.log(name);
    console.log(skills);
}
showDetails("Prince","Js","dart")

//---------------C------------------
const student = {
    Name: "Prince",
    Age:20,
    City:"Ghaziabad"
};
const copy = {...student};
console.log(copy)
const updated = 
{
    ...student,
    age : 20
}
console.log(updated)
//---------------D-------------
const add =(a,b,c)=> a+b+c
const arr = [10,20,30]
console.log(add(...arr))