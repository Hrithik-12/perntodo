import { TextInput, Label, Button, Spinner } from "flowbite-react";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import Listingalltodos from "./components/listingalltodos";
function App() {
  const [descriptions,setDescriptions]=useState('');
  const [succ,setsucc]=useState(null);
  const [loading,setloading]=useState(false)
  const handlechange=(e)=>{
  
    setDescriptions(e.target.value);
  }
  const handlesubmit=async (e)=>{
    e.preventDefault();
    try{
      setloading(true)
      const res=await fetch('http://localhost:3000/api/v1/create/todo',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({descriptions})
      });
      const data=await res.json();
      if(res.ok){
        setloading(false)
        setDescriptions(data.descriptions);
        setsucc('TO DO ADDED 😊😊');
      }
      else{
        setloading(false)
        setsucc("Some error occured");
      }
      console.log(data);

    }catch(error){
      console.log(error)
    }
  }
 
  return (
    <div className="max-w-6xl mx-auto min-h-screen  ">
      <h1 className=" text-center  text-2xl font-serif font-semibold text-black uppercase mt-5">
        pern to do app
      </h1>
      <div className="w-[70%] mx-auto mt-10  ">
        <form className="w-full  " onSubmit={handlesubmit} >
          <div className="flex w-full items-center gap-2 ">
            <div className="flex flex-col gap-1 w-[90%] ">
              <Label value="Your To do Descriptions" className="mb-4" />

              <TextInput
                id="descriptions"
                type="text"
                placeholder="Enter Your task"
                required
                onChange={handlechange}
                value={descriptions}
              />
            </div>
            <Button type="submit" disabled={loading} gradientDuoTone={'cyanToBlue'} outline className="w-fit h-fit mt-10 ">{ loading ? <Spinner color="warning" aria-label="Warning spinner example"/>:"ADD" }</Button>
          </div>
          {
            succ && <Alert className=" w-[40%] h-[3rem] mt-4   " color={'success'} ><span className="text-sm text-cyan-800 font-serif font-semibold " >{succ}</span></Alert>
          }
        </form>
      </div>
      <Listingalltodos/>
    </div>
  );
}

export default App;
