import { HashTable } from "./HashTable.mjs";

let hastTable = new HashTable();

hastTable.set(1, "이운재");
hastTable.set(4, "최진철");
hastTable.set(20, "홍명보");
hastTable.set(6, "유상철");
hastTable.set(22, "송중국");
hastTable.set(21, "박지성");
hastTable.set(5, "김남일");
hastTable.set(14, "이천수");

console.log(`1: ${hastTable.get(1)}`);
hastTable.remove(1);
console.log(`1: ${hastTable.get(1)}`);
console.log(`21: ${hastTable.get(21)}`);