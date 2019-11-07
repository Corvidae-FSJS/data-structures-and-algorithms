class Hashtable {
  constructor(size = 10) {
    this.bucket = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.toString()
      .length % this.size;
  }
}

module.exports = Hashtable;