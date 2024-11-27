from flask import Flask, render_template, request, jsonify
import cohere

app = Flask(__name__)

# Configura la clave de Cohere usando ClientV2
co = cohere.ClientV2("XZyI6ibEewP7MgGX6IED7RzoqlrAbRg1S3yPcHrN")

@app.route('/')
def animation():
    return render_template('animacion.html') 

@app.route('/home')
def home():
    return render_template('muestra.html')  # Sirve el archivo HTML

@app.route('/organizador')
def organizador():
    return render_template('organizador.html')

@app.route('/iot_hogar')
def iot_hogar():
    return render_template('iot_hogar.html')

@app.route('/ayuda_emocional')
def ayuda_emocional():
    return render_template('ayuda_emocional.html')

@app.route('/chat', methods=['POST'])
def chat():
    try:
        # Log inicial
        app.logger.info("Solicitud recibida en /chat")

        # Obtener mensaje del cliente
        user_message = request.json.get('message')
        app.logger.debug(f"Mensaje recibido del cliente: {user_message}")

        if not user_message:
            app.logger.warning("Mensaje vacío o inválido recibido.")
            return jsonify({"error": "No se recibió un mensaje válido."}), 400

        # Enviar el mensaje a Cohere
        app.logger.info("Enviando mensaje al modelo Cohere...")
        response = co.chat(
            model="command-r-plus",
            messages=[{"role": "user", "content": user_message}]
        )

        # Log de respuesta completa
        app.logger.debug(f"Respuesta completa de Cohere: {response}")

        # Extraer y devolver el texto de la respuesta
        if hasattr(response.message, "content"):
            app.logger.info("Respuesta procesada correctamente.")
            return jsonify({"response": response.message.content[0].text})
        else:
            app.logger.warning("La respuesta de Cohere no contiene 'message.content'.")
            return jsonify({"error": "La respuesta del modelo no es válida."}), 500

    except Exception as e:
        # Log de error detallado
        app.logger.error(f"Error en /chat: {str(e)}", exc_info=True)
        return jsonify({"error": "Hubo un error interno al procesar la solicitud."}), 500

if __name__ == "__main__":
    app.run(debug=True)
