class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(item, key) {
    let currNode = this.head;
    let prevNode = this.head;

    if( this.head === null) {
      this.head = new _Node(item, this.head);
    }
    while(currNode.value !== key) {
        prevNode = currNode;
        currNode = currNode.next;
    }
    prevNode.next = new _Node(item, currNode);
  }

  insertAfter(item, key) {
    let currNode = this.head;
    // let nextNode = this.head;

    while(currNode.value !== key) {
        // prevNode = currNode;
        currNode = currNode.next;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, location) {
    let currNode = this.head;
    let count = 1;
    if(location === 0){
      this.head = new _Node(item, currNode);
      return;
    }
    while (count < location) {
      currNode = currNode.next;
      count ++;
    }
    currNode.next = new _Node(item, currNode.next);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
      }
  }

  remove(item) {
    if(!this.head){
      return null;
    }

    if(this.head.value === item) {
      this.head = this.head.next;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  find(item) {
    let currNode = this.head;
    if(!this.head){
      return null;
    }
    while(currNode.value !==item) {
      if(currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  printAll() {
    let currNode = this.head;
    console.log(this.head.value);
    if(!this.head){
      return null;
    }
    while(currNode.next !== null) {
        currNode = currNode.next;
        console.log(currNode.value);
    }
    currNode.next = currNode.next;
  }
}


class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0
    this._hashTable = []
    this._capacity = initialCapacity
    this._deleted = 0
  }

  static _hashString(string) {
    let hash = 5381
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i)
      hash = hash & hash
    }
    return hash >>> 0
  }
  get(key){
    const index = this._findSlot(key)
    if(this._hashTable[index] === undefined){
      throw new Error('Key error')
    }
    return this._hashTable[index].value
  }

  set(key, value) {
    const index = this._findSlot(key)
    let list = new LinkedList();
    
    if(!this._hashTable[index]){
      this.length++;
    }
    list.insertLast({
      key,
      value,
      DELETED: false
    })

  }

  delete(key){
    const index = this._findSlot(key)
    const slot = this._hashTable[index]
    if(slot === undefined){
      throw new Error('Key error')
    }
    slot.DELETED = true
    this.length--
    this._deleted++
  }

  _findSlot(key) { 
    const hash = HashMap._hashString(key) 
    const start = hash % this._capacity 

    return start;

    // for (let i = start; i < start + this._capacity; i++) {
    //   const index = i % this._capacity
    //   const slot = this._hashTable[index]
    //   if (slot === undefined || (slot.key === key && !slot.DELETED)) {
    //     return index
    //   }
    }
  }

  _resize(size){
    const oldSlots = this._hashTable
    this._capacity = size
    this.length = 0
    this._deleted = 0
    this._hashTable = []

    for(const slot of oldSlots){
      if(slot !== undefined && !slot.DELETED){
        this.set(slot.key, slot.value)
      }
    }
  }
}

HashMap.MAX_LOAD_RATIO = .5;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap;
