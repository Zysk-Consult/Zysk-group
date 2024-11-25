import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   Aos.init({
  //     // disable: 'mobile',
  //     // offset: 200,
  //     duration: 400,
  //     // easing: 'ease-in-sine',
  //     delay: 100,
  //   });
  // }, [])
  return (
    <div className='manrope'>
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
