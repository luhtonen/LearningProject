Employee = window.GLOBALS.Employee
Panel = window.GLOBALS.Panel

$ ->
  collection = [
    {
      name: "John"
      level: 4
      hours: 40
    }
    {
      name: "Jane"
      level: 4
      hours: 40
    }
    {
      name: "Max"
      level: 4
      hours: 40
    }
  ]

  employees = {}

  for model in collection
    employees[model.name] = new Employee model.name, model.level, model.hours

  panel = new Panel $("#table-employee"), employees
