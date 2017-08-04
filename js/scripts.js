var a = prompt('Enter "a" value'),
    b = prompt('Enter "b" value'),
    value = (a * a) + (2 * a * b) - (b * b);

alert('The result of (a * a) + (2 * a * b) - (b * b) operation is: ' + value);
console.log(value);

if (value < 0) {
    alert('Wynik jest ujemny');
    console.log('Wynik jest ujemny');
} else if (value > 0) {
    alert('Wynik jest dodatni');
    console.log('Wynik jest dodatni');
} else {
    alert('Wynik równy zero');
    console.log('Wynik równy zero');
};