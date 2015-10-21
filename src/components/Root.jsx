import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts } from '../actions/ProductActions';

class Root extends React.Component {

  componentDidMount() { 
    this.props.actions.getProducts();
  }

	render() {
    const {
      products,
      isFetching,
      isFetchingError
    } = this.props;

    if( isFetching ) {
      return <div>FETCHING</div>;
    } else if ( isFetchingError ) {
      return <div>ERROR IN FETCHING</div>;
    } else if ( !products.data.length ) {
      return <div>NO DATA RETRIEVED</div>; 
    }

		return (
			<div>
			 {this.props.products.data.map((product, i) => {
        return (<div key={i}>{product.name}</div>);
       })}
			</div>
		);
	}
}

const mapStateToProps = state => ({
  products: state.products.collection,
  isFetching: state.products.isFetching,
  isFetchingError: state.products.isFetchingError
});

const mapActionToProps = dispatch => ({
  actions: bindActionCreators({ getProducts }, dispatch)
})

export default connect(mapStateToProps, mapActionToProps)(Root);