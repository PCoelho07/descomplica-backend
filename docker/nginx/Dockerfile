FROM nginx

RUN mkdir /var/www /var/www/public

COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=descomplica-front:latest /usr/app/build /var/www/public/