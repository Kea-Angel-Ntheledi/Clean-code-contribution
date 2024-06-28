//Challange 1: For meaningful names
class D {
    constructor(d) {
        this.d = d;
    }

    f() {
        if (this.d === 0) {
            this.t();
        } else {
            this.p();
        }
    }

    t() {
        // do something
    }

    p() {
        // do something else
    }
}

// Solution:
class Device {
    constructor(status) {
        this.status = status;
    }

    performAction() {
        if (this.status === 0) {
            this.executeStartup();
        } else {
            this.executeShutdown();
        }
    }

    executeStartup() {
        // Initialize device
        console.log('Device is starting up');
    }

    executeShutdown() {
        // Shut down device
        console.log('Device is shutting down');
    }
}
