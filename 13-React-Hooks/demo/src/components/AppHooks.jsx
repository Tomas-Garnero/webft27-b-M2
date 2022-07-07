import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveName } from '../actions';

export default function AppHooks() {
  // como se representa en un componente de clase?

  // constructor(props) {super(props); this.state = {name: "Hooks", width: window.innerWidth}}
  // useState -> definir estados LOCALES
  const [name, setName] = useState('Hooks');
  const [width, setWidth] = useState(window.innerWidth)

  // como podemso remplazar el connect con hooks 
  // useDispatch -> store.dispatch()
  // esto viene a ser como  connect(mapStateToProps, null)(AppHooks)
  const dispatch = useDispatch() // -> dispatch se va a encargar de despachar las acciones / action creators
  // dispatch(getMovies(name))

  // useSelector -> mapStateToProps
  // function mapStateToProps(state){
  //    return {}
  //      nameRedux: state.name
  //    }
  // }
  const nameRedux = useSelector(state => state.name)
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      console.log('Entra...');
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  function handleChange(e) {
    setName(e.target.value)
  }

  useEffect(() => {
    document.title = name
  },[name])

  return (
    <div className="App">
      <input 
        value={name}
        onChange={handleChange}
      />
      <div>
        {width}
      </div>
      <button onClick={() => dispatch(saveName(name))}>
        Save Name
      </button>
      <div>
        {nameRedux}
      </div>
    </div>
  );
}

// Custom Hooks

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth)
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   })
//   return width;
// }

// function useDocumentTitle(title) {
//   useEffect(() => {
//     document.title = title
//   },[title])
// }
