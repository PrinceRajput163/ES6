//Prince Rajput 
//2400290120190
//CS4C
//Practical 3
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({ username: "Prince Rajput", pass: 163 });
        } else {
            reject("Something went wrong");
        }
    }, 2000);
});
promiseOne
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

