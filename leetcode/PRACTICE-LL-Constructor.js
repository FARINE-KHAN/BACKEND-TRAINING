// // CREATE NODE CLASS HERE //
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList {
// 	// CREATE LL CONSTRUCTOR HERE //
// 	constructor(value){
//         const newNode= new Node(value)
//         this.head=newNode
//         this.tail=this.head
//         this.length=1
//     }

//     printList() {
//         let temp = this.head;
//         while (temp !== null) {
//             console.log(temp.value);
//             temp = temp.next;
//         }
//     }

//     getHead() {
//         if (this.head === null) {
//             console.log("Head: null");
//         } else {
//             console.log("Head: " + this.head.value);
//         }
//     }

//     getTail() {
//         if (this.tail === null) {
//             console.log("Tail: null");
//         } else {
//             console.log("Tail: " + this.tail.value);
//         }
//     }

//     getLength() {
//         console.log("Length: " + this.length);
//     }

// }


// function test() {
//     let myLinkedList = new LinkedList(4);
    
//     myLinkedList.getHead();
//     myLinkedList.getTail();
//     myLinkedList.getLength();
//     console.log("\nLinked List:");
//     myLinkedList.printList();
// }


// test();


// /*
//     EXPECTED OUTPUT:
//     ----------------
//     Head: 4
//     Tail: 4
//     Length: 1
    
//     Linked List:
//     4

// */

/////////////////////////////////////////////////////////////////////
//reversed linked list with recursion
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
let headNode=new Node(10)
headNode.next= new Node(20)
headNode.next.next= new Node(30)
headNode.next.next.next= new Node(40)
headNode.next.next.next.next= null 

function reverse(headNode){               //headnode=10
if(headNode== null|| headNode.next==null)
return headNode
let newHead = reverse(headNode.next)      //===funCall=20==30==40===(return 40)
headNode.next.next=headNode;              //  40==30
headNode.next=null;                       // 30==null
return newHead                             

}
