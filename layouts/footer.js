import {El} from "./ElementCreator"

export const footer=()=>{ 
    return(
El({
    element:`footer`,
    className:"flex justify-end",
    child:[
        El({
            element: `p`,
            className:`m-1`,
            child:`Rows per page:`
        }),
        El({
            element:`select`,
            className:"outline-none m-1 mr-12",
            child:[
                El({
                    element:`option`,
                    child:`All`
                }),
                El({
                    element:`option`,
                    child:`10`
                }),
                El({
                    element:`option`,
                    child:`25`
                }),
                El({
                    element:`option`,
                    child:`50`
                }),
            ]
        }),
        El({
            element:`div`,
            className:"ShowNumber m-1 mr-3",
            child:`0-0 of 0`
        })
    ]
})
)};