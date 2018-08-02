class Resource {
  constructor() {
    this.data = null;
  }

  isExist() {
    return this.data != null;
  }

  _loadResource(name) {
    return require(`../_res/${name}`);
  }

  loadDouble() {
    this.data = this._loadResource("double.json")
  }

  loadInteger() {
    this.data = this._loadResource("integer.json")
  }

  loadStringArray() {
    this.data = this._loadResource("string-array.json")
  }

  loadIntegerArray() {
    this.data = this._loadResource("integer-array.json")
  }
}

exports = module.exports = new Resource();