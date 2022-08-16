export const Events = {};

declare global {
  interface Window {
    dataLayer: any;
  }
}

export const trackEvent = (event: any, variables: object) => {
  if (window.dataLayer) {
    const currentVariables = {} as any;
    if (variables) {
      Object.entries(variables).forEach((item: any) => {
        const [vKey, vValue] = item;
        if (event.variableKeys && event.variableKeys.includes(vKey)) {
          currentVariables[vKey] = vValue;
        }
      });
    }
    window.dataLayer.push({ event: event.name, ...currentVariables });
  }
};

const GTMInitial = (gtmId: string) => {
  // GTM
  const scriptGTM = document.createElement('script');
  scriptGTM.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`;
  // Append
  document.head.appendChild(scriptGTM);
  // noscript
  const scriptNoScriptGTM = document.createElement('script');
  const noScriptIframe = document.createElement('iframe');
  noScriptIframe.width = '0';
  noScriptIframe.height = '0';
  // eslint-disable
  noScriptIframe.setAttribute('style', 'display:none;visibility:hidden');
  noScriptIframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
  scriptNoScriptGTM.append(noScriptIframe);
  // Append
  document.body.appendChild(scriptNoScriptGTM);
};

export default GTMInitial;
