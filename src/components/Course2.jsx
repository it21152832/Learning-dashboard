import React from 'react'
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <div className='flex flex-col lg:mt-0 min-[320px]:mt-0 items-center justify-center'>
        {/* topic start  */}
        <div className='flex flex-col lg:ml-20 min-[320px]:ml-4 lg:mt-24 min-[320px]:mt-24'>

                <h1 className='font-filson font-bold lg:text-left min-[320px]:text-left min-[320px]:ml-4'><div className='lg:text-[30px] min-[320px]:text-[30px] min-[320px]:ml-0 text-black font-bold'>Our Courses</div></h1>
            
        </div>
        {/* end of topic  */}


        {/* caraosul start  */}
        <div className=''>
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-10">
                    {data.map((d) => (
                    <div key={d.name} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                        <div className='h-44 flex justify-center items-center'>
                        <img src={d.img} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]"/>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-4 p-4">
                            <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-20 lg:mt-0">{d.topic}</p>
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d.content}</p>
                            {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d.url}</p>
                            <div className='flex flex-row'>
                                <Link to="/details"><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>
                              
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
                    {data.map((d) => (
                    <div key={d.name} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                        <div className='h-44 flex justify-center items-center'>
                        <img src={d.img} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]"/>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-4 p-4">
                            <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-20 lg:mt-0">{d.topic}</p>
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d.content}</p>
                            {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d.url}</p>
                            <div className='flex flex-row'>
                                <Link to="/details"><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>
                              
                            </div>
                            
                        </div>
                    </div>
                    ))}
                </div> 
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
                    {data.map((d) => (
                    <div key={d.name} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                        <div className='h-44 flex justify-center items-center'>
                        <img src={d.img} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]"/>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-4 p-4">
                            <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-20 lg:mt-0">{d.topic}</p>
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d.content}</p>
                            {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d.url}</p>
                            <div className='flex flex-row'>
                                <Link to="/details"><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>
                              
                            </div>
                            
                        </div>
                    </div>
                    ))}
                </div>
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
                    {data.map((d) => (
                    <div key={d.name} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                        <div className='h-44 flex justify-center items-center'>
                        <img src={d.img} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]"/>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-4 p-4">
                            <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-20 lg:mt-0">{d.topic}</p>
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d.content}</p>
                            {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d.url}</p>
                            <div className='flex flex-row'>
                                <Link to="/details"><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>
                              
                            </div>
                            
                        </div>
                    </div>
                    ))}
                </div>
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
                    {data.map((d) => (
                    <div key={d.name} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                        <div className='h-44 flex justify-center items-center'>
                        <img src={d.img} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]"/>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-4 p-4">
                            <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-20 lg:mt-0">{d.topic}</p>
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d.content}</p>
                            {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d.url}</p>
                            <div className='flex flex-row'>
                                <Link to="/details"><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>
                              
                            </div>
                            
                        </div>
                    </div>
                    ))}
                </div>
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
                    {data.map((d) => (
                    <div key={d.name} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                        <div className='h-44 flex justify-center items-center'>
                        <img src={d.img} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]"/>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-4 p-4">
                            <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-20 lg:mt-0">{d.topic}</p>
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d.content}</p>
                            {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d.url}</p>
                            <div className='flex flex-row'>
                                <Link to="/details"><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>
                              
                            </div>
                            
                        </div>
                    </div>
                    ))}
                </div>
                <div className="flex lg:flex-row min-[320px]:flex-col justify-center gap-8 lg:mt-16 lg:ml-40 min-[320px]:mx-4 min-[320px]:mt-20">
                    {data.map((d) => (
                    <div key={d.name} className="bg-purple rounded-xl lg:w-[350px] md:w-[350px] sm:w-[350px] min-[320px]:w-auto h-auto min-[320px]:mt-14 text-black rounded-lg">
                        <div className='h-44 flex justify-center items-center'>
                        <img src={d.img} alt="" className="lg:h-[200px] lg:w-[350px] rounded-t-xl min-[320px]:w-auto min-[320px]:h-auto lg:mt-[-65px]"/>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-4 p-4">
                            <p className="text-lg font-semibold font-filson text-blue min-[320px]:mt-20 lg:mt-0">{d.topic}</p>
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px]">{d.content}</p>
                            {/* <div className='flex items-center justify-center relative border-2 rounded-md h-[20px] w-[20px] p-4'>
                                <img src={d.linkedin} alt="" className='flex absolute h-[18px] w-[18px] ' />
                            </div> */}
                            <p className="text-left font-filson lg:mt-[-10px] text-blue text-[12px] underline cursor-pointer text-gray-200">{d.url}</p>
                            <div className='flex flex-row'>
                                <Link to="/details"><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>See More</button></Link>
                                <button className='flex ml-4 font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl'>Subscribe</button>
                              
                            </div>
                            
                        </div>
                    </div>
                    ))}
                </div>
        </div>


        {/* end of caraosul  */}
    </div>
  )
}

const data = [
    {
        topic: `HTML - The Complete Guide to HTML for Beginners`,
        img: `./assets/course1.png`,
        content:`Beginner to Advance.`,
    },
    {
        topic: `Complete Machine Learning & Data Science Program`,
        img: `./assets/course2.png`,
        content:`Beginner to Advance`,
    },
    {
        topic: `GATE Data Science and Artificial Intelligence 2024`,
        img: `./assets/course3.webp`,
        content:`Beginner to Advance`,
    },
  
  
];

export default Course
