export default function useFilterTypeTask(tasks, taskType) {
  return tasks.filter(task => task.type === taskType);
}
