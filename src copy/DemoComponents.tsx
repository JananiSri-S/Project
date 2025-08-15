import ai from "./download.jpg"
import styles from "./demo.module.css"
export default function Demo(){
    let a=400,b=500;
    console.log(a+b);
    let logo="https://www.cnet.com/a/img/resize/9a13e1e92a7b66cbff9db2934b3f66bf01a4afb6/hub/2023/08/24/821b0d86-e29b-4028-ac71-ef63ca020de8/gettyimages-1472123000.jpg?auto=webp&fit=crop&height=675&width=1200";
    let link="https://deepai.org/machine-learning-model/text2img" 
    return(
        <>
            <h1 className={styles.task}>
                Hello welcome
            </h1>
            <p className="text-bg-primary">
                {a},{b}
            </p>

            <img src={logo} alt="" height={a} width={b}/>

            <img src={ai} alt="" />

            <a href={link}>
                Deep AI
            </a>

            <ol>
                <li>
                    {Math.abs(-89)}
                </li>
                <li>
                    {Math.max(90,980,989)}
                </li>
                <li>
                    {Math.random()}
                </li>
            </ol>
        </>
    )
}