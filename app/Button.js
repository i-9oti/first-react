import "./page.css";
export default function Button({buttonName , children = null}){
    return(
        
        <div className="Butt">{buttonName} {children}</div>
       
    );
}