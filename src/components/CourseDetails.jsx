import React, { useState } from 'react';
import video2 from "../video/video2.mp4";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";

const CourseDetails = () => {
  const [selectedContent, setSelectedContent] = useState('Introduction');
  const contents = [
    'Introduction',
    'Head',
    'Elements',
    'Attributes',
    'Headings',
    'Paragraphs'
  ];

  const handleContentChange = (e) => {
    setSelectedContent(e.target.value);
  };

  return (
    <div className=''>
      {/* content start  */}
      <div className="flex flex-col lg:ml-60 p-4">

        {/* top content start  */}
        <div className='flex lg:flex-row min-[320px]:flex-col-reverse justify-start relative items-center w-full lg:h-[250px] min-[320px]:h-auto bg-blue bg-opacity-50 mt-20 py-8 min-[320px]:px-4 lg:px-8'>
          {/* left  */}
          <div>
            <div> <h1 className='font-filson text-semibold lg:mt-0 min-[320px]:mt-20 text-white text-2xl'>HTML - The Complete Guide to HTML for Beginners</h1></div>
            <div><h3 className='font-filson text-white text-sm mt-2'><div>A practical programming course for office workers, academics, and administrators</div> <div>who want to improve their productivity.</div></h3></div>
            <div><h3 className='font-filson text-white text-sm mt-2'>Created By <span className='text-blue cursor-pointer'>Paul Hodgson</span></h3></div>
            {/* <div><button className='flex font-filson text-[14px] w-auto h-auto p-2 bg-blue text-white rounded-xl mt-2'>Subscribe</button></div> */}

          </div>

          {/* right  */}
          <div>
            {/* Image */}
            <div className='absolute bg-purple rounded-md border-2 border-purple top-10 lg:w-[265px] lg:h-[630px] right-8'>
              {/* <img src="./assets/course1.png" alt="" className='lg:flex min-[320px]:hidden rounded-t-md ml-[-1px] mt-[-1px] lg:w-[270px] lg:h-[170px] min-[320px]:w-[150px] min-[320px]:h-[150px] mt-2 ml-1' /> */}
                <div>
                      <video
                          className='lg:flex min-[320px]:hidden rounded-t-lg ml-[-1px] mt-[-1px] lg:w-[270px] lg:h-[150px] min-[320px]:w-[150px] min-[320px]:h-[150px] mt-2 ml-1'
                          src={video2}
                          autoPlay

                      />
                </div>

              <div className='lg:flex flex-col min-[320px]:hidden mx-4 mt-8'>
                  <div>
                    <h2 className='text-filson text-[20px] text-black font-bold'>This course includes:</h2>
                  </div>
                  <div className='text-filson text-[14px] text-black mx-4 mt-4'>
                    <span>5.5 hours on-demand video</span>
                  </div>
                  <div className='text-filson text-[14px] text-black mx-4 mt-1'>
                    <span>Access on mobile and TV</span>
                  </div>
                  <div className='text-filson text-[14px] text-black mx-4 mt-1'>
                    <span>Full lifetime access</span>
                  </div>
                  <div className='text-filson text-[14px] text-black mx-4 mt-1'>
                    <span>Certificate of completion</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/* top content end  */}

        {/* middle part start  */}
        {/* what-learn start  */}
            <div className='flex flex-col relative lg:w-3/4 lg:h-[400px] min-[320px]:w-auto min-[320px]:h-auto rounded-md border-2 border-black/40 mt-4'>
                    <div> <h1 className='font-filson text-semibold lg:mt-0 min-[320px]:mt-20 text-black text-2xl p-10'>What you'll learn</h1></div>
                    
                    <div className='m-4 text-[14px] px-10'>
                        <div className='flex lg:flex-row min-[320px]:flex-col font-filson text-blue/80'>
                                    <div className='flex flex-row items-center w-full'>
                                        <div><img src="./assets/icon-right.png" alt="" className='w-[22px] h-[22px]' /></div>
                                        <div className='ml-2'>Learn HTML Web Design Language</div>
                                    </div>
                                    <div className='flex flex-row items-center lg:ml-8 w-full'>
                                        <div><img src="./assets/icon-right.png" alt="" className='w-[22px] h-[22px]' /></div>
                                        <div className='min-[320px]:mt-4 lg:mt-0 ml-2'>Build HTML Pages from Start to Finish</div>
                                    </div>

                        </div>
                        <div className='flex lg:flex-row min-[320px]:flex-col font-filson text-blue/80 lg:mt-4 min-[320px]:mt-4'>
                        <div className='flex flex-row items-center w-full'>
                                        <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                        <div className='ml-2'>Learn How to Customize HTML Elements Using Attributes</div>
                                    </div>
                                    <div className='flex flex-row items-center lg:ml-8 w-full'>
                                        <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                        <div className='min-[320px]:mt-4 lg:mt-0 ml-2'>Learn What HTML Tags are and How to Use Them</div>
                                    </div>
                        </div>
                        <div className='flex lg:flex-row min-[320px]:flex-col font-filson text-blue/80 lg:mt-4 min-[320px]:mt-4'>
                        <div className='flex flex-row items-center w-full'>
                                        <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                        <div className='ml-2'>Creating Forms, Inserting Images/Videos, Adding Lists</div>
                                    </div>
                                    <div className='flex flex-row items-center lg:ml-8 w-full'>
                                        <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                        <div className='min-[320px]:mt-4 lg:mt-0 ml-2 '>Master Common HTML Tags Used In Web Development</div>
                                    </div>
                        </div>
                        <div className='flex lg:flex-row min-[320px]:flex-col font-filson text-blue/80 lg:mt-4 min-[320px]:mt-4'>
                        <div className='flex flex-row items-center w-full'>
                                        <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                        <div className='ml-2'>Creating Forms, Inserting Images/Videos, Adding Lists</div>
                                    </div>
                                    <div className='flex flex-row items-center lg:ml-8 w-full'>
                                        <div><img src="./assets/icon-right.png" alt="" className='w-[25px] h-[25px]' /></div>
                                        <div className='min-[320px]:mt-4 lg:mt-0 ml-2 '>Master Common HTML Tags Used In Web Development</div>
                                    </div>
                        </div>
                    </div>
            </div>
        {/* end  */}
        {/* end */}

        {/* bottom content start  */}
        <div className='flex flex-col items-start justify-start w-full'>
          {/* Course Content with Dropdown */}
          <div>
            <h1 className='font-filson font-bold text-black text-2xl mt-8 ml-8'>
              Course Content
            </h1>
            <div className='font-filson'>
                <select
                value={selectedContent}
                onChange={handleContentChange}
                className='lg:w-full lg:h-auto min-[320px]:w-full min-[320px]:h-auto rounded-md border-2 border-black/40 mt-4 p-4'
                >
                {contents.map((content, index) => (
                    <option key={index} value={content}>
                    {content}
                    </option>
                ))}
                </select>
            </div>


            {selectedContent === 'Introduction' && (
              <div className='content'>
                    
                    <div className='flex flex-col lg:w-full lg:h-auto min-[320px]:w-full min-[320px]:h-auto rounded-md border-2 border-black/40 mt-4 p-4'>
                    {/* <h3 className='text-[16px] ml-10 font-bold text-blue'>Introduction to HTML</h3> */}
                        {/* <video
                            className='h-[300px] lg:w-full min-[320px]:w-auto lg:ml-0 mt-4'
                            src={video2}
                            autoPlay

                        /> */}
                        <div className='flex flex-row justify-evenly w-[100%]'>
                          <div>
                            <a className='text-[16px] font-bold text-blue underline cursor-pointer'>HTML Basics</a>
                          </div>
                          <div>
                            {/* <a className='text-[16px] ml-8 font-bold text-blue underline cursor-pointer'>Preview</a> */}
                            <Popover placement="right" className="ml-10">
                                <PopoverHandler>
                                  <a className='text-[16px] ml-8 font-bold text-blue underline cursor-pointer'>Preview</a>
                                </PopoverHandler>
                                <PopoverContent className="w-96">
                                  {/* <Typography variant="h6" color="blue-gray" className="mb-6">
                                    Newsletter Subscription
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-1 font-bold"
                                  >
                                    Your Name
                                  </Typography>
                                  <div className="flex gap-2">
                                    <Input
                                      size="lg"
                                      placeholder="name@mail.com"
                                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                      labelProps={{
                                        className: "before:content-none after:content-none",
                                      }}
                                    />
                                    <Button variant="gradient" className="flex-shrink-0">
                                      Subscribe
                                    </Button>
                                  </div> */}
                                  <div>
                                    
                                  </div>
                                  <div>
                                    <video
                                        className='lg:flex min-[320px]:hidden rounded-t-lg ml-[-1px] mt-[-1px] lg:w-[270px] lg:h-[150px] min-[320px]:w-[150px] min-[320px]:h-[150px] mt-2 ml-1'
                                        src={video2}
                                        autoPlay

                                    />
                                  </div>
                      

                    
                                </PopoverContent>
                            </Popover>
                          </div>

                        </div>
                        

                    </div>
                   
              </div>
            )}
            {selectedContent === 'Head' && (
              <div className='content'>
                <div className='flex flex-col lg:w-full lg:h-auto min-[320px]:w-full min-[320px]:h-auto rounded-md border-2 border-black/40 mt-4 p-4'>
                    <h3 className='text-[16px] ml-10 font-bold text-blue'>HEAD</h3>
                    {/* <video
                        className='h-[300px] lg:w-full min-[320px]:w-auto lg:ml-8  mt-4'
                        src={video2}
                        autoPlay

                    /> */}
                </div>
              </div>
            )}
            {selectedContent === 'Elements' && (
              <div className='content'>
                <div className='flex flex-col lg:w-full lg:h-auto min-[320px]:w-full min-[320px]:h-auto rounded-md border-2 border-black/40 mt-4 p-4'>
                    <h3 className='text-[16px] ml-10 font-bold text-blue'>ELEMENTS</h3>
                    {/* <video
                        className='h-[300px] w-full ml-8  mt-4'
                        src={video2}
                        autoPlay

                    /> */}
                </div>
              </div>
            )}
            {selectedContent === 'Attributes' && (
              <div className='content'>
                <div className='flex flex-col lg:w-full lg:h-auto min-[320px]:w-full min-[320px]:h-auto rounded-md border-2 border-black/40 mt-4 p-4'>
                    <h3 className='text-[16px] ml-10 font-bold text-blue'>ATTRIBUTES</h3>
                    {/* <video
                        className='h-[300px] lg:w-full min-[320px]:w-auto lg:ml-8  mt-4'
                        src={video2}
                        autoPlay

                    /> */}
                </div>
              </div>
            )}
            {selectedContent === 'Headings' && (
              <div className='content'>
                <div className='flex flex-col lg:w-full lg:h-auto min-[320px]:w-full min-[320px]:h-auto rounded-md border-2 border-black/40 mt-4 p-4'>
                    <h3 className='text-[16px] ml-10 font-bold text-blue'>Headings</h3>
                    {/* <video
                        className='h-[300px] lg:w-full min-[320px]:w-auto lg:ml-8  mt-4'
                        src={video2}
                        autoPlay

                    /> */}
                </div>
              </div>
            )}
            {selectedContent === 'Paragraphs' && (
              <div className='content'>
                <div className='flex flex-col lg:w-full lg:h-auto min-[320px]:w-full min-[320px]:h-auto rounded-md border-2 border-black/40 mt-4 p-4'>
                    <h3 className='text-[16px] ml-10 font-bold text-blue'>PARAGRAPHS</h3>
                    {/* <video
                        className='h-[300px] lg:w-full min-[320px]:w-auto lg:ml-8  mt-4'
                        src={video2}
                        autoPlay

                    /> */}
                </div>
              </div>
            )}


          </div>

            {/* requirements start  */}
            <div className='flex flex-col items-start justify-start w-full'>
                <div>
                    <div><h1 className='font-filson font-bold text-black text-2xl mt-8 ml-8'>Requirements</h1></div>
                    <div><h3 className='font-filson text-blue ml-10 mt-4 text-[16px]'>No HTML knowledge needed. You will learn everything here you need to know</h3></div>
                </div>
            </div>
            {/* end  */}

            {/* description start  */}
            <div className='flex flex-col items-start justify-start w-full'>
                <div>
                    <div><h1 className='font-filson font-bold text-black text-2xl mt-8 ml-8'>Description</h1></div>
                    <div><h3 className='font-filson text-blue ml-10 mt-4 text-[16px]'>
                        <div className='lg:w-[1000px] min-[320px]:w-auto'>Are you prepared to take a thrilling trip into the web development industry? "The Complete Guide to HTML Zero to Hero"
                             is the best resource for learning HTML and becoming a web development hero, regardless of your level of experience.</div>
                        <div className='mt-4 lg:w-[1000px] min-[320px]:w-auto'>Understanding HTML, or Hypertext Markup Language, is essential for anyone interested in developing websites or web applications or enhancing their digital literacy. HTML is the foundation of the website. With the help of this extensive Udemy course, we will take you from having no prior HTML knowledge to a hero-level grasp,
                             enabling you to work with developers, produce beautiful websites, and even pursue a career in web development.</div>
                    </h3></div>
                </div>
            </div>
            {/* end  */}

        </div>
        {/* bottom content end  */}

      </div>
      {/* content end  */}
    </div>
  );
};

export default CourseDetails;
