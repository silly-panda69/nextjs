import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound  = () => {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },[3000]);
    },[]);
    return (
        <div className="not-found">
            <h1>Oooops....</h1>
            <h1>This page cannot be found!</h1>
            <p>Go back to the <Link href={"/"}>Homepage</Link></p>
        </div>
    );
}
 
export default  NotFound;