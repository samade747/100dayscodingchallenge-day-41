// this is for loop counts from 1 to 10 but skip number 5

for( let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    }

    console.log(i);
    // its skips the number 5, and prints from 1 to 4 & 6 to 10    
}