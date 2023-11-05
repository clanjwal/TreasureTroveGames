from flask import Flask, render_template, request, redirect, url_for

def create_app():
    app=Flask(__name__, instance_relative_config=True,template_folder='templates')
    @app.route('/')
    def index():
        return render_template('home.html')
    @app.route('/madlibs')
    def madlibs():
        return render_template('madlibs.html')
    @app.route('/wavele')
    def wordle():
        return render_template('wavele.html')
    @app.route('/ptest')
    def ptest():
        return render_template('ptest.html')
    @app.route('/quiz')
    def quiz():
        return render_template('quiz.html')
    @app.route('/home')
    def home():
        return render_template('home.html')

    return app