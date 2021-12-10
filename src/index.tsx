import React from "react";
import ReactDOM from "react-dom";
import {createServer, Model} from 'miragejs'
import { App } from "./App";

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de website",
          type: "deposit",
          category: "Jobs",
          amount: 1000,
          createdAt: new Date('2021-02-02 09:00:00')
        },
        {
          id: 2,
          title: "Headset Gamer",
          type: "withdraw",
          category: "Equipamentos Gamer",
          amount: 679.99,
          createdAt: new Date('2021-04-19 11:32:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = "api"

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions/create', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
