const express = require('express');
const path = require('path');
const db = require('./config/connection');
const {ApolloServer} = require('appolo-server-exress');
const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');