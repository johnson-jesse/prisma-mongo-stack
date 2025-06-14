FROM mongo:7.0

COPY mongo-keyfile /etc/mongo-keyfile
RUN chown mongodb:mongodb /etc/mongo-keyfile && chmod 400 /etc/mongo-keyfile

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint-custom.sh
RUN chmod +x /usr/local/bin/docker-entrypoint-custom.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint-custom.sh"]