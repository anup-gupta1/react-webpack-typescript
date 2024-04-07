#Setting up Jest (https://jestjs.io/docs/getting-started)
npm install --save-dev jest
npm install --save-dev @types/jest

Generate a basic configuration file
npm init jest@latest

Choose the test environment that will be used for testing - jsdom(browser-like)
code-coverage - (babel)

set moduleNameMapper to 
{
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
},

Create folder __mocks__ and under this folder create two files :
1. fileMock.js (file content : module.exports = {})
2. styleMock.js (file content : module.exports = {})

install react testing library
npm i -D @testing-library/react
npm i -D @testing-library/jest-dom

set module = "nodenext" in tsconfig.json


