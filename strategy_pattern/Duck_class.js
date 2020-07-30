//strategy pattern

//------------------------pre-set strategies--------------------------------------------

const PredefinedFlyStrategy = function() {
    this.fly = function () {
        return "fly at normal high"
    }
}

const PredefinedQuackStrategy = function() {
    this.quack = function () {
        return "quack at normal volume"
    }
}

const predefinedFlyStrategy = new PredefinedFlyStrategy()
const predefinedQuackStrategy = new PredefinedQuackStrategy()

//----------------------------------DUCK CONSTRUCTOR-----------------------------------------------------
class Duck {
    constructor(kind) {
        this.kind = kind
        this.flyStrategy = predefinedFlyStrategy
        this.quackStrategy = predefinedQuackStrategy
    }
}

// ------------------functions to set the strategies for each method--------------------
Duck.prototype.setFlyingStrategy = function (strategy) {
    this.flyStrategy = strategy
}

Duck.prototype.setQuackStrategy = function (strategy) {
    this.quackStrategy = strategy
}

//----------------------------- the methods of the object----------------------------------

Duck.prototype.fly = function() {
    return this.flyStrategy.fly()
}

Duck.prototype.quack = function() {
    return this.quackStrategy.quack()
}

Duck.prototype.display = function() {
    return `this is a ${this.kind} duck`
}


//-----------------------------the strategies to inyect in fly method---------------------------

const FlyHighStrategy = function () {
    this.fly = function(){
        return "this duck fly really high"
    }
}

const FlyLowStrategy = function () {
    this.fly = function(){
        return "this duck fly really low"
    }
}

const FlyQuitelyStrategy = function () {
    this.fly = function(){
        return "this duck flys quitely"
    }
}


//-----------------------------the strategies to inyect in quack method---------------------------

const QuackLoudStrategy = function () {
    this.quack = function () {
        return "this duck quack really loud"
    }
}

const QuackSoftStrategy = function () {
    this.quack = function () {
        return "this duck quack really soft"
    }
}

const QuackWeirdStrategy = function () {
    this.quack = function () {
        return "this duck quack really soft"
    }
}
//------------------------instances of the methods --------------------------
const flyHighStrategy = new FlyHighStrategy()
const flyLowStrategy = new FlyLowStrategy()
const flyQuitelyStrategy = new FlyQuitelyStrategy()

const quackLoudStrategy = new QuackLoudStrategy()
const quackSoftStrategy = new QuackSoftStrategy()
const quackWeirdStrategy = new QuackWeirdStrategy()


module.exports = {
    Duck,
    flyStrategies: {
        flyHighStrategy,
        flyLowStrategy,
        flyQuitelyStrategy
    },
    quackStrategies: {
        quackLoudStrategy,
        quackSoftStrategy,
        quackWeirdStrategy
    }
}

