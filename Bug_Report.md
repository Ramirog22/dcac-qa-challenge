# Ejercicio 3: Reporte de Errores y Análisis QA

## a) Detección y Explicación de Defectos

1. **Inconsistencia en Formato de Fechas**
   * **Ubicación:** Columna `FECHA` (Fila 2).
   * **Explicación:** La segunda fila utiliza un formato `MM/DD/AAAA` (`12/21/2011`), rompiendo la estandarización regional `DD/MM/AAAA` utilizada en la primera fila (`21/11/2011`).

2. **Falla de Parseo**
   * **Ubicación:** Columna `DESCRIPCION` (Fila 2).
   * **Explicación:** Se visualiza la entidad HTML `Dep&oacute;sito` en texto plano en lugar del carácter tildado correspondiente (`Depósito`).

3. **Error Ortográfico**
   * **Ubicación:** Columna `DESCRIPCION` (Fila 3).
   * **Explicación:** La palabra *"transferensia"* contiene un error ortográfico, debería poner es *"transferencia"*.

4. **Error de Lógica Financiera**
   * **Ubicación:** Columna `IMPORTE PESOS` (Fila 3).
   * **Explicación:** Las transacciones de tipo débito representan un egreso de fondos, por lo que el importe debe figurar con signo negativo (`- 500.00`) y no positivo (`+ 500.00`).

5. **Inconsistencia en Separadores Decimales**
   * **Ubicación:** Columnas `IMPORTE PESOS` e `IMPORTE DOLARES`.
   * **Explicación:** Se mezclan criterios de formateo numérico: las filas 1 y 3 utilizan el punto (`.`) como separador decimal, mientras que la fila 2 utiliza la coma (`,`).

---

## b) Campos para el Reporte de Defectos y Ejemplo

### Campos Estándar para Informar un Defecto
* **ID:** Identificador único de seguimiento.
* **Título:** Descripción breve e ilustrativa del problema.
* **Módulo:** Sección de la aplicación donde ocurre la falla.
* **Severidad:** Nivel de impacto funcional en el sistema.
* **Prioridad:** Urgencia requerida para su corrección.
* **Ambiente:** Plataforma o servidor donde se detectó (ej. Staging, QA).
* **Precondiciones:** Estado o datos necesarios previas a la prueba.
* **Pasos para Reproducir:** Secuencia detallada de acciones para replicar el bug.
* **Resultado Esperado:** Comportamiento correcto según especificaciones.
* **Resultado Obtenido:** Comportamiento defectuoso evidenciado.
* **Evidencias:** Adjuntos (capturas de pantalla, logs, videos) que respaldan el reporte.

---

### Ejemplo de Reporte de Defecto

* **ID:** 001
* **Título:** Inconsistencia y falta de estandarización en el formato de fechas dentro de la tabla de movimientos
* **Módulo:** Consulta de Movimientos
* **Severidad:** Low
* **Prioridad:** High
* **Ambiente:** Staging / Homologación
* **Precondiciones:** 
  1. El usuario debe poseer una cuenta activa con movimientos registrados en distintas fechas.
  2. Haber iniciado sesión en la plataforma web.
* **Pasos para Reproducir:**
  1. Ingresar a la aplicación web.
  2. Ir a la sección **Consulta de Movimientos**.
  3. Observar el formato de los datos expuestos en la columna `FECHA`.
* **Resultado Esperado:** 
  Todas las fechas registradas deben mantener el formato estándar regional `DD/MM/AAAA`.
* **Resultado Obtenido:** 
  La segunda fila presenta la fecha en formato `MM/DD/AAAA` (`12/21/2011`), alternando la estructura visual de la tabla.
* **Evidencias:** <img width="1011" height="253" alt="image" src="https://github.com/user-attachments/assets/7d4ebb53-ec40-434a-99b8-d2f3f950f8b7" />
