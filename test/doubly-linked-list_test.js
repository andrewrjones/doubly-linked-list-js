/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
/*global DoublyLinkedList:false, jQuery:false*/
(function($) {

  module('DoublyLinkedList#unit', {
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });
  
  test("DoublyLinkedList", 27, function() {
    var list = new DoublyLinkedList(),
        node = null;

    ok(list);
    strictEqual(list.size(), 0);
    
    // append items to the list
    list.append('data1');
    strictEqual(list.size(), 1);
    node = list.append('data2');
    strictEqual(list.size(), 2);
    list.append('data3');
    strictEqual(list.size(), 3);
    // check pointers of middle node
    strictEqual(node.prev.data, 'data1');
    strictEqual(node.next.data, 'data3');
    
    // get tail item
    node = list.tail();
    ok(node);
    strictEqual(node.data, 'data3');
    strictEqual(node.prev.data, 'data2');
    strictEqual(node.next, null);
    
    // get at 2
    node = list.item(1);
    ok(node);
    strictEqual(node.data, 'data2');
    // check pointers
    strictEqual(node.prev.data, 'data1');
    strictEqual(node.next.data, 'data3');
    
    // prepend an item
    node = list.prepend('data4');
    strictEqual(node.prev, null);
    strictEqual(node.next.data, 'data1');
    strictEqual(list.size(), 4);
    
    // get new item
    node = list.head();
    ok(node);
    strictEqual(node.data, 'data4');
    strictEqual(node.prev, null);
    strictEqual(node.next.data, 'data1');
    
    // get at 2
    node = list.item(1);
    ok(node);
    strictEqual(node.data, 'data1');
    // check pointers
    strictEqual(node.prev.data, 'data4');
    strictEqual(node.next.data, 'data2');
    
    // not yet implemented
    raises(function(){
      list.remove(1);
    });
  });

}(jQuery));