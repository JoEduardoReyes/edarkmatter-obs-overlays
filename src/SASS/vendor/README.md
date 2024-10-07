# Vendor Styles for OBS Overlays

## Descripción

La carpeta `src/sass/vendor/` contiene estilos que gestionan la normalización de reglas CSS y la importación de recursos externos, como fuentes de Google Fonts. Estos estilos se utilizan para asegurar una base consistente en todos los navegadores y dispositivos antes de aplicar los estilos personalizados del proyecto.

### Archivos

- **`_vendor.scss`**: Archivo principal para la normalización de estilos y la importación de fuentes externas.

### Descripción del Contenido

1. **Normalización de Estilos (Normalizer)**:
    - Se eliminan todos los márgenes, padding y bordes por defecto de los elementos, usando:

        ```scss
        * {
          margin: 0;
          padding: 0;
          border: 0;
          box-sizing: border-box;
        }
        
        ```

    - Esto asegura que no haya variaciones en los estilos predeterminados de los navegadores, lo que facilita un diseño uniforme.
2. **Estilos Globales para `html` y `body`**:
    - Se establece que el `html` y el `body` tengan un ancho y alto del 100%, con un máximo de resolución de 1920x1080px. Esto asegura que el diseño no se extienda más allá de las dimensiones comunes en las pantallas de streaming.

        ```scss
        html,
        body {
          width: 100%;
          height: 100%;
          max-width: 1920px;
          max-height: 1080px;
        }
        
        ```

3. **Importación de Fuentes de Google**:
    - Se importan las fuentes **Montserrat** y **Tilt Neon** desde Google Fonts, que se utilizan a lo largo del proyecto para aplicar las tipografías principales y secundarias.

        ```scss
        @import url("<https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&family=Tilt+Neon&display=swap>");
        
        ```

    - Estas fuentes se utilizan principalmente en los títulos, widgets y banners dentro del diseño de los overlays.

### Personalización

Si deseas personalizar las fuentes o la normalización, puedes:

- Cambiar la importación de fuentes a una nueva familia desde [Google Fonts](https://fonts.google.com/).
- Modificar las reglas de normalización si se necesitan ajustes específicos para los elementos de tu diseño.

### Requisitos

- **Acceso a Internet**: Para cargar las fuentes de Google Fonts correctamente.
- **OBS Studio**: Para aplicar los estilos a los overlays.