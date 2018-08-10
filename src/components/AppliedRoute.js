import React from 'react';
import { Route } from 'react-router-dom';

// export a function that accepts props from Routes component
export default ({
  component: C,
  props: cProps,
  ...rest
}) => (
  // function returns a Route component with props and a render function that returns the component passed through props from the Routes component
  <Route
    {...rest}
    render={(props) => <C {...props} {...cProps} /> }
  />
);
