
// setTimeout(function(){
//     console.log('kya baat hai?')
// }, 3000)


// function x(){
//     console.log('000')
// }

// function y(callback){
//     console.log('111')
//     callback()
// }

// y(x)

// two issues with Callback: call back hell, callback inversion
setTimeout(function(){
    console.log(1)
    setTimeout(function(){
        console.log(2)
        setTimeout(function(){
            console.log(3)
            setTimeout(function(){
                console.log(4)
                setTimeout(function(){
                    console.log(5)
                    setTimeout(function(){
                        console.log(6)
                        setTimeout(function(){
                            console.log(7)
                            setTimeout(function(){
                                console.log(8)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)

// setTimeout(function(){
//     console.log(2)
// },2000)

// setTimeout(function(){
//     console.log(3)
// },3000)

// setTimeout(function(){
//     console.log(4)
// },4000)

// setTimeout(function(){
//     console.log(5)
// },5000)


