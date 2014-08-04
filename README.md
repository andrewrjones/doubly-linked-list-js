DoublyLinkedList
================

This is a Javascipt implementation of a [doubly linked list](http://en.wikipedia.org/wiki/Doubly_linked_list).

I needed a doubly linked list for a project I was doing, and thought I would post the code here in case it was useful for anyone else.

Works in both the browser and node.js.

Synopsis
--------

node.js.

```javascript
var DLL = require('doubly-linked-list.js');
var list = new DLL.DoublyLinkedList();

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

node.append('frog');
appended = node.next; // frog
next = appended.next; // data1

next.remove();
afterRemoved = appended.next; // data2

afterRemoved.prepend('bird');
prepended = appended.next; // bird
```

Browser.

```html
<script src="doubly-linked-list.js"></script>
<script>
    var list = new DLL.DoublyLinkedList();
    // as above
</script>
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

*Note:* Nodes returned support various operations. See the section about node objects for a list of supported properties and methods.

### head()

Returns the node at the head of the list. See `item(index)` for notes on the structure of the node returned.

### tail()

Returns the node at the tail of the list. See `item(index)` for notes on the structure of the node returned.

### size()

Returns the size of the list.

### Node Objects

When a list/node operation returns a node, it is in fact an object with the following properties and methods:

#### prev

The node before the current one, or null if this node is the list head.

#### next

The node after the current one, or null if this node is the list tail.

#### data

The data stored in the node when it was created.

#### remove()

Removes the node from the list.

#### append(data)

Creates a new node with a data value of `data` and adds it to the list after the current node. Returns the new node.

#### prepend(data)

Creates a new node with a data value of `data` and adds it to the list before the current node. Returns the new node.

Build status
------------

[![Build Status](https://secure.travis-ci.org/andrewrjones/doubly-linked-list-js.png)](http://travis-ci.org/andrewrjones/doubly-linked-list-js)

More
----

https://github.com/playcraft/gamecore.js/blob/master/src/linkedlist.js
