import { Button } from "flowbite-react"

function Delete({todoid}) {
  const id=todoid

  const handleclick=async ()=>{
    try{
      const res=await fetch(`http://localhost:3000/api/v1/delete/todo/${id}`,{
        method:"DELETE"
      })
      const data=await res.json();
      console.log(data);

    }catch(error){
      console.log(error)
    }
  }



  return (
    <Button onClick={handleclick} color="failure">Delete</Button>
  )
}

export default Delete