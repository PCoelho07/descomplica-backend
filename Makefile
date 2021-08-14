
FRONTEND_URL := https://github.com/PCoelho07/descomplica-frontend

all: setup-hosts build-backend build-frontend

setup-hosts:
	echo "127.0.0.1 descomplica.test api.descomplica.test" | sudo tee -a /etc/hosts

build-backend:
	@docker-compose up -d --build

clone-frontend:
	@mkdir ../frontend
	@git clone $(FRONTEND_URL) ../frontend

build-frontend: clone-frontend
	@cd ../frontend && yarn && yarn build && docker cp ./build/. descomplica-server:/var/www/public/

.PHONY: setup-hosts build-backend clone-frontend build-frontend