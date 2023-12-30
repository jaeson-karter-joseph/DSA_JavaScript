function findOccurance(str, findChar) {
    let count = 0;
    let pos = str.indexOf(findChar);
    while (pos !== -1) {
        count++;
        pos = str.indexOf(findChar, pos + 1);
    }

    if (count > 0) {
        console.log(`Character ${findChar} occured ${count} times in the string ${str}`);
    } else {
        console.log(`Character ${findChar} not found in the string ${str}`);
    }
}


let str = "Jaeson Karter Joseph";
findOccurance(str, "J");
findOccurance(str, "Ja");
findOccurance(str, "jbc");


