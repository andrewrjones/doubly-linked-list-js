function DoublyLinkedList() {
  // pointer to first item
  this._head = null;
  // pointer to the last item
  this._tail = null;
  // length of list
  this._length = 0;
}

DoublyLinkedList.prototype._createNewNode = function(data){
  var node = { 
      data: data, 
      next: null,
      prev: null
  };
  return node;
};

DoublyLinkedList.prototype.append = function(data){
  var node = this._createNewNode(data);

  if (this._length === 0) {
    
    // first node, so all pointers to this
    this._head = node;
    this._tail = node;
  } else {
    
    // put on the tail
    this._tail.next = node;
    node.prev = this._tail;
    this._tail = node;
  }
  
  // update count
  this._length++;
};

DoublyLinkedList.prototype.prepend = function(data){
  var node = this._createNewNode(data);
  
  if (this.first === null) {
    
    // we are empty, so this is the first node
    // use the same logic as append
    this.append(node);
    return;
  } else {
    
    // place before head
    this._head.prev = node;
    node.next = this._head;
    this._head = node;
  }
  
  // update count
  this._length++;
};

DoublyLinkedList.prototype.remove = function(index){
  throw "Not implemented";
};

DoublyLinkedList.prototype.head = function(){
  return this._head;
};

DoublyLinkedList.prototype.tail = function(){
  return this._tail;
};

DoublyLinkedList.prototype.item = function(index){
  if (index >= 0 && index < this._length){
    var node = this._head;
    while (index--) { node = node.next; }
    return node;
  }
};

DoublyLinkedList.prototype.size = function(){
  return this._length;
};