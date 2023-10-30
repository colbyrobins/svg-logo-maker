

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }

    generateTextHtml(x, y, fontSize, text, textColor) {
        return `<text x="${x}" y="${y}" font-size="${fontSize}" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        const textHtml =  this.generateTextHtml(150, 125, 60, this.text, this.textColor)
        return `
            <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="white" />
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                ${textHtml}
            </svg>`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        const textHtml = this.generateTextHtml(150, 150, 14, this.text, this.textColor);
        return `
            <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="100" y="100" width="100" height="100" fill="${this.shapeColor}" />
                ${textHtml}
            </svg>`;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        const textHtml = this.generateTextHtml(250, 175, 14, this.text, this.textColor);
        return `
            <svg version="1.1"
                width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="250, 100 100,400 400,400" fill="${this.shapeColor}" />
                ${textHtml}
            </svg>`;
    }   
}

module.exports = { Square, Circle, Triangle, Shape}