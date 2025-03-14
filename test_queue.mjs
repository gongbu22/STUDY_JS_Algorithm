import { Queue } from "./Queue.mjs";

let queue = new Queue();

console.log("=== enqueue() 세번 호출 ===");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());

console.log("=== dequeue() 네번 호출 ===");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(`isEmpty: ${queue.isEmpty()}`);