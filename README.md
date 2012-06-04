DoublyLinkedList
================

This is a Javascipt implementation of a [doubly linked list](http://en.wikipedia.org/wiki/Doubly_linked_list).

I needed a doubly linked list for a project I was doing, and thought I would post the code here in case it was useful for anyone else.

It has been tested in the browser. Should work for node.js too.

Synopsis
--------

```javascript
list = new DoublyLinkedList();

list.append('data1');
node = list.append('data2');
list.append('data3');

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

list.prepend('data4');

size = list.size; // 4

node = list.head();
data = node.data; // data4
prev = node.prev; // null
next = node.next; // data1
```

API
---

### new DoublyLinkedList()

Creates a new DoublyLinkedList. Takes no arguments.

### append(data)

Appends a node to the end of the list. Returns the node.

See `item(index)` for notes on the structure of the node returned.

### prepend(data)

Prepends a node to the end of the list. Returns the node.

See `item(index)` for notes on the structure of the node returned.

### item(index)

Returns the node at the specified index. The index starts at 0.

*Note:* When the node is returned, it looks like this:

```javascript
{
    // pointers to the previous and next nodes
    prev: node,
    next: node,
    // your data
    data: data
}
```

This allows you to easily walk the list.

### head()

Returns the node at the head of the list. See `item(index)` for notes on the structure of the node returned.

### tail()

Returns the node at the tail of the list. See `item(index)` for notes on the structure of the node returned.

### size()

Returns the size of the list.

### remove(index)

Removes the item at the index.

*Note:* Not currently implemented. Patches (with tests) welcome.