import { async } from 'rxjs';
import { connection } from '../utils/database';

export const getClients = () => {
  return async (req, res) => {
    let qry = 'SELECT *  from clients;';
    let result = connection.query(qry, (err) => {
      if (err) {
        res.json({ message: 'Internal server error' }).status(500);
        throw err;
      }
      res.json({message: 'Clients fethed successfully', clients: result}).status(200)
      console.log(result);
    });
    console.log(result);
  };
};
export const getClientById = () => {
  return async (req, res) => {
    let qry = `SELECT * from clients where Id =${req.params.userId} `;
    let result = connection.query(qry, (err) => {
      res.json({message : 'Internal server error', err: err.message}).status(500)
      throw err
    });
    res.json({message: 'client retrieval successfull', client: result}).status(200)
  };
};

export const 
