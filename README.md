# SISTEMA DE JUEGO TIC-TAC-TOE

## El paso a paso para instalar es el siguiente:

1. Abrimos la terminal o nuestro CMD si estamos en Windows
2. Validamos que tengamos las herramientas necesarias para realizar la instalacion correctamente
    ```
    php -v
    composer --version
    npm -v
    ```
    
3.  Si tenemos todo correctamente nos dirigimos a la ruta donde deseamos instalar el proyecto, en mi caso lo instalare en c:\xampp\htdocs
    - Una vez en la carpeta ejecutamos el siguiente comando
    ```
    git clone https://manuel_space@bitbucket.org/manuel_space/prueba_tictactoe.git
    ```

    - Ingresamos al proyecto con
    ```
    cd prueba_tictactoe
    ```
4. Una vez en la carpeta del proyecto ingresamos los siguientes comandos
    ```
    composer install
    npm install
    npm run dev
    ```

5.  Cuando tengamos todo listo nos dirigimos a localhost/phpmyadmin o creamos una base de datos en nuestro gestor de base preferido por ejemplo (dbeaver) y creamos una tabla preferiblemente con el nombre que deseen, cuando creemos la base de datos nos dirigimos a nuestro editor de codigo faorito y duplicamos el archivo .env.example con el nombre .env luego lo abrimos y en los campos
     - DB_DATABASE
     - DB_USERNAME
     - DB_PASSWORD

    Los editamos con los datos de nuestro servidor, 
6.  Cuando tengamos estos 3 datos configurados, en la misma terminal/CMD vamos a ingresar 
    
    ```
    php artisan migrate
    ```

7.  Cuando ejecutemos las migraciones en la misma consola ejecutamos 
    ```
    php artisan key:generate
    ```
    ##### Esto para generar una key y que nuestro aplicativo funcione

    Despues
    ```
    php artisan serve
    ```
    
    Ingresamos a la url que nos da la terminal/CMD
    en mi caso fue la http://127.0.0.1:8000 y por lo general es esta la misma para todos los proyectos en laravel
    
8.  Nos dirigimos al navegador y pegamos la url en la barra de busquedas y damos enter

9.  Al ingresar nos saldra dos opciones la de Nueva partoda o la de unirse a partida.
