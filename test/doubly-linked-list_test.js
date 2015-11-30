var DLL = require('../doubly-linked-list.js');

module.exports = {
  'DoublyLinkedList': function (test) {
    "use strict";

    test.expect(76);

    var list = new DLL.DoublyLinkedList(),
        node = null;

    test.ok(list);
    test.strictEqual(list.size(), 0);

    // append items to the list
    list.append('data1');
    test.strictEqual(list.size(), 1);
    node = list.append('data2');
    test.strictEqual(list.size(), 2);
    list.append('data3');
    test.strictEqual(list.size(), 3);
    // check pointers of middle node
    test.strictEqual(node.prev.data, 'data1');
    test.strictEqual(node.next.data, 'data3');

    // get tail item
    node = list.tail();
    test.ok(node);
    test.strictEqual(node.data, 'data3');
    test.strictEqual(node.prev.data, 'data2');
    test.strictEqual(node.next, null);

    // get at 2
    node = list.item(1);
    test.ok(node);
    test.strictEqual(node.data, 'data2');
    // check pointers
    test.strictEqual(node.prev.data, 'data1');
    test.strictEqual(node.next.data, 'data3');

    // prepend an item
    node = list.prepend('data4');
    test.strictEqual(node.prev, null);
    test.strictEqual(node.next.data, 'data1');
    test.strictEqual(list.size(), 4);

    // get new item
    node = list.head();
    test.ok(node);
    test.strictEqual(node.data, 'data4');
    test.strictEqual(node.prev, null);
    test.strictEqual(node.next.data, 'data1');

    // get at 2
    node = list.item(1);
    test.ok(node);
    test.strictEqual(node.data, 'data1');
    // check pointers
    test.strictEqual(node.prev.data, 'data4');
    test.strictEqual(node.next.data, 'data2');

    // Test prepend on an empty list
    var prependList = new DLL.DoublyLinkedList();
    prependList.prepend('cake');
    test.strictEqual(prependList.size(), 1);
    test.strictEqual(prependList.head().data, 'cake');

    // Test node removal
    var makeListOfSizeN = function(n) {
      list = new DLL.DoublyLinkedList();

      for (var i = 0; i < n; i++) {
        list.append("thing" + i);
      }

      return list;
    };

    var removalList = makeListOfSizeN(3);
    removalList.item(1).remove();
    test.strictEqual(removalList.size(), 2);
    test.strictEqual(removalList.head().data, 'thing0');
    test.strictEqual(removalList.head().prev, null);
    test.strictEqual(removalList.head().next.data, 'thing2');
    test.strictEqual(removalList.tail().data, 'thing2');
    test.strictEqual(removalList.tail().prev.data, 'thing0');
    test.strictEqual(removalList.tail().next, null);

    removalList = makeListOfSizeN(3);
    removalList.item(0).remove();
    test.strictEqual(removalList.size(), 2);
    test.strictEqual(removalList.head().data, 'thing1');
    test.strictEqual(removalList.head().prev, null);
    test.strictEqual(removalList.head().next.data, 'thing2');
    test.strictEqual(removalList.tail().data, 'thing2');
    test.strictEqual(removalList.tail().prev.data, 'thing1');
    test.strictEqual(removalList.tail().next, null);

    removalList = makeListOfSizeN(3);
    removalList.item(2).remove();
    test.strictEqual(removalList.size(), 2);
    test.strictEqual(removalList.head().data, 'thing0');
    test.strictEqual(removalList.head().prev, null);
    test.strictEqual(removalList.head().next.data, 'thing1');
    test.strictEqual(removalList.tail().data, 'thing1');
    test.strictEqual(removalList.tail().prev.data, 'thing0');
    test.strictEqual(removalList.tail().next, null);

    removalList = makeListOfSizeN(2);
    removalList.item(0).remove();
    test.strictEqual(removalList.size(), 1);
    test.strictEqual(removalList.head().data, 'thing1');
    test.strictEqual(removalList.tail().data, 'thing1');
    test.strictEqual(removalList.head().prev, null);
    test.strictEqual(removalList.head().next, null);

    removalList = makeListOfSizeN(2);
    removalList.item(1).remove();
    test.strictEqual(removalList.size(), 1);
    test.strictEqual(removalList.head().data, 'thing0');
    test.strictEqual(removalList.tail().data, 'thing0');
    test.strictEqual(removalList.head().prev, null);
    test.strictEqual(removalList.head().next, null);

    removalList = makeListOfSizeN(1);
    removalList.item(0).remove();
    test.strictEqual(removalList.size(), 0);
    test.strictEqual(removalList.head(), null);
    test.strictEqual(removalList.tail(), null);

    // Test prepending before a specific node
    prependList = makeListOfSizeN(2);
    prependList.tail().prepend('new');
    var newNode = prependList.item(1);
    test.strictEqual(prependList.size(), 3);
    test.strictEqual(newNode.data, 'new');
    test.strictEqual(newNode.prev.data, 'thing0');
    test.strictEqual(newNode.next.data, 'thing1');

    prependList = makeListOfSizeN(2);
    prependList.head().prepend('new');
    test.strictEqual(prependList.size(), 3);
    newNode = prependList.head();
    test.strictEqual(newNode.data, 'new');
    test.strictEqual(newNode.next.data, 'thing0');

    // Test appending after a specific node
    var appendList = makeListOfSizeN(2);
    appendList.head().append('new');
    newNode = appendList.item(1);
    test.strictEqual(appendList.size(), 3);
    test.strictEqual(newNode.data, 'new');
    test.strictEqual(newNode.prev.data, 'thing0');
    test.strictEqual(newNode.next.data, 'thing1');

    appendList = makeListOfSizeN(2);
    appendList.tail().append('new');
    test.strictEqual(appendList.size(), 3);
    newNode = appendList.tail();
    test.strictEqual(newNode.data, 'new');
    test.strictEqual(newNode.prev.data, 'thing1');

    test.done();
  }
};