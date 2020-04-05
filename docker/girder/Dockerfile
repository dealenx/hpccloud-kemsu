FROM girder/girder:latest-py3
LABEL maintainer="patrick.oleary@kitware.com" \
  version="1.0"

# Install cumulus
RUN git clone https://github.com/Kitware/cumulus.git /cumulus && \
  cd /cumulus && \
  git checkout master && \
  cd / && \
  pip3 install --no-cache-dir -r /cumulus/requirements.txt && \
  pip3 install --no-cache-dir -e /cumulus && \
  pip3 install --no-cache-dir -e /cumulus/girder/cumulus && \
  pip3 install --no-cache-dir -e /cumulus/girder/sftp && \
  pip3 install --no-cache-dir -e /cumulus/girder/taskflow

# Set the broker URL
RUN sed -i s/localhost/rabbitmq/g /cumulus/cumulus/celery/commonconfig.py

COPY ./docker/girder/config.json /cumulus/cumulus/conf/config.json

# Enable proxy support
COPY ./docker/girder/girder.local.conf /etc/girder.cfg

COPY ./requirements.txt /requirements.txt

COPY ./docker/girder/entrypoint.sh /entrypoint.sh
COPY ./docker/girder/wait-for-it.sh /wait-for-it.sh


# Install hpccloud - girder server
RUN pip3 install  -r /requirements.txt


ENTRYPOINT ["/wait-for-it.sh", "-t", "30", "rabbitmq:5672",  "--", "/entrypoint.sh"]
