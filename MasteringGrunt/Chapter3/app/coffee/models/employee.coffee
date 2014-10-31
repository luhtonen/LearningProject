Person = window.GLOBALS.Person

class Employee extends Person
  constructor: (@name, @level, @hours) ->
    super(@name)
    throw "Invalid Employee Level" if @level < 1
    throw "Invalid Allocated Hours" if @hours < 0

  getLevel: ->
    @level

  getHours: ->
    @hours

  isFired: ->
    @level is 0

  promote: ->
    @level++
    @hours += 4

  fire: ->
    @level = 0
    @hours = 0

window.GLOBALS.Employee = Employee
