
import Banner from "../../components/banner/index.jsx";
import CategorieHome from "../../components/Categories/index.jsx";
import FormHome from "../../components/FormHome/index.jsx";
import ProductsHome from "../../components/products/index.jsx";
function HomePage (){
    return(
        <div>
          <Banner />
          <CategorieHome />
          <FormHome />
          <ProductsHome />
        </div>
    )
}

export default HomePage;


