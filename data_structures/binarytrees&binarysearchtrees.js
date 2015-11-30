//search function
  Array.prototype.search = function(num) {

    var arr =[];
    var start = 0,
    end = this.length - 1, mid;
    var count = 0;

    var myObject = {
        count: 0,
        index: mid,
        length: this.length
      };

    myObject.length = this.length;
    myObject.count = count;


    while (start <= end) {

        mid = Math.floor((start + end) / 2);

        if (this[mid] === num) {

            myObject.count = count++;
            myObject.index = mid;

            return myObject;

        } else if (this[start] === num) {

            myObject.count = count;
            count++;
            myObject.index = start;

            return myObject;

        } else if (this[end] === num) {

            myObject.count = count;
            count++;
            myObject.index = end;
            return myObject;

        } else {
          if (this[mid] < num) {

            start = mid + 1;
            end--;

          } else {
            end = mid - 1;
            start++;
          }

        }
        count++;
    }

    myObject.index = -1;
    return myObject;
  };

//a binary search tree is made up of nodes, so the first object we need to create is a node object.

function Node (data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show =show;
}
// the show function is used to display data stored in a node.
function show() {
  return this.data;
}

//the first functionwe need for the BST is insert(), adds new nodes to the tree.
//the second step is to check the BST for a root node.if a root node doesnt exist then the BST is new and this node is the root node
//if the node being inserted is not the root node then we have to prepare to traverse the BST to find the proper insertion point
//STEPS
//1: set the root node to be the current node.
//2: if data value in the inserted node is less than the data value in the current node set the new current node to be the left child of the current node.
//3: if the value of the left child of the current node is null, inset the new node here and exit the loop.
//4: set the current node to be the right child of the current node
//5: if the value of the right child of the current node is null, inset the new node here and exit the loop.


//in continuation with line 12 above
 function BST() {
   this.root = null;
   this.insert = insert;
   this.inOrder = inOrder;
 }

 function insert (data) {
   var n = new Node(data, null, null);
   if (this.robot == null) {
     this.root = n;
   } else {
     var current = this.root;
     var parent;
     while (true) {
       parent = current;
       if (data < current.data) {
         current = current.left;
         if (current == null) {
           parent.left = n;
           break;
         }
       } else {
         current = current.right;
         if (current == null) {
           parent.right = n;
           break;
         }
       }
     }
   }
 }


//Traversing a binary search tree- they are three inorder, preorder, postorder
//inorder - visits all the nodes in ascending order of the node keyvalues.
//preorder - visits the root node first, followed by the nodes in the subtrees under the right child of the root node
//postorder - visits all the child nodes of the left subtrees up to the root node and then visits all of the child nodes of the right subtree up to the root node.

//inorder function
//inorder trav1ersal is best written using recursion.
//the function visits each node in ascending order, the function must visit both the left node and the right node of each subtree
function inOrder(node) {
  if ( !(node == null)) {
    inOrder(node.left);
    putstr(node.show() + " ");
    inOrder(node.right);
  }
}

//preorder function
function preOrder(node) {
  if (!(node == null)) {
    putstr(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

//postorder
function postOrder(node) {
  if(!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    putstr(node.show() + " ");
  }
}


//Searching for the minimum you only have to traverse the left edge of the BST until you get to the last node
function getMin() {
  var current = this.root;
  while(!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

//searching for the maximum you onlu have to traverse the left edge of the BST until you get to the last node
function getMax() {
  var current = this.root;
  while(!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

//searching for a specific value- this requires that a comparison be made between the data stored in the current node and the value being searched for.

function find(data) {
  var current = this.root;
  while (current.data != data) {
    if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    } if (current == null) {
      return null;
    }
  }
  return current;
}

//removing nodes
function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
    return null;
  }
  //node has no children
  if (data == node.data) {
    if ( node.left == null && node.right == null) {
      return null;
    }
    //node has no left child
    if (node.left == null) {
      return node.right;
    }
    //node has no right child
    if (node.right == null) {
      return node.left;
    }
    // node has two children
    var tempNode = getSmallest (node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode (node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}
