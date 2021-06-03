// function includeInBody(file = '', text = '') {
//   const script = document.createElement('script');
//   if (file !== null) {
//     script.src = file;
//   }

//   script.type = 'text/javascript';
//   script.async = false;
//   script.defer = true;
//   script.text = text;

//   document.getElementsByTagName('body').item(0).appendChild(script);

//   alert("loaded ")
// }

const script = document.createElement('script');

script.src = './HPCCloud.js';
script.type = 'text/javascript';
script.async = false;

document.getElementsByTagName('body').item(0).appendChild(script);

script.onload = function () {
  const HPCCCloudConfigText = `
  HPCCloud.configure();
  `;
  const scriptConfigurate = document.createElement('script');
  scriptConfigurate.text = HPCCCloudConfigText;

  document.getElementsByTagName('body').item(0).appendChild(scriptConfigurate);

  

  // setTimeout(() => {
  //   includeInBody(
  //     'https://gitcdn.link/repo/dealenx/17d9523dc3d10df57689f147bd4411d8/raw/647d63b8ffe27bd077595d71773a5727ddbb397f/simput-openfoam_helmholtz.js'
  //   );
  // }, 10000);

};


