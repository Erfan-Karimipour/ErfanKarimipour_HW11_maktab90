import {El} from "./ElementCreator"

export const main=()=>{ 
    return(
El({
    element:`main`,
    child: El({
element:`table`,
className:"table w-full",
child:[
    El({
        element:`thead`,
        child: El({
            element:`tr`,
            child:[
                El({
                    element:`td`,
                    className:"border-2 font-bold px-5 py-2 w-1/5",
                    child:`Task Name`
                }),
                El({
                    element:`td`,
                    className:"border-2 font-bold px-5 py-2 w-1/5 text-center",
                    child:`Priority`
                }),
                El({
                    element:`td`,
                    className:"border-2 font-bold px-5 py-2 w-1/5 text-center",
                    child:`Status`
                }),
                El({
                    element:`td`,
                    className:"border-2 font-bold px-5 py-2 w-1/5 text-center",
                    child:`Deadline`
                }),
                El({
                    element:`td`,
                    className:"border-2 font-bold px-5 py-2 w-1/5 text-center",
                    child:`Actions`
                }),
            ]
        })
    }),
]
})
})
)};