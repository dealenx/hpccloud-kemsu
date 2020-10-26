import React from 'react';
import SimputReact from '../../../../../generic/components/steps/SimputReact';

// ----------------------------------------------------------------------------

class InputComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log('PROPS Input', props);
  }
  render() {
    return (
      <SimputReact
        {...this.props}
        simputType="openfoam_cavity_test"
        inputFileKeys={[{ key: 'sh', name: 'run.sh', parse: false }]}
        initialDataModel={{
          data: {},
          type: 'openfoam_cavity_test',
          hideViews: [],
        }}
      />
    );
  }
}

export default InputComponent;
