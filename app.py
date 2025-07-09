from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

puntos = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/inicio')
def inicio():
    return render_template('inicio.html', puntos=puntos)

@app.route('/problematica')
def problematica():
    return render_template('problematica.html')

@app.route('/autor')
def autor():
    return render_template('autor.html')

@app.route('/guardar_punto', methods=['POST'])
def guardar_punto():
    nombre = request.form['nombre']
    lat = request.form['lat']
    lon = request.form['lon']
    
    puntos.append({'nombre': nombre, 'lat': lat, 'lon': lon})
    return redirect(url_for('inicio'))

if __name__ == '__main__':
    app.run(debug=True)

