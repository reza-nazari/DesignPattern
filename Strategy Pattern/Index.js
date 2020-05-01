//DEFINE MAIN CLASS
//DEFINE ALGORITHMS WITH SAME INTERFACE
//SET MAIN CLASS EQUAL ALGORITHM
//CALL INTERFACE IN MAIN CLASS METHOD

class Computer {
    constructor() {
        this._strategy;
    }

    /**
     * @param {any} strategy
     */
    set strategy(strategy) {
        this._strategy = strategy;
    }

    run(arg) {
        return this._strategy.run(arg);
    }
}

class Algorithm1 {
    run(timing) {
        console.log(`run with ${timing}s delay`);
    }
}

class Algorithm2 {
    run(content) {
        console.log(`run ${content.status} for ${content.time} times`);
    }
}

const timing = 3;

const content = {
    status: "immediatly",
    time: 2,
};

var exe1 = new Algorithm1();
var exe2 = new Algorithm2();

let pc = new Computer();

pc.strategy = exe1;
pc.run(timing);

pc.strategy = exe2;
pc.run(content);
