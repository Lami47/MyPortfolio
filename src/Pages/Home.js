import "../Css/Home.css"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getDatabase, ref, get } from "firebase/database";
    
// Initialize Firestore
const db = getFirestore(app);

// Assuming the user ID is stored in a variable, for example, after the user logs in
const userId = "user-123";  // You'd typically get this from the authenticated user

// Get the user document from Firestore
const userDocRef = doc(db, "users", userId);
const userDocSnapshot = await getDoc(userDocRef);

if (userDocSnapshot.exists()) {
// If the document exists, get the username
const username = userDocSnapshot.data().username;
console.log('Username from Firestore:', username);
} else {
console.log('No such user!');
}

const firebaseConfig = {
  apiKey: "AIzaSyBBomfKgw527IwFybOdFjaw7AwIbM4pxKY",
  authDomain: "myportfolio-f9a26.firebaseapp.com",
  projectId: "myportfolio-f9a26",
  storageBucket: "myportfolio-f9a26.firebasestorage.app",
  messagingSenderId: "1037516038850",
  appId: "1:1037516038850:web:0d13b5af827f2c5334515b",
  measurementId: "G-C7Y1HQSWVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Home(){
    return(
        <body>
            <div className="Grid0">
                <div className="SideBar">
                    <div className="TopOfSideBar">
                        <img src="" alt="a">
                        </img>
                        <h3 className="text-heading">
                            <strong>
                                Liam Rosenberg
                            </strong>
                        </h3>
                    </div>
                    <div className="BottomOfSideBar">
                        Username: {usernameSnapshot}
                    </div>
                </div>
                <div className="MainScreen">
                    {/* floating navbar- only appears when scrolling down */}
                    <div className="MainNav">

                    </div>
                    {/* Main pic with description */}
                    <div className="MainImg">

                    </div>
                    {/* grid for index => exp(links to my journey in the tech industry), projects completed() */}
                    <div className="Grid1">
                        <div>
                            {/* mapping throughout the list of items,imgs and links. using a component */}
                        </div>
                    </div>
                    {/* shows skills that 3 skills i do well */}
                    <div>
                        {/* turning into a mapping later on. list of skills: text,img. create a slider(3 columns with 5-10 skills offered) */}
                        <h2 className="Heading">

                        </h2>
                        <div className="Cards0">
                            {/* an image of what i've done in the past */}
                            <img src=" " alt="Currently on holiday">
                            
                            </img>
                            {/* short description */}
                        </div>
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