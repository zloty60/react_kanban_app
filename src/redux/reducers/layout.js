const initialState = {
  isAddModalOpen: false,
  isSearcModalhOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "OPEN_ADD_MODAL":
      return {
        ...state,
        isAddModalOpen: true
      };
    case "CLOSE_ADD_MODAL":
      return {
        ...state,
        isAddModalOpen: false
      };
    case "OPEN_SEARCH_MODAL":
      return {
        ...state,
        isSearcModalhOpen: true
      };
    case "CLOSE_SEARCH_MODAL":
      return {
        ...state,
        isSearcModalhOpen: false
      };
    default:
      return state;
  }
}
