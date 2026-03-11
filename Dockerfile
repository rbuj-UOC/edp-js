FROM ubuntu:latest

WORKDIR /app

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update -q && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
        build-essential \
        curl \
        git \
        nodejs \
        npm \
        python3 \
        python3-pip && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


RUN pip3 install --break-system-packages jupyterlab

RUN npm install -g ijavascript && \
    ijsinstall --install=global
