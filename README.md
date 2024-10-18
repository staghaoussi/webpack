
### Technologies

- `Docker`
- `Django`
- `ReactJS`
- `Webpack`

# Instructions


  - **Objective:** Write a docker-compose file for this project (we'll run this project with `docker compose up`)
- What is a software development without bugs and errors right ?
  - **Objective:** Run `docker compose up` and see if there is any errors with existing configuration in the project and fix any issues.
- We are using Webpack to bundle any static resources. In the traditional way, we have to run npm webpack to run the Webpack process and python manage.py runserver to run the Django server. This can be simplified using Docker to run both processes at once.
  - **Objective:**  Simplify this process so that when we run `docker compose up`, it will run the Django server as well as run Webpack in the background.
- How do you access data/resources from the database? The answer is APIs!
  - **Objective:** Write a basic RESTful API for CRUD operations for VM model (view, serializer, etc) using Django Rest Framework (DRF)
- Now you have the API, but how are you going to present the data? It is frontend time!
  - **Objective:** Create a table view in the frontend at `localhost:8000` to display all the VMs in the database. This table view need to be implemented in `ReactJS`
- As our product expands, we will need to store extra data in our database to fulfill any future request.
  - **Objective:** SSH key is a key pair that is needed for our server to establish a secure connection and communicate with the virtual machine. Add a new field in the `Vm` model called `ssh_key`, create a migration file, and run the migration file. Please make any assumptions that you have regarding this task.


