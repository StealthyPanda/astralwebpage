---
title: Python Client
description: Interacting with the database using python client.
---

To use the python client, simply import `StoreClient`:

```python
from astraldb import StoreClient
```


Always a `with` block to interact with your stores. `StoreClient`s have all the methods you would expect:

```python

with StoreClient('my-store') as store:
    store.set('x', [1, 2, 3])
    store.set('y', [4, 5, 6])
    
    print(store.keys) # {'x', 'y'}
    
    print(store.get('x')) # [1, 2, 3]

    ... and other store stuff
```



