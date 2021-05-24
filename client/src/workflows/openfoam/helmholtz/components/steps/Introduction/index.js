import React from 'react';
import PropTypes from 'prop-types';

const staticContent = `
<div style='padding: 0 30px;'>
    <h2>Introduction</h2>
    <p>OpenFOAM is a free, open source computational fluid dynamics (CFD) software package released by the OpenFOAM Foundation. It has a large user base across most areas of engineering and science, from both commercial and academic organisations. OpenFOAM has an extensive range of features to solve anything from complex fluid flows involving chemical reactions, turbulence and heat transfer, to solid dynamics and electromagnetics.</p>

    <p><a style="text-decoration: underline;" href="http://openfoam.org/resources/" target="_blank">Find out more</a></p>
</div>

`;

class Introduction extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const DocumentationHTML = this.props.DocumentationHTML;
    console.log('staticContent', staticContent);
    return (
      <div>
        <DocumentationHTML staticContent={staticContent} />
      </div>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
Introduction.propTypes = {
  DocumentationHTML: PropTypes.func,
};
/* eslint-enable */

Introduction.defaultProps = {
  DocumentationHTML: undefined,
};

export default Introduction;
