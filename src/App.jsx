function App()
{
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className=" flex flex-col sm:flex-row items-center justify-center  w-md  gap-2 p-8 sm:items-center m-4 rounded-2xl bg-gray-900 sm:gap-6 sm:p-4 shadow-xl">
          <img className="max-auto block h-44 rounded-full sm:mx-0 sm:w-44 sm:shrink-0" src="./src/assets/image.png" alt="" />
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-white sm:text-xl text-lg font-semibold">Abdul Rahman</p>
              <p className="font-medium text-gray-400 ">React Developer</p>
            </div>
            <div className=" flex justify-center sm:justify-start gap-3">
              <button className="border border-purple-100 cursor-pointer text-purple-600 transition delay-150 duration-200 ease-in-out hover:bg-purple-600 hover:text-white rounded-3xl px-3 py-2">Message</button>
              <button className="border border-purple-100 cursor-pointer text-purple-600 transition delay-150 duration-200 ease-in-out hover:bg-purple-600 hover:text-white rounded-3xl px-3 py-2">Contanct</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App