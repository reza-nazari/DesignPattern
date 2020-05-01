class Subject {
    constructor() {
        this.observers = new Set();
    }

    subscribe(observer) {
        this.observers.add(observer);
    }

    unsubscribe(observer) {
        this.observers.delete(observer);
    }

    notify(message) {
        this.observers.forEach((observer) => {
            observer.update(message);
        });
    }
}

class Observer {
    constructor(device) {
        this._device = device;
    }
    update(message) {
        console.log(message + " for " + this._device);
    }
}

var sub = new Subject();

let user1 = new Observer("device1");
let user2 = new Observer("device2");

sub.subscribe(user1);
sub.subscribe(user2);

sub.notify("update completed");
