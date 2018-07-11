FROM node:9.6.1

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

RUN npm --version
RUN node --version

RUN npm install
RUN npm run build --production

RUN npm install -g serve
# Run serve when the image is run.
CMD serve -s build -l 2002

# Let Docker know about the port that serve runs on.
EXPOSE 2002
