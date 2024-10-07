# Componentes de Overlays para OBS

## Descripción

La carpeta `src/sass/components/` contiene los estilos SASS específicos para los componentes personalizados de los overlays en OBS. Estos componentes son reutilizables y están diseñados para estructurar diferentes partes del diseño de la interfaz de manera eficiente, siguiendo un enfoque modular y escalable.

### Archivos

- **`_index.scss`**: Archivo de salida que centraliza todos los componentes disponibles y los reenvía.
- **`_big-title.scss`**: Define los estilos para los títulos principales y secundarios utilizados en las escenas del overlay.
- **`_camera-frame.scss`**: Estilos específicos para los marcos de las cámaras, incluyendo variantes de tamaño y widgets sociales que se ubican en dichos marcos.
- **`_public-banner.scss`**: Estilos para el banner público que aparece en las escenas del overlay.
- **`_video-container.scss`**: Estilos para el contenedor de video, adaptado al tamaño y resolución del video en las escenas.

### Descripción del Contenido

### 1. **`_big-title.scss`**: Títulos

- Se utilizan utilidades para extender las clases de fuentes y tamaños predefinidos.
- Se definen dos niveles de títulos (`.big-title-level-one` y `.big-title-level-two`) con diferentes tamaños y estilos de fuente.
- Un título secundario (`.secondary-title`) con tipografía alternativa, para complementar los títulos principales.

### 2. **`_camera-frame.scss`**: Marco de la Cámara

- Se utiliza para aplicar un marco al feed de la cámara en el overlay.
- Estilos personalizados para el marco de la cámara, incluyendo bordes, dimensiones y propiedades flex para el contenido interno.
- Variantes del marco (`.camera-frame__large`) para ajustarse a diferentes tamaños de cámara en pantalla.
- Widgets sociales dentro del marco de la cámara, con variantes para tamaños pequeños y grandes.

### 3. **`_public-banner.scss`**: Banner Público

- Utiliza flexbox para alinear los elementos del banner en el centro.
- Incluye bordes, fondos de vidrio (con transparencia) y un diseño redondeado.
- Espacio para logos de afiliados y otros elementos de branding dentro del banner (`#aff_logo` y `.aff-item`).

### 4. **`_video-container.scss`**: Contenedor de Video

- Estilos para el contenedor de video, asegurando un marco adecuado.
- Incluye soporte para títulos de nivel dos (`.title-level-two`) que complementan el video en la escena.

### Personalización

Estos componentes pueden personalizarse ajustando los siguientes aspectos:

- **Colores y tamaños**: Cambia los valores en los archivos de utilidades para aplicar diferentes esquemas de color o dimensiones a los componentes.
- **Fuente**: Puedes cambiar las fuentes importadas en el archivo de `utils` para aplicar diferentes estilos tipográficos.
- **Bordes**: Ajusta los bordes y los radios de los contenedores en el archivo de utilidades para diferentes efectos visuales.

### Integración

Los componentes son reutilizables y deben ser integrados dentro de las escenas de los overlays en OBS, facilitando la creación de interfaces personalizadas para cada stream.

### Requisitos

- **SASS**: Para compilar los archivos y generar el CSS necesario.
- **OBS Studio**: Para aplicar los estilos en las escenas del streaming.