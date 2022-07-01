import React from 'react';
import css from './App.css'
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Completed from './pages/Completed';
import Todos from './pages/Todos';
import Calendar from './pages/Calendar';
import NotFound from './components/NotFound';
import  { Toaster } from 'react-hot-toast';
import AddTask from './pages/AddTask';

const App = () => {
    return (
        <div>
            <Toaster />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/addtask' element={<AddTask/>}/>
                <Route path='/completed' element={<Completed/>}/>
                <Route path='/todos' element={<Todos/>}/>
                <Route path='/calendar' element={<Calendar/>}/>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
            
        </div>
    );
};

export default App;