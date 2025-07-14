const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
  rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      if (isNaN(a) || isNaN(b)) {
        console.log('Please enter valid numbers.');
        rl.close();
        return;
      }

      let result;
      switch (operation) {
        case 'add':
          result = a + b;
          break;
        case 'subtract':
          result = a - b;
          break;
        case 'multiply':
          result = a * b;
          break;
        case 'divide':
          if (b === 0) {
            console.log('Error: Division by zero');
            rl.close();
            return;
          }
          result = a / b;
          break;
        default:
          console.log('Invalid operation. Use: add, subtract, multiply, divide');
          rl.close();
          return;
      }

      console.log(`Result: ${result}`);
      rl.close();
    });
  });
});
