const {Square, Circle, Triangle, Shape } = require('../lib/shapes.js')

describe('shape', () => {
    it('should return a text html string', () => {
        const expectedHtml = `<text x="100" y="100" font-size="20" fill="green" text-anchor="middle" alignment-baseline="middle">TST</text>`;
        const shape = new Shape("TST", "blue", "green");
        expect(shape.generateTextHtml(100, 100, 20, "TST", "green"))

    })
})
describe('circle', () => {
    it('should render html for a circle svg', () => {
        const expectedHtml = `
            <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="white" />
                <circle cx="150" cy="100" r="80" fill="green" />
                <text x="150" y="125" font-size="60" fill="blue" text-anchor="middle" alignment-baseline="middle">RAN</text>
            </svg>`.trim()
        const circle = new Circle("RAN", "blue", "green");
        expect(circle.render().trim()).toEqual(expectedHtml);
    });
});

describe('square', () => {
    it('should render html for a square svg', () => {
        const expectedHtml = `
            <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="100" y="100" width="100" height="100" fill="green" />
                <text x="150" y="150" font-size="14" fill="blue" text-anchor="middle" alignment-baseline="middle">RAN</text>
            </svg>`.trim()
        const square = new Square("RAN", "blue", "green");
        expect(square.render().trim()).toEqual(expectedHtml);
    });
});

describe('triangle', () => {
    it('should render html for a triangle svg', () => {
        const expectedHtml = `
            <svg version="1.1"
                width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="250, 100 100,400 400,400" fill="green" />
                <text x="250" y="175" font-size="14" fill="blue" text-anchor="middle" alignment-baseline="middle">RAN</text>
            </svg>`.trim()
        const triangle = new Triangle("RAN", "blue", "green");
        expect(triangle.render().trim()).toEqual(expectedHtml);
    });
});