describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = new DoublyLinkedList();
  });

  it('should have a sentinel node', function() {
    expect(doublyLinkedList).to.have.property('sentinel');
  });

  it('should have methods named "addToHead", "addToTail", "removeHead", "removeTail", and "contains"', function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    debugger;
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.getTail()).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.getTail()).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.getHead()).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.getHead()).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should be null after removing last element from doublyLinkedList', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.removeHead(4);
    expect(doublyLinkedList.getHead()).to.equal(null);
    expect(doublyLinkedList.getTail()).to.equal(null);
  });

  // add more tests here to test the functionality of doublyLinkedList
});
