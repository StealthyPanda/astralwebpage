---
title: Clients & Endpoints
description: Interacting with the database.
---


There are 2 main ways to interact with 🚀✨AstralDB; python client and raw APIs.


## Client

The python client is a WIP, and will soon be released for use.

## Endpoints

Right now, you can use your favorite way of using http requests. All the endpoints are listed here: 


- GET `/stores `  -> returns all stores in this 🚀✨AstralDB instance.

---

- POST `/get {store:str, key:str}`  -> returns value of `key` in `store`.
- POST `/set {store:str, key:str, value:list}`  -> sets `value` of `key` in `store`.
- POST `/delete {store:str, key:str}`  -> deletes key-value pair in `store`.

---

- POST `/create_store {name:str}`  -> create a new store.
- POST `/delete_store {name:str}`  -> deletes the store.
- POST `/get_keys {name:str}`  -> get all the keys in the store.

And that's it! Lightweight, easy to use, and *super-fast*.

