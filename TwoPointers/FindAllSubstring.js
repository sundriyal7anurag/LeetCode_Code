// Find all substring from the given input string.
// input: "babad"
// Hint: to find # of substring = s= (n* (+1))/2
//Output:  [ 'b',    'a',    'b',
//   'a',    'd',    'ba',
//   'ab',   'ba',   'ad',
//   'bab',  'aba',  'bad',
//   'baba', 'abad', 'babad'
// ]

  const getSubstr=(s)=>{
    let i=1; //string length
    const res=[];
    while(i<=s.length){
        let j=0;
        while(j<=s.length-i){
            res.push(s.substr(j,i));
            j++;
        }
        i++;
    }
    return res;
    
}

console.log("substring=",getSubstr("babad"))
