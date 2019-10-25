// are we listing for user input?
let listening = false;
let selections = {
    index: 0,
    computer: [],
    user: []
}

// used to select a block
let selectBlock = ( num ) =>{
    console.log( 'selecting block:', num );
    // deselect all 3 blocks
    for( let i=1; i<=3; i++){
        const block = 'block' + i;
        document.getElementById( block ).classList.remove( 'block-selected' );
    }
    const selected = 'block' + num;
    document.getElementById( selected ).classList.add( 'block-selected' );
}