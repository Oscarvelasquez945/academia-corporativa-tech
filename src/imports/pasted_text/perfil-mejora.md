# MEJORA COMPLETA DEL APARTADO DE PERFIL
# ACADEMIA CORPORATIVA TECH

Quiero rediseñar y mejorar profundamente el apartado de PERFIL de la plataforma existente:

# Academia Corporativa Tech

IMPORTANTE:

NO reconstruyas toda la aplicación.
NO modifiques innecesariamente otras páginas.
NO elimines funcionalidades existentes.
NO rompas navegación, cursos, progreso, certificados, login, Mi aprendizaje ni dashboard.

Esta modificación debe concentrarse específicamente en:

# PERFIL DEL ESTUDIANTE

El nuevo perfil debe ser:

- hermoso;
- moderno;
- profesional;
- funcional;
- editable;
- responsive;
- coherente con la identidad visual de Academia Corporativa Tech;
- conectado con el progreso real del usuario.

NO quiero un perfil básico compuesto únicamente por:

Foto
Nombre
Correo
Botón Guardar

Quiero que el perfil se sienta como el:

# EXPEDIENTE PROFESIONAL Y ACADÉMICO DEL ESTUDIANTE

============================================================
IDENTIDAD VISUAL
============================================================

Mantener exactamente el nombre:

# Academia Corporativa Tech

Utilizar el logo oficial ya incorporado en el proyecto.

Mantener la paleta basada en el logo:

- azul petróleo oscuro;
- azul grisáceo;
- teal;
- blanco;
- grises neutros claros.

NO introducir morado, rosa, neón ni colores que rompan la identidad.

El diseño debe sentirse:

Corporate EdTech Premium.

============================================================
RUTA
============================================================

Mantener o crear:

/perfil

Debe ser accesible desde:

Avatar del usuario
→ Perfil

Sidebar
→ Perfil

Dashboard
→ Ver perfil

Debe existir siempre una forma clara de regresar.

Agregar:

← Volver al panel

y/o breadcrumb:

Inicio / Perfil

Los elementos del breadcrumb deben ser funcionales.

============================================================
ESTRUCTURA PRINCIPAL DEL PERFIL
============================================================

Crear una página de perfil con una excelente jerarquía visual.

Desktop:

usar una combinación de:

sidebar existente
+
contenido principal

Dentro del contenido utilizar una composición moderna, no simplemente un formulario gigante.

Crear estas áreas principales:

1. Cabecera profesional
2. Información personal
3. Información profesional
4. Progreso académico
5. Habilidades
6. Certificados
7. Logros
8. Preferencias
9. Seguridad

============================================================
1. CABECERA DEL PERFIL
============================================================

Crear una cabecera visualmente atractiva.

Debe incluir:

Foto/avatar del usuario.

Nombre:

Andrea Martínez

Ejemplo de cargo:

Asistente Administrativa

Área:

Administración

Ubicación opcional:

San Pedro Sula, Honduras

Ruta actual:

Asistente Administrativo Profesional

Mostrar también:

Miembro desde 2026

Botón principal:

# Editar perfil

Botón secundario:

# Ver mis certificados

La cabecera debe verse profesional, no como una red social juvenil.

Puede utilizar un background muy sutil basado en:

ACT Navy + ACT Teal

con pequeños detalles gráficos inspirados en el branding.

NO utilizar un gradiente exagerado.

============================================================
FOTO DE PERFIL
============================================================

Permitir:

Cambiar foto

Eliminar foto

Usar avatar por defecto si no existe foto.

Al presionar:

Cambiar foto

debe abrir selector de archivo si el entorno lo permite.

Mostrar preview antes de guardar.

Agregar estados:

Subiendo...

Foto actualizada

Error

Si Figma Make no puede realizar upload real:

implementar interacción simulada coherente.

NO dejar el botón muerto.

============================================================
2. RESUMEN PROFESIONAL
============================================================

Debajo de la cabecera crear una sección:

# Sobre mí

Ejemplo:

“Profesional administrativa interesada en fortalecer sus habilidades en Excel, Word y productividad empresarial.”

Permitir editar.

Textarea.

Máximo visual razonable.

Botón:

Guardar cambios

Mostrar confirmación:

✓ Perfil actualizado correctamente.

============================================================
3. INFORMACIÓN PERSONAL
============================================================

Crear una tarjeta:

# Información personal

Campos editables:

Nombre

Apellido

Correo electrónico

Teléfono opcional

País

Ciudad

Fecha de nacimiento opcional

Idioma

NO mostrar información innecesariamente sensible.

El email puede mostrarse como dato de cuenta.

Agregar icono discreto por campo cuando tenga sentido.

============================================================
VALIDACIONES
============================================================

Nombre vacío:

“El nombre es obligatorio.”

Correo incorrecto:

“Introduce un correo electrónico válido.”

Teléfono inválido:

“Revisa el número introducido.”

NO permitir guardar datos inválidos.

============================================================
4. INFORMACIÓN PROFESIONAL
============================================================

Crear una sección muy importante:

# Perfil profesional

Campos:

Situación actual

Opciones:

Buscando mi primer empleo

Estudiante

Empleado

Supervisor

Gerente

Director

Emprendedor

Otro

---

Área profesional:

Administración

Secretaría

Recursos Humanos

Ventas

Finanzas

Contabilidad

Gerencia

Dirección

Tecnología

Otra

---

Cargo actual:

Input editable.

---

Empresa:

Opcional.

---

Objetivo profesional:

Opciones:

Conseguir mi primer empleo

Mejorar en mi puesto actual

Obtener un ascenso

Cambiar de área profesional

Mejorar mis conocimientos de Office

Prepararme para un puesto gerencial

Otro

============================================================
IMPORTANTE
============================================================

Estos datos NO deben ser simplemente decorativos.

Cuando el usuario cambie:

Área profesional

u

Objetivo

la plataforma debe poder actualizar conceptualmente:

cursos recomendados;

rutas recomendadas;

contenido sugerido.

Ejemplo:

Área:

Recursos Humanos

Entonces recomendar:

Excel para RRHH

Outlook y Productividad

Word Profesional

Dashboards de Recursos Humanos

============================================================
5. TARJETAS DE ESTADÍSTICAS
============================================================

Crear una sección visual de resumen.

No utilizar cuatro tarjetas idénticas sin personalidad.

Mostrar:

# Cursos completados
4

# Horas de aprendizaje
31 h

# Certificados obtenidos
3

# Ruta profesional
58%

# Lecciones completadas
42

Los valores deben utilizar datos del estado actual de la aplicación cuando estén disponibles.

NO inventar valores diferentes a los mostrados en el dashboard.

============================================================
COHERENCIA DE DATOS
============================================================

Si el dashboard dice:

3 certificados

el perfil debe decir:

3 certificados.

Si Excel está en:

68%

debe mantenerse igual en perfil, dashboard y Mi aprendizaje.

============================================================
6. MI PROGRESO
============================================================

Crear sección:

# Mi progreso

Mostrar cursos activos.

Ejemplo:

Excel Empresarial desde Cero
68%

Word Profesional
35%

PowerPoint Empresarial
20%

Cada curso debe incluir:

thumbnail;

nombre;

progreso;

última lección;

botón:

# Continuar

El botón debe abrir realmente ese curso.

NO botón decorativo.

============================================================
7. MAPA DE HABILIDADES
============================================================

Crear una sección visual:

# Mis habilidades

Debe ser una de las partes más atractivas del perfil.

Mostrar habilidades desarrolladas en función de los cursos.

Ejemplo:

Excel
72%

Word
64%

PowerPoint
48%

Outlook
55%

Análisis de datos
58%

Documentación empresarial
67%

Productividad
61%

Comunicación ejecutiva
40%

Utilizar barras de progreso elegantes.

No hacer gráficos excesivamente infantiles.

============================================================
NIVELES
============================================================

También puede utilizar:

Principiante

Intermedio

Avanzado

Ejemplo:

Excel

Intermedio

72%

Agregar tooltip:

“Basado en cursos, evaluaciones y actividades completadas.”

============================================================
8. RUTA PROFESIONAL ACTUAL
============================================================

Crear una tarjeta destacada:

# Mi ruta profesional

Ejemplo:

Asistente Administrativo Profesional

58% completada

Mostrar etapas:

✓ Word Profesional

✓ Excel Empresarial

● Excel Intermedio

○ Outlook y Productividad

○ PowerPoint Empresarial

CTA:

# Ver ruta completa

Debe funcionar.

============================================================
9. CERTIFICADOS
============================================================

Crear sección:

# Mis certificados

Mostrar máximo 3 en perfil.

Cada certificado debe tener:

preview;

nombre;

fecha;

código;

estado.

Ejemplo:

Excel Empresarial desde Cero

Completado: 18 agosto 2026

ID: ACT-EXCEL-00182

Acciones:

Ver

Descargar

Compartir

Todos los botones deben tener acción.

Agregar:

# Ver todos los certificados →

que lleve a:

/certificados

============================================================
CERTIFICADOS BLOQUEADOS
============================================================

También se puede mostrar:

PowerPoint Empresarial

72% requerido

Estado:

En progreso

No debe aparentar que ya puede descargarse.

============================================================
10. LOGROS
============================================================

Crear:

# Logros profesionales

No usar diseño infantil.

