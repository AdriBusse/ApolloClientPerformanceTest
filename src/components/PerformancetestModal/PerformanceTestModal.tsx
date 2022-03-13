import React, { useState } from 'react'


type Props = {
    children: any
}
const PerformanceTestModal = ({ children }: Props) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                crossOrigin="anonymous"
            ></link>
            <div onClick={() => setShowModal(!showModal)} className="fixed flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full cursor-pointer right-3 bottom-3">
                <i className="text-white fas fa-tachometer-alt h-4 w-4" />
            </div>
            {showModal &&
                <div
                    className="fixed inset-0 w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50"
                    id="my-modal"
                >
                    <div
                        className="relative p-5 mx-auto bg-white border rounded-md shadow-lg top-20 w-96"
                    >
                        <div className="mt-3 text-center">
                            <p onClick={() => setShowModal(false)} className="absolute text-gray-500 cursor-pointer top-2 right-2">X</p>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">GraphQL Client PerformanceTest!</h3>
                            <div className="py-3 mt-2 px-7">
                                {children}
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    id="ok-btn"
                                    onClick={() => setShowModal(false)}
                                    className="w-full px-4 py-2 text-base font-medium text-white bg-green-500 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}

export default PerformanceTestModal