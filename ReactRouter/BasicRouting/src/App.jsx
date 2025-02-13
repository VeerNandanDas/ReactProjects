import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom"; // Ensure "react-router-dom" is used, not "react-router"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Layout/>} >
            <Route path="/veer" element={<Veer />} />
            <Route path="/" element={<Landing />} />
            <Route path="/ashu" element={<Ashu />} />
            <Route path="/*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


function Layout(){
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  )
}

function Footer()
{
  return (
    <div>
      Footer
    </div>
  )
}



function Header(

){
  return(
    <div>
       <Link to="/veer">Go to Veer</Link> <br />
       <Link to="/ashu">Go to Ashu</Link>
    </div>
  )
}



function Landing() {
  return <h1>Welcome to the landing page</h1>;
}

function ErrorPage() {
  return <h1>Chal na Chutiye...</h1>;
}

function Ashu() {
  return <h1>Hi there Ashu!</h1>;
}

function Veer() {
  const navigate = useNavigate();

  function redirect() {
    navigate("/");
  }

  return (
    <div>
      <h1>You are in Veer page </h1>
      <button className="cursor-pointer" onClick={redirect}>
        {" "}
        Wnts to go back ?
      </button>
    </div>
  );
}

export default App;
