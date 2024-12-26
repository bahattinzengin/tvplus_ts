
const DetailSkeleton = () => {
    return (

        <div role="status" className=" flex m-0 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse flex-col md:items-center w-screen h-[460px]">


            <div
                style={{
                    backgroundImage: 'url(http://www.w3.org/5000/svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    width: '100%'
                }}
                className="flex items-center justify-center w-[500px] h-48 bg-gray-900 rounded sm:w-96 dark:bg-gray-700">
                <div className=" w-1/2 ">
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-3/4"></div>
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-3/4"></div>
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-9 w-1/4"></div>
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-3/4"></div>
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-3/4"></div>
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-3/4"></div>
                </div>

            </div>
            <div className="flex w-full justify-between h-10">
                <div className="flex flex-col  items-center justify-center w-1/4  h-48 bg-gray-900 rounded sm:w-96 dark:bg-gray-700 mt-10" >
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-3/4"></div>
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-3/4"></div>
                </div>

                <div className="flex flex-col  items-center justify-center w-1/4  h-48 bg-gray-900 rounded sm:w-96 dark:bg-gray-700 mt-10" >
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-3/4"></div>
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-3/4"></div>
                </div>

                <div className="flex flex-col  items-center justify-center w-1/4  h-48 bg-gray-900 rounded sm:w-96 dark:bg-gray-700 mt-10" >
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-3/4"></div>
                    <div className="h-2 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-3/4"></div>
                </div>

            </div>


        </div>

    )
}

export default DetailSkeleton