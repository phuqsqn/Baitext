function hh(n) {
   var temp = 0;
   for (var i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
         temp += i;
      }
   }

   if (temp === n && temp !== 0) {
      console.log("là 1 số hoàn hảo");
   }
   else {
      console.log("khong phải số hoàn hảo");
   }
}
hh(5);