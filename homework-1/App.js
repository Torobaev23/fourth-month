function Profile() {
    return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Jonson"/>;
}
function Frame1() {
    return (
        <div>
            <h2>React</h2>
            <p>React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQ6ZmsiCzSC16bStr1KjZNcIBW5hAMa1ek6xoNeSSw5wQouq_N7dQCxlxI02TIeZk1e0&usqp=CAU" alt="React"/>;
        </div>
    )
}
function Frame2() {
    return (
        <div>
            <h3>Angular</h3>
            <p>Angular — открытая и свободная платформа для разработки веб-приложений, написанная на языке TypeScript, разрабатываемая командой из компании Google</p>
            <img src="https://habrastorage.org/files/8bc/360/ba3/8bc360ba3d7f48fb8244112d5a5814e0.png" alt="Angular"/>;
        </div>
    )
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Frame1 />
            <Frame2 />
        </section>
    );
}