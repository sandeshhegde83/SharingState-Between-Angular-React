import * as TodoActions from '../actions';

export default class IndexController{
  constructor(reduxService){
    this.reduxService = reduxService;
    this.task = '';

    this.reduxService.connect( null, TodoActions )(this);
    this.key = 1;
  }

  add() {
    let task = this.task;
    //let key = this.key;
    this.addTodo(task); //Fire Action Creator
    this.task = '';
    console.log(this.reduxService.getState());
  }
}
