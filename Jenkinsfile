pipeline {
    agent any
    stages {
        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/raulCangri24-ship-it/Actividad_11.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Ejecutar pruebas') {
            steps {
                sh 'npm test'
            }
        }
        stage('Publicar') {
            steps {
                echo 'Aplicacion lista para despliegue'
            }
        }
    }
}