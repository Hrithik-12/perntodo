import { Button, Modal } from "flowbite-react"
import {  useState } from "react"

function Delete({todoid}) {
  const id=todoid
  const [showmodel,setshoemodel]=useState(false)
  



  const handleclick=async ()=>{
    try{
      const res=await fetch(`http://localhost:3000/api/v1/delete/todo/${id}`,{
        method:"DELETE"
      })
      if(res.ok){
        const data=await res.json();
      setshoemodel(false)
      console.log(data);
      window.location.reload();
      }

    }catch(error){
      setshoemodel(false)
      console.log(error)
    }
  }

  



  return (
<div>
<Button onClick={()=>setshoemodel(true)} color="failure">Delete</Button>
<Modal show={showmodel} onClose={()=>setshoemodel(false)} >
  <Modal.Header>Delete</Modal.Header>
  <Modal.Body>Are you sure to delete your todo</Modal.Body>
  <Modal.Footer>
    <Button onClick={handleclick} >yes</Button>
    <Button onClick={()=>setshoemodel(false)} >No</Button>
  </Modal.Footer>
</Modal>

</div>  )
}

export default Delete