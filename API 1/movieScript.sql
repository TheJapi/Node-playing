create database if not exists movies;

use movies;

drop table if exists movie_data;
create table movie_data(
	id int auto_increment,
    title varchar(255),
    director varchar(255),
    `year` int(4),
    rating float,
    unique key(id),
    primary key(id)
);

insert into movie_data (title, director, `year`, rating)  values
('Las vacas vaqueras', 'Americo', 2005, 8.2);
