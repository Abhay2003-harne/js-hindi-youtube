let myDate= new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())

// console.log(myDate.toLocaleString());
let mycreatedDate= new Date(2022,0,12)
// console.log(mycreatedDate.toLocaleString());

// console.log(Date.now()/1000)
// console.log(mycreatedDate.getTime())
// console.log(mycreatedDate.getTime()/1000);

let newDate=new Date()
// console.log(newDate.getDate()+1);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);


// custom date nd time printing 

console.log(newDate.toLocaleString('default',{
    
    dateStyle:'medium'
}))

