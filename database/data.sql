insert into users
  ("firstName", "lastName", "password", "email")
  values 
    ('Heather', 'Smith', 'asd', 'heather@example.com'),
    ('Jim', 'Bob', '123', 'jim@example.com');

insert into events
  ("name", "description", "location", "userId")
  values
    ('Part at LearningFuze', 'Big graduation party at LFZ BYOB', 'Irvine, CA', 1),
    ('Chillie Cook Off', 'Come eat lots of chillie', 'Redlands, CA', 1);
