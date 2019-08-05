CREATE TABLE IF NOT EXISTS allusers (
	id SERIAL PRIMARY KEY,
	user_name TEXT,
	password TEXT,
	profile_photo TEXT,
	profile_caption TEXT
);

CREATE TABLE IF NOT EXISTS allphotos(
	id SERIAL PRIMARY KEY,
	image_name TEXT,
	user_id INTEGER,
	location TEXT,
	img_link TEXT,
	img_restaurant TEXT
);