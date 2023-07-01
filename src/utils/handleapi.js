import axios from "axios"
const baseurl = "http://localhost:5000"

export const getalltodo = (settodo) =>{
    axios.get(baseurl).then(({data})=>{
        console.log("data --->",data)
        settodo(data)
    })
}
export const addtodo = (text,settext,settodo)=>{
        axios.post(`${baseurl}/save`,{text})
        .then((data) =>{
            console.log(data)
            settext("")
            getalltodo(settodo)
        })
}
export const updatetodo = (todoid,text,settodo,settext,setisupdating)=>{
        axios.post(`${baseurl}/update`,{_id:todoid,text})
        .then((data) =>{
            setisupdating(false)
            settext("")
            getalltodo(settodo)
        })
        .catch((err)=> console.log(err))
}
export const deletetodo = (_id,settodo)=>{
        axios.post(`${baseurl}/delete`,{_id})
        .then((data) =>{
            console.log(data)
            getalltodo(settodo)
        })
        .catch((err)=> console.log(err))
}