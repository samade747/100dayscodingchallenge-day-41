function logUnitVowel(str: string): void { // function that logs the first vowel in a string
    const vowels = "aeiowAEIOU"; // string of vowels
    for (const char of str){ // loops through each character in the string
        if (vowels.includes(char)){ // checks if the character is a vowel
            console.log(`first vowel found ${char}`); // logs the first vowel found
            break; // exits the loop if a vowel is found
    } 
        console.log(char) // logs the character if it is not a vowel


}
}

logUnitVowel('syzygy')
