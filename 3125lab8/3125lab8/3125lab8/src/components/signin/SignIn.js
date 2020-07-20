import React from 'react';


class SignIn extends React.Component {
  render() {
return (
<div className='Signin'>
<div className='sign\_inner'>
<h1>{this.props.text}</h1>
<button onClick={this.props.closePopup}>close me</button>
</div>
</div>
);
}
}



export default SignIn;
