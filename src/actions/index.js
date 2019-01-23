let nextTodoId = 0

export const build = function() {
  return {
    type: 'BUILD',
    id: nextTodoId++
  }
}
