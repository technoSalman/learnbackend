//Asynchronous javscript is used to do asynchronous operations. We know that JS is synchronous, single threaded language.
//That means that if you have a series of task then they will take place one at a time and if even one of them stops then the entire
//process will stop. This is what we call synchronous system
//To do asyncronous operation we need to write asynchronous programmming

// console.log('I');
// console.log('am');
// console.log('a');
// setTimeout(() =>{
//     console.log('student');
// }, 4000)
//setTimeOut is a in-built function that we can use to do asynchronous operations
//When event loop counters a setTimeOut it will push it to callback queue and continue doing operations in call stack untill the
//timer is over. Then event loop will check callback queue and if it finds something there, it will push that to call stack.


//CallBack 

//Example program

// function one (call_two){
//     call_two();
//     console.log('Step one complete. PLease call step two');
   
// }

// function two(){
//     console.log('Step two');
// }

// one(two);

//Another Exmaple program

// let stocks  = {
//     fruits: ['Banana','Apple','StrawBerry','Mango'],
//     liquid: ['water','ice'],
//     holder: ['cone','cup','sticks'],
//     toppings: ['chocolates','peanuts'],
// };


// let order = (fruit_name, call_production) => {
//     setTimeout(() =>{
//         console.log(`${stocks.fruits[fruit_name]}`);
//         call_production();
//     },2000)
   
// }

// let production = () => {
//     setTimeout(() => {
//         console.log('production has started');
//         setTimeout(() => {
//             console.log('fruits have been chopped');
//             setTimeout(() => {
//                 console.log('Water and Ice was added');
//                 setTimeout(() => {
//                     console.log('cone was added');
//                     setTimeout(() => {
//                         console.log('chocolates added as toppings');
//                         setTimeout(() => {
//                             console.log('Icecream was seved');
//                         }, 5000);
//                     }, 4000);
//                 }, 3000);
//             },2000);        
//         }, 1000);
//     },0000);
// };

// //This right here is what we call callback hell.
// //We have promise to avoid this situation

// order(0,production);
// PROMISE

//let isShopOpen = true;

// let order = (time, work) => {

//     return new Promise((resolve, reject) => {
//         if(isShopOpen){
//             setTimeout(() => {
//                 resolve(work())
//             }, time);
//         }
//         else{
//             reject(console.log('Our Shop is closed'))
//         }
//     })
// }

// // order(2000,() => console.log(`${stocks.fruits[0]}`))
//  order(2000,() => console.log(`${stocks.fruits[0]} was selected`))
    
//  .then(() => { 

//     return order(0000, () => console.log('Production has started'))
//  })

//  .then(() => {

//     return order(3000, () => console.log('The fruit has been chopped'))
//  })

//  .then(() => {

//     return order(0000,() => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`))
//  })

//  .then(() => {

//     return order(1000, () => console.log(`Machine has started`))
//  })

//  .then(() => {

//     return order(1000, () => console.log(`${stocks.holder[0]} was added`))
//  })

//  .then(() => {

//     return order(2000, () => console.log(`${stocks.toppings[1]} was added`))
//  })

//  .then(() => {

//     return order(1000, () => console.log(`Ice cream was served`))
//  })

//  .catch(() => {

//     console.log(`Customer left`)
//  })

//  .finally(() => {
//     console.log('Day Ended')
//  })

//Async and Await

// function time(ms){
//     return new Promise((resolve, reject) => {
//         if(isShopOpen){
//             setTimeout(resolve, ms)
//         }
//         else{
//             reject(console.log('Shop is closed'))
//         }
//     })
// }

// async function kitchen (){
//     try{

//         await time(2000)
//         console.log(`${stocks.fruits[1]}`)

//         await time(0000)
//         console.log('Start the production')

//         await time(1000)
//         console.log('Cut the fruit')

//         await time(1000)
//         console.log(`${stocks.liquid[1]}  and ${stocks.liquid[0]} was added`)

//         await time(1000)
//         console.log(`${stocks.toppings[0]} were added `)

//         await time(0000)
//         console.log(`${stocks.holder[2]} was added`)

//         await time(3000)
//         console.log(`Ice cream was served`)
//     }
//     catch(error){
//         console.log('Customer Left', error)
//     }
//     finally{
//         console.log('Day ended, shop is closed')
//     }
// }
// kitchen();

//more async
// let counter = 0;

// let timer = setInterval(() => {
//  console.log('This is running');
 
//  counter += 1;
//  if(counter > 4){
//     clearInterval(timer);
//  }
// },1000)

// function job(callback1, callback2){
//     let callbackFirst = setTimeout(() => {
//         console.log(callback1);
//     });

//     let counter = 0;

//     let callbackTwo = setInterval(() => {
//         counter++;
//         console.log(callback2);
//         if(counter > 2){
//             clearInterval(callbackTwo);
//         }
//     },2000)
// }

// console.log(job('abc','xyz'));

// function job(data) {
//     return new Promise(function(resolve, reject){

//     if(isNaN(data)){

//     reject("error");
//     }
//     else if(data%2!=0)
//     {
//     setTimeout(function(){
//     resolve("odd");
//     },1000)
//     }
//     else if(data%2==0){
//     setTimeout(function(){
//     reject("even");
//     },2000)
//     }
//     })
//     }
    
// async function firstFunc(){
//     console.log("a");
//  let firstreturn = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("b")
//         },3000)
       
//     })
//     await firstreturn;
//     //console.log(await firstreturn )
// }

// firstFunc();

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Callbacks
const verifyUser1 = function(username, password, callback){
    databse.verifyUser(username, password,(error, userInfo) => {
        if(error){
            callback(error)
        }else{
            database.getRoles(username, (error, roles) => {
                if(error){
                    callback(error)
                }else{
                    database.logAccess(username, (error)=> {
                        if(error){
                            callback(error);
                        }else{
                            callback(null, userInfo, roles)
                        }
                    })
                }
            })
        }
    })
}

//Promises
const verifyUser2 = function(username, password){
    database.verifyUser(username, password)
    .then(userInfo => database.getRoles(userInfo))
    .then(rolesInfo => database.logAccess(rolesInfo))
    .then(finalResult => {
        //Do whatever the callback would do
    })
    .catch((err) => {
        //Do whatever the error handlers need to do
    });
};

//ASync Await

const verifyUser3 = async function(username, password){
    try{
        const userInfo = await database.verifyUser(username, password);
        const rolesInfo = await database.getRoles(userInfo);
        const logAccess = await database.logAccess(userInfo);
        return userInfo;
    } catch(e){
        //Hanlde errors here
    }
}