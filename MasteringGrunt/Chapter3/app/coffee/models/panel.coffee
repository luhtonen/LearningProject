Employee = window.GLOBALS.Employee

class Panel
  constructor: (@panel, @employees) ->
    @init()

  init: ->
    _this = this

    @render()

    $("#btn-hire").click ->
      key = $("#input-employee").val()
      _this.employees[key] = new Employee key, 1, 40
      _this.render()

  getEmployees: ->
    @employees

  setEmployees: (employees) ->
    @employees = employees

  render: ->
    _this = this

    @panel.find("tbody").html ""

    for key, value of @employees
      if value.isFired()
        continue

      row =
        "<tr data-id='#{key}'>
          <td>#{key}</td>
          <td>#{value.level}</td>
          <td>#{value.hours}</td>
          <td>
            <button class='btn btn-primary btn-promote' data-id='#{key}'>Promote</button>
            <button class='btn btn-danger btn-fire' data-id='#{key}'>Fire</button>
          </td>
        </tr>"
      @panel.find("tbody:last").append(row)

    @panel.find(".btn-promote").each ->
      $(this).click ->
        key = $(this).attr("data-id")
        _this.employees[key].promote()
        _this.render()

    @panel.find(".btn-fire").each ->
      $(this).click ->
        key = $(this).attr("data-id")
        _this.employees[key].fire()
        _this.render()

window.GLOBALS.Panel = Panel