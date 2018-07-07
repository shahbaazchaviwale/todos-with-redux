import React, { Component } from 'react'
import { connect } from 'react-redux';


class ItemList extends Component {
  constructor(){
    super();
    this.state = {
      todo_item : ''
    }
  }

  handleChange = (evt) =>{
    this.setState({
      todo_item : evt.target.value
    });
  }

  submitHandle = (evt) =>{
    evt.preventDefault();
    if (this.refs.list_data.value ===''){
      
    }else{
      this.props.add_todo(this.state.todo_item.toUpperCase());
      this.setState({ todo_item: '' });
    }    
  }

  removeList = (id) =>{   
    this.props.remove_list(id)
  }

  render() {
    return <div className=" row">
        <div className="col-md-4">

          <form className="form-inline" onSubmit={this.submitHandle}>
            <input type="text" className="form-control" value={this.state.todo_item} onChange={this.handleChange} ref="list_data" />
            <button type="submit" className="btn btn-primary">
                Add List
            </button>
          </form>

          <ul className="list-group">
            {this.props.language.map(lang_list => {
              return <li className="list-group-item" key={lang_list.id}>
                  <span className="badge badge-danger " onClick={() => this.removeList(lang_list.id)}>
                    X
                  </span>&nbsp;
                  <span className="badge badge-pill badge-info">
                    {lang_list.id}
                  </span> &nbsp;
                  {lang_list.text}
                </li>;
            })}
          </ul>
        </div>
      </div>;         
      
  }
}

const loadData = (state) => {
    return{
        language: state
    }
}

const actionLoad = (dispatch) => {
  return { 
    add_todo : (add_text)=>{
        dispatch({ type : 'ADD_LIST', add_text});
    },
    remove_list : (id) =>{
      dispatch({type : 'REMOVE_LIST', id});
    }
};
}
export default connect(loadData, actionLoad)(ItemList);