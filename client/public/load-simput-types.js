function includeInHead(file = '', text = '') {
  const script = document.createElement('script');
  if (file !== null) {
    script.src = file;
  }

  script.type = 'text/javascript';
  script.async = false;
  script.defer = true;
  script.text = text;

  document.getElementsByTagName('head').item(0).appendChild(script);
}

includeInHead('simput-pyfr.js');
includeInHead(
  'https://gitcdn.link/repo/dealenx/17d9523dc3d10df57689f147bd4411d8/raw/647d63b8ffe27bd077595d71773a5727ddbb397f/simput-openfoam_helmholtz.js'
);
includeInHead('./simput-nwchem.js');
includeInHead('./simput-nwchem-neb.js');
includeInHead('./simput-openfoam-tutorials.js');
includeInHead('./simput-openfoam-windtunnel.js');
includeInHead('./simput-openfoam_cavity.js');
includeInHead('./simput-openfoam_cavity_test.js');
