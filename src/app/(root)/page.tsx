import { basePath } from "@/i18n/config";

// La raíz redirige al idioma del navegador (es por defecto, en si el navegador está en inglés).
export default function RootRedirect() {
  const script = `(function(){var l=(navigator.language||'es').toLowerCase().indexOf('en')===0?'en':'es';location.replace('${basePath}/'+l+'/');})();`;
  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${basePath}/es/`} />
      </noscript>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <p style={{ padding: 24 }}>
        <a href={`${basePath}/es/`}>Español</a> · <a href={`${basePath}/en/`}>English</a>
      </p>
    </>
  );
}
