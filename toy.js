function moveEmptyBoxesToEnd(boxes) {
    let nonEmpty = [];   
    let emptyCount = 0;  

    
    boxes.forEach(box => {
        if (box === 0) {
            emptyCount++;  
        } else {
            nonEmpty.push(box);
        }
    });

    
    nonEmpty = nonEmpty.concat(Array(emptyCount).fill(0));
    
    return { reorderedBoxes: nonEmpty, emptyCount };
}


function getUserInput() {
    
    let input = prompt("Enter the box values separated by commas (e.g., 1,0,2,0,3,4,0,5):");
    
    
    let boxes = input.split(",").map(Number);
    
    return boxes;
}


let boxes = getUserInput(); 
let result = moveEmptyBoxesToEnd(boxes); 
console.log("Reordered Boxes:", result.reorderedBoxes);  
console.log("Count of Empty Boxes:", result.emptyCount);  
