class Computer {
    run() {
        console.log("running...");
    }

    save() {
        console.log("saving...");
    }
}

class ComputerDecoration {
    constructor() {
        this._notify = "notify...";
    }

    run() {
        console.log(this._notify);
        Computer.prototype.run.call(this);
    }
}

let mySystem = new ComputerDecoration();
mySystem.run();
