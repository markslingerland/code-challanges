// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function (): void {
  inputLines = inputString.split('\n');
  inputString = '';

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
  // Write your code here
  const sortedArray = [...arr].sort();
  const minSum = sortedArray.slice(0, sortedArray.length - 1).reduce((acc, curr) => acc + curr);
  const maxSum = sortedArray.slice(1, sortedArray.length).reduce((acc, curr) => acc + curr);

  console.log(minSum, maxSum);
}

function main() {

  const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
