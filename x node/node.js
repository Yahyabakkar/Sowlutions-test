
// structure of a node
class Node{
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

// function to get a new Node
function getNode(data){
	let newNode = new Node(data);
	return newNode;
}

// function to delete all the nodes from the list that are greater than the specified value x
function deleteGreaterNodes(head_ref, x){
	let temp = head_ref;
	let prev;
	
	// If head node itself holds the value greater than 'x'
	if(temp != null && temp.data > x){
		head_ref = temp.next; // changed head
		temp = head_ref; // change temp
	}
	
	// Delete occurrences other than head
	while(temp != null){
		// Search for the node to be deleted
		while(temp != null && temp.data <= x){
			prev = temp;
			temp = temp.next;
		}
		
		// If required value node was not present in linked list
		if (temp == null)
			return head_ref;
	
		// Unlink the node from linked list
		prev.next = temp.next;
	
		// Update Temp for next iteration of outer loop
		temp = prev.next;
	}
	
	return head_ref;
}

// function to a print a linked list
function printList(head){
	while(head != null){
		console.log(head.data + " ");
		head = head.next;
	}
}


// Driver code to test above functions
// create list: 7->3->4->8->5->1
let head = getNode(7);
head.next = getNode(3);
head.next.next = getNode(4);
head.next.next.next = getNode(8);
head.next.next.next.next = getNode(5);
head.next.next.next.next.next = getNode(1);

let x = 6;

console.log("Original List:");
printList(head);

head = deleteGreaterNodes(head, x);

console.log("Modified List:");
printList(head);

