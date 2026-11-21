import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
// import Home from './home'
// import Navbar from './navbar'
// import Footer from './footer'
// import Product from './product'
// import Student from './student'
// import Employe from './employ'
// import Card from './cards'
// import pizza from './assets/pizza.jpg'
// import pizza1 from './assets/pizza1.jpg'
// import pizza2 from './assets/pizza2.jpg'
// import Child from './child'
// condition render
function App(){
  const[isLoggedIN,setIsLoggedIN]=useState(false);
  const[isAdmin,setIsAdmin]=useState(false);
  return(
    <div>
      <button onClick={()=>setIsLoggedIN(!isLoggedIN)}>
        Login:{isLoggedIN? "on":"off"}
      </button>
      <button onClick={()=>setIsAdmin(!isAdmin)}>
        Admin:{isAdmin? "on":"off"}
      </button>
      <h1>Welcome to App</h1>
      {isLoggedIN || isAdmin && <h1>Welcome Admin Deepu!!
        Admin pnel open!</h1>}
    </div>
  )
}
// function App(){
//   const[isLoggedIN,setIsLoggedIN]=useState(false);
//   const[isAdmin,setIsAdmin]=useState(false);
//   return(
//     <div>
//       <button onClick={()=>setIsLoggedIN(!isLoggedIN)}>
//         Login:{isLoggedIN? "on":"off"}
//       </button>
//       <button onClick={()=>setIsAdmin(!isAdmin)}>
//         Admin:{isAdmin? "on":"off"}
//       </button>
//       <h1>Welcome to App</h1>
// //       {isLoggedIN && isAdmin && <h1>Welcome Admin Deepu!!
//         Admin pnel open!</h1>}
//     </div>
//   )
// }
// function App(){
//   const isLoggedIN=true
//   return(
//     <div>
//       <h1>Welcome to App</h1>
//       {isLoggedIN && <h1>Welcome Deepu!!have yo login</h1>}
//     </div>
//   )
// }
// function App(){
//   const[isLoggedIN,setIsLoggedIN]=useState(false)
//   function clickable(){
//     setIsLoggedIN(!isLoggedIN)
//   }
//   return(
//     <div>
//       <h1>{isLoggedIN ? "Welcome Deepu!!":"Please login"}</h1>
//       <button onClick={(clickable)}>{isLoggedIN?"logout":"login"}</button>
//     </div>
//   )
// }
// function App(){
//   const isLoggedIN=false;
//   let display;
//   if(isLoggedIN === true){
//     display="logout"
//   }else{
//     display="login"
//   }
//   function cilicable(){
//     alert("pls login")
//   }
//   return(
//     <div>
//       <button onClick={(cilicable)}>{display}</button>
//     </div>
//   )
// }
// function App(){
//   const isLoggedIN=true;
//   let display;
//   if(isLoggedIN === true){
//     display="Welcome to conditional render page!!!"
//   }else{
//     display="Pls login"

//   }
//   return(
//     <div>
//       {display}
//     </div>
  // )
// }

// object state
// function App(){
//   const[person,statePerson]=useState({name:"sri",age:22,city:"chenai"})
//   return(
//     <div>
//     <p>{person.name}</p>
//     <p>{person.age}</p>
//     <p>{person.city}</p>

//     </div>
    
    
//   );
// };
// array state
// function App(){
//   const[list,setList]=useState(["Deepu","Ravi","Priya"])
//   const[name,setName]=useState("")
//   return(
//     <div>
//       <h2>Friends List</h2>
//       {list.map((name)=><p>{name}</p>)}
//       <input type="text" placeholder='enter your names to add' 
//       value={name} onChange={(e)=>setName(e.target.value)}/>
//       <button onClick={()=> setList([...list,name])}></button>
//     </div>
  
// string state
// function App(){
//   const[name,setName]=useState("");
//   return(
//     <div>
//       <input type='text' placeholder="type here your name"
//       value={name} onChange={(e)=> setName(e.target.value)}/>
//       <h1>hello {name === "" ? "Guest":name}! welcome</h1>

//     </div>
//   );
// }
// function App(){
//   const[name,setName]=useState(" ");
//   return(
//     <div>
//       <input type="text" placeholder="what is ur name" value={name}
//       onChange={(e)=> setName(e.target.value)}/>
//       <h1>Hello{name}welcome reactjs learning path</h1>
//     </div>
//   )
// }

// boolean state
// function App(){
//     const[dark,setdark]=useState(false)
//     return(
//       <div style={{
//         backgroundColor:dark ? "black":"white",
//         color:dark ? "white":"black",
//         height:"100vh",
//         textAlign:"center",
//         padding:"20px"
//       }}>
//         <h1>Dark Mode /LightMode</h1>
//         <p>Welcome to my website</p>
//         <button onClick={()=>setdark(!dark)}>
//           {dark ? "LightMODE":"DarkMode"}
//         </button>

    //   </div>
    // );
  
// number state
// function App(){
//   const[count,setCount]=useState(0)
//   return(
//     <div>
      
//       <Child count={count} counter={setCount}/>
//     </div>

  // ) 

// function App() {
//   const[count,setCount]=useState(0);
//   function click(){
//     setCount(count+1)
//     console.log(setCount)
//   }
//   return(
//     <div>
//       <p>{count}</p>
//       <button onClick={(click)}>click</button>
//     </div>
//   )

    // <div>
    //   <h1>PIZZA SHOP</h1>
    // <div className='shop'>
    //   <Card pizza={pizza} title="Veg pizza" prize="300"/>
    //   <Card pizza={pizza1} title="slice pizza" prize="380"/>
    //   <Card pizza={pizza2} title="chicken pizza" prize="500"/>
    //   </div>
  //   </div>
  // )
  
    // <div>
    //   <Employe name="deepika" age={21} subject="python" isemployee={true}
    //   skills={["python","java"]} city="hyd"/><br></br>
    //   <Employe  age={22} subject="social" isemployee={true}
    //   skills={["js","social"]} city="gnt"/><br></br>
    //   <Employe name="deepu" age={23} subject="IT" isemployee={true}
    //   skills={["ss","jd"]} city="nellore"/><br></br>
    // </div>
    // <div>
    //   <Student name="deepu" age={21} course="Python" Collage="KHIT"/>
    //   <Student name="sri" age={23} Course="AI" Collage="KITS"/>
    //   <studnet name="mom" age={34} Course="DataScience" Collage="VIT"/>
    // </div>
    
    // <div>
    //   <Product name="Laptop" price={50000}/>
    //   <Product name="Mobile" price={30000}/>
    //   <Product name="Car" Price={1000000}/>
    //   <Product name="Table" price={500}/>
    // </div>
    // <div>
    //   <Home/>
    //   <Navbar/>
    //   <Card/>
    //   <Footer/>

    // </div>
    
    
  
// };
   
export default App 