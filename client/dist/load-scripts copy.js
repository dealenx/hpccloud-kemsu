function includeInHead(file = '', text = '') {
  const script = document.createElement('script');
  if (file !== null) {
    script.src = file;
  }

  script.type = 'text/javascript';
  script.async = false;
  script.text = text;

  document.getElementsByTagName('head').item(0).appendChild(script);
}

// includeInHead(
//   'https://gist.githubusercontent.com/dealenx/17d9523dc3d10df57689f147bd4411d8/raw/647d63b8ffe27bd077595d71773a5727ddbb397f/simput-openfoam_helmholtz.js'
// );

// includeInHead('./simput-pyfr.js');

// includeInHead('./simput-nwchem.js');
// includeInHead('./simput-nwchem-neb.js');
// includeInHead('./simput-openfoam-tutorials.js');
// includeInHead('./simput-openfoam-windtunnel.js');
// includeInHead('./simput-openfoam_cavity.js');
// includeInHead('./simput-openfoam_cavity_test.js');
// includeInHead('./HPCCloud.js');

const script = document.createElement('script');

script.src = './HPCCloud.js';
script.type = 'text/javascript';
script.async = false;

document.getElementsByTagName('body').item(0).appendChild(script);

script.onload = function () {
  const HPCCCloudConfigText = `
alert("test");
  HPCCloud.configure();
  
  `;
  // includeInHead('', HPCCCloudConfigText);
  const scriptConfigurate = document.createElement('script');
  scriptConfigurate.text = HPCCCloudConfigText;

  document.getElementsByTagName('body').item(0).appendChild(scriptConfigurate);
};

// HPCCloud.configure();
