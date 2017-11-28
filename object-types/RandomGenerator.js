module.export = class RandomGenerator {
    constructor(seed) {
        this.seed = seed;
    }

    generateRandom() {
        return 1 + Math.floor(Math.random() * this.seed);
    }

    generate({ numRandoms }) {
        var output = [];
        for (var i = 0; i < numRandoms; i++) {
            output.push(this.generateRandom());
        }
        return output;
    }
}