An object is a data type that is composed of a collection of names or keys and values, represented in name:value pairs. The name:value pairs can consist of properties that may contain any data type — including strings, numbers, and Booleans — as well as methods, which are functions contained within an object.

#### Here is an example of Object:

###### Code

```JavaScript

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
        return this.firstName + "" + this.lastName;
    }
};

```

In this example, `firstName`, `lastName`, `age`, and `eyeColor` are properties of the person object, and `fullName` is a method. The `this` keyword refers to the object it belongs to. So, `this.firstName` and `this.lastName` refer to the **firstName** and **lastName** properties of the person object.

You can access object properties in two ways: `objectName.propertyName` or `objectName["propertyName"]`. For example, you can access the lastName property of the person object like this: `person.lastName` or `person["lastName"]`.