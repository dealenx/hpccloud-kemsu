import React from 'react';
import PropTypes from 'prop-types';
// import DocumentationHTML from '../../../../../generic/components/steps/DocumentationHTML';
import staticContent from './content.html';

const Introduction = ({ DocumentationHTML }) => (
  <div>
    <DocumentationHTML staticContent={staticContent} />
  </div>
);

Introduction.propTypes = {
  DocumentationHTML: PropTypes.elementType.isRequired,
};

export default Introduction;
