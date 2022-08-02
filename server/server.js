const express = require('express');
const path = require('path');
const db = require('./config/connection');
const {ApolloServer} = require('appolo-server-exress');
const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function startApolloServer() {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await server.start();
  
    server.applyMiddleware({ app });
  
    app.use(express.static(path.join(__dirname, "../client/build")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
  
  
  
    db.once("once", () => {
      app.listen(PORT, () => console.log('Now listening on localhost:${PORT}'));
    })
  
    return {server, app};
  }

  startApolloServer(typeDefs, resolvers);