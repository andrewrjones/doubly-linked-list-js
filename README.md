DoublyLinkedList
================

This is a Javascipt implementation of a [doubly linked list](http://en.wikipedia.org/wiki/Doubly_linked_list).

I needed a doubly linked list for a project I was doing, and thought I would post the code here in case it was useful for anyone else.

It has been tested in the browser. Should work for node.js too.

Synopsis
--------

```javascript
list = new DoublyLinkedList();

list.append(new DoublyLinkedListNode('data1'));
node = new DoublyLinkedListNode('data2');
list.append(node);
list.append(new DoublyLinkedListNode('data3'));

size = list.size; // 3
node.prev.data; // data1
node.next.data; // data3

node = list.item(1);
data = node.data; // data2
prev = node.prev; // data1
next = node.next; // data3

node = list.head();
data = node.data; // data1

node = list.tail();
data = node.data; // data3

list.prepend(new DoublyLinkedListNode('data4'));

size = list.size; // 4

node = list.head();
data = node.data; // data4
prev = node.prev; // null
next = node.next; // data1
```

DoublyLinkedListNode API
------------------------

### new DoublyLinkedListNode(data)

Creates a new node to add to the list.

### next

Pointer to the next item in the list.

### prev

Pointer to the previous item in the list.

DoublyLinkedList API
--------------------

### new DoublyLinkedList()

Creates a new DoublyLinkedList. Takes no arguments.

### append(node)

Appends a node to the end of the list.

### prepend(node)

Prepends a node to the end of the list.

### item(index)

Returns the node at the specified index. The index starts at 0.

This allows you to easily walk the list.

### head()

Returns the node at the head of the list.

### tail()

Returns the node at the tail of the list.

### size()

Returns the size of the list.

### remove(index)

Removes the item at the index.

*Note:* Not currently implemented. Patches (with tests) welcome.