const greeting = 'Hello World';
import { sum } from "./func";
import "./main.css";
console.log(greeting);

const getData = async (url: string) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts');
