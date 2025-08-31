import React, { useState } from "react"
import { Edit, Hash, Sparkles } from "lucide-react"

const BlogTitles = () => {
  const categorylength = [
    { text: "General" },
    { text: "Technology" },
    { text: "Business" },
    { text: "Health" },
    { text: "Lifestyle" },
    { text: "Education" },
    { text: "Travel" },
    { text: "Food" },
  ]

  const [selectedLength, setSelectedLength] = useState(categorylength[0])
  const [input, setInput] = useState("")

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
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>

        {/* Article Topic */}
        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="The future of artificial intelligence is..."
          required
        />

        {/* Article Category */}
        <p className="mt-4 text-sm font-medium">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {categorylength.map((item, index) => (
            <span
              key={index}
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer transition 
                ${
                  selectedLength.text === item.text
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-slate-700 border-gray-300"
                }`}
            >
              {item.text}
            </span>
          ))}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 
             bg-gradient-to-r from-[#226BFF] to-[#65ADFF] 
             text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <Hash className="w-5" />
          Generate Title
        </button>
      </form>

      {/* Right col */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Generated titles</h1>
        </div>

        {/* Placeholder / Empty state */}
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Hash className="w-9 h-9" />
            <p>Enter keywords and click “Generate titles” to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogTitles

