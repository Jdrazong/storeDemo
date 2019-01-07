import React from 'react';

const withConditionalRender = WrappedComponent => ({ shouldRender, ...props }) => (
    shouldRender ? <WrappedComponent {...props} /> : null
);

export default withConditionalRender;
