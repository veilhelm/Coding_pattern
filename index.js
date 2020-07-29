const {Duck, flyStrategies, quackStrategies } = require("./Duck_class")
const ObservedArrey = require("./observer")
const { huntingNormalDucks, huntingCloudDucks, huntingWildDucks } = require("./hunt")

const allDucks = []

const normalDuck = new Duck("normal")

const wildDuck = new Duck("wild")
wildDuck.setFlyingStrategy(flyStrategies.flyHighStrategy)
wildDuck.setQuackStrategy(quackStrategies.quackLoudStrategy)

const cityDuck = new Duck("city")
cityDuck.setFlyingStrategy(flyStrategies.flyLowStrategy)
cityDuck.setQuackStrategy(quackStrategies.quackWierdStrategy)

allDucks.push(normalDuck)
allDucks.push(wildDuck)
allDucks.push(cityDuck)

allDucks.forEach(duck => {
console.log(duck.display())
console.log(duck.fly())
console.log(duck.quack())
})

const arrOfDucks = new ObservedArrey(allDucks)
arrOfDucks.suscribeFunction(huntingNormalDucks)
arrOfDucks.suscribeFunction(huntingWildDucks)
arrOfDucks.suscribeFunction(huntingCloudDucks)
arrOfDucks.fireFunctions()
