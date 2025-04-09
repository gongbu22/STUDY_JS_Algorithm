import { BinaryTree } from "./binaryTree,.mjs";

class AvlTree{
    constructor(rootNode = null){
        this.root = rootNode;
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

    getHeight(node) {
        if (node == null){
            return 0;
        }else{
            return node.height;
        }
    }

    updateHeight(node){
        let leftChildHeight = this.getHeight(node.getLeftSubTree());
        let rightChildHegith = this.getHeight(node.getRightSubTree());
        node.height = Math.max(leftChildHeight, rightChildHegith) + 1;
    }

    getBalanceFactor(node){
        return this.getHeight(node.getLeftSubTree()) - this.getHeight(node.getRightSubTree());
    }

    rotateLeft(node){
        let childNode = node.getRightSubTree();
        node.setRightSubTree(childNode.getLeftSubTree());
        childNode.setLeftSubTree(node);

        this.updateHeight(node);
        this.updateHeight(childNode);

        return childNode;
    }

    rotateRight(node){
        let childNode = node.getLeftSubTree();
        node.setLeftSubTree(childNode.getRightSubTree());
        childNode.setRightSubTree(node);

        this.updateHeight(node);
        this.updateHeight(childNode);

        return childNode;
    }

    rotation(targetNode, data){
        let balanceFactor = this.getBalanceFactor(targetNode);
        let isRootNode = false;
        if(targetNode == this.root){
            isRootNode = true;
        }

        // LL 회전인 경우
        if(balanceFactor < -1 && data > targetNode.getRightSubTree().getData()){
            targetNode = this.rotateLeft(targetNode);

        }else if(balanceFactor > 1 && data < targetNode.getLeftSubTree().getData()){
            // RR 회전인 경우
            targetNode = this.rotateRight(targetNode);
        }else if(balanceFactor > 1 && data > targetNode.getLeftSubTree().getData()){
            // LR 회전인 경우
            targetNode.setLeftSubTree(this.rotateLeft(targetNode.getLeftSubTree()));
            targetNode = this.rotateRight(targetNode);
        }else if(balanceFactor < -1 && data < targetNode.getRightSubTree().getData()){
            // RL 회전인 경우
            targetNode.setRightSubTree(this.rotateRight(targetNode.getRightSubTree()));
            targetNode = this.rotateLeft(targetNode);
        }

        if(isRootNode){
            this.root = targetNode;
        }

        return targetNode;
    }

    // 균형을 무너뜨리는 노드를 찾기 - 제거할 때만 사용
    getUnBalanceNode(targetRootNode, unBalanceNode = null){
        if(targetRootNode.getLeftSubTree() == null && targetRootNode.getRightSubTree() == null){
            unBalanceNode = targetRootNode;
            return unBalanceNode;
        }

        let balanceFactor = this.getBalanceFactor(targetRootNode);
        if(balanceFactor > 0){
            unBalanceNode = this.getUnBalanceNode(targetRootNode.getLeftSubTree(), unBalanceNode);
        } else if (balanceFactor < 0){
            unBalanceNode = this.getUnBalanceNode(targetRootNode.getRightSubTree(), unBalanceNode);
        }else{
            unBalanceNode = targetRootNode.getRightSubTree();
        }

        return unBalanceNode;
    }
    
}
