window.variant = document.location.search.slice(1);

define([
  'spec/verifyClass.js',
  '../lib/chai/chai.js',
  '../lib/mocha/mocha.js',
  'src/' + variant + '/stack.js',
  'src/' + variant + '/queue.js',
  '../lib/jquery/jquery.js'
], function(verifyClass, chai) {
  var stacks00000000000000000000 = [];
  
  var stackFunctionalProfile = function() {
    for (var i = 0; i < 5000000; i++) {
      stacks00000000000000000000.push(Stack());
    }
  };
  
  var queueFunctionalProfile = function() {
    for (var i = 0; i < 1000000; i++) {
      Queue();
    }
  };
  
  var stackFunctionalSharedProfile = function() {
    for (var i = 0; i < 1000000; i++) {
      Stack();
    }
  };
  
  var queueFunctionalSharedProfile = function() {
    for (var i = 0; i < 1000000; i++) {
      Queue();
    }
  };
  
  var stackPrototypalProfile = function() {
    for (var i = 0; i < 1000000; i++) {
      Stack();
    }
  };
  
  var queuePrototypalProfile = function() {
    for (var i = 0; i < 1000000; i++) {
      Queue();
    }
  };
  
  var stackPseudoclassicalProfile = function() {
    for (var i = 0; i < 1000000; i++) {
      new Stack();
    }
  };
  
  var queuePseudoclassicalProfile = function() {
    for (var i = 0; i < 1000000; i++) {
      new Queue();
    }
  };
  
  if (variant === 'functional') {
    stackFunctionalProfile();
    queueFunctionalProfile();
  } else if (variant === 'functional-shared') {
    stackFunctionalSharedProfile();
    queueFunctionalSharedProfile();
  } else if (variant === 'prototypal') {
    stackPrototypalProfile();
    queuePrototypalProfile();
  } else {
    stackPseudoclassicalProfile();
    queuePseudoclassicalProfile();
  }
});
