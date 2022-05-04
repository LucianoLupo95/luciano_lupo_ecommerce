import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Rutas = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rutas