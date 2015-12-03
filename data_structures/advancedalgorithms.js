//dynamic programming solution starts at the bottom, solving small problems and combining
//them to form an overall solution to the big problem.

//greedy algorithm- looks for  good solutions as it works toward the complete solution.
 function fib(n) {
   if (n < 2) {
     return n;
   } else {
     return fib(n-1) + fib(n-2)
   }
 }

 //instead of the above we can use dynamic programming;
//starts by solving the simples sub-problem it can solve, then using that solution to solve more complex subproblems
// untill the entre problem is solved.
 function dynamicFib(n) {
   var val = [];
   for ( var i = 0; i <= n; i++) {
     val[i] = 0;
   }
   if (n == 1 || n == 2) {
     return 1;
   } else {
     val[1] = 1;
     val[2] = 2;
     for (var i = 3; i <= n; i++) {
       val[i] = val[i-1] + val[i-2];
     }
     return val[n-1];
   }
 }

 //iterative method

 function iterFib(n) {
   var last = 1;
   var nextLast = 1;
   var result = 1;
   for ( var i =2; i < n; i++) {
     result = last + nextLast;
     nextLast = last;
     last = result;
   }
   return result;
 }



 //determining the longest common substring of two strings


 function lcs (word1, word2) {
   var max = 0;
   var index = 0;
   var lcsarr = new Array(word1.length+1);
   for ( var i = 0; i <= word1.length+1; i++) {
     lcsarr[i] = new Array(word1.length+1);
     for (var j = 0; j <= word2.length+1; j++) {  // this for loop initializes the array.
       lcsarr[i][j] = 0;
     }
   }
   // the above first section sets up variable and a two-dimensional array
   for ( var i = 0; i <= word1.length; i++) {
     for (var j = 0; j <= word2.length; j++) {
       if ( i ==0 || j == 0) {
         lcsarr[i][j] = 0;
       }  else {
           if ( word1[i-1] == word2[j-1]) {
             lcsarr[i][j] = lcsarr[i-1][j-1] + 1;
           } else {
             lcsarr[i][j] = 0;
           }
         }
         if ( max < lcsarr[i][j]) {
           max = lcsarr[i][j];
           index = i;
         }
       }
     }
     //the above second section builds the table that keeps track of character matches.
     //the first elements of the array are always set to 0. if the corresponding characters of the
     //two strings match, the current array element is set to 1 plus the value stored in the previous array element.

     var str = "" ;
     if ( max == 0) {
       return "";
     } else {
       for ( var i = index-max; i < max; i++) {
         str +=word2[i];
       }
       return str;
     }
   }
 }




 function max(a, b) {
   return (a > b) ? a : b;
 }
 function dKnapsack(capacity, size, value, n) {
   var K = [];
   for (var i = 0; i <= capacity+1; i++) {
     K[i] = [];
 }
 for (var i = 0; i <= n; i++) {
   for (var w = 0; w <= capacity; w++) {
     if (i == 0 || w == 0) {
       K[i][w] = 0;
     }
     else if (size[i-1] <= w) {
       K[i][w] = max(value[i-1] + K[i-1][w-size[i-1]],
         K[i-1][w]);
       }
       else {
         K[i][w] = K[i-1][w];
       }
       putstr(K[i][w] + " ");
     }
     console.log();
   }
   return K[n][capacity];
}



//GREEDY ALGORITHM - its an algorithm that always chooses the best solution at the
//time, with no regard to how that choice will affect  future choices.
//the greedy algorith can be used to solve the knapsack problem if the items we are placing in teh knpsack are contiouns in naturee.
//they cannot be counted. - the reason we cant find an optimal greedy solution using
//discrete items is because we can't put eg half a television in to a knapsack. for
//discrete items you either take one of them or none at all.
