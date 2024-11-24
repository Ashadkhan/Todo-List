const listcontaner=document.querySelector("#list-contaner")
const inputdata=document.querySelector("#inputadd");
const addbtn=document.querySelector("#add")
let todolist=[];
setdata=()=>{
    const item=JSON.stringify(todolist)
    localStorage.setItem("list",item)
}
getdata=()=>{
const val=JSON.parse(localStorage.getItem("list"));
return val
}
addbtn.addEventListener("click",()=>{
    let  data=inputdata.value   
    if (data==="") {
        alert("first enter some task")
    }
    else
    {
        todolist.push(data);
        setdata()
        let li=document.createElement("li");
        li.textContent=data
        listcontaner.appendChild(li);
        
        let span=document.createElement("span")
        li.appendChild(span);
        li.addEventListener("click",()=>{
            li.classList.toggle("checked")
            li.classList.toggle("unchecked")
        })
        inputdata.value=""
        setdata();
        todolist.forEach((element,index)=>{

            span.addEventListener("click",()=>{
                const updatedData = getdata();
                updatedData.splice(index, 1); 
                listcontaner.removeChild(li);
                todolist.splice(index, 1); 
                setdata(); 
            })
        })
    }
    setdata();
})


window.addEventListener("load",()=>{

    const stored_data=getdata();
    stored_data.forEach((element,index) => {
        let li=document.createElement("li");
        li.textContent=element
        listcontaner.appendChild(li);
        
        let span=document.createElement("span")
        li.appendChild(span);
        li.addEventListener("click",()=>{
            li.classList.toggle("checked")
            li.classList.toggle("unchecked")
        })
        todolist.push(element)
        setdata();
        span.addEventListener("click",()=>{
            const updatedData = getdata();
            updatedData.splice(index, 1); 
            listcontaner.removeChild(li);
            todolist.splice(index, 1); 
            setdata(); 
        })
})
});