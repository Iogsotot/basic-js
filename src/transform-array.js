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
      for (let i = 0; i < arr.length; i++) {
          switch (arr[i]) {
              case '--discard-next':
                  if (arr[i+2] != '--discard-prev' && arr[i+2] != '--double-prev') i++
                  if (arr[i+2] == '--double-prev') i+=2
                  break;
              
              case '--discard-prev':
                  transformArr = transformArr.slice(0, transformArr.length - 1);
                  break;
              case '--double-next':
                  if (arr[i+1]) {
                  transformArr.push(arr[i+1]);
                  transformArr.push(arr[i+1]);
                   i++
                  }
                  break;
              case '--double-prev':
                  if (arr[i-1]) transformArr.push(arr[i-1]);  
                  break;
              default:
                  transformArr.push(arr[i])
                  break;
          }
          
      }
  
    return transformArr
  };