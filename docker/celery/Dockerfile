ARG BASE_IMAGE=kitware/hpccloud:bionic-python
FROM ${BASE_IMAGE}

LABEL maintainer="patrick.oleary@kitware.com" \
  version="1.0"

RUN adduser --system celery

COPY ./cumulus /cumulus


RUN cd /cumulus && \
  cd / && \
  pip3 install --no-cache-dir -r /cumulus/requirements.txt && \
  pip3 install --no-cache-dir -e /cumulus && \
  pip3 install --no-cache-dir girder

# TEMP cumulus fix - requirements.txt needs to be updated for AWS, in progress.
# COPY ./cumulus/cumulus/girderclient.py /cumulus/cumulus/girderclient.py
# COPY ./cumulus/cumulus/ansible/tasks/cluster.py /cumulus/cumulus/ansible/tasks/cluster.py
# COPY ./cumulus/requirements.txt /cumulus/requirements.txt
# RUN  cd / && pip install --no-cache-dir -r /cumulus/requirements.txt && \
#   pip install --no-cache-dir -e /cumulus && \
#   pip install --no-cache-dir girder

# Set the broker URL
RUN sed -i s/localhost/rabbitmq/g /cumulus/cumulus/celery/commonconfig.py

RUN mkdir /keys && chown -R celery  /keys

COPY ./docker/celery/config.json /cumulus/cumulus/conf/config.json

RUN chown -R celery  /cumulus

# RUN rm -rf /hpccloud
# COPY . /hpccloud

# Change ownership
# RUN chown -R celery  /hpccloud
