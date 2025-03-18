class MinHeap {
    constructor(compareFn) {
      this.heap = [];
      this.compare = compareFn;
    }
  
    insert(value) {
      this.heap.push(value);
      this._bubbleUp();
    }
  
    remove() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._bubbleDown();
      return root;
    }
  
    peek() {
      return this.heap[0] || null;
    }
  
    size() {
      return this.heap.length;
    }
  
    _bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      }
    }
  
    _bubbleDown() {
      let index = 0;
      const length = this.heap.length;
      while (true) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;
  
        if (left < length && this.compare(this.heap[left], this.heap[smallest]) < 0) smallest = left;
        if (right < length && this.compare(this.heap[right], this.heap[smallest]) < 0) smallest = right;
  
        if (smallest === index) break;
  
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        index = smallest;
      }
    }
  }
  
  module.exports = MinHeap;
  