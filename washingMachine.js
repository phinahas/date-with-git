//This file is of washing machine



const loadingDress = ()=>{

    console.log("Loading dress");
    setTimeout(()=>{
        console.log("Loading finished")
    },5000)

}

module.exports = {loadingDress: loadingDress}