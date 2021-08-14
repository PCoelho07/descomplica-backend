
FRONTEND_URL := https://github.com/PCoelho07/descomplica-frontend

all: setup-hosts build-frontend build-backend

setup-hosts:
	echo "127.0.0.1 descomplica.test api.descomplica.test" | sudo tee -a /etc/hosts

build-backend:
	@docker-compose up -d --build

migrate:
	@docker-compose exec app npm run typeorm migration:run

clone-frontend:
	@mkdir ../frontend
	@git clone $(FRONTEND_URL) ../frontend

build-frontend: clone-frontend
	@cd ../frontend && docker build -t descomplica-front:latest .

restart-app:
	@docker-compose restart app

.PHONY: setup-hosts build-backend clone-frontend build-frontend migrate