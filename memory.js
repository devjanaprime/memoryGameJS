// are we listing for user input?
let listening = false;
let selections = {
    computer: [],
    index: 0,
    user: []
}

let showTime = 800;
let hideTime = 200;

let deselectAll = () => {
    console.log( 'in deselectAll' );
    // deselect all 3 blocks
    for( let i=1; i<=4; i++){
        const block = 'block' + i;
        document.getElementById( block ).classList.remove( 'block-selected' );
        document.getElementById( block ).classList.remove( 'block-correct' );
        document.getElementById( block ).classList.remove( 'block-incorrect' );
    }
}

// game only ends when the user makes an incorrect guess
let endGame = () =>{
    console.log( 'gameOver. correct guesses:', selections.user.length );
    selections.computer = [];
    selections.user = [];
}

// used to select a block
let selectBlock = ( num ) =>{
    console.log( 'selecting block:', num );
    deselectAll();
    const selected = 'block' + num;
    if( listening ){
        console.log( 'checking:', selections.computer[ selections.index ], num );
        if( selections.computer[ selections.index ] === num ){
            selections.user.push( num );
            document.getElementById( selected ).classList.add( 'block-correct' );
            if( selections.index < selections.computer.length - 1 ){
                selections.index++;
            }
            else{
                console.log( 'nice... next...' );
                setTimeout( setupNewSelections, showTime );
            }
        }
        else{
            document.getElementById( selected ).classList.add( 'block-incorrect' );
            endGame();
        }
    }
    else{
        console.log( 'user selection' );
        document.getElementById( selected ).classList.add( 'block-selected' );
    }
} // end selectBlock

let setupNewSelections = () =>{
    deselectAll();
    newSelection();
    selections.index = 0;
    showSelections();
}

let startListening = () => {
    listening = true;
    selections.index = 0;
    selections.user = [];
}

let showSelections = () => {
    console.log( 'in showSelections', selections.index < selections.computer.length)
    listening = false;
    if( selections.index < selections.computer.length ){
        console.log( 'showing comp selection:', selections.index );
        setTimeout( showSelections, showTime + hideTime );
        setTimeout( deselectAll, showTime );
        selectBlock( selections.computer[ selections.index ] );
        selections.index++;
    } //end repeat
    else{
        deselectAll();
        startListening();
    }
}

let newSelection = () =>{
    listening = false;
    selections.computer.push( Math.floor(Math.random() * 4) + 1);
} //end newSelections


document.addEventListener("DOMContentLoaded", ()=>{
    newSelection();
    newSelection();
    newSelection();
    newSelection();
    setupNewSelections();
});