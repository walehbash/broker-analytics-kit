
-- Broker mini schema (PostgreSQL)
create table if not exists app_user (
  user_id text primary key,
  email text,
  country text,
  kyc_level text,
  created_at timestamp default now()
);

create table if not exists trade (
  trade_id serial primary key,
  user_id text references app_user(user_id),
  symbol text not null,
  side text check (side in ('BUY','SELL')),
  qty numeric(20,8) not null,
  price numeric(20,8) not null,
  fee numeric(20,8) default 0,
  timestamp timestamptz not null
);

create table if not exists portfolio_daily (
  user_id text references app_user(user_id),
  date date not null,
  equity_usd numeric(20,8) not null,
  primary key (user_id, date)
);

create table if not exists deposit (
  id serial primary key,
  user_id text references app_user(user_id),
  amount numeric(20,8) not null,
  created_at timestamptz default now()
);

create table if not exists withdrawal (
  id serial primary key,
  user_id text references app_user(user_id),
  amount numeric(20,8) not null,
  created_at timestamptz default now()
);
