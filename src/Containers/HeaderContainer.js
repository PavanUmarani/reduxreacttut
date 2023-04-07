import { connect } from "react-redux";

import Header from "../Components/Header";
const mapStateToProps = (state) => ({
  data: state.cartItem,
});
const mapDispachToProps = (dispach) => ({
  
});

export default connect(mapStateToProps, mapDispachToProps)(Header);

// export default Home;
