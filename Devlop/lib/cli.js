const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');

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
                'cirlce',
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
      .then(() => {
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;
