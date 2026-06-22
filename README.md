# CartoData — Sitio Web

Sitio web de [CartoData](https://www.cartodata.mx) — soluciones geoespaciales para ciudades, infraestructura, minería e instituciones.

Publicado en GitHub Pages: [fmorenor.github.io/cartodata-web](https://fmorenor.github.io/cartodata-web/)

---

## Estructura del proyecto

```
CartoData/
├── index.html          # Página principal (bundle React compilado + inyecciones)
├── historia.html       # Página Historia — página estática independiente
├── shared.js           # Nav + Footer + CSS base compartidos para páginas estáticas
├── site.css            # Design tokens: variables CSS, tipografía, colores, reset
├── assets/
│   ├── index-*.js      # Bundle React compilado (no editar)
│   └── index-*.css     # CSS del bundle React (no editar)
├── manus-storage/
│   ├── logo-white-h-proper_*.png   # Logo blanco (modo oscuro)
│   ├── logo-black-h-proper_*.png   # Logo negro (modo claro)
│   └── ...             # Videos, logos y otros assets
├── equipo.avif         # Foto equipo principal
├── equipo-nl.avif      # Foto equipo Nuevo León
├── equipo-sv.avif      # Foto equipo El Salvador
├── legacy.jpg          # Foto histórica — hero de historia.html
├── herr-procesos.jpg   # Imagen sección Herramientas — Procesos
├── herr-datos.jpg      # Imagen sección Herramientas — Datos
└── herr-software.jpg   # Imagen sección Herramientas — Software
```

---

## Arquitectura

### index.html — Página principal

El bundle React compilado no se edita directamente. Todas las modificaciones se hacen mediante **inyección de scripts** al final del `<body>`:

| Función | Qué hace |
|---|---|
| `injectCostCharts()` | Gráfica SVG animada en la sección de costos comparativos |
| `injectCasesHero()` | Sección Casos de éxito con videos YouTube y tarjetas interactivas |
| `fixStepNumbers()` | Círculos azules con números en la sección de proceso |
| `injectTeamPhoto()` | Carrusel de 3 fotos del equipo con timer automático |
| `hookHistoriaNav()` | Intercepta el link de Historia para navegar a `historia.html` |
| `injectToolsHero()` | Sección Herramientas con hero de 3 slides (Procesos, Datos, Software) |
| `initPrivacyModal()` | Modal de Aviso de privacidad |
| `initTermsModal()` | Modal de Términos y condiciones |
| `patchInfraText()` | Reemplaza "Puertos" → "Líneas eléctricas" en el hero de Infraestructura |
| `reorderTechMenu()` | Reordena dropdown Tecnología: Procesos → Cartográfica → GeoSoftware |

### shared.js — Nav y Footer compartidos

Se carga en todas las páginas estáticas. Una sola línea al final del `<body>` lo activa:

```html
<script src="./shared.js"></script>
```

Inyecta automáticamente:

1. **`site.css`** — design tokens y tipografía
2. **Nav fijo** con:
   - Logo (blanco en dark / negro en light)
   - Dropdowns: Impacto, Tecnología, Cultura, Noticias, X-Ray
   - Toggle idioma ES / EN
   - Toggle tema claro / oscuro
3. **Footer** con logo, grid de navegación, contacto y links legales

El estado persiste entre páginas vía `localStorage`:
- `localStorage["theme"]` → `"dark"` / `"light"` (misma clave que el bundle React)
- `localStorage["cartodata-lang"]` → `"es"` / `"en"` (misma clave que el bundle React)

### site.css — Design system

Replica los tokens exactos del bundle React:

| Token | Dark | Light |
|---|---|---|
| `--font-sans` | `"DM Sans", "Inter", system-ui` | ← igual |
| `--font-heading` | `"Helvetica Neue", "Neue Haas Grotesk", "Arial"` | ← igual |
| `--blue` | `#3b5bdb` | ← igual |
| `--bg` | `#050816` | `#f8fafc` |
| `--text` | `#f8fafc` | `#0f172a` |

Pesos de headings (igual que el bundle React):
- `h1, h2` → `font-weight: 100`
- `h3` → `font-weight: 300`

---

## Páginas

### index.html
Secciones en orden: Hero por sector → Problema → Proceso (5 pasos) → Cartomorfosis → Herramientas → Casos de éxito → Gráfica de costos → Equipo → CTA → Footer

### historia.html
Página estática con: Hero (`legacy.jpg`) → Timeline 1930–Hoy → Valores → CTA
Nav y footer vienen de `shared.js`.

---

## Crear una página nueva

Solo necesitas el mínimo HTML y el script al final:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mi página — CartoData</title>
</head>
<body>

  <!-- Tu contenido aquí -->

  <script src="./shared.js"></script>
</body>
</html>
```

`shared.js` inyecta automáticamente: nav + dropdowns + footer + tipografía + colores + tema + idioma.

---

## Servidor local

```bash
# Sin flag -s para servir múltiples archivos HTML
npx serve -p 3000 /ruta/a/CartoData
```

- `http://localhost:3000/` — index.html
- `http://localhost:3000/historia.html` — Historia

> No usar `-s` (SPA mode) — redirige todo a index.html y las páginas estáticas dan 404.

---

## Deploy a GitHub Pages

El sitio se publica en cada push a `main`:

```bash
git add index.html historia.html shared.js site.css
git commit -m "Descripción del cambio"
git push
```

Publicado en: **https://fmorenor.github.io/cartodata-web/**
