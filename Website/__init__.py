from flask import Flask, render_template, request, redirect, url_for


def create_app():
    app= Flask(__name__, instance_relative_config=True, template_folder='templates')
    app.run(debug=True)
    @app.route('/home')
    def index():
        return render_template("home.html")
    @app.route('/quiz')
    def quiz2():
        return render_template("quiz.html")


    return app
    
