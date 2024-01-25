import styles from '@/styles/Ninjas.module.css'
import Link from 'next/link';

export const getStaticProps=async()=>{
    const url="https://jsonplaceholder.typicode.com/users";
    const res=await fetch(url);
    const data=await res.json();
    
    return {
        props: {ninjas: data}
    }
}

const Ninjas = ({ninjas}) => {
    return ( 
        <div>
            <h1>All Ninjas</h1>
            {ninjas && ninjas.map(ninja=>(
                <Link href={'/ninjas/'+ninja.id} className={styles.single} href={'/ninjas/'+ninja.id} key={ninja.id}>
                    <h3>{ninja.name}</h3>
                </Link>
            ))}
        </div>
    );
}
 
export default Ninjas;