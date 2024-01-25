/* eslint-disable react-hooks/rules-of-hooks */
import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import axios from 'axios';
// import { Validate } from './admin/Validate';


const initialValues = {
    course_name: '',
    course_desc: '',
    category: ''
}

const CreateCourse = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        // validationSchema: Validate,

        onSubmit: async (values) => {
            console.log(values)
            setLoading(true)

            const res = await axios.post('http://localhost:8080/course', {
                headers: {
                    'Content-Type': 'application/json'
                },
                course_name: values.course_name,
                course_desc: values.course_desc,
                category: values.category,
            },
            )

            try {
                res.status === 200 ? Navigate('') : setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
    })

    return (
        <div className='flex items-center justify-center w-full min-h-screen'>
            {/* form start  */}
            <div className='flex flex-col items-center rounded-md bg-blue bg-opacity-50 w-[400px] h-auto pb-8 min-[320px]:mx-2'>
                {/* welcome start  */}
                <div className='flex py-8'>
                    <h1 className='font-filson text-[30px] text-white'>Create course</h1>
                </div>
                {/* welcome end  */}

                {/* form-content start  */}
                <form onSubmit={handleSubmit} className='py-2'>
                    <div className=''>
                        <input type="text" name="course_name" value={values.course_name} placeholder='Course Name' onChange={handleChange} className='flex pl-2 mt-4 py-2 bg-transparent border-2 rounded-lg text-white outline-none text-[12px] font-filson' />
                        {/* {errors.course_name && <h4 className='text-red-400 bottom-[-25px] text-[12px]'>{errors.course_name}</h4>} */}
                    </div>
                    <div>
                        <input type="text" name="course_desc" value={values.course_desc} placeholder='Course Description' onChange={handleChange} className='flex pl-2 mt-4 py-2 bg-transparent border-2 rounded-lg text-white outline-none text-[12px] font-filson' />
                        {/* {errors.course_desc && <h4 className='text-red-400 bottom-[-25px] text-[12px]'>{errors.course_desc}</h4>} */}
                    </div>
                    <div>
                        <input type="text" name="category" value={values.category} placeholder='Course Category' onChange={handleChange} className='flex pl-2 mt-4 py-2 bg-transparent border-2 rounded-lg text-white outline-none text-[12px] font-filson' />
                        {/* {errors.category && <h4 className='text-red-400 bottom-[-25px] text-[12px]'>{errors.category}</h4>} */}
                    </div>

                    <div>
                        <button type='submit' className='flex items-center justify-center pl-2 mt-8 py-2 bg-[#3E065F] rounded-lg text-white w-full text-[14px] font-filson'>
                            {!loading && <h3>ADD</h3>} {loading && <Link path='/courses'><h3>ADD</h3></Link>}
                        </button>
                    </div>
                </form>

                {/* form-content end  */}

            </div>
            {/* form end  */}
        </div >
    )
}

export default CreateCourse; 