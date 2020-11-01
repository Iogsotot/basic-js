const CustomError = require("../extensions/custom-error");
  
// module.exports = function transform(arr) {
//     if (!Array.isArray(arr)) throw Error();
//     const result = [];
//     const controls = [
//       "--discard-next",
//       "--discard-prev",
//       "--double-next",
//       "--double-prev"
//     ];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (controls.includes(arr[i])) {
//         switch (arr[i]) {
//           case "--discard-next":
//             if (i + 2 < arr.length) i++;
//             break;
//           case "--discard-prev":
//             result.pop();
//             break;
//           case "--double-next":
//             if (i + 1 < arr.length) result.push(arr[i + 1]);
//             break;
//           default:
//             if (i - 1 >= 0) result.push(arr[i - 1]);
//         }
//       } else {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   };




// module.exports = function transform(arr) {
//     if (Array.isArray(arr)) {
//         let transformArr = [];
//         let length = arr.length;
//         for (let i = 0; i < length; i++) {
//             switch (arr[i]) {
//                 case '--discard-next':
//                     if (arr[i+1]) i++
//                     break
                
//                 case '--discard-prev':
//                     transformArr = transformArr.pop()
//                     break
//                 case '--double-next':
//                     if (arr[i+1]) {
//                     transformArr.push(arr[i+1]);
//                     //   transformArr.push(arr[i+1]);
//                     }
//                     break;
//                 case '--double-prev':
//                     if (arr[i-1]) transformArr.push(arr[i-1]);  
//                     break;
//                 default:
//                     transformArr.push(arr[i])
//                     break;
//             }
            
//         }
    
//         return transformArr
//     }
//     else throw Error()
//   };



module.exports = function transform(arr) {
    let transformArr = [];
    if(Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case '--discard-next':
                    if (arr[i+2] != '--discard-prev' && arr[i+2] != '--double-prev') i++
                    else i+=2
                    break;
                
                case '--discard-prev':
                    transformArr.pop()
                    break;

                case '--double-next':
                    if (arr[i+1]) transformArr.push(arr[i+1]);
                    break;

                case '--double-prev':
                    if (arr[i-1]) transformArr.push(arr[i-1]);  
                    break;

                default:
                    transformArr.push(arr[i])
                    break;
            }
        }
        // console.log(...arr)
        return transformArr
    } else throw new Error

  };

// module.exports = function transform(arr) {
// 	let new_arr = []
// 	if(Array.isArray(arr)){
// 		for (let i = 0; i < arr.length; i++) {
// 			if (arr[i] === '--discard-next') {
// 				if ((arr[i + 2]) !== '--discard-prev' && (arr[i + 2]) !== '--double-prev') {
// 					i += 1
// 				}else{ i += 2}
// 			}else if (arr[i] === '--discard-prev'){
// 				new_arr.pop()
// 			}else if (arr[i] === '--double-next' ){
// 				if (arr[i + 1] !== undefined) {
// 					new_arr.push(arr[i + 1])
// 				}
// 			}else if (arr[i] === '--double-prev'){
// 				if (arr[i - 1] !== undefined) {
// 					new_arr.push(arr[i - 1])
// 				}
// 			}else{
// 				new_arr.push(arr[i])
// 			}
// 		}
// 		return new_arr
// 	}else{
// 		throw new Error
// 	}
// };

// module.exports = function transform(array) {
//     if(Array.isArray(array)){
//       let newArray = [...array];
  
//       isStringCommand = (string) =>{
//         return string.toString().startsWith("--")
//       }
  
//       newArray.forEach((value, i) => {
//         if(typeof value === 'string' && value.startsWith("--")) {
//           let isArrayStart = (i === 0);
//           let isArrayEnd = (i === newArray.length - 1);
//           switch(value) {
//             case "--discard-prev":
//               if(!isArrayStart && !isStringCommand(newArray[i-1]))
//                 newArray.splice(i-1,1)
//               break
//             case "--discard-next":
//               if(!isArrayEnd)
//                 newArray.splice(i+1,1)
//               break
//             case "--double-prev":
//               if(!isArrayStart && !isStringCommand(newArray[i-1]))
//                 newArray[i] = newArray[i-1]
//               break
//             case "--double-next":
//               if(!isArrayEnd && !isStringCommand(newArray[i+1]))
//                 newArray[i] = newArray[i+1]
//               break
//             default:
//               break
//           }
//         }
//       })
      
//       return newArray.filter(x => !x.toString().startsWith('--'))
//     }
  
//     throw "Error"
//   }