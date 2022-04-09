# The Luhn Algorithm

[ENTERS A CREDIT CARD IN THIS FORM](https://storied-zabaione-5609ce.netlify.app/)

### Credit card numbers can be validated with a process called the Luhn algorithm. The Luhn algorithm works like this:

#### Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.
1. Sum all digits in the altered number.
2. If that total is a multiple of 10, the number is valid.
#### For example, given the card number 4408 0412 3456 7893:
- Orig  :  `4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3`
- Step 1:  `8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3`
- Step 2:  `8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70`
 -Step 3:  `70 % 10 == 0`

 [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)


### Code
`Write a function validCard that takes a number as an argument and returns true for a valid number and false for an invalid number.`

`validCard(1234567890123456); //should be false`
`validCard(4408041234567893); //should be true`
`validCard(38520000023237); //should be true`
`validCard(4222222222222); //should be true`
### Create A Luhn Algorithm Validator
1. A user enters a credit card in your form
2. If the Luhn Algorithm says its valid, show a message that the card is valid
3. If the Luhn Algorithm says its invalid show a message that it is not valid
4. The Luhn Algo should be checking every time the state changes using the useEffect hook