const posts=[
    {id: 1, title: 'Post one', description: 'This is first post'},
    {id: 2, title: 'Post two', description: 'This is second post'}
]

function getPosts(){
    setTimeout(() => {
        let result='';
        posts.forEach((post, index) => {
            result= result + '<li> ${post.title} </li>'
        })
        document.body.innerHTML=result
    }, 1000)
}

// await this function executed then next one
async function x() {
    await createPost( {id: 3, title: "Post Three", description: "This is post three"})

    getPosts()
}

x()
// using promise using data from web
function createPost(post) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            posts.push(post)

            const error= false
            // const error= true

            if(!error){
                resolve()
            }else{
                reject('Something is wrong: error')
            }
        }, 2000)
    })
    
}

// createPost({id:3, title:"Post Three", description: "This is post three"}).then(getPosts)

// createPost({id:3, title:"Post Three", description: "This is post three"}).then(getPosts).then(() => console.log('this will be called after getPosts()'))

//--- if error true
createPost({id:3, title:"Post Three", description: "This is post three"}).then(getPosts).catch(error=> console.log(error))

//--- finally-- Session ended, doesn't matter data fetched or not( error true or false no effect)

// createPost({id:3, title:"Post Three", description: "This is post three"}).then(getPosts).catch(error=> console.log(error)).finally(()=> console.log("Session Ended"))

//--------- using callback- copy/mimicry--------
// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000)
// }

// createPost({id:3, title:"Post Three", description: "This is post three"}, getPosts)