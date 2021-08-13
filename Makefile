
FRONTEND_URL=

setup-hosts:
	echo "127.0.0.1 descomplica.test api.descomplica.test" >> /etc/hosts

build-backend:
	@docker-compose up -d --build

clone-frontend: $(FRONTEND_URL)
	@mkdir ../frontend
	@git clone $(FRONTEND_URL) ../frontend

build-frontend: clone-frontend
	@cd ../frontend
	@npm run build
	@docker cp ./build/. descomplica-server:/var/www/public/

.PHONY: setup-hosts build-backend clone-frontend build-frontend
