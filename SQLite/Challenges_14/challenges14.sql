CREATE TABLE jurusan (
    id_jurusan varchar (11) primary key not null,
    nama_jurusan varchar (21) not null);   
    INSERT INTO jurusan VALUES ('HF201912001','Hafidz Quran');
    INSERT INTO jurusan VALUES ('IT201912002','Tehnik Informaika');
    INSERT INTO jurusan VALUES ('DG201912003','Digital Designer');
    INSERT INTO jurusan VALUES ('HF201912004','Hadist');


CREATE TABLE mahasiswa (
    nim varchar (13) primary key not null,
    nama_mhs varchar (31) not null,
    alamat varchar (27) not null,
    id_jurusan varchar (11) not null,
    nama_jurusan varchar (21) not null,
  foreign key(id_jurusan )references jurusan(id_jurusan));
 INSERT INTO mahasiswa VALUES ('201912001','Rais Tawheed','Condong Catur Jogja','HF201912001','Hafidz Quran');
 INSERT INTO mahasiswa VALUES ('201912002','Mumtaz Ghizan','Mojosongo Solo','IT201912002','Tehnik Informatika');
 INSERT INTO mahasiswa VALUES ('201912003','Rafeef Shava','Permai Indah Malang','DG201912003','Digital Designer');
 INSERT INTO mahasiswa VALUES ('201912004','Ramadhan','Raung Purna Bandung','HF201912004','Hadist');
 INSERT INTO mahasiswa VALUES ('201912005','Razka Dzikr','Savira Luxury Malang','HF201912004','Hadist');

CREATE TABLE kontrak(
    nim varchar (13)not null,
    nama_mhs varchar (31) not null,
    mata_kuliah varchar (17) not null,
    id_matakuliah varchar (11) not null,
    sks varchar (3) not null,
    nama_dosen varchar (31) not null,
    id_dosen varchar (11) not null,
primary key(nim,id_matakuliah,id_dosen),
foreign key(nim) references mahasiswa(nim),
foreign key (id_matakuliah) references matakuliah(id_matakuliah),
foreign key (id_dosen) references dosen(id_dosen));
INSERT INTO kontrak VALUES ('201912001','Rais Tawheed','Hafalan Quran','001122019','5','Ust.Assyauqy','H001122019');
INSERT INTO kontrak VALUES ('201912002','Mumtaz Ghizan','Hafalan Hadist','002122019','3','Ust. Mumtaz','H002122019');
INSERT INTO kontrak VALUES ('201912003','Rafeef Shava','UI Design','003122019','3','Sendhy Boedhi','H003122019');
INSERT INTO kontrak VALUES ('201912004','Ramadhan','UX Design','004122019','3','Satria Gagah','H004122019');
INSERT INTO kontrak VALUES ('201912005','Razka Dzikr','Full Stack','005122019','3','Andrew George','H005122019');

CREATE TABLE mata_kuliah(
    nama_matakuliah varchar (17) not null,
    id_matakuliah varchar(5) primary key not null,
    sks varchar (3) not null);
INSERT INTO mata_kuliah VALUES ('Hafalan Quran','001122019','5');
INSERT INTO mata_kuliah VALUES ('Hafalan Hadist','002122019','3');
INSERT INTO mata_kuliah VALUES ('UI Design','003122019','3');
INSERT INTO mata_kuliah VALUES ('UX Design','004122019','3');
INSERT INTO mata_kuliah VALUES ('Full Stack','005122019','3');

CREATE TABLE dosen(
    nama_dosen varchar (31) not null,
    id_dosen varchar (11) primary key not null);
INSERT INTO dosen VALUES ('Ust. Assyauqy','H001122019');
INSERT INTO dosen VALUES ('Ust. Mumtaz','H002122019');
INSERT INTO dosen VALUES ('Sendhy Boedhi','H003122019');
INSERT INTO dosen VALUES ('Satria Gagah','H004122019');
INSERT INTO dosen VALUES ('Andrew George','H00512219');








