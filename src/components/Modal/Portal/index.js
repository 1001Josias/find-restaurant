import { createPortal } from "react-dom";

const Portal = ({children})=>{
   return (
      createPortal(children,document.querySelector('#modal-root'))
   )
}

export default Portal