export default function Home() {
  return (
    // height = screen - header.height - margin.height ** 2
    <div className="flex flex-col overflow-hidden m-8 gap-8" style={{ height: 'calc(100vh - 96px - 64px)' }}>

      {/* Prompt Title */}
      <div>
        <h1 className="text-3xl font-bold">
          Rank your
        </ h1>
        <h1 className="text-3xl text-purple-700 font-bold">
          favorite cities
        </h1>
      </div>


      {/* Rank Area */}
      <div className="flex-1 mb-4 bg-gray-200 p-4 overflow-auto px-8">
        This is where things will be ranked.
      </div>

      {/* Submit Button */}
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
        Submit
      </button >
    </div >
  );
}
