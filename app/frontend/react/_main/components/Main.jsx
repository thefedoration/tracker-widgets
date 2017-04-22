import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// import style from './Main.scss';

// class Main extends Component {
//     render() {
//         return (
//             <div className="container">
//               <div className="row">
//                 <div className="col-sm-12">
//                     <h1>hello world</h1>
//                 </div>
//               </div>
//             </div>
//         );
//     }
// }

// function mapStateToProps (state) {
//     return {
//         // groups: state.groups.groups,
//         // activeGroup: state.groups.activeGroup,
//         // loading: state.groups.isFetching,
//     };
// }

// export default connect(mapStateToProps, {})(Main);


export default class Main extends Component {
  render() {
      return (
        <h1>hello world</h1>
      )
    }
}
