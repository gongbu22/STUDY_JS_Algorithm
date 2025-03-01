class Node{
    constructor(data, next = null, prev = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
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

    // 리스트의 모든 원소 제거
    clear(){
        this.head = null;
        this.count = 0;
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
            if(this.head != null){
                this.head.prev = newNode;
            }
            this.head = newNode;
        }else if(index == this.count){
            newNode.next = null;
            newNode.prev = this.tail;
            this.tail.next = newNode;
        }else {
            let currentNode = this.head;

            for(let i=0; i<index-1; i++){
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            newNode.prev = currentNode;
            currentNode.next = newNode;
            newNode.next.prev = newNode;
        }

        if(newNode.next == null){
            this.tail = newNode;
        }

        this.count++;
    }

    // 마지막 원소 추가
    insertLast(data) {
        this.insertAt(this.count, data);
    }

    // 삭제
    deleteAt(index){
        if(index >= this.count || index < 0){
            throw new Error("제거할 수 없습니다.");
        }

        let currentNode = this.head;
        // head노드 제거/ 나머지 제거
        if (index == 0){
            let deletedNode = this.head;
            // 데이터가 한개일때
            if(this.head.next == null){
                this.head = null;
                this.tail = null;
            }else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.count--;
            return deletedNode;
        }else if(index == this.count - 1){
            let deletedNode = this.tail;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.count--;
            return deletedNode;
        }else{
            for(let i=0; i< index-1; i++){
                currentNode = currentNode.next;
            }

            let deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            currentNode.next.prev = currentNode;
            this.count--;
            return deletedNode;
        }

    }

    deleteLast(){
        return this.deleteAt(this.count -1);
    }

    // 해당 인덱스의 노드 읽기
    getNodeAt(index){
        if(index >= this.count || index < 0){
            throw new Error("범위를 넘어갔습니다.");
        }

        let currentNode = this.head;
        for(let i=0; i < index; i++){
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

export { Node, DoublyLinkedList };