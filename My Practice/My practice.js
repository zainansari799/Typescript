/*var myString = "zain";
var myNumber = 7;
myNumber = myString;
console.log(typeof myNumber);
*/
//OBJECTS
/*var complexType = { name:"zain" , id: 7};
complexType = { id:7};  //does not have the property name
complexType = { name: "zain" } //does not have the property id
complexType = { address: "address" }; //does not have the both properties name and id
console.log(complexType);
*/
/*var complexType = {name: "zain", id:7}
complexType = {name: "zain", id:7, address:"address"} //there is no error
*/
//ARRAY
/*var arrayOfNumbers: number[] = [1,2,3];
arrayOfNumbers = [4,5,"zain"];
arrayOfNumbers = ["zain", "hadi", "parkash"];
*/
//ANY TYPE
/*var item1 : any = {name:"zain", id:7};
item1 = {id:2};
*/
//EXPLICIT CASTING
/*var item1 = <any> {name:"zain",id:2};
item1 = {id: 7}; //there is no error because use of <any>
*/
//ENUMS
/*enum DoorState{
    open,
    closed,
    ajar
}
window.onload = ()=>{
    var myDoor = DoorState.open;
    console.log("My door state is" + myDoor.toString()); //give the state
}
*/
/*window.onload = ()=>{
    var myDoor = DoorState["closed"];
    console.log("My door state is" + myDoor.toString()); //give the state
}
*/
/*window.onload = ()=>{
    var myDoor = DoorState[2];
    console.log("My door state is" + myDoor.toString()); //give the property through index no.
}
*/
//FUNCTIOS
/*function addNumbers(a:number, b:number):number{
    return a + b;
};
var result1 = addNumbers(1,2);
console.log(result1);

var result2 = addNumbers("1","2");
console.log(result2);

*/
//OPTIONAL PARAMETERS
/*
var concateStrings = function(a,b,c) {
    
    return a + b +c;
}
console.log(concateStrings("a","b","c"));
console.log(concateStrings("a","b"));
*/
/*var concateStrings = function(a:string, b:string, c?:string) {
    
    return a + b + c;
}

console.log(concateStrings("a","b","c"));
console.log(concateStrings("a","b"));
console.log(concateStrings("a"));
*/
//DEFAULT PARAMETERS
/*var concateStrings = function(a:string,b:string,c:string="c") {
    return a + b + c;
}
console.log(concateStrings("a","b","c"));
console.log(concateStrings("a","b"));
*/
//ARGUMENTS VARIABLE
/*function testParams(){
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length;i++) {
            console.log("Argument" + i + "=" + arguments[i]);
            
        }
    }
}
testParams(1,2,3,4);
testParams("first argument");
*/
/*function testParams(...argArray:number[]){
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length;i++) {
            console.log("argArray" +i+"="+argArray[i]);
            console.log("Arguments" + i + "=" + arguments[i]);
            
        }
    }
}
testParams(1);
testParams(1,2,3,4);
testParams("one","two");
*/
//let a[] = [1,"zain", true]
/*let a:any[] = [1,"zain",true,{}]

console.log(typeof a[0]);
console.log(typeof a[1]);
console.log(typeof a[2]);
console.log(typeof a[3]);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OBJECT ORIENTED PROGRAMMING
//VARIABLE SCOPE
// Following is an outer or parent function declaration.
/*function displayList() {
 

    var list: string[];
 
    function displayName() {
        list = ["Type script", "Php", "Java script", "Asp.net"];
        for (var index = 0; index < list.length; index++)
            document.write(list[index] + "<br/>");
     var siteName: string = "Tutorials Town";
     
         document.write("Website name: " + siteName);
    }
    displayName();
}
displayList();
*/
//OVERLOADED FUNCTIONS
//Functions overloaded are declared with same name but are different in return type and parameter list.
/*function displayData(digit: number): number;
function displayData(techName: string): string;
function displayData(isChecked: boolean): boolean;


function displayData(arg1: any): any {
 
    return arg1;
}
 
 //overloaded functions are called through its parameter types.
document.write("digit: " + displayData(23) + " <br/> ");
document.write("Technology name: " + displayData(".NET") + " <br/> ");
document.write("isCheck: " + displayData(true));
*/
//INTERFACE
//No any access modifier can be explicitly specified with an interface member.
//Along with functions an interface has also properties/variables.
//In TypeScript an interfaces cannot have constructors.
//Static members cannot be declared in an interfaces.
//A class which implements an interface must has same function name, return type and minimum matching parameters with the functions declared in an interface.
//An interface declaration which has different types of functions and properties declaration.
/*interface IMarksheet {
    studentName: string;
    tsMarks: number;
    aspMarks: number;
    htmlMarks: number;
 
    getName(): string;
    totalMarks(): number;
    obtMarks(): number;
    percentage(total: number, obtain: number): number
}

//a class declaration which implements an IMarksheet interface. This class is responsible to must implements all the functions and properties of that interface.
class MarkSheet implements IMarksheet {
 
    // properties declaration of different types.
    studentName: string;
    tsMarks: number;
    aspMarks: number;
    htmlMarks: number;
 
    // parameterized constructor which creates a marksheet object.
    constructor(studentName: string, tsMarks: number, aspMarks: number, htmlMarks: number) {
        this.studentName = studentName;
        this.tsMarks = tsMarks;
        this.aspMarks = aspMarks;
        this.htmlMarks = htmlMarks;
    }
 
    //function declaration which returns student name. It has string as its return type, empty parameter-list and public access by default.
   getName(): string {
        return (this.studentName);
    }
 
 
    //function declaration which returns total marks. It has number as its return type, empty parameter-list and public access by default.
   totalMarks(): number {
        return 300;
    }
 
    //function declaration which returns obtain marks. It has number as its return type, empty parameter-list and public access by default.
   obtMarks(): number {
        return (this.tsMarks + this.aspMarks + this.htmlMarks);
    }
 
    //function declaration which returns percentage. It has number as its return type, 2 number type parameters and public access by default.
    percentage(total: number, obtain: number): number {
        return obtain / total * 100.0;
    }
}

//object creation of mark sheet 1, provide different kinds of information as arguments to its constructor.
var markSheet1: MarkSheet = new MarkSheet("ABC", 85, 70, 80);
 
//Following statements call the different functions of above class through its class reference (reference variable) and also print them.
document.write("Marksheet 1: <br/>");
document.write("Student name: " + markSheet1.getName() + "<br/>");
document.write("TypeScript marks: " + markSheet1.tsMarks + "<br/>");
document.write("Asp marks: " + markSheet1.aspMarks + "<br/>");
document.write("Html marks: " + markSheet1.htmlMarks + "<br/>");
document.write("Total marks: " + markSheet1.totalMarks() + "<br/>");
document.write("Obtain marks: " + markSheet1.obtMarks() + "<br/>");
document.write("Percentage: " + markSheet1.percentage(markSheet1.totalMarks(), markSheet1.obtMarks()) +"<br/><br/><br/>");
*/
///a 2nd class declaration which also implements an IMarksheet interface. This class is responsible to must implements all the functions and properties of that interface. 
/*class BcsMarkSheet implements IMarksheet {
 //properties declaration of different types. This class has a property oracleMarks which is its own property.
    studentName: string;
    tsMarks: number;
    aspMarks: number;
    htmlMarks: number;
    oracleMarks: number;
 
 //parameterized constructor which creates a marksheet object.
    constructor(studentName: string, tsMarks: number, aspMarks: number, htmlMarks: number, oracleMarks:number) {
        this.studentName = studentName;
        this.tsMarks = tsMarks;
        this.aspMarks = aspMarks;
        this.htmlMarks = htmlMarks;
        this.oracleMarks = oracleMarks;
    }
 
 //function declaration which returns student name. It has string as its return type, empty parameter-list and public access by default.
   getName(): string {
     return (this.studentName);
   }
 
    //function declaration which returns total marks. It has number as its return type, empty parameter-list and public access by default.
    totalMarks(): number {
     return 400;
    }
 
    //function declaration which returns obtain marks. It has number as its return type, empty parameter-list and public access by default.
    obtMarks(): number {
      return (this.tsMarks + this.aspMarks + this.htmlMarks + this.oracleMarks);
    }
 
    //function declaration which returns percentage. It has number as its return type, 2 number type parameters and public access by default.
    percentage(total: number, obtain: number): number {
     return obtain / total * 100.0;
     }
}
 
//object creation of mark sheet 1, provide different kinds of information as arguments to its constructor.
var bcsMarkSheet: BcsMarkSheet = new BcsMarkSheet("ABC", 85, 70, 80, 65);
 
//Following statements call the different functions of above class through its class reference (reference variable) and also print them.
document.write("Bcs Mark sheet: <br/>");
document.write("Student name: " + bcsMarkSheet.getName() + "<br/>");
document.write("TypeScript marks: " + bcsMarkSheet.tsMarks + "<br/>");
document.write("Asp marks: " + bcsMarkSheet.aspMarks + "<br/>");
document.write("Html marks: " + bcsMarkSheet.htmlMarks + "<br/>");
document.write("Oracle marks: " + bcsMarkSheet.oracleMarks + "<br/>");
document.write("Total marks: " + bcsMarkSheet.totalMarks() + "<br/>");
document.write("Obtain marks: " + bcsMarkSheet.obtMarks() + "<br/>");
document.write("Percentage: " + bcsMarkSheet.percentage(bcsMarkSheet.totalMarks(), bcsMarkSheet.obtMarks()));
*/
//INHERITANCE
//It is the one of the basic principal of object oriented programming.
//Inheritance describes the hierarchically classifications between the objects.
/*When a base class is being inherited into its derived class all members (functions and properties) of base class automatically exist into its derived class except those members which has their “private” access because private members do not inherit, now all base class public members can also be accessed by derived class object, derived class is free and can also be defined its own members (functions and properties) and can also override/modified any member of a base class in it. The base class does not have knowledge about any it’s derived class and it cannot access its derived class members but base class is free and can access its own members.
*/
// a class declaration. This is a base class.
/*class MarkSheet {
 
    // properties declaration of different types.
    studentName: string;
    tsMarks: number;
    aspMarks: number;
 
    //function declaration which returns student name. It has string as its return type, empty parameter-list and public access by default.
   getName(): string {
       return (this.studentName);
    }
 
    //function declaration which returns total marks. It has number as its return type, empty parameter-list and public access by default. This function is re-implemented by a derived class.
    totalMarks(): number {
      return 300;
    }
 
    //function declaration which returns obtain marks. It has number as its return type, empty parameter-list and public access by default. This function is re-implemented by a derived class.
    obtMarks(): number {
        return (this.tsMarks + this.aspMarks);
    }
 
    //function declaration which returns percentage. It has number as its return type, 2 number type parameters and public access by default.
    percentage(total: number, obtain: number): number {
       return obtain / total * 100.0;
 
    }
}
*/
/* Following is another class BcsMarksheet declaration, notice its syntax here it is inheriting a MarkSheet class means BcsMarksheet class is a derived or child class of MarkSheet and MarkSheet class is a base or parent class of BcsMarkSheet, so all the public members of base MarkSheet class is now exists in derived BcsMarksheet class and can be access through BcsMarksheet object reference. */
/*class BcsMarksheet extends MarkSheet {
 
//2 properties are declared in this derived class.
  htmlMarks: number;
  javaMarks: number;
 
//following functions is re-implemented in this class. This process is called function overriding.
    obtMarks(): number {
      return (this.tsMarks + this.aspMarks + this.htmlMarks + this.javaMarks);
    }
 
//following functions is re-implemented in this class. This process is called function overriding.
    totalMarks(): number {
        return 400;
    }
}
 
//object creation of Bcs mark sheet with default constructor.
var bcsMarksheet: BcsMarksheet = new BcsMarksheet();
 
//Following statements call the different functions of above class through its derived class reference (reference variable) and also print them.
document.write("Bcs Mark sheet: <br/>");
 
bcsMarksheet.studentName = "Abc";
bcsMarksheet.tsMarks = 85;
bcsMarksheet.aspMarks = 70;
bcsMarksheet.htmlMarks = 65;
bcsMarksheet.javaMarks = 55;
 
document.write("Student name: " + bcsMarksheet.getName() + "<br/>");
document.write("TypeScript marks: " + bcsMarksheet.tsMarks + "<br/>");
document.write("Asp marks: " + bcsMarksheet.aspMarks + "<br/>");
document.write("Html marks: " + bcsMarksheet.htmlMarks + "<br/>");
document.write("Java marks: " + bcsMarksheet.javaMarks + "<br/>");
document.write("Total marks: " + bcsMarksheet.totalMarks() + "<br/>");
document.write("Obtain marks: " + bcsMarksheet.obtMarks() + "<br/>");
document.write("Percentage: " + bcsMarksheet.percentage(bcsMarksheet.totalMarks(), bcsMarksheet.obtMarks()));
*/
//CONSTRUCTORS
//It is a special type of function which has no return type even void.
//It can be declared with a “constructor” keyword,
//A constructor is called automatically when we create an object of a class OR It is automatically called after new operator at the time of an object creation.
//In TypeScript, multiple constructors are not allowed in a class.
//Like functions one or more parameters (local variables) can be passed in a constructor which is called parametrized constructor. 
//If no parameter is passed in constructor that is called: a construct with an empty parameter-list.
//All classes have a constructors by default, if we do not define our custom/own constructor the TypeScript compiler supplies a default constructor which sets the all properties to its default values such as “undefined”.
//Example – 1, a mark sheet program describes an example of a constructor with empty parameter-list:
/*class MarkSheet {

    studentName: string;
    address: string;
    tsMarks: number;
    aspMarks: number;
 
    constructor() {
        this.studentName = "Abc";
        this.address = "Xyz";
        this.tsMarks = 90;
        this.aspMarks = 80;
    }
}
//Class constructor is automatically called when Marksheet object or instance is created.
//NOTICE: class constructor is called after new keyword as MarkSheet() and it has no any argument.
var markSheet: MarkSheet = new MarkSheet();

document.write("Mark sheet object: <br/>");
document.write("Student name: " + markSheet.studentName + "<br/>");
document.write("Address: " + markSheet.address + "<br/>");
document.write("TypeScript marks: " + markSheet.tsMarks + "<br/>");
document.write("Asp.net marks: " + markSheet.aspMarks)
*/
//Example – 2, a mark sheet program describes an example of parametrized constructor:
/*class MarkSheet {
 
//Notice, in this example we do not initialize class fields in this class, we just declared these fields.
    studentName: string;
    address: string;
    tsMarks: number;
    aspMarks: number;
 
//Following is a declaration of a parametrized constructor with four parameters, it initializes four properties or initialize a Mark sheet object with values.
    constructor(studentName: string, address: string, tsMarks: number, aspMarks: number) {
        this.studentName = studentName;
        this.address = address;
        this.tsMarks = tsMarks;
        this.aspMarks = aspMarks;
    }
 
}
 
//NOTICE: class constructor is called after new keyword as MarkSheet() and also four arguments are being passed to the constructor.

var markSheet: MarkSheet = new MarkSheet("Abc", "Xyz", 95, 80);
 
document.write("Mark sheet object: <br/>");
document.write("Student name: " + markSheet.studentName + "<br/>");
document.write("Address: " + markSheet.address + "<br/>");
document.write("TypeScript marks: " + markSheet.tsMarks + "<br/>");
document.write("Asp.net marks: " + markSheet.aspMarks);
*/
//Constructor with super keyword
//A constructor can be defined in both base and its derived classes.
//If a constructor is defined only in derived class, TypeScript compiler will generate a compile-time error until we use a “super ()” keyword in it.
//In most cases a base class defines a constructor or both base and derived classes can define its own constructors.
//In TypeScript, if both derived and base classes define their own constructors then a base class constructor is must be called through a “super ()” keyword reference inside a derived class constructor. 
//That process is called constructor overloading or a derived class constructor overloads the constructor of a base class. 
//If “super ()” is not specified in a derived class constructor a compile-time error will be generated.
// a class declaration. This is a base class.
/*class MarkSheet {
 
    // properties declaration of different types.
    studentName: string;
    tsMarks: number;
    aspMarks: number;
 
 //Parametrized constructor declaration. It constructs the base class mark sheet object. 3 parameters are passed in this constructor.
    constructor(studentName: string, tsMarks: number, aspMarks: number) {
        this.studentName = studentName;
        this.tsMarks = tsMarks;
        this.aspMarks = aspMarks;
    }
 
    //function declaration which returns student name. It has string as its return type, empty parameter-list and public access by default.
    getName(): string {
        return (this.studentName);
    }
 
    //function declaration which returns total marks. It has number as its return type, empty parameter-list and public access by default. This function is re-implemented by a derived class.
    totalMarks(): number {
        return 200;
    }
 
    //function declaration which returns obtain marks. It has number as its return type, empty parameter-list and public access by default. This function is re-implemented by a derived class.
    obtMarks(): number {
        return (this.tsMarks + this.aspMarks);
    }
 
    //function declaration which returns percentage. It has number as its return type, 2 number type parameters and public access by default.
    percentage(total: number, obtain: number): number {
        return obtain / total * 100.0;
 
    }
}
 */
//Following is another class BcsMarksheet declaration, notice its syntax here it is inheriting a MarkSheet class means BcsMarksheet class is a derived or child class of MarkSheet and MarkSheet class is a base or parent class of BcsMarkSheet, so all the public members of base MarkSheet class is now exists in derived BcsMarksheet class and can be access through BcsMarksheet object reference. 
/*class BcsMarksheet extends MarkSheet {
 
    // 2 properties are declared in this derived class.
    htmlMarks: number;
    javaMarks: number;
 
//Parametrized constructor declaration. It constructs the derived class mark sheet object. 5 parameters are passed in this constructor.
    constructor(studentName: string, tsMarks: number, aspMarks: number, htmlMarks: number, javaMarks: number) {
 
        this.htmlMarks = htmlMarks;
        this.javaMarks = javaMarks;
 
//Notice: super () keyword calls a base class constructor. Here the super () keyword is initializing/constructs the portion of a base class/object through this derived class constructor. 3 arguments are passed in super (), these 3 arguments will be received to base class constructor in order to construct a base class.
        super(studentName, tsMarks, aspMarks);
    }
 
    //following functions is re-implemented in this class. This process is called function overriding. Notice: here a “super” keyword is being used which is calling its base class function via a dot (.) sign and also add it with html and java marks.
    obtMarks(): number {
        return (super.obtMarks() + this.htmlMarks + this.javaMarks);
    }
 
    //following functions is re-implemented in this class. This process is called function overriding. Notice: here a “super” keyword is being used which is calling its base class function via a dot (.) sign and also add it with 200 value.
    totalMarks(): number {
        return super.totalMarks() + 200;
    }
}
 
//object creation of Bcs mark sheet. This object is being created through a parametrized constructor. Different types of mark sheet information such as (subject marks, student name etc.) are passed in this constructor as arguments.
var bcsMarksheet: BcsMarksheet = new BcsMarksheet("Abc", 85, 70, 65, 55);
 
//Following statements call the different functions of above class through its derived class reference (reference variable) and also print them.
document.write("Bcs Mark sheet: <br/>");
 
document.write("Student name: " + bcsMarksheet.getName() + "<br/>");
document.write("TypeScript marks: " + bcsMarksheet.tsMarks + "<br/>");
document.write("Asp marks: " + bcsMarksheet.aspMarks + "<br/>");
document.write("Html marks: " + bcsMarksheet.htmlMarks + "<br/>");
document.write("Java marks: " + bcsMarksheet.javaMarks + "<br/>");
 
document.write("Total marks: " + bcsMarksheet.totalMarks() + "<br/>");
document.write("Obtain marks: " + bcsMarksheet.obtMarks() + "<br/>");
document.write("Percentage: " + bcsMarksheet.percentage(bcsMarksheet.totalMarks(), bcsMarksheet.obtMarks()));
*/
//CLOSURES
//A closure is a special kind of object which contains a function.
//Closures are the functions which refers to independent variables and these variables remember the environment in which they were created.
//As a programmer we do not need to write JavaScript closures in .js files, these closures are written/generated automatically through TypeScript compiler. 
//It means when we write object oriented principals, classes, inheritance in TypeScript file .ts then the TypeScript compiler creates JavaScript closures in generated JavaScript files .js for us at run-time.
// Outer function declaration which takes 1 parameter
function MyClosure(digit) {
    // Assign a local variable (parameter) into another variable.
    this._digit = digit;
    // Inner function declaration which has empty parameter list.
    function square() {
        // Perform multiplication.
        document.write("" + this._digit * this._digit);
    }
    // A return keyword which returns an inner function square().
    return square;
}
/* Call an outer function, pass an argument in it. This function is assigned into a local variable var myClosure. */
var myClosure = MyClosure(5);
/* A local variable (myClosure) is being executed like a function myClosure(), NOTE: an inner function square() will be called through the execution of this function. */
myClosure();
