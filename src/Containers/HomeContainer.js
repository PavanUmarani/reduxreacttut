import {connect} from 'react-redux';
import {addToCart} from '../Services/Actions/action'
import Home from "../Components/Home";
const mapStateToProps=state=>({

})
const mapDispachToProps=dispach=>({
    addToCartHandler:data=>dispach(addToCart(data))
})

export default connect(mapStateToProps,mapDispachToProps)(Home)

// export default Home;