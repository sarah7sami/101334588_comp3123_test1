// Question 2
function resolvedPromise () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('message: delayed success!')
    }, 500)
  })
}

function rejectedPromise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        reject('message: delayed exception!')
        }, 500)
    })
    }

// Run the following command to test the code:
// node question-2/question-2.js 
resolvedPromise().then((result) => console.log(result))
rejectedPromise().catch((error) => console.log(error))