Utilizar badges elegantes.

Ejemplos:

Primer curso completado

Excel Fundamentals

10 horas de aprendizaje

Primera evaluación perfecta

Ruta iniciada

3 certificados obtenidos

Las insignias pueden usar:

outline

icono

nombre

fecha

No usar trofeos gigantes ni confetti.

============================================================
11. ACTIVIDAD RECIENTE
============================================================

Crear timeline:

# Actividad reciente

Ejemplos:

Completaste:
“Tablas dinámicas”
Hace 2 horas

Aprobaste:
“Evaluación Módulo 3”
92%
Ayer

Obtuviste:
“Certificado Excel Empresarial”
Hace 4 días

Iniciaste:
“Word Profesional”
Hace 6 días

Permitir:

Ver actividad completa

si existe una vista correspondiente.

============================================================
12. RECOMENDACIONES PERSONALIZADAS
============================================================

Crear sección:

# Recomendado para ti

Basado en:

cargo;

área;

objetivo;

cursos completados.

Ejemplo:

Si Andrea es Asistente Administrativa:

mostrar:

Word Profesional

Outlook y Productividad

Excel Intermedio

PowerPoint Empresarial

Cada recomendación debe usar:

thumbnail;

nombre;

motivo breve.

Ejemplo:

“Recomendado para tu ruta de Asistente Administrativo.”

Botón:

Ver curso

Debe funcionar.

============================================================
13. EDITAR PERFIL
============================================================

Al presionar:

# Editar perfil

NO navegar a una pantalla completamente desconectada.

Puede:

A) abrir página:

/perfil/editar

o

B) convertir los campos a modo edición.

Preferencia:

utilizar una vista/modal/panel lateral elegante.

Debe permitir:

editar;

cancelar;

guardar.

============================================================
BOTONES
============================================================

Modo edición:

Cancelar

Guardar cambios

Si se presiona Cancelar:

restaurar datos anteriores.

Si se presiona Guardar:

validar;

guardar;

cerrar edición;

mostrar toast:

✓ Cambios guardados correctamente.

============================================================
CAMBIOS SIN GUARDAR
============================================================

Si el usuario modifica algo y trata de salir:

mostrar:

# Tienes cambios sin guardar.

Opciones:

Descartar cambios

Seguir editando

Guardar cambios

============================================================
14. CONFIGURACIÓN DE CUENTA
============================================================

Agregar tabs o links:

Perfil

Cuenta

Seguridad

Notificaciones

Preferencias

Mantener visualmente clara la diferencia entre:

datos del perfil

y

configuración técnica de la cuenta.

============================================================
15. SEGURIDAD
============================================================

Crear sección:

# Seguridad

Permitir:

Cambiar contraseña.

Contraseña actual.

Nueva contraseña.

Confirmar contraseña.

Botón:

Actualizar contraseña.

Agregar:

Mostrar/Ocultar contraseña.

Validación.

============================================================
SESIONES
============================================================

Opcionalmente mostrar:

Sesión actual

Windows · Edge

Última actividad

Botón:

Cerrar otras sesiones

Si no existe backend real:

mostrarlo solo si puede implementarse coherentemente.

NO introducir controles falsos.

============================================================
16. NOTIFICACIONES
============================================================

Crear preferencias:

# Notificaciones

Nuevos cursos.

Recordatorios de aprendizaje.

Evaluaciones.

Certificados.

Recomendaciones.

Actualizaciones de la plataforma.

Utilizar toggles funcionales.

Guardar preferencias localmente si no existe backend.

============================================================
17. PREFERENCIAS DE APRENDIZAJE
============================================================

Crear:

# Preferencias de aprendizaje

Ritmo de aprendizaje:

Ligero

Moderado

Intensivo

---

Objetivo semanal:

1 hora

3 horas

5 horas

Personalizado

---

Intereses:

Excel

Word

PowerPoint

Outlook

Administración

RRHH

Ventas

Finanzas

Gerencia

Las preferencias deben influir conceptualmente en recomendaciones.

============================================================
18. PERFIL COMPLETADO
============================================================

Agregar un indicador pequeño:

# Perfil 80% completado

Mostrar únicamente si aporta valor.

Ejemplo:

Para completar tu perfil:

+ Agrega tu cargo actual

+ Selecciona tu objetivo profesional

NO convertirlo en gamificación infantil.

============================================================
19. DISEÑO DEL PERFIL
============================================================

Quiero una composición premium.

Evitar:

formulario vertical interminable.

Usar:

cards;

tabs;

grids;

section headers;

progress;

thumbnails;

previews;

espacio en blanco.

Desktop:

usar 2 columnas cuando tenga sentido.

Ejemplo:

Izquierda 65%:

progreso

habilidades

cursos

Derecha 35%:

ruta

estadísticas

certificados

============================================================
20. NO HACER
============================================================

NO llenar todo de cards innecesarias.

NO poner bordes en absolutamente todo.

NO utilizar enormes gradientes.

NO utilizar un banner genérico de red social.

NO hacer el perfil como Facebook.

NO usar emojis excesivamente.

NO convertirlo en un CV tradicional.

Debe seguir siendo un perfil interno de una plataforma educativa profesional.

============================================================
21. IMÁGENES
============================================================

Utilizar:

foto/avatar;

thumbnails de cursos;

preview de certificados;

iconografía;

gráficos de progreso.

NO llenar el perfil de fotografías de stock.

============================================================
22. RESPONSIVE
============================================================

Desktop:
1440 px

Laptop:
1280 px

Tablet:
768 px

Mobile:
390 px

En móvil:

cabecera vertical;

avatar centrado o alineado correctamente;

estadísticas en grid 2x2;

tabs desplazables si hace falta;

cards full width;

botones suficientemente grandes;

sin scroll horizontal.

============================================================
23. NAVEGACIÓN
============================================================

Todos estos elementos deben funcionar:

Editar perfil

Guardar

Cancelar

Volver

Certificados

Continuar curso

Ver ruta

Ver curso recomendado

Cambiar contraseña

Preferencias

Notificaciones

Foto de perfil

NO DEBE EXISTIR NINGÚN BOTÓN MUERTO.

============================================================
24. DATOS MOCK
============================================================

Utilizar datos consistentes como:

Andrea Martínez

Asistente Administrativa

Administración

San Pedro Sula, Honduras

Ruta:
Asistente Administrativo Profesional

Excel Empresarial:
68%

Word Profesional:
35%

PowerPoint Empresarial:
20%

Pero si la aplicación ya tiene estado/datos diferentes:

UTILIZAR LOS DATOS EXISTENTES.

NO sobrescribir progreso real con datos mock.

============================================================
25. MICROINTERACCIONES
============================================================

Agregar:

hover suave;

tabs animadas;

progress bar;

toast;

modal;

dropdown;

skeleton si corresponde.

Duración:

150–250 ms.

No exagerar.

============================================================
26. ESTADOS
============================================================

Crear:

Default

Hover

Focus

Editing

Saving

Saved

Error

Disabled

Loading

============================================================
27. CASO SIN CURSOS
============================================================

Si el usuario no tiene cursos:

mostrar:

# Aún no has comenzado ningún curso.

Texto:

Explora el catálogo y empieza a desarrollar tus habilidades profesionales.

CTA:

Explorar cursos

============================================================
28. CASO SIN CERTIFICADOS
============================================================

Mostrar:

# Tu primer certificado está más cerca de lo que crees.

CTA:

Continuar aprendiendo

============================================================
29. AUDITORÍA FUNCIONAL
============================================================

Antes de terminar revisar:

Editar perfil → funciona.

Cambiar foto → funciona o simulación coherente.

Guardar → funciona.

Cancelar → funciona.

Volver → funciona.

Continuar curso → funciona.

Certificado → funciona.

Ruta → funciona.

Recomendaciones → funcionan.

Tabs → funcionan.

Toggles → funcionan.

Cambiar contraseña → funciona conceptualmente.

============================================================
30. PRUEBA OBLIGATORIA
============================================================

Realizar este flujo:

1. Entrar al Panel.
2. Abrir Perfil.
3. Editar Perfil.
4. Cambiar cargo.
5. Guardar.
6. Confirmar que se actualizó.
7. Abrir Mi progreso.
8. Continuar Excel.
9. Regresar al Perfil.
10. Abrir certificado.
11. Regresar.
12. Abrir Ruta profesional.
13. Regresar.
14. Entrar en Seguridad.
15. Regresar al Panel.

Todo debe poder realizarse.

============================================================
RESULTADO FINAL
============================================================

El nuevo perfil de Academia Corporativa Tech debe hacer sentir al estudiante que puede ver en un solo lugar:

QUIÉN SOY
+
QUÉ ESTOY APRENDIENDO
+
QUÉ SÉ HACER
+
CUÁNTO HE AVANZADO
+
QUÉ HE CONSEGUIDO
+
QUÉ DEBERÍA APRENDER DESPUÉS

No quiero únicamente una pantalla para modificar nombre y correo.

Quiero un:

# PERFIL PROFESIONAL DE APRENDIZAJE

Debe ser una de las páginas visualmente más cuidadas de Academia Corporativa Tech.

Tiene que sentirse:

premium,
profesional,
personal,
útil,
moderna,
hermosa,
funcional
y completamente integrada con el resto de la plataforma.