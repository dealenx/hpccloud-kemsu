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
};

// HPCCloud.configure();
