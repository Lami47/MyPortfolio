import "../Css/Home.css"
import '../Components/Items'
import ItemList from "../Components/Items"

const userData = {   
    name: 'Liam Rosenberg',
    Age: '22',
}

export default function Home(){
    return(
        <body>
            <div className="Grid0">
                <div className="SideBar">
                    <div className="TopOfSideBar">
                        <img className="Icon" src="https://i.postimg.cc/SN4ChRHv/Whats-App-Image-2024-11-19-at-10-35-07-f60543c5.jpg" alt="Brb">
                        </img>
                        <h3 className="text-heading">
                            <strong>
                                Liam Rosenberg
                            </strong>
                        </h3>
                    </div>
                    <div className="BottomOfSideBar">
                        <div className="MyStats">
                            <div>
                                Username:
                            </div>
                            <div>
                                Age:
                            </div>
                            <div>
                                Projects:
                            </div>
                            <div>
                                Username:
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MainScreen">
                    {/* floating navbar- only appears when scrolling down */}
                    <div className="MainNav">
                        <button className="grid-item1">
                            Home
                        </button>
                        <button className="grid-item2">
                            About Me
                        </button>
                        <button className="grid-item3">
                            Past Projects
                        </button>
                        <button className="grid-item4">
                            Write a review
                        </button>
                    </div>
                    {/* Main pic with description */}
                    <div className="MainImg">
                        <img className="BackgroundImg" src="https://i.postimg.cc/Bnyfd5LV/OIP-6.jpg" alt="" >
                        </img>
                        <div className="OverBackground">
                            <h1>
                                <strong>
                                    Welcome to Liam's Portfolio
                                </strong>
                            </h1>
                            <p>

                            </p>
                        </div>
                    </div>
                    {/* grid for index => exp(links to my journey in the tech industry), projects completed() */}
                    <div className="Grid1">
                        <div className="cards">
                            {/* mapping throughout the list of items,imgs and links. using a component */}
                            Current experience
                        </div>
                        <div className="cards">
                            Total projects completed
                        </div>
                        <div className="cards">
                            Total components made
                        </div>
                        <div className="cards">
                            Total components made
                        </div>
                    </div>
                    {/* shows skills that 3 skills i do well */}
                    <div className="SlideShow">
                        {/* turning into a mapping later on. list of skills: text,img. create a slider(3 columns with 5-10 skills offered) */}
                        <ItemList/>
                    </div>
                    {/* shows skills that 3 skills i do well */}
                    <div>
                        {/* turning into a mapping later on. list of past projects: text,img. create a slider(3 columns with 5-10 skills offered) */}
                        <h2 className="Heading">

                        </h2>
                        <div className="Cards1">
                            {/* an image of what i've done in the past */}
                            <img src=" " alt="Currently on holiday">
                            
                            </img>
                            {/* short description */}
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}