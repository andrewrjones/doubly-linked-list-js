var DLL = require('../doubly-linked-list.js');

module.exports = {
  'DoublyLinkedList': function (test) {
    "use strict";

    test.expect(27);

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

    // not yet implemented
    test.throws(function () {
      list.remove(1);
    });

    test.done();
  }
};