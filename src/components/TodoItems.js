import React from 'react'
import { FiEdit } from 'react-icons/fi';
import { BiCircle } from 'react-icons/bi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BASE_API } from '../config';



const TodoItems = ({ todo, index,openModal,refetch }) => {
    const { title, date, task, _id} = todo

    const handleComplete = () => {
        // console.log('clicked');
        axios.patch(`${BASE_API}/todos/${_id}` , {completed : true})
            .then(response => {
                console.log(response);
                toast.success(`Your Task is Completed `, { id: "complete" });
                refetch()
            })
            .catch(function (error) {
                toast.error(`Something is wrong . Try later `, { id: "error" });
            });
    }

    return (
        <div className='px-4 py-3 flex justify-between gap-5 border-2 border-zinc-400 rounded-md'>
            <div className="flex flex-col justify-evenly space-y-2">
                <div className="flex flex-col lg:flex-row gap-3">
                    <button onClick={handleComplete}><BiCircle /></button>
                    <span className='text-xl font-semibold capitalize'>  {index + 1}. {title}</span>
                    <small className=' font-semibold border p-2 rounded-full'>{date}</small>
                </div>
                <p className='ml-0 lg:ml-8 font-semibold'>{task}</p>

            </div>
            <div>
                <button onClick={() => openModal(todo) }
                    className='px-3 py-2 ml-auto bg-zinc-700 text-white rounded-md'>
                    <FiEdit />
                </button>
            </div>
        </div>
    )
}

export default TodoItems