class Person
  constructor: (@name) ->
    throw "Invalid Name" if @name.length is 0

  getName: ->
    @name

window.GLOBALS.Person = Person
