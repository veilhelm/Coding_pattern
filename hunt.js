const huntingNormalDucks = (arr) => {
    arr.forEach(elm =>{
        if(elm.kind === "normal") console.log("a normal duck has been found")
    })
}

const huntingWildDucks = (arr) => {
    arr.forEach(elm =>{
        if(elm.kind === "wild") console.log("a Wild duck has been found")
    })
}

const huntingCloudDucks = (arr) => {
    arr.forEach(elm =>{
        if(elm.kind === "Cloud") console.log("a Cloud duck has been found")
    })
}


module.exports = {
    huntingNormalDucks,
    huntingCloudDucks,
    huntingWildDucks
}