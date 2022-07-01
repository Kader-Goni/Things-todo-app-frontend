import React from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
import { BASE_API } from '../config';

const CompletedItem =  ({ todo, index,refetch }) => {
    const { title, date, task, _id } = todo

    const handleDelete = () => {
        const url = `${BASE_API}/todos/${_id}`;
        Swal.fire({
            text: `Are you sure to delete ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(url, {
                    method: 'DELETE',
                }).then(data => {
                    // console.log(data);
                    if (data.status) {
                        Swal.fire({
                            text: `Successfully Delete `,
                            icon: 'success',
                            confirmButtonText: 'Okay'
                        })
                        refetch()
                    }
                })
            }
        })
    }

    return (
        <div className='px-4 py-3 flex justify-between gap-5 border-2 border-zinc-400 rounded-md'>
            <div className="flex flex-col justify-evenly ">
                <div className="flex gap-x-5">
                    <span className='text-xl font-semibold capitalize'>{index + 1}. {title}</span>
                    <small className=' font-semibold border p-2 rounded-full'>{date}</small>
                </div>
                <p className=' font-semibold'>{task}</p>

            </div>
            <div>
                <button onClick={handleDelete}
                    className='p-1 ml-auto text-3xl border border-black rounded-full text-[#f40404] '>
                    <MdOutlineDeleteOutline />
                </button>
            </div>
        </div>
    )
}


export default CompletedItem;