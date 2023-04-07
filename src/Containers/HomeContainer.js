import {connect} from 'react-redux';
import {addToCart,removeToCart} from '../Services/Actions/action'
import Home from "../Components/Home";
const mapStateToProps=state=>({
    data:state.cartItem
})
const mapDispachToProps=dispach=>({
    addToCartHandler:data=>dispach(addToCart(data)),
    removeToCartHandler:data=>dispach(removeToCart(data))
})

export default connect(mapStateToProps,mapDispachToProps)(Home)

// export default Home;