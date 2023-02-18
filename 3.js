function createEmptyObject() {
    return Object.create(null);
  }
  
  const obj = createEmptyObject();
  console.log(Object.getPrototypeOf(obj))