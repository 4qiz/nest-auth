FROM node:20.12.0-alpine3.19 AS dependencies
WORKDIR /admin-app
COPY package.json ./
RUN npm install

FROM node:20.12.0-alpine3.19 AS builder
WORKDIR /admin-app
COPY . .
COPY --from=dependencies /admin-app/node_modules ./node_modules
##RUN npx prisma generate && npm run build
RUN npm run build

FROM node:20.12.0-alpine3.19 AS runner
WORKDIR /admin-app
ENV NODE_ENV production

#COPY --from=builder /admin-app/public ./public
COPY --from=builder /admin-app/package.json ./package.json
COPY --from=builder /admin-app/.next ./.next
COPY --from=builder /admin-app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]