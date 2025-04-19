export default function TodoApp(){
    return(
    <>
    <div className="container">
        <Header />
        <Form />
        <List />
    </div>
    </>

    )
}

function Header(){
    return <h1>Todo App uygulaması ve react tekrarı</h1>
}

function Form(){
    return(
        <form>
            <input type="text"  placeholder="eleman ekle"/>
            <select>
                <option value="">Seçiniz</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button type="submit">Ekle</button>

        </form>
    )
}

function List(){
    return(
        <ul>
            <Item />
            <Item />
        </ul>
    );
}

function Item(){
    return(
        <li>
            <span>Yumurta</span>
            <button>X</button>
        </li>
    )
}