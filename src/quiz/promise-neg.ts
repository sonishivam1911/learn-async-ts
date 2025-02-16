import { error } from "console";

function findNegativeNumber(arr:number[]):Promise<number[]>{
    return new Promise((resolve,reject) =>{
        console.log("Function started")
        if(arr.length === 0){
            reject("Cannot have 0 elements") 
        }

        setTimeout(() => {
            let negativeItems = [];
            for(let i =0; i<arr.length; i++){
                if(arr[i] < 0){
                    negativeItems.push(arr[i]);
                }
            }
            resolve(negativeItems);
        });
    })
}

async function findNegativeNumbersConcurrently(arr:number[][]):Promise<number[]>{
    try {
        const result = await Promise.all(
            arr.map(subArray => findNegativeNumber(subArray))
        )
        return result.flat();
    } catch (error) {
        throw error;
    }
}




const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];



findNegativeNumbersConcurrently(array2D_3).then(negative => {
    console.log(`Negative Number found : ${negative}`)
}).catch((error)=> {
    console.error("Error:", error);
})