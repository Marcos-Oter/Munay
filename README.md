# MUNAY — recreación prácticamente 1:1

## Qué contiene
- `index.html`: estructura semántica y editable.
- `css/munay.css`: medidas, tipografías, colores, espaciados, responsive y estados.
- `js/munay.js`: filtros y contador de carrito de ejemplo.
- `assets/`: recortes de las imágenes de referencia suministradas en la conversación.

## Tipografía
- Bodoni Moda: logo, titulares editoriales y nombres de producto.
- Montserrat: navegación, botones, descripciones y UI.

## Arquitectura para backend
Las tarjetas usan atributos `data-category` y `data-add`, por lo que se pueden
reemplazar fácilmente por un loop PHP, JSON, API o consulta de base de datos.
El HTML no depende de un framework.

## Importante
Las fotografías de `assets/` son recortes de las capturas de referencia para
conseguir la composición visual 1:1. Para producción deben sustituirse por los
archivos originales de cada fotografía.

La recreación toma:
1. Header/hero/productos de la primera referencia.
2. Secciones "TONOS QUE INSPIRAN" y "SOBRE MUNAY" y el footer del segundo diseño.
