import Home from "./pages/Home/Home";
import Magazine from "./pages/Magazine/Magazine";
import MagazineDesc from "./pages/MagazineDesc/MagazineDesc";
import Menu from "./pages/Menu/Menu";

let routes = [
    {path : '/', element : <Home />},
    {path : '/magazine', element : <Magazine />},
    {path : '/magazine/:magazineID',element : <MagazineDesc />},
    {path : '/menu' , element : <Menu />}
]

export default routes;