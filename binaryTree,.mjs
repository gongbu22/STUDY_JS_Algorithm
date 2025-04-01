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
}

export { BinaryTree };