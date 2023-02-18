function hasProperty(propertyName, object) {
    return propertyName in object;
  }
  
  const obj = {
    name: "John",
    age: 30
  };
  
  console.log(hasProperty("name", obj));
  console.log(hasProperty("gender", obj));