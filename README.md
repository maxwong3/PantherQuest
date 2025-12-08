# PantherQuest

Hey team: for Sprint 4 Development: Check sprint-4-dev branch!


1. Local db data Setup

In psql:
```
CREATE DATABASE pantherquest;
\c pantherquest
\i absolutepathto/PantherQuest/app/backend/schema.sql
```

In terminal:
```
cd app/backend
node seed.js
```


2. To run the application with Express:  
```
npm run build
npm run start
``` 
Go to localhost:3000


[CS 1530]  
Max Wong   
Clover Hansel  
Ivan Liu  
Ruizhi Huang  
Zhuoyan Cen  
