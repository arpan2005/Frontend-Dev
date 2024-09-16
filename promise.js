// let prom1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//          console.log('This is Done');
//           resolve("Dissum")      
//     },3000);
// })
// prom1.then((a)=>{
//     console.log(a);  
// })

function gotoSchool() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        const time=10
        if(time<=10){
            resolve("You succesfully reached the School🏫");
        }
        else{
            reject("you are not allowded to enter in the school")
        }
      }, 1000);
    })
}

function exam(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           const present=true;
             if(present){  
             resolve("You Give the exam🖊️")
           }
           else{
            reject("You didn't give exam")
           }
        }, 500);
    })
}

function examGrade(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const grade=4
            if (grade>=5){

                resolve(" congratss You pass the exam👏")
            }
            else{
                reject("you didn't pass the exam")
            }
        },1000);
    })
}
gotoSchool().then(value=> {console.log(value);return exam()}).then(value=>{console.log(value);return examGrade()}).then(value=>{console.log(value);console.log('you have passed succcesfully')
});