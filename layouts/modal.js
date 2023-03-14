import {El} from "./ElementCreator"

export const modal=()=>{ 
    return(
        El({
            element:`section`,
            className:`hidden hiddenModal`,
            child:[
                El({
                    element:`div`,
                    className:"w-full h-full opacity-30 bg-black absolute cursor-pointer ModalBg"
                }),
                El({
                    element:`div`,
                    className:"w-1/3 h-3/5 bg-white rounded-md absolute ",
                    child:[
                        El({
                            element:`p`,
                            className:"p-3 text-2xl font-bold border-b-2 border-gray-200",
                            child:`New Task`
                        }),
                        El({
                            element:`input`,
                            type:"text",
                            placeholder:"Task Name",
                            className:"p-3 border-2 outline-blue-400 w-11/12 h-12 flex m-auto mt-3 mb-16 text-xl textInput"
                        }),
                        El({
                            element:`div`,
                            className:" justify-around mb-12",
                            child:[
                                El({
                                    element:'select',
                                    className:"w-1/4 p-2 justify-around border-2 border-gray-400 rounded-md outline-blue-400",
                                    child:[
                                        El({
                                            element:`option`,
                                            child:`Priority`
                                        }),
                                        El({
                                            element:`option`,
                                            child:`Low`
                                        }),
                                        El({
                                            element:`option`,
                                            child:`Medium`
                                        }),
                                        El({
                                            element:`option`,
                                            child:`High`
                                        }),
                                    ]
                                }),
                                El({
                                    element:'select',
                                    className:"w-1/4 p-2 justify-around border-2 border-gray-400 rounded-md outline-blue-400",
                                    child:[
                                        El({
                                            element:`option`,
                                            child:`Status`
                                        }),
                                        El({
                                            element:`option`,
                                            child:`To-Do`
                                        }),
                                        El({
                                            element:`option`,
                                            child:`Doing`
                                        }),
                                        El({
                                            element:`option`,
                                            child:`Done`
                                        }),
                                    ]
                                }),
                                El({
                                    element:`input`,
                                    type:"date",
                                    className:"border-2 border-gray-400 rounded-md outline-blue-400 p-2"
                                }),
                                El({
                                    element:`input`,
                                    type:"text",
                                    placeholder:"Details (Optional)",
                                    className:"w-11/12 border-2 flex m-auto h-48 rounded-md p-3 outline-blue-400 mb-12"
                                }),
                                El({
                                    element:`div`,
                                    className:"flex border-t-2 p-3 justify-between",
                                    child:[
                                        El({
                                            element:`button`,
                                            className:"justify-start border-2 border-blue-200 text-blue-500 p-2 px-3 rounded-md cursor-pointer Cancel",
                                            child:`Cancel`
                                        }),
                                        El({
                                            element:`button`,
                                            className:"justify-end border-2 bg-blue-600 text-white p-2 px-3 rounded-md cursor-pointer Save",
                                            child:`Save`
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
)};