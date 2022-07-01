import axios from 'axios';
import React, { useRef } from 'react'
import toast from 'react-hot-toast';
import { BASE_API } from '../config';

const AddForm = ({refetch}) => {
    const title = useRef('');
    const date = useRef('');
    const taskRef = useRef('');
    

    const handleSubmit = event => {
        event.preventDefault()
        const todoInfo = {
            title: title.current.value,
            date: date.current.value,
            task: taskRef.current.value,
            completed: false 
        }
        // console.log(todoInfo);
        axios.post(`${BASE_API}/addtodo`, todoInfo)
            .then(response => {
                console.log(response);
                toast.success(`Your Task is Added `, { id: "added" });
                event.target.reset()
                refetch()
            })
            .catch(function (error) {
                toast.error(`Something is wrong . Try later `, { id: "error" });
            });
    }
    return (
        <div className='mt-10 border shadow-lg p-8 rounded'>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col lg:flex-row justify-between">
                    <input className=' px-4 py-3 border-2 border-zinc-300 w-full outline-none focus:ring-2 focus:ring-blue-400 rounded-lg mb-3 mr-5'
                        type='text'
                        ref={title}
                        required
                        placeholder='Add Tittle..'
                    />
                    <input className=' px-4 py-3 border-2 border-zinc-300 w-full outline-none focus:ring-2 focus:ring-blue-400 rounded-lg mb-3'
                        type='date'
                        ref={date}
                        required
                        placeholder='Write your task..'
                    />
                </div>
                <input className=' px-4 py-3 border-2 border-zinc-300 w-full outline-none focus:ring-2 focus:ring-blue-400 rounded-lg mb-3'
                    type='text'
                    ref={taskRef}
                    required
                    placeholder='Write your task ..'
                />
                <input type="submit" className='bg-sky-500 text-white w-full py-2 rounded-lg cursor-pointer' value="ADD" />
            </form>
        </div>
    )
}

export default AddForm