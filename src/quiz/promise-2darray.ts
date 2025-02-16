import { error } from "console";
import { resolve } from "path";

/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
// function sum2DArray(arr: number[][]): Promise<number> {
//     return new Promise((resolve, reject) => {
//         console.log('Sum called ... ');
//         if(arr.length === 0) {
//             reject('Cannot sum an empty array');
//         }
//         /** schedule the execution of the function to the next event loop cycle.
//          * This is done using setTimeout() to simulate an asynchronous operations.
//          * 
//          * Replace the logic in the setTimeout() with the actual logic to sum the numbers
//          * to understand the difference in execution with and without setTimeout()
//          **/
//         setTimeout(() => {
//             let sum = 0;
//             for (let i = 0; i < arr.length; i++) {
//                 for (let j = 0; j < arr[i].length; j++) {
//                     console.log(`Adding ${arr[i][j]} to sum`);
//                     sum += arr[i][j];
//                 }
//             }
//             resolve(sum);
//         }, 0);
//         console.log('returning from sum');
//     });

//         // let sum = 0;
//         // for (let i = 0; i < arr.length; i++) {
//         //     for (let j = 0; j < arr[i].length; j++) {
//         //         console.log(`Adding ${arr[i][j]} to sum`);
//         //         sum += arr[i][j];
//         //     }
//         // }
//         // resolve(sum);
//         // console.log('returning from sum');
//     // });
// }

/**
 * An asynchronous function that sums all numbers in a 2D array
 * @param arr 2D array of numbers
 * @returns a promise that resolves to the sum of all numbers in the 2D array
 * or rejects if the array is empty
 */
async function sum2dArrayNew(arr:number[][]):Promise<number>{
    if(arr.length === 0){
        throw error
    }

    console.log("Trying the new async function")

    return new Promise((resolve) =>{
        setTimeout(()=>{
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    console.log(`Adding ${arr[i][j]} to sum`);
                    sum += arr[i][j];
                }
            }
            resolve(sum);              
        },0);      
    });
}

// Example usage:
// const array2D = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const sumPromise1 = sum2DArray(array2D).then((response : Number)=>{
//     console.log(`Received response ${response}`);
//     return response;
// }).catch((error)=>{
//     console.log(`Error will calling sum promise 1 ${error}`)
// });

// console.log(`sumPromise1 value is ${sumPromise1}`)


// const sumPromise2 = sum2DArray([]).then((response : Number)=> {
//     console.log(`Value for sumPromise2 ${response}`)
//     return response;
// }).catch((error)=>{
//     console.log(`Error is as follows for sumPromise2`)
// });
// console.log('sumPromise2:', sumPromise2);


// Example usage with async/await
async function main() {
    const array2D = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    try {
        // Await the result of the first sum
        const sum1 = await sum2dArrayNew(array2D);
        console.log(`Received response for array2D: ${sum1}`);
    } catch (error) {
        console.error(`Error while calling sumPromise1: ${error}`);
    }

    try {
        // Await the result of summing an empty array
        const sum2 = await sum2dArrayNew([]);
        console.log(`Received response for empty array: ${sum2}`);
    } catch (error) {
        console.error(`Error while calling sumPromise2: ${error}`);
    }
}

// Call the main function
main();


