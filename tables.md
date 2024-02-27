# PostgreSQL Data Tables

## 🗄️ Creating Database Tables 📊

### Fund Campaigns

```sql
  CREATE TABLE fund_raising_types (
    id SMALLINT PRIMARY KEY,
    type VARCHAR(20) NOT NULL UNIQUE
  );

  INSERT INTO fund_raising_types (id, type)
  VALUES
    (21, 'for car'),
    (22, 'for drone'),
    (23, 'for medicine'),
    (24, 'for equipment'),
    (25, 'for another');

  CREATE TABLE fund_raising_info (
    id SMALLSERIAL PRIMARY KEY,
    is_actual BOOLEAN NOT NULL,
	type_id SMALLINT REFERENCES fund_raising_types(id) NOT NULL ,
    purpose VARCHAR(50) NOT NULL,
    info TEXT NOT NULL,
    value INTEGER NOT NULL,
    request_video_url VARCHAR(255),
    report_video_url VARCHAR(255)
  );

  INSERT INTO fund_raising_info (id, is_actual, type_id, purpose, info, value)
  VALUES
    (7501, false, 21, 'На ремонт евакуаційного автомобіля', 'Допоможіть нам придбати автомобіль для ефективної доставки бійців до медичних пунктів.', 98000),
    (7502, false, 23, 'На закупівлю медичного обладнання та препаратів', 'Збираємо кошти на закупівлю турнікетів, нош, ліків.', 23000),
    (7503, false, 24, 'На придбання інструментів для бліндажів', 'Потрібні кошти на закупівлю інструментів для проведення робіт у прифронтових районах.', 18000),
    (7504, true, 22, 'На придбання дронів для військового підрозділу', 'Допоможіть нам придбати дрони для ведення ефективної розвідки ворожих позицій.', 37000);
```


- - -

## Retrieving Data

```sql
  SELECT * FROM fund_raising_types;

  SELECT * FROM fund_raising_info;
  
  SELECT id, purpose, value FROM fund_raising_info;

```


#### Command to delete a table from a database
```sql
  DROP TABLE table_name;
```

- - -

## Update Information

```sql
UPDATE fund_raising_info
  SET 
    is_actual = true,  -- зміна is_actual на true
    type_id = 25,      -- нове значення type_id
    purpose = 'Нова мета',  -- нова мета
    info = 'Нова інформація',  -- нова інформація
    value = 40000,     -- нове значення value
    request_video_url = 'новий_урл'  -- новий URL для запиту відео
    WHERE id = 7504;

```

