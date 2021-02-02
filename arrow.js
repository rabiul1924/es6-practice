   
//    function doubleIt(num){
//         return num * 2;
//     }

//     const result = doubleIt(5);
//    console.log(result); //10

//    const doubleIt = function(num) {
//       return num * 2;
//    }

//    const result = doubleIt(5);
   console.log(result); //10

   //shortcut above 2 short version es6
   const doubleIt =  num => num * 2; //1 parameter
   const add = (x, y) => x + y; //2 parameter++
   const give5 = () => 5;//0 parameter
   const doubleIt = num => num * 2;
   const add = (x, y) => x + y;
   const give5 = () => 5;
   const doMath = (x, y) => {
       const sum = x + y;
       const diff = x - y;
       const result = sum * diff;
       return result;
   } 

   const result = add(50, 70);//120
   const result2 = give5();//5
   const result3 = doMath(7, 5);
   console.log(result3); //24


   //Arrow ( => ) is called arrow function