$(document).ready(function() {
    // Use can for CanJS
    var $result1 = $("#result1");
    var $result2 = $("#result2");
    var $result3 = $("#result3");
    var $result4 = $("#result4");
    var $result5 = $("#result5");
    
    var Example = can.Construct.extend({
    	count: 1,
    	increament: function() {
    		this.count++;
    	}
    });

    var example = new Example();
    $result1.append("Example(): count before: ").append(example.count);
    example.increament();
    $result1.append("; and count after: ").append(example.count);

    var Example1 = can.Construct.extend({
    	init: function(count) {
    		this.count = count;
    	}
    });

    var example1 = new Example1(42);
    $result2.append("Example with init: count = ").append(example1.count);

    var Parent = can.Construct.extend({
    	init: function(count) {
    		this.count = count;
    	},
    	increase: function() {
    		this.count++;
    	},
    	read: function(prefix) {
    		return prefix + " " + String(this.count);
    	}
    });

    var Child = Parent({
    	// Child inherits init function

    	// Override increase
    	increase: function() {
    		this.count += 10;
    	},
    	// Add a new function
    	decrease: function() {
    		this.count--;
    	},
    	// Override read, but call parent's version
    	read: function() {
    		return this._super("Count is") + "!"; // this._super is undefined; why?
    	}
    });

    var parent = new Parent(1);
    $result3.append("Parent/Child: parent count = ").append(parent.count);
    parent.increase();
    $result3.append("; after increase = ").append(parent.count);
    $result3.append("; parent read: ").append(parent.read("Parent"));
    var child = new Child(2); // calls Parent's init
    $result4.append("Parent/Child: init count = ").append(child.count);
    child.increase(); // calls Child's increase
    $result4.append("; after increase = ").append(child.count);
    child.decrease(); // calls Child's decrease
    $result4.append("; after decrease = ").append(child.count); // returns 11
//    var childRead = child.read(); 
//    $result4.append("; read: ").append(childRead);
    
    var ExampleProto = can.Construct.extend({
        staticCount: 0
    }, {
        protoCount: 0
    });
    
    var exampleproto1 = new ExampleProto();
    var exampleproto2 = new ExampleProto();
    exampleproto1.constructor.staticCount = 2;
    exampleproto1.protoCount = 2;
    $result5.append("Static/Proto: ExampleProto.staticCount = ").append(ExampleProto.staticCount);
    $result5.append("; ex2.staticCount = ").append(exampleproto2.constructor.staticCount);
    $result5.append("; ex2.protoCount = ").append(exampleproto2.protoCount);
});