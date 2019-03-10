import {
  todos
} from "./todos";
import {
  addTodo, toggleTodo
} from '../actions/todos';

const aTodoExample = {
  description: "learn react",
  done: false,
  id: 1
};

describe("todos reducer", () => {
  it("should init the state to an empty list", () => {
    expect(todos(undefined, {
      type: 'DUMMY'
    })).toEqual([]);
  })

  it("should allow adding a new TODO to empty state", () => {
    expect(todos(undefined, addTodo(aTodoExample.description, aTodoExample.id))).toEqual([aTodoExample]);
  })

  it("should allow adding a new TODO to an existing state", () => {
    expect(todos([aTodoExample], addTodo("test react", 2))).toEqual([aTodoExample, {
      id: 2,
      description: "test react",
      done: false
    }]);
  })

  it("should allow toggling a todo by id to completed", () => {
    expect(todos([aTodoExample], toggleTodo(1))).toEqual([
      {...aTodoExample, done: true}
    ]);
  })
})