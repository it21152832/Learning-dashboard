import React, { useState } from 'react';
import video2 from "../video/video2.mp4";
// ... other imports

const CourseDetails = () => {
  const [selectedContent, setSelectedContent] = useState('Introduction');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to handle dropdown visibility

  const contents = [
    'Introduction',
    'Head',
    'Elements',
    'Attributes',
    'Headings',
    'Paragraphs'
  ];

  const handleContentChange = (content) => {
    if (selectedContent === content) {
      // Close dropdown if the same content is selected
      setIsDropdownOpen(false);
    } else {
      setSelectedContent(content);
      setIsDropdownOpen(true);
    }
  };

  return (
    <div className=''>
      <div className="flex flex-col lg:ml-60 p-4">
        {/* ... other content */}
        <div>
          <h1 className='font-filson font-bold text-black text-2xl mt-8 ml-8'>
            Course Content
          </h1>
          <div className='font-filson'>
            <div className='relative'>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className='lg:w-[950px] lg:h-auto min-[320px]:w-full min-[320px]:h-auto rounded-md border-2 border-black/40 mt-4 p-4'
              >
                {selectedContent}
              </button>
              {isDropdownOpen && (
                <div className='absolute z-10 bg-white w-full border border-gray-200 mt-1'>
                  {contents.map((content, index) => (
                    <button
                      key={index}
                      onClick={() => handleContentChange(content)}
                      className='w-full p-2 hover:bg-gray-200 text-left'
                    >
                      {content}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {selectedContent && (
            <div className='content'>
              {selectedContent === 'Introduction' && (
                <div className='content'>
                  {/* Your Introduction content */}
                  {/* Video, text, or any other content for Introduction */}
                </div>
              )}
              {selectedContent === 'Head' && (
                <div className='content'>
                  {/* Content for Head */}
                </div>
              )}
              {/* Add similar blocks for other content */}
            </div>
          )}
        </div>
        {/* ... other content */}
      </div>
    </div>
  );
};

export default CourseDetails;
