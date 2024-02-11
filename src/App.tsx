function App() {

  return (
    <>
      <div className='bg-gray-50 flex justify-center w-full min-h-screen'>
        <div className='flex items-center justify-center'>
          <div className='bg-white rounded-md p-5 shadow-lg'>
            <h4 className='font-semibold pb-2 text-2xl'>
              Deploy your GitHub Repo
            </h4>
            <div className='text-sm pb-6'>
              Enter the URL of your GitHub Repository to deploy it:
            </div>
            <div className='flex flex-col'>
              <div className='text-sm font-medium pb-2'>
                GitHub Repository URL:
              </div>
              <input type="text" placeholder='Repo URL' className='border border-black px-2 py-1 rounded' />
              <button className='text-white bg-blue-1000 text-white p-1 rounded mt-2'>Deploy</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
