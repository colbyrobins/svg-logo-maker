const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { Circle, Square, Triangle} = require('./shapes.js');

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Please enter your text',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please your text color'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please enter a shape',
            choices: [
                'circle',
                'triangle',
                'square'
            ]
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please your shape color'
        }
      ])
      .then((responses) => {
        let shape;

        if (responses.shape === 'circle') {
          shape = new Circle(responses.text, responses.shapeColor, responses.textColor);

        }else if (responses.shape === 'square') {
          shape = new Square(responses.text, responses.shapeColor, responses.textColor);

        }else if (responses.shape === 'triangle') {
          shape = new Triangle(responses.text, responses.shapeColor, responses.textColor);
        }
        return writeFile('logo.svg', shape.render());
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;
