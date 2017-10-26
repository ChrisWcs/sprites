export const blankSprite = ( r, c ) => {
    let str = "rgb(0,0,0)";

    let arr = [];

    for(let i = 0; i < r; i++){
        arr.push([]);
        for(let j = 0; j < c; j++){
            arr[i].push(str);
        }
    }
    return arr;
};

export const copySprite = (sprite) => {
    let newSprite = [];

    sprite.forEach( (x, i) => {
        newSprite[i] = [...x];
    });
    
    return newSprite;
};