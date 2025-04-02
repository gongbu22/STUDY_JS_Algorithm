import { BinaryTree } from "./binaryTree,.mjs";

class BinarySearchTree{
    constructor(rootNode = null){
        this.root = rootNode;
    }

    insert(data){

        // 처음 삽입하는 경우
        if(this.root == null){
            this.root = new BinaryTree(data);
            return;
        }

        // root 노드는 이미 있을 경우
        let currentNode = this.root;
        let parentNode = null; // root 노드는 부모가 없으므로 null로 초기화

        while(currentNode != null){
            parentNode = currentNode;

            if(currentNode.getData() > data){
                currentNode = currentNode.getLeftSubTree();
            } else if (currentNode.getData() < data) {
                currentNode = currentNode.getRightSubTree();
            } else {
                return; //이진 탐색 트리는 중복을 허용하지 않아서 값이 같다면 그냥 종료
            }
        }

        let newNode = new BinaryTree(data);

        if (parentNode.getData() > data){
            parentNode.setLeftSubTree(newNode);
        } else {
            parentNode.setRightSubTree(newNode);
        }
    }

    search(targetData){
        let currentNode = this.root;

        while(currentNode != null){
            if(currentNode.getData() == targetData){
                return currentNode;
            } else if(currentNode.getData() > targetData){
                currentNode = currentNode.getLeftSubTree();
            } else {
                currentNode = currentNode.getRightSubTree();
            }
        }

        return null;
    }

}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(18);
binarySearchTree.insert(15);
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(12);
binarySearchTree.insert(11);
binarySearchTree.insert(31);
binarySearchTree.insert(27);
binarySearchTree.insert(24);
binarySearchTree.insert(20);
binarySearchTree.insert(33);
binarySearchTree.insert(35);
binarySearchTree.insert(37);
binarySearchTree.root.inOrderTraversal(binarySearchTree.root);

console.log('====== Search 6 ======');
console.log(binarySearchTree.search(6));

console.log('====== Search 1 ======');
console.log(binarySearchTree.search(1));
