import React, { VFC, useState, ChangeEvent } from "react"

import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

type Item = {
  id: number
  text: string
  isComplete: boolean
}

let id = 0
const getId = () => {
  return id++
}

const replaceItemAtIndex = (arr: Item[], index: number, newValue: Item) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

const removeItemAtIndex = (arr: Item[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

const todoListState = atom<Item[]>({
  key: "todoListState",
  default: [],
})

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "show all",
})

const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete)
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  },
})

const TodoListFilters: VFC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setFilter(value)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={(event) => updateFilter(event)}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}

const TodoItemCreator: VFC = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue("")
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={(event) => onChange(event)} />
      <button onClick={() => addItem()}>追加</button>
    </>
  )
}

const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = useRecoilValue(todoListStatsState)

  const formattedPercentCompleted = Math.round(percentCompleted)

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}

const TodoItem = ({ item }: any) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = (event: ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })
    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={(event) => editItemText(event)} />
      <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

const Todo: VFC = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}

export default Todo
