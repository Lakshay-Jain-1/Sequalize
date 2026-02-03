Model
- A model is an abstraction of a database table.
- It is used when we want to perform DML operations
  (insert, update, delete, select).
- Models are used by application code at runtime.

Migrations
- Migrations are used for DDL operations
  (create table, alter table, add/remove columns, constraints).
- They define how the database schema changes over time.
- Migrations are executed using sequelize-cli.
- Migration files use CommonJS syntax (module.exports).
- To avoid ES module conflicts, migration files should use the .cjs extension.
- To run migrations, use:
  npm sequelize-cli db:migrate
- Sequelize CLI searches the migrations folder and executes
  all pending migration files.
- Each migration has two methods:
  - up: moves the database to the next version
  - down: rolls the database back to the previous version

Seeders
- Seeders are used to insert dummy or initial data into tables.
- They are useful for testing, development, and default data setup.

Config
- The config file specifies which database is being used
  (SQLite, MySQL, PostgreSQL, etc.).
- It is mainly used by sequelize-cli for migrations and seeders.
