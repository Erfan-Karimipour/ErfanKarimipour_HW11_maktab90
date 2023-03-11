import {El} from "./ElementCreator"

export const header=()=>{ 
    return(
El({
    element:`header`,
    className:`text-white bg-blue-700 w-full  flex justify-between text-3xl p-1 pb-2`,
    child:[
        El({
            element:`p`,
            child:[
                El({
                    element:`ion-icon`,
                    name:`list-outline`,
                    className:`align-bottom mr-2`,
                }),
                El({
                    child:`My To-Do List`
                })
            ]
        }),
        El({
            element:'div',
            className:'flex pt-1',
            child:[
                El({
                    element:`div`,
                    className:`bg-blue-400 pb-1 pl-3 rounded-md`,
                    child:[
                        El({
                            element:`ion-icon`,
                            name:"search-outline",
                            className:"align-bottom",
                        }),
                        El({
                            element:`input`,
                            type:"search",
                            placeholder:"Search",
                            className:"bg-blue-400 text-white placeholder-gray-300 outline-none SearchInput"
                        })
                    ]
                }),
                El({
                    element:`ion-icon`,
                    name:"funnel",
                    className:"p-1 mx-1 cursor-pointer Filter"
                }),
                El({
                    element:`ion-icon`,
                    name:"add-circle",
                    className:"p-1 mx-1 cursor-pointer Add"
                })
            ]
        })
    ]
}))};