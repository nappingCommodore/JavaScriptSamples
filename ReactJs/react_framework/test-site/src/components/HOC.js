import React from 'react';

const higherOrderComponent = (WrappedComponent) => {
 class HOC extends React.Component {
     constructor(props) {
            super(props);
            this.state = {
                name: 'React'
            };
        }
   render() {
     return <WrappedComponent />;
   }
 }
 return HOC;
};

const MyComponent = () => <div>My Component</div>;

const SimpleHOC = higherOrderComponent(MyComponent);

const App = () => <SimpleHOC />;
