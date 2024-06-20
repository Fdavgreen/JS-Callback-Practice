// const inventory = newInventory()
// move(inventory).to(0, 0)

// const character = newImage('assets/green-character/static.gif')
// let direction = null;
// let x = 100;
// let y = 250;

// move(character).to(x, y)

// function moveCharacter() {
//     if (direction === 'west') {
//         x -= 1;
//     }
//     if (direction === 'north') {
//         y += 1;
//     }
//     if (direction === 'east') {
//         x += 1;
//     }
//     if (direction === 'south') {
//         y -= 1;
//     }
//     character.style.left = x + 'px';
//     character.style.bottom = y + 'px';
// }

// setInterval(moveCharacter, 10) // Adjusted to a more reasonable interval

// document.addEventListener('keydown', function(e) {
//     if (e.key === 'ArrowLeft') {
//         direction = 'west';
//     }
//     if (e.key === 'ArrowUp') {
//         direction = 'north';
//     }
//     if (e.key === 'ArrowRight') {
//         direction = 'east';
//     }
//     if (e.key === 'ArrowDown') {
//         direction = 'south';
//     }
// });

// document.addEventListener('keyup', function(e) {
//     if (e.key === 'ArrowLeft' && direction === 'west') {
//         direction = null;
//     }
//     if (e.key === 'ArrowUp' && direction === 'north') {
//         direction = null;
//     }
//     if (e.key === 'ArrowRight' && direction === 'east') {
//         direction = null;
//     }
//     if (e.key === 'ArrowDown' && direction === 'south') {
//         direction = null;
//     }
// });

// // Positioning other items in the game
// move(newImage('assets/tree.png')).to(200, 450)
// move(newImage('assets/pillar.png')).to(350, 250)
// move(newImage('assets/pine-tree.png')).to(450, 350)
// move(newImage('assets/crate.png')).to(150, 350)
// move(newImage('assets/well.png')).to(500, 575)
// move(newItem('assets/sword.png')).to(500, 555)
// move(newItem('assets/shield.png')).to(165, 335)
// move(newItem('assets/staff.png')).to(600, 250)









// const inventory = newInventory()
// move(inventory).to(0, 0)

// function moveWithArrowKeys(left, bottom){
//     let direction = null;
//     let x = left;
//     let y = bottom;

//     element.style.left = x + 'px'
//     element.style.bottom = y + 'px'
    
//     function moveCharacter(){ 
//         if(direction === 'west'){
//             x-=1
//         }
//         if(direction === 'north'){
//             y+=1
//         }
//         if(direction === 'east'){
//             x+=1
//         }
//         if(direction === 'south'){
//             y-=1
//         }
//         element.style.left = x + 'px'
//         element.style.bottom = y + 'px'
//     }
    
//     setInterval(moveCharacter, 1)
    
//     document.addEventListener('keydown', function(e){
//         if(e.repeat) return;
    
//         if(e.key === 'ArrowLeft'){
//             direction = 'west'
//         }
//         if(e.key === 'ArrowUp'){
//             direction = 'north'
//         }
//         if(e.key === 'ArrowRight'){
//             direction = 'east'
//         }
//         if(e.key === 'ArrowDown'){
//             direction = 'south'
//         }
//     })
    
//     document.addEventListener('keyup', function(e){
//         direction = null
//     })
// }

// function move(element) {
//     element.style.position = 'fixed'

//     function moveToCoordinates(left, bottom) {
//         element.style.left = left + 'px'
//         element.style.bottom = bottom + 'px'
//     }

//     function moveWithArrowKeys(left, bottom){
       
//     }

//     return {
//         to: moveToCoordinates,
//         withArrowKeys: moveWithArrowKeys
//     }        
// }

// const character = newImage('assets/green-character/static.gif')
// // move(character).withArrowKeys(100, 250)

// move(newImage('assets/tree.png')).withArrowKeys(200, 450)


// move(newImage('assets/tree.png')).to(200, 450)
// move(newImage('assets/pillar.png')).to(350, 250)
// move(newImage('assets/pine-tree.png')).to(450, 350)
// move(newImage('assets/crate.png')).to(150, 350)
// move(newImage('assets/well.png')).to(500, 575)
// move(newItem('assets/sword.png')).to(500, 555)
// move(newItem('assets/shield.png')).to(165, 335)
// move(newItem('assets/staff.png')).to(600, 250)




const inventory = newInventory()
move(inventory).to(0, 0)

function moveWithArrowKeys(element, left, bottom, callback){
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
    
    function moveCharacter(){ 
        if(direction === 'west'){
            x -= 1;
        }
        if(direction === 'north'){
            y += 1;
        }
        if(direction === 'east'){
            x += 1;
        }
        if(direction === 'south'){
            y -= 1;
        }
        element.style.left = x + 'px';
        element.style.bottom = y + 'px';
    }
    
    setInterval(moveCharacter, 1); 
    
    document.addEventListener('keydown', function(e){
        if(e.repeat) return;
    
        if(e.key === 'ArrowLeft'){
            direction = 'west';
        }
        if(e.key === 'ArrowUp'){
            direction = 'north';
        }
        if(e.key === 'ArrowRight'){
            direction = 'east';
        }
        if(e.key === 'ArrowDown'){
            direction = 'south';
        }
        callback(direction)
    });
    
    document.addEventListener('keyup', function(e){
        direction = null
        callback(direction)
    });
}

function move(element) {
    element.style.position = 'fixed';

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px';
        element.style.bottom = bottom + 'px';
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: (left, bottom) => moveWithArrowKeys(element, left, bottom)
    };
}

const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)





move(newImage('assets/tree.png')).to(200, 450);
move(newImage('assets/pillar.png')).to(350, 250);
move(newImage('assets/pine-tree.png')).to(450, 350);
move(newImage('assets/crate.png')).to(150, 350);
move(newImage('assets/well.png')).to(500, 575);
move(newItem('assets/sword.png')).to(500, 555);
move(newItem('assets/shield.png')).to(165, 335);
move(newItem('assets/staff.png')).to(600, 250);
