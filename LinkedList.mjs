class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.count = 0;
    }

    // 모든 노드 출력
    printAll() {
        let currentNode = this.head;
        let text = "[";

        while(currentNode != null){
            text += currentNode.data;
            currentNode = currentNode.next;

            if(currentNode != null){
                text += ", ";
            }
        }

        text += "]";
        console.log(text);

    }

    // 데이터삽입
    insertAt(index, data){
        if(index > this.count || index < 0){
            throw new Error("범위를 넘어갔습니다.");
        }

        // 새로 삽입할 노드
        let newNode = new Node(data);

        // head인 경우와 아닌경우
        if(index == 0){
            // 가장 앞부분 삽입(head)인 경우
            newNode.next = this.head;
            this.head = newNode;
        }else {
            let currentNode = this.head;

            for(let i=0; i<index-1; i++){
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }
}

export { Node, LinkedList };