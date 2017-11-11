/*jshint esversion: 6 */

let main = ()=>{
    wait(5000)
    .then(log("promise primer"))
    .then(log("further promise"))
    .then(log("even further"))
    .then(wait(2000).then(log("Now")))
    .then(log("never"))
    //.catch(log("Error in code"))
    ;
}
let log = (msg) => document.writeln(msg);
let wait = (timer)=> new Promise((resolve, reject)=> setTimeout(resolve,timer));

let DadHappy = true;

let dadIsHappy = (happy) => DadHappy = happy;

let willGetNewPhone = new Promise((resolve,reject)=>{
    if(DadHappy)
    {
        let phone = {model:"Samsung", color:"black"};
        resolve(phone);
    }
    else{
        let reason = new Error("dad is unhappy");
        reject(reason);
    }
});

let askDad = () => {
       willGetNewPhone
       /* .then((phone)=> log(JSON.stringify(phone)))*/
       .then(showOff)
       .then((data)=>log(data))
       .catch((error)=>log(error.message));
}

let showOff = (phone)=>{
    let msg = "brand is :" + phone.model;
    Promise.resolve(msg);
};