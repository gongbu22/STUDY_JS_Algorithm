// 3개 원반, A(from)에서 C(to)까지 B(temp)도 사용

function hanoi(count, from, to, temp){
    if(count == 0) return;
    hanoi(count - 1, from, temp, to);
    console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`)
    hanoi(count - 1, temp, to, from);
}

hanoi(3, 'A', 'C', 'B');
