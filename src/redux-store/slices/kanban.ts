// Third-party Imports
import { createSlice } from '@reduxjs/toolkit'

// Type Imports
import type { ColumnType, TaskType } from '@/types/apps/kanbanTypes'

// Data Imports
import { db } from '@/fake-db/apps/kanban'

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: db,
  reducers: {
    addColumn: (state, action) => {
      const maxId = Math.max(...state.columns.map(column => column.id))

      const newColumn: ColumnType = {
        id: maxId + 1,
        title: action.payload,
        taskIds: []
      }

      state.columns.push(newColumn)
    },

    editColumn: (state, action) => {
      const { id, title } = action.payload

      const column = state.columns.find(column => column.id === id)

      if (column) {
        column.title = title
      }
    },

    deleteColumn: (state, action) => {
      const { columnId } = action.payload
      const column = state.columns.find(column => column.id === columnId)

      state.columns = state.columns.filter(column => column.id !== columnId)

      if (column) {
        state.tasks = state.tasks.filter(task => !column.taskIds.includes(task.id))
      }
    },

    updateColumns: (state, action) => {
      state.columns = action.payload
    },

    updateColumnTaskIds: (state, action) => {
      const { id, tasksList } = action.payload

      state.columns = state.columns.map(column => {
        if (column.id === id) {
          return { ...column, taskIds: tasksList.map((task: TaskType) => task.id) }
        }

        return column
      })
    },

    addTask: (state, action) => {
      const { columnId, title } = action.payload

      const newTask: TaskType = {
        id: state.tasks[state.tasks.length - 1].id + 1,
        title
      }

      const column = state.columns.find(column => column.id === columnId)

      if (column) {
        column.taskIds.push(newTask.id)
      }

      state.tasks.push(newTask)

      return state
    },

    editTask: (state, action) => {
      const { id, title, badgeText, dueDate } = action.payload

      const task = state.tasks.find(task => task.id === id)

      if (task) {
        task.title = title
        task.badgeText = badgeText
        task.dueDate = dueDate
      }
    },

    deleteTask: (state, action) => {
      const taskId = action.payload

      state.tasks = state.tasks.filter(task => task.id !== taskId)
      state.columns = state.columns.map(column => {
        return {
          ...column,
          taskIds: column.taskIds.filter(id => id !== taskId)
        }
      })
    },

    getCurrentTask: (state, action) => {
      state.currentTaskId = action.payload
    }
  }
})

export const {
  addColumn,
  editColumn,
  deleteColumn,
  updateColumns,
  updateColumnTaskIds,
  addTask,
  editTask,
  deleteTask,
  getCurrentTask
} = kanbanSlice.actions

export default kanbanSlice.reducer
