const MinHeap = require("./minheap");

class PriorityQueue {
  constructor() {
    this.heap = new MinHeap((a, b) => a.priority.localeCompare(b.priority));
  }

  add(task) {
    this.heap.insert(task);
  }

  getNextTask() {
    return this.heap.remove();
  }

  peek() {
    return this.heap.peek();
  }

  isEmpty() {
    return this.heap.size() === 0;
  }
}

module.exports = PriorityQueue;
