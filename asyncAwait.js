// async =makes a function return a promise 
// await = makes an async functoin wait for a promise 

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            const walking = false;
            if(walking){
                resolve("dog has gone for a walk")
            }
            else{
                reject("dog has not gone to the walk")
            }
        }, 1500);
});
}

async function dochores(){
   try{
    const walk = await walkDog();
    console.log(walk)
   }
   catch(error){
    console.log(error);
   }
}

dochores();