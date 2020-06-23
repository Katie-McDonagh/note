"use strict";

  function undefinedmethodtester() {
    var note = new Note("test");

    assert.isTrue(note.display() === "test");

    // assert.isTrue(note.display() !== null);
    // if (typeof note.display === "undefined") { 
    //   throw new Error("Unfedined Method")
    // };
  };

  function objectHasOneArgument(text) {
    var note = new Note(text);

    if ( text === null) { 
      throw new Error("Unfedined argument")
    };
  };

undefinedmethodtester();
objectHasOneArgument();

