import { Button, Label, Modal, TextInput } from "flowbite-react"
import { useState } from "react"

function Edit({todoid}) {
  const [showmodal,setshoemodal]=useState(false);
  const [descriptions,setdes]=useState('')
  const id=todoid;
  
  const handlechange=(e)=>{
    setdes(e.target.value);
  }
  
  const handlesubmit=async ()=>{
    try{
      const res=await fetch(`http://localhost:3000/api/v1/update/todo/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({descriptions})
      })
      const data=await res.json();
      console.log(data);

    }catch(error){
      console.log(error)
    }
  }







  return (
<div>
<Button onClick={()=>setshoemodal(true)} >Edit</Button>
<Modal show={showmodal} onClose={()=>setshoemodal(false)} >
  <Modal.Header>Edit your descriptions</Modal.Header>
  <Modal.Body>
    <form onSubmit={handlesubmit} className="flex gap-2 " >
      <div className="flex flex-col gap-2 w-full ">
      <Label value="Edit the description of your todo 🖋️🖋️" />
      <TextInput id="description" type="text" placeholder="want to edit...!!" required onChange={handlechange} value={descriptions}   />
      </div>
      <Button type="submit" className="w-fit h-fit mt-7 " gradientMonochrome={'cyan'} >Edit</Button>
    </form>
  </Modal.Body>
</Modal>

</div>  )
}

export default Edit