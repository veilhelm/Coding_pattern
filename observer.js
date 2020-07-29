class ObservedArrey {
    constructor(objectToBeObserved){
        this.observedObject = objectToBeObserved
        this.suscribedFunctions = []
    }
}

ObservedArrey.prototype.suscribeFunction = function(functionToSuscribed) {
    this.suscribedFunctions.push(functionToSuscribed)
}

ObservedArrey.prototype.unsuscribeFunction = function(functionToUnsuscribed) {
    this.suscribedFunctions = this.suscribedFunctions.filter(fn => fn !== functionToUnsuscribed)
}

ObservedArrey.prototype.fireFunctions = function() {
    this.suscribedFunctions.forEach(fn => fn(this.observedObject))
}



// ObservedObject.prototype = {
//     suscribe : function(functionToSuscribed) {
//         this.suscribedFunctions.push(functionToSuscribed)
//     },
//     unsuscribe : function(functionToUnsuscribed) {
//         this.suscribedFunctions = this.suscribedFunctions.filter(fn => fn !== functionToUnsuscribed)
//     },
//     fire : function() {
//         this.suscribedFunctions.forEach(fn => fn(this.observedObject))
//     }
// }

module.exports = ObservedArrey