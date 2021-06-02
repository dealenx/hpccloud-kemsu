function include(file) {
  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.async = false;

  document.getElementsByTagName('head').item(0).appendChild(script);
}
include(
  'https://gist.githubusercontent.com/dealenx/17d9523dc3d10df57689f147bd4411d8/raw/647d63b8ffe27bd077595d71773a5727ddbb397f/simput-openfoam_helmholtz.js'
);
