const initialState = {
  tasks: [
    {
      id: 0,
      title: "Stylowanie komponetów",
      type: "todo",
      description: "Dodać do aplikacji Semanitic UI / styled components",
      isEdit: false,
      isOptionsView: false
    },
    {
      id: 1,
      title: "Data utworzenia",
      type: "todo",
      description: "Dodać do każdego zadania date utworzenia",
      isEdit: false,
      isOptionsView: false
    },
    {
      id: 2,
      title: "Filtrowanie zadań",
      type: "todo",
      description:
        "Dodać filtrowanie dla zadań alfabetycznie , najnowsze, najstarsze",
      isEdit: false,
      isOptionsView: false
    },
    {
      id: 3,
      title: "Animacje",
      type: "todo",
      description: "Dodać animacje przejścia między stronami",
      isEdit: false,
      isOptionsView: false
    },
    {
      id: 4,
      title: "Refaktoryzacja kodu",
      type: "doing",
      description:
        "Podzielić aplikację na więcej komponentów wielokrotnego użytku",
      isEdit: false,
      isOptionsView: false
    },
    {
      id: 5,
      title: "Firebase",
      type: "todo",
      description:
        "Zintegrować aplikację z Firebase , aby była możliwosć utworzenia konta i zapisywania tablic na serwerze",
      isEdit: false,
      isOptionsView: false
    },
    {
      id: 6,
      title: "Priorytetowe zadania",
      type: "todo",
      description: "wyswietlaja sie jako pierwsze i mają inny kolor",
      isEdit: false,
      isOptionsView: false
    },
    {
      id: 7,
      title: "podstawowa funkcjonalność",
      type: "done",
      description: "dodawanie , usuwanie , edytowanie ,przenoszenie zadan",
      isEdit: false,
      isOptionsView: false
    },
    {
      id: 8,
      title: "Redux",
      type: "doing",
      description: "Dodać redux do zarządzania stanem aplikacji",
      isEdit: false,
      isOptionsView: false
    },
    {
      id: 9,
      title: "Optymalizacja wydajności",
      type: "todo",
      description: "Dodać techiniki , przyspieszające działanie aplikacji",
      isEdit: false,
      isOptionsView: false
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_OPTION_VIEW":
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, isOptionsView: !task.isOptionsView };
          }
          return task;
        })
      };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case "EDIT_TASK":
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, isEdit: true, isOptionsView: false };
          }
          return task;
        })
      };
    case "CONFIRM_TASK":
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              isEdit: false,
              description: action.payload.description,
              title: action.payload.title
            };
          }
          return task;
        })
      };
    case "CANCEL_EDIT_TASK":
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return {
              ...task,
              isEdit: false
            };
          }
          return task;
        })
      };
    case "CHANGE_TYPE_TASK":
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              type: action.payload.type,
              isOptionsView: false
            };
          }
          return task;
        })
      };
    case "CREATE_TASK":
      return {
        tasks: [
          ...state.tasks,
          {
            id: action.payload.id,
            title: action.payload.title,
            type: action.payload.type,
            description: action.payload.description,
            isEdit: false,
            isOptionsView: false
          }
        ]
      };
    default:
      return state;
  }
}
