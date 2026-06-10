import React from 'react'

const Todos = (props) => {
  return (
    <div className="container">
      <h3 >todos list</h3>

      {props.todos.length === 0 ? "No todos to display"
      : props.todos.map((td) => (
            <div key={td.sno}>
              <h4>{td.title}</h4>
              <p>{td.desc}</p>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => props.onDelete(td)}
              >
                Delete
              </button>
            </div>
          ))}
    </div>
  );
};


export default Todos
