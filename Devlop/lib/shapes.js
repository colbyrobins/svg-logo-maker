

class Shape {
    constructor(text, shapeColor, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
}

class Circle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor)
    }

    render() {
        return `
            <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="white" />
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }
}

class Square extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor)
    }

    render() {
        return `
            <svg version="1.1"
                width="200" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="100" y="100" width="100" height="100" fill="${this.squareColor}" />
                <text x="150" y="150" font-size="14" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
            </svg>`;
    }
}

class Triangle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor)
    }

    render() {
        return `
        <svg version="1.1"
            width="500" height="500" xmlns="http://www.w3.org/2000/svg">
            <polygon points="250,60 100,400 400,400" fill="${this.shapeColor}" />
            <text x="250" y="300" font-size="30" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle"> ${this.text}</text>
        </svg>`;
    }   
}

module.exports = { Square, Circle, Triangle }