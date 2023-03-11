let mathResult = prompt('Choose an option: ' + '\n a) x + y ' + '\n b) x - y ' + '\n c) x / y' + '\n d) sin x' + '\n e) cos y' + '\n f) pow(x, y)' );

if (mathResult == 'a') {
    let x = prompt('Type your first number' );
    let y = prompt('Type your second number' );
    alert('Calculations являются finished! ' + ' Sum' + ' = ' + (Number(x) + Number(y)));
} else if(mathResult == 'b') {
    let x = prompt('Type your first number' );
    let y = prompt('Type your second number' );
    alert('Calculations являются finished! ' + ' Diff' + ' = ' + (x - y));
} else if(mathResult == 'c') {
    let x = prompt('Type your first number' );
    let y = prompt('Type your second number' );
    alert('Calculations являются finished! ' + ' Div' + ' = ' + (x / y));
} else if(mathResult == 'd') {
    let x = prompt('Type your number' );
    alert('Calculations являются finished! ' + ' Sin' + ' = ' + Math.sin(x));
} else if( mathResult == 'e') {
    let x = prompt('Type your number' );
    alert('Calculations являются finished! ' + ' Cos' + ' = ' + Math.cos(x));
} else if(mathResult == 'f') {
    let x = prompt('Type your first number' );
    let y = prompt('Type your second number' );
    alert('Calculations являются finished! ' + ' Pow' + ' = ' + Math.pow(x, y));
} else {
    alert('Choose the right option')
}



