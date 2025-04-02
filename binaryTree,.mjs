class BinaryTree{
    constructor(data, leftTree = null, rightTree = null){
        this.data = data;
        this.leftSubTree = leftTree;
        this.rightSubTree = rightTree;
    }

    getData(){
        return this.data;
    }

    setData(data){
        this.data = data;
    }

    getLeftSubTree(){
        return this.leftSubTree;
    }

    getRightSubTree(){
        return this.rightSubTree;
    }

    setLeftSubTree(tree){
        this.leftSubTree = tree;
    }

    setRightSubTree(tree){
        this.rightSubTree = tree;
    }

    //전위순회
    preOrderTraversal(tree){
        if(tree == null) return;
        console.log(tree.data);
        this.preOrderTraversal(tree.getLeftSubTree());
        this.preOrderTraversal(tree.getRightSubTree()); 
    }

    //중위순회
    inOrderTraversal(tree){
        if(tree == null) return;

        this.inOrderTraversal(tree.getLeftSubTree());
        console.log(tree.data);
        this.inOrderTraversal(tree.getRightSubTree());
    }

    //후위순회
    postOrderTraversal(tree){
        if(tree == null) return;
        
        this.postOrderTraversal(tree.getLeftSubTree());
        this.postOrderTraversal(tree.getRightSubTree());
        console.log(tree.data);
    }

    // 왼쪽 자식 노드 제거
    removeLeftSubTree() {
        let deletingNode = this.getLeftSubTree();
        this.setLeftSubTree(null);
        return deletingNode;
    }

    // 오늘쪽 자식 노드 제거
    removeRightSubTree(){
        let deletingNode = this.getRightSubTree();
        this.setRightSubTree(null);
        return deletingNode;
    }
}

export { BinaryTree };