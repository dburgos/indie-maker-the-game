export const build = function() {
  return {
    type: 'BUILD'
  }
}

export const marketing = function() {
  return {
    type: 'MARKETING'
  }
}

export const update = function() {
  return {
    type: 'UPDATE'
  }
}

export const buy = function(id) {
  return {
    type: 'BUY',
    id: id
  }
}

export const upgrade = function(payload) {
  return {
    type: 'UPGRADE',
    payload
  }
}
