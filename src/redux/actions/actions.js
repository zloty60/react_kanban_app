export function openAddModal() {
  return {
    type: "OPEN_ADD_MODAL"
  };
}

export function closeAddModal() {
  return {
    type: "CLOSE_ADD_MODAL"
  };
}

export function openSearchdModal() {
  return {
    type: "OPEN_SEARCH_MODAL"
  };
}

export function closeSearchModal() {
  return {
    type: "CLOSE_SEARCH_MODAL"
  };
}

export function toggleIsOptionsView(id) {
  return {
    type: "TOGGLE_OPTION_VIEW",
    payload: id
  };
}

export function deleteTask(id) {
  return {
    type: "DELETE_TASK",
    payload: id
  };
}

export function editTask(id) {
  return {
    type: "EDIT_TASK",
    payload: id
  };
}

export function confirmTask(id, title, description) {
  return {
    type: "CONFIRM_TASK",
    payload: {
      id,
      title,
      description
    }
  };
}

export function canceEditTask(id) {
  return {
    type: "CANCEL_EDIT_TASK",
    payload: id
  };
}

export function changeTypeTask(id, type) {
  return {
    type: "CHANGE_TYPE_TASK",
    payload: {
      id,
      type
    }
  };
}

export function createTask(id, title, type, description) {
  return {
    type: "CREATE_TASK",
    payload: {
      id,
      title,
      type,
      description
    }
  };
}
