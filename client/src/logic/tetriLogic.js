const isOutPos = (gMap, pos, absPos)=>{
    if ((gMap.length <= pos.y + absPos.y) || (gMap[0].length <= pos.x +  absPos.x) ||
        absPos.x + pos.x < 0 ||  absPos.y + pos.y < 0)
                return (true);
    return (false);
}

const checkValidPushTetri  = (tetriMap, tetri, pos) =>{
    for (let y = 0; y < tetri.length;y++){
        for (let x = 0; x < tetri.length;x++) {
            if (isOutPos(tetriMap, pos, {x : x, y : y}))
            {
                // cas ou notre piece est e dehors du terrein de jeu
                if (tetri[y][x] > 0)
                    return false;
            }
            else if (tetriMap[y + pos.y][x + pos.x] > 0 && tetri[y][x] > 0)
                return(false);
        }
    }
    return (true);
}

const  mergeTetriOnMap = (tetriMap, tetri, pos, value = 1) =>{
    for (let y = 0; y < tetri.length;y++){
        for (let x = 0; x < tetri.length;x++) {
            if (!isOutPos(tetriMap, pos, {x:x,y:y}))
                tetriMap[y + pos.y][x + pos.x] = (tetri[y][x]) ? value : tetriMap[y + pos.y][x + pos.x];
        }
    }
}

const checkAndPush = (tetriMap, tetri, pos, value = 1) => {
    if (!checkValidPushTetri(tetriMap, tetri, pos))
        return (false);
    mergeTetriOnMap(tetriMap, tetri, pos, value);
    return true;
}

// delete line check
// toruver l id sans aucu zero dedans
const getAllFullLine = (myMap) => {
    let arrId = [];

    for (let i =0; i < myMap.length; i++) {
        let currLine = myMap[i];
        if (currLine.includes(0) === false){
            arrId.push(i);
        }
    }
    return (arrId)
}

const deleteFullLine = (myMap) => {
    let getLines = getAllFullLine(myMap);

    getLines = myMap.filter((elem, index) => getLines.includes(index));

  //  for(let i = 0; getLines
  //  return (getLines);
    //delete line 1 and add line on the begining

} 

module.exports = {
    mergeTetriOnMap,
    checkValidPushTetri,
    checkAndPush,
    getAllFullLine,
    deleteFullLine
}