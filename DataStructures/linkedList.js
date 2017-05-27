
/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
    let value = head
    let tail = null
    while (true) {
        if(value === null){
            return new Node(data)
        }
        
        if (value.next === null ) {
            tail = value
            break
        }
        
        value = value.next
    }
    
    tail.next = new Node(data)
    
    return head
}

