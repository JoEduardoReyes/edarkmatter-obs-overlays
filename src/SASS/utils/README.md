
# EDarkMatter OBS Custom Overlays Utils

## Descripción

Este proyecto consiste en overlays personalizados para OBS, creados utilizando **SASS** y **PUG**. Los estilos están organizados utilizando la metodología **Atomic Design**, lo que permite un manejo modular y escalable de los elementos visuales. Además, se han implementado colores, fuentes, espaciado y bordes dinámicos para facilitar la personalización y reutilización de los componentes.

### Estructura de Archivos

- **`src/SASS/utils/_index.scss`**: Archivo principal que centraliza la importación de los módulos de utilidad (colores, fuentes, espaciado, bordes).
- **`src/SASS/utils/_tokens.scss`**: Define los tokens principales del diseño, como colores y medidas, que son reutilizados a lo largo de los estilos.
- **`src/SASS/utils/_colors.scss`**: Contiene las reglas para aplicar colores, tanto para redes sociales como colores propios del diseño. Incluye mixins para generar estilos basados en color.
- **`src/SASS/utils/_font.scss`**: Define las tipografías y tamaños de fuente utilizados, incluyendo variaciones de peso y estilos para widgets y banners.
- **`src/SASS/utils/_borders.scss`**: Gestiona los bordes y las propiedades de los elementos con bordes redondeados, incluyendo el uso de color principal y estilos como `bolts`.
- **`src/SASS/utils/_spacing.scss`**: Maneja el espaciado entre elementos, tanto en anchura como en altura. También incluye reglas específicas para los banners públicos y títulos de escenas.

### Descripción de los Módulos

1. **_index.scss**:
    - Este archivo actúa como el punto de salida para los módulos de utilidades como colores, tipografías, bordes y espaciado.
    - Se utiliza `@forward` para reexportar los módulos relevantes.
2. **_tokens.scss**:
    - Contiene los valores base para el sistema de diseño, tales como:
        - **Colores**: Colores principales y secundarios, incluidos los colores de redes sociales (YouTube, Twitch, etc.).
        - **Espaciados**: Valores de espaciado base para widgets y elementos de escena.
        - **Fuentes**: Tipografías principales y secundarias, junto con tamaños de fuente y pesos.
3. **_colors.scss**:
    - Implementa un mixin `generate-styles` para generar automáticamente clases con colores para texto y fondo.
    - Contiene estilos específicos para redes sociales, colores de desarrollo y el fondo de tipo "glass".
4. **_font.scss**:
    - Define las fuentes principales (`Montserrat`) y secundarias (`Tilt Neon`), aplicándolas en diferentes contextos (e.g., títulos, widgets).
    - Establece los tamaños de fuente y el peso en función de la importancia del texto (tamaños extra grandes para títulos, medianos para textos complementarios).
5. **_borders.scss**:
    - Aplica bordes con colores principales y define bordes redondeados, así como estilos de "bolts" (círculos con borde en algunos elementos).
    - La clase `.rounded-total` crea bordes circulares perfectos.
6. **_spacing.scss**:
    - Controla los tamaños y proporciones de los elementos de la interfaz, como banners, videos y escenas.
    - El espaciado está basado en una unidad principal que facilita mantener una relación consistente entre los elementos.

### Personalización

Para personalizar los overlays:

- Modifica los valores en **_tokens.scss** para cambiar colores, tamaños de fuente y espaciados globales.
- Agrega nuevos estilos de color en **_colors.scss** utilizando el mixin `generate-styles`.
- Cambia los bordes en **_borders.scss** o ajusta el espaciado en **_spacing.scss**.

### Requisitos

- **Node.js**: Para compilar los archivos SASS y PUG.
- **OBS Studio**: Para usar los overlays personalizados.

---