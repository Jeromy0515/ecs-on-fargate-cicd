FROM public.ecr.aws/docker/library/node:16

ARG ARG_PORT

ENV PORT $ARG_PORT

COPY . .

RUN yarn install -S

EXPOSE $PORT

CMD ["npm", "start"]