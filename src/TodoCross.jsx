// import React from 'react';

// function TodoCross({ onClick }) {
//   return (
//     <span className="cross-icon" onClick={onClick}>
//       ✖
//     </span>
//   );
// }

// export default TodoCross;


import React from 'react';

function TodoCross({ onClick }) {
  const style = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"1.5rem",
    height:"1.5rem",
    borderRadius:"50%",
    fontSize:"0.9rem"
  }
  return (
    <span className="cross-icon" style={style} onClick={onClick}>
      ✖
    </span>
  );
}

export default TodoCross;