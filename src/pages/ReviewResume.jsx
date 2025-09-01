import React from 'react'
import { Sparkles, File } from "lucide-react"
const ReviewResume = () => {
  const [input, setInput] = React.useState("")
     const onsubmitHandler = async (e) => {
      e.preventDefault()
      // later: call API / AI logic here
    }
  return (
  <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Left col */}
      <form
        onSubmit={onsubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[green]" />
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>

        {/* Article Topic */}
        <p className="mt-6 text-sm font-medium">Upload Resume</p>
        <input
          type="file"
          value={input}
          accept='application/pdf'
          onChange={(e) => setInput(e.target.files[0])}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"

          required
        />
<p className='text-xs text-gray-500 font-light mt-1'>Supports JPG,PNG,and other image formats</p>
        

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 
             bg-gradient-to-r from-[#6cdb4a] to-[#7297ef] 
             text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <File className="w-5 h-5 text-[green]" />
        Review Resume
        </button>
      </form>

      {/* Right col */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        {/* Header */}
        <div className="flex items-center gap-3">
          <File className="w-5 h-5 text-[green]" />
          <h1 className="text-xl font-semibold">Analysis Results</h1>
        </div>

        {/* Placeholder / Empty state */}
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <File className="w-9 h-9" />
            <p>Upload your resume and click "Review Resume" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ReviewResume