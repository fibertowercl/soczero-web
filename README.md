# SOCZERO Networks — sitio web

Sitio corporativo de SOCZERO Networks (destino final: soczeronetworks.com). Español e inglés.

## Stack
- Next.js 15 (App Router) con exportación estática (`output: "export"`)
- Tailwind CSS v4
- Textos en `src/i18n/dictionaries.ts` (es / en)

## Desarrollo
```bash
npm install
npm run dev        # http://localhost:3000  (abre /es/ o /en/)
npm run build      # genera el sitio estático en ./out
```

## Estructura
- `src/app/[lang]/` — páginas: inicio, `services`, `solutions`, `intelligence`, `about`, `contact`
- `src/app/(root)/` — `/` redirige según el idioma del navegador
- `src/components/` — header, footer, secciones, formulario
- `public/img/` — logo y partners

## Publicación
- **Pruebas:** cada push a `main` se publica en GitHub Pages (`.github/workflows/deploy.yml`).
- **Producción:** al pasar a soczeronetworks.com se compila sin `NEXT_PUBLIC_BASE_PATH`.

## Pendiente
- El formulario de contacto abre el cliente de correo (`mailto:`). Hay que conectarlo a un backend o servicio de formularios.
- SOCZERO CVE Intelligence (en desarrollo) y publicaciones técnicas.
- Informes de ejemplo (PDF con datos ficticios) para ofrecer en la web.
- Confirmar con el negocio: cobertura de monitoreo/SLA, oficinas vs. representantes por país, partners, lista de tecnologías.
