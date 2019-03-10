import React from 'react';
import '../index.css'
import '../components/app/App.css'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Todo from '../components/todos/Todo';
import TodoList from '../components/todos/TodoList';
import AddTodoForm from '../components/addTodoForm/AddTodoForm';
import VisibilitySelector from '../components/visibilitySelector/VisibilitySelector';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Todos', module)
  .add('not completed', () => <Todo onClick={action("clicked")} todo={{id: 1, description: "learn react", done: false}} />)
  .add('completed', () => <Todo onClick={action("clicked")} todo={{id: 1, description: "learn react", done: true}} />)
  .add('todo list', () => <TodoList toggleTodo={action("toggleTodo")} todos={[
    {id: 1, description: "learn react", done: true},
    {id: 2, description: "learn react redux", done: false}
  ]}></TodoList>)
  .add('add todo form', () => <AddTodoForm onTodoAdded={action('todo added')}></AddTodoForm>)
  .add('visibility selector', () => <VisibilitySelector selected='ALL' onVisibilityChange={action('changed visibility')}></VisibilitySelector>);
storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
