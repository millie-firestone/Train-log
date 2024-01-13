FROM ubuntu:22.04 as base
RUN apt update
RUN apt install -y tzdata
ENV TZ="America/Chicago"
RUN apt install -y build-essential
RUN apt install -y nodejs npm vim 
RUN apt install -y neofetch
RUN apt-get purge -y openssh-client
WORKDIR /opt/TrainLog
COPY . ./
RUN rm -rf node_modules
RUN useradd -m -d /opt/TrainLog trainlog
RUN chown -R trainlog:trainlog /opt/TrainLog
USER trainlog
RUN npm install
RUN npm run build
USER root
RUN chown -R root:root /opt/TrainLog/dist
RUN chmod -R 555 /opt/TrainLog/dist
USER trainlog
EXPOSE 1313 
CMD ["node", "/opt/TrainLog/dist/index.js"]
