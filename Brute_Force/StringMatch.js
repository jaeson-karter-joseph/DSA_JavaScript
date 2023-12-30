function StringMatchIndex(str,key){
    m = key.length
    for(let i = 0; i <= str.length - m; i ++ ){
        j = 0
        while(j < m && key[j] == str[i + j]){
            j++;
        }

        if(m == j){
            return i;
        }
    }

    return -1;
}


let str = "Jaeson Karter Joseph"
let findStr = "J"
console.log(StringMatchIndex(str,findStr))