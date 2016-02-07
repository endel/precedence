function validate (value) {
  return value !== false && value !== null && value !== undefined
}

export function or () {
  var values = Array.prototype.filter.call(arguments, validate)
  return (values.length > 0) ? values[0] : false
}

export function and () {
  var values = Array.prototype.filter.call(arguments, validate)
  return (values.length === arguments.length) ? values[values.length-1] : false
}
