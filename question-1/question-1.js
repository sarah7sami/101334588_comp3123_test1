// Question 1
function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    let filteredArray = mixedArray.filter((item) => {
      return typeof item === "string";
    });
    if (filteredArray.length > 0) {
      resolve(filteredArray.map((item) => item.toLowerCase()));
    } else {
      reject("No string values found in array");
    }
  });
}

// Run the following command to test the code:
// node question-1/question-1.js 
lowerCaseWords(["PIZZA", 10, true, 25, false, "Wings"])
.then((result) => console.log(result))

