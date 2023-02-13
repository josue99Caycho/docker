# Comando para dockerizar nuestro servicio
docker compose --env-file .env -f docker-compose-test.yml up -d --build --force-recreate

# Nota:
Tomar en cuenta que se están usando variables de entorno. Todas las configuraciones necesarias se encuentran en el archivo .env

# Explicación de comandos

1. `docker-componse`: comando para dockerizar el servicio
2. `--env-file`: opción para indicar cómo se llama el archivo que contiene todas nuestras variables de entorno
3. `-d`: opción para decirle a docker que nuestra aplicación va a correr en segundo plano
4. `--build`: opción para decirle a docker que cree las imagenes antes que el contenedor
5. `--force-recreate`: opción para recrear contenedores incluso si su configuración e imagen no han cambiado
6. `-f`: opción para decirle a docker como se llama el archivo .yml que se va a usar para dockerizar el/los servicio(s)s