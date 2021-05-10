import React from 'react';
// import PropTypes from 'prop-types';
// import DocumentationHTML from '../../../../../generic/components/steps/DocumentationHTML';
// import staticContent from './content.html';

// const Introduction = ({ DocumentationHTML }) => (
//   <div>
//     <DocumentationHTML staticContent={staticContent} />
//   </div>
// );

// Introduction.propTypes = {
//   DocumentationHTML: PropTypes.elementType.isRequired,
// };

// export default Introduction;

class Introduction extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const DocumentationHTML = this.props.DocumentationHTML;
    return (
      <div>
        123
        <DocumentationHTML />
      </div>
    );
  }
}

export default Introduction;
