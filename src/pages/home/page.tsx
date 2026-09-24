import { Button } from "@/components/ui/button";
import Navbar from "@/src/components/Navbar";

export default function Home() {
  return (
   <div className="w-[100%]">
    <Navbar />
    <h1>Hello world!</h1>
   <Button>Click me</Button>
   </div>
  )
}