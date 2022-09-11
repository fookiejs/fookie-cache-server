FROM node
WORKDIR /user/src/app
COPY . .
RUN npm i
EXPOSE 2626
CMD ["node", "index"]