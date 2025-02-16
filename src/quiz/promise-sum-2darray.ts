import { error } from "console";

function findrowWiseSum(arr:number[]):Promise<number>{
    return new Promise((resolve,reject)=>{
        console.log(`input array is : ${arr}`)
        if(arr.length === 0){
            return reject("Array should be greater than 0");
        }

        setTimeout(()=>{
            let rowSum = 0;
            for (let i=0; i<arr.length; i++){
                rowSum += arr[i];
            }
            console.log(`Row sum is ${rowSum}`)
            resolve(rowSum)
        })
    })
}

async function findrowWiseSumHelper(arr:number[][]):Promise<number>{
    try {
        let result = await Promise.all(
            arr.map(subArray => findrowWiseSum(subArray))
        )
        let arrSum = 0
        for(let i=0;i<result.length;i++){
            arrSum += result[i];
        }
        return arrSum;
    } catch (error) {
        throw error;
    }
}

const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

findrowWiseSumHelper(array2D_1).then(arrSum =>{
    console.log(`Array sum is as follows: ${arrSum}`);
}).catch((error)=>{
    console.log(`'Error is ${error}`);
})