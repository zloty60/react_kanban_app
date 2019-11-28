const testState = {
  boards: [
    {
      name: "React Kanban App",
      tasks: [
        {
          id: 0,
          title: "Material UI",
          type: "inProgress",
          description: "Dodać do aplikacji Material UI"
        },
        {
          id: 1,
          title: "Backend",
          type: "todo",
          description: "firebase"
        },
        {
          id: 2,
          title: "Animacje",
          type: "todo",
          description: "Płynne przejścia między stronami"
        },
        {
          id: 3,
          title: "Filtrowanie zadań",
          type: "todo",
          description:
            "Dodać filtrowanie dla zadań alfabetycznie , najnowsze, najstarsze"
        },
        {
          id: 4,
          title: "Redux",
          type: "inProgress",
          description: "Dodać redux do zarządzania stanem aplikacj"
        },
        {
          id: 5,
          title: "Testowanie",
          type: "todo",
          description: "Enzyme"
        },
        {
          id: 6,
          title: "podstawowa funkcjonalność",
          type: "done",
          description: "dodawanie , usuwanie , edytowanie ,przenoszenie zadan"
        },
        {
          id: 7,
          title: "Optymalizacja wydajności",
          type: "todo",
          description: "Dodać techiniki , przyspieszające działanie aplikacji"
        },
        {
          id: 8,
          title: "Wyszukiwanie zadan",
          type: "done",
          description: "Przy pustym inpucie pokazuje wszystie tablice"
        }
      ]
    },
    {
      name: "Countries app",
      tasks: [
        {
          id: 0,
          title: "Styled components",
          type: "inProgress",
          description: "Dodać do aplikacji styled components"
        },
        {
          id: 1,
          title: "Paginacja",
          type: "todo",
          description:
            "Dodać paginację żeby nie renderować wszyskich krajów na jednej stronie"
        },
        {
          id: 2,
          title: "Sortowanie",
          type: "done",
          description: "alfabetycznie, populacja, powierchnia "
        },
        {
          id: 3,
          title: "Zapisywanie krajów",
          type: "done",
          description: "Kliknięcie w gwiazdke zapisuje kraj w local storage "
        },
        {
          id: 4,
          title: "Testowanie",
          type: "todo",
          description: "Enzyme"
        },
        {
          id: 5,
          title: "Stan aplikacji",
          type: "done",
          description: "Zarządzanie stanem za pomocą react hooks"
        },
        {
          id: 6,
          title: "Pobieranie krajów",
          type: "inProgress",
          description: "Pobieranie krajów z api przy użyciu biblioteki axios"
        }
      ]
    },
    {
      name: "Strona portfolio",
      tasks: [
        {
          id: 0,
          title: "Parcel js",
          type: "inProgress",
          description: "Zbudowac stronę przy użyciu parcel js"
        },
        {
          id: 1,
          title: "Menu",
          type: "todo",
          description: "Menu przy scrolowaniu zmienia position na fixed"
        },
        {
          id: 2,
          title: "Github pages",
          type: "todo",
          description: "opublikować stronę na github pages"
        }
      ]
    }
  ]
};

export default function(state = testState, action) {
  switch (action.type) {
    case "ADD_BOARD":
      return {
        boards: [
          ...state.boards,
          {
            name: action.payload,
            tasks: []
          }
        ]
      };
    case "DELETE_BOARD":
      return {
        boards: state.boards.filter(board => board.name !== action.payload)
      };
    case "CHANGE_BOARD_NAME":
      return {
        boards: state.boards.map(board => {
          if (board.name === action.payload.name) {
            return { ...board, name: action.payload.newName };
          }

          return board;
        })
      };
    case "CREATE_TASK":
      return {
        boards: state.boards.map(board => {
          if (board.name === action.payload.boardName) {
            return {
              ...board,
              tasks: [
                ...board.tasks,
                {
                  id: action.payload.id,
                  title: action.payload.title,
                  type: action.payload.type,
                  description: action.payload.description
                }
              ]
            };
          }
          return board;
        })
      };
    case "DELETE_TASK":
      return {
        boards: state.boards.map(board => {
          if (board.name === action.payload.boardName) {
            return {
              name: action.payload.boardName,
              tasks: board.tasks.filter(task => task.id !== action.payload.id)
            };
          }
          return board;
        })
      };
    case "EDIT_TASK":
      return {
        boards: state.boards.map(board => {
          if (board.name === action.payload.boardName) {
            return {
              name: action.payload.boardName,
              tasks: board.tasks.map(task => {
                if (task.id === action.payload.id) {
                  return {
                    ...task,
                    title: action.payload.title,
                    description: action.payload.description
                  };
                }
                return task;
              })
            };
          }
          return board;
        })
      };
    case "CHANGE_TYPE_TASK":
      return {
        boards: state.boards.map(board => {
          if (board.name === action.payload.boardName) {
            return {
              name: action.payload.boardName,
              tasks: board.tasks.map(task => {
                if (task.id === action.payload.id) {
                  return {
                    ...task,
                    type: action.payload.type
                  };
                }
                return task;
              })
            };
          }
          return board;
        })
      };
    default:
      return state;
  }
}
