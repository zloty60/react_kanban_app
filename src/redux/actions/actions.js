export function deleteBoard(boardName) {
  return {
    type: "DELETE_BOARD",
    payload: boardName
  };
}

export function changeBoardName(name, newName) {
  return {
    type: "CHANGE_BOARD_NAME",
    payload: {
      name,
      newName
    }
  };
}

export function createBoard(name) {
  return {
    type: "ADD_BOARD",
    payload: name
  };
}

export function createTask(boardName, id, title, type, description) {
  return {
    type: "CREATE_TASK",
    payload: {
      boardName,
      id,
      title,
      type,
      description
    }
  };
}

export function deleteTask(boardName, id) {
  return {
    type: "DELETE_TASK",
    payload: {
      boardName,
      id
    }
  };
}

export function editTask(boardName, id, title, description) {
  return {
    type: "EDIT_TASK",
    payload: {
      boardName,
      id,
      title,
      description
    }
  };
}

export function changeTypeTask(boardName, id, type) {
  return {
    type: "CHANGE_TYPE_TASK",
    payload: {
      boardName,
      id,
      type
    }
  };
}
