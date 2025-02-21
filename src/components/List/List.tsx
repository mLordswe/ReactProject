import "./List.scss"

type ListProps = {
    items: string[]
}



const List = ({items}:ListProps) => {
    return( <ul>
    {items.map((item)=> (<li>{item}</li>))}
    
    </ul>);    

}
export default List