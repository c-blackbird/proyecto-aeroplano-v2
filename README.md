# proyecto aeroplano - poo y docker

## descripcion

api rest para gestion de aeroplanos implementando composicion y agregacion.

## clases y relaciones

| clase | tipo | descripcion |
|-------|------|-------------|
| helice | agregacion | recibida por parametro |
| cubierta | agregacion | recibida por parametro |
| trenaterrizaje | composicion | creada dentro del constructor |
| alas | composicion | creada dentro del constructor |

## endpoints

| metodo | endpoint | descripcion |
|--------|----------|-------------|
| post | /api/aeroplanos | crear aeroplano |
| get | /api/aeroplanos | listar todos |
| get | /api/aeroplanos/:id | obtener uno |
| put | /api/aeroplanos/:id | actualizar |
| delete | /api/aeroplanos/:id | eliminar |

## ejecutar con podman

```bash
cd backend
podman build -t aeroplano-backend-dev .
podman run -it -v "$(pwd):/app" -p 3000:3000 aeroplano-backend-dev
tecnologias
typescript

node.js / express

podman / docker
