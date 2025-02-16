const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");


async function transformImages(){
  try {

    if(alice10 && alice20 && alice30){
      await alice10.animate(aliceTumbling1,aliceTiming1);
      console.log("Alice 1 animation complete");

      await alice20.animate(aliceTumbling1,aliceTiming1);
      console.log("Alice 2 animation complete");
      
      await alice30.animate(aliceTumbling1,aliceTiming1);
      console.log("Alice 3 animation complete");
    }else {
      console.warn("#alice elements not found");
    }
    
  } catch (error) {
    alert(`Error during animation: ${error}`);
  }
}

transformImages();


// if(alice10 && alice20 && alice30) {
//   // Promise chain  
//   alice10.animate(aliceTumbling1, aliceTiming1).finished  
//     .then(() => {
//         return alice20
//                 .animate(aliceTumbling1, aliceTiming1)
//                 .finished;     
//     })
//     .then(() => {
//       return alice30
//               .animate(aliceTumbling1, aliceTiming1)
//               .finished;
//     })
//     .catch((err) => alert(`Error when promising ... ${err.message}`));
// }
// else{
//   console.warn("#alice not found");
// }

// alice10
//     .animate(aliceTumbling1, aliceTiming1)
//     .finished
//     .then((res) => {
//         console.log(res);
//         alice20
//             .animate(aliceTumbling1, aliceTiming1)
//             .finished
//             .then((res) => {
//                 console.log(res);
//                 alice30.animate(aliceTumbling1, aliceTiming1);
//             })
//     });
  