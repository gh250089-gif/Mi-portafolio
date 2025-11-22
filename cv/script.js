console.log(' Hello, World! '.trim()); // Prints Hello, World!
console.log('Hello'.length); // Prints 5

String .prototype.reverse = function() {
    return this.split('').reverse().join('');

};
console.log('Hello'.reverse()); // Prints olleH

String .prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();  
    }; 


 
