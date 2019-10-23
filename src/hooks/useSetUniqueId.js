export default function useSetUniqueId(tasksArr) {
  let id;
  if (tasksArr.length > 0) {
    id = Math.max(...tasksArr.map(item => item.id));
    id++;
  } else {
    id = 0;
  }
  return id;
}
