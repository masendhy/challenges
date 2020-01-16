CREATE TABLE user (
    id              INT             AUTO_INCREMENT,
    username        varchar(10)     NOT NULL,
    password        varchar(8)      NOT NULL,
    user_role        varchar(15)     NOT NULL,
    PRIMARY KEY (id)           
);

CREATE TABLE mahasiswa (
    nim             varchar(10)     NOT NULL,
    nama            varchar(30)     NOT NULL,
    umur            INT             NOT NULL,
    alamat          varchar(50)     NOT NULL,
    id_jurusan      INT             NOT NULL,
    PRIMARY KEY (nim),
    FOREIGN KEY (id_jurusan) REFERENCES jurusan(id_jurusan)
);

CREATE TABLE jurusan (
    id_jurusan      INT             AUTO_INCREMENT,
    nama_jurusan    varchar(30)     NOT NULL,
    PRIMARY KEY (id_jurusan)     
);

CREATE TABLE dosen (
    nip             varchar(10)     NOT NULL,
    nama_dosen      varchar(30)     NOT NULL,
    PRIMARY KEY (nip)
);

CREATE TABLE matakuliah (
    id_matakuliah   INT             AUTO_INCREMENT,
    nama_matakuliah varchar(30)     NOT NULL,
    sks             varchar(1)      NOT NULL
);

CREATE TABLE kontrak (
    id_kontrak      INT             AUTO_INCREMENT,
    nim             varchar(10)     NOT NULL,
    nip             varchar(10)     NOT NULL,
    id_matakuliah   INT             NOT NULL,
    nilai           varchar(1)      NOT NULL,
    PRIMARY KEY (id_kontrak),
    FOREIGN KEY (nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY (nip) REFERENCES dosen(nip),
    FOREIGN KEY (id_matakuliah) REFERENCES matakuliah(id_matakuliah)      
);

INSERT INTO user (id, username, password, userrole)
VALUES (2050, "sendhyboedhi", "abikbaik1", "admin");

INSERT INTO jurusan (id_jurusan, nama_jurusan) 
VALUES (1, "Front End"), 
(2, "Back End"), 
(3, "Full Snack");

INSERT INTO mahasiswa (nim, nama, alamat, id_jurusan) 
VALUES ("0119A00001", "Budi Handoyo", "Komplek Pelajar Pejuang", 1),
("0119A00002", "Candra Wijaya", "Jl. Arcamanik 1", 2),
("0119A00003", "Bakti Waluyo", "Kavling Ciwastra A1", 3);

INSERT INTO dosen (nip, nama_dosen)
VALUES ("2020D01", "Rubi Henjaya"),
("2020D02", "Reky Henjaya"),
("2020D03", "Rizal Henjaya");

INSERT INTO matakuliah (id_matakuliah, nama_matakuliah, sks)
VALUES (101, "Pengantar Java Script", 3),
(102, "Pengantar Vue JS", 3),
(103, "Pengantar React Native", 3),
(104, "Java Script Dasar", 2),
(105, "Vue JS Dasar", 2),
(106, "React Native Dasar", 2),
(107, "Java Script Lanjutan", 1),
(108, "Vue JS Lanjutan", 1),
(109, "React Native Lanjutan", 1);

INSERT INTO kontrak (id_kontrak, nama, alamat, id_jurusan, nim, nip, id_matakuliah, nilai)
VALUES (111, "Toni Stark","Cibaduyut",1,"01M2020", "2020D01", 101, "A"),
(112, "Toni Stark","Cibaduyut",1,"01M2020", "2020D02", 104, "B"),
(113, "Toni Stark","Cibaduyut",1,"01M2020", "2020D03", 107, "C"),
(114, "Vision","Cicaheum",2,"02M2020", "2020D01", 102, "A"),
(115, "Vision","Cicaheum",2,"02M2020", "2020D02", 105, "B"),
(116, "Vision","Cicaheum",2,"02M2020", "2020D03", 108, "C"),
(117, "Hulk","Cilengkrang",3,"03M2020", "2020D01", 103, "A"),
(118, "Hulk","Cilengkrang",3,"03M2020", "2020D02", 106, "B"),
(119, "Hulk","Cilengkrang",3,"03M2020", "2020D03", 109, "C");

/* tambah umur */
INSERT INTO mahasiswa (nim, nama, umur, alamat, id_jurusan)
VALUES ("0119A00001", "Budi Handoyo", 18, "Komplek Pelajar Pejuang", 1),
("0119A00002", "Candra Wijaya", 19, "Jl. Arcamanik 1", 2),
("0119A00003", "Bakti Waluyo", 18, "Kavling Ciwastra A1", 3);

/* tambah siswa */
INSERT INTO mahasiswa (nim, nama, umur, alamat, id_jurusan)
VALUES ("0119A00004", "Willy Hilman", 21, "Komplek Banjarsari", 1),
("0119A00005", "Rahmat Lukmansyah", 20, "Jl. Aeromodeling 1", 2),
("0119A00006", "Andi Komarudin", 19, "Kavling Cipedes Barat A", 3);

/* tambah mata kuliah */
INSERT INTO matakuliah (id_matakuliah, nama_matakuliah, sks)
VALUES (110, "Data Mining", 3),
(111, "Database", 3),
(112, "Ilmu Komputer", 3),
(113, "Algoritma Dasar", 3),
(114, "Algoritma Pemrograman", 3),
(115, "Algoritma Lanjutan", 3),
(116, "Pemrograman Dasar", 1),
(117, "Ekonomi Pembangunan", 1),
(118, "Sistem Keuangan", 1);

/* tambah nilai */
INSERT INTO kontrak (id_kontrak, nim, nip, id_matakuliah, nilai)
VALUES (120, "0119A00004", "0109D99001", 101, "B"),
(121, "0119A00004", "0109D99002", 104, "D"),
(122, "0119A00004", "0109D99003", 107, "E"),
(123, "0119A00005", "0109D99001", 102, "B"),
(124, "0119A00005", "0109D99002", 105, "D"),
(125, "0119A00005", "0109D99003", 108, "E"),
(126, "0119A00006", "0109D99001", 103, "B"),
(127, "0119A00006", "0109D99002", 106, "D"),
(128, "0119A00006", "0109D99003", 109, "E"),
(129, "0119A00001", "0109D99001", 110, "A"),
(130, "0119A00001", "0109D99002", 111, "B"),
(131, "0119A00001", "0109D99003", 112, "C"),
(132, "0119A00002", "0109D99001", 113, "A"),
(133, "0119A00002", "0109D99002", 114, "B"),
(134, "0119A00002", "0109D99003", 115, "C"),
(135, "0119A00003", "0109D99001", 116, "A"),
(136, "0119A00003", "0109D99002", 117, "B"),
(137, "0119A00003", "0109D99003", 118, "C");
(138, "0119A00004", "0109D99001", 110, "B"),
(139, "0119A00004", "0109D99002", 111, "D"),
(140, "0119A00004", "0109D99003", 112, "E"),
(141, "0119A00005", "0109D99001", 113, "B"),
(142, "0119A00005", "0109D99002", 114, "D"),
(143, "0119A00005", "0109D99003", 115, "E"),
(144, "0119A00006", "0109D99001", 116, "B"),
(145, "0119A00006", "0109D99002", 117, "D"),
(156, "0119A00006", "0109D99003", 118, "E");


/* Tampilkan data mahasiswa beserta nama jurusan */
SELECT mahasiswa.*, jurusan.nama_jurusan
FROM mahasiswa 
INNER JOIN jurusan ON mahasiswa.id_jurusan=jurusan.id_jurusan;

/* Tampilkan mahasiswa yang memiliki umur dibawah 20 tahun */
SELECT * 
FROM mahasiswa 
where umur < 20;

/* Tampilkan mahasiswa yang memiliki nilai 'B' ke atas */
SELECT mahasiswa.nim, mahasiswa.nama, kontrak.nilai, matakuliah.nama_matakuliah
FROM ((mahasiswa INNER JOIN kontrak ON mahasiswa.nim = kontrak.nim)
INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah)
WHERE nilai BETWEEN 'A' and 'B';

/* Tampilkan mahasiswa yang memiliki jumlah sks lebih dari 10 */
SELECT mahasiswa.nim, mahasiswa.nama, SUM(sks) 
FROM ((mahasiswa INNER JOIN kontrak ON mahasiswa.nim = kontrak.nim) 
INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah) 
GROUP BY kontrak.nim 
HAVING SUM(sks) > 10;

/* Tampilkan mahasiswa yang mengontrak mata kuliah 'data mining' */
SELECT mahasiswa.nim, mahasiswa.nama, matakuliah.nama_matakuliah
FROM ((mahasiswa INNER JOIN kontrak ON mahasiswa.nim = kontrak.nim) 
INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah)
WHERE nama_matakuliah = 'Data Mining';

/* Tampilkan jumlah mahasiswa untuk setiap dosen */ 
SELECT dosen.nip, dosen.nama_dosen, COUNT(mahasiswa.nama)
FROM ((kontrak INNER JOIN mahasiswa ON kontrak.nim = mahasiswa.nim)
INNER JOIN dosen ON kontrak.nip = dosen.nip)
GROUP BY kontrak.nip
HAVING COUNT(mahasiswa.nama);

/* Urutkan mahasiswa berdasarkan umur */
SELECT * 
FROM mahasiswa 
ORDER BY umur ASC;

/* Tampilkan kontrak mata kuliah yang harus diulangi (nilai D dan E) */
SELECT mahasiswa.*, jurusan.nama_jurusan, dosen.*, matakuliah.*, kontrak.nilai
FROM ((((mahasiswa INNER JOIN kontrak ON mahasiswa.nim = kontrak.nim) 
INNER JOIN dosen ON kontrak.nip = dosen.nip) 
INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah) 
INNER JOIN jurusan ON mahasiswa.id_jurusan = jurusan.id_jurusan)
WHERE nilai BETWEEN 'D' and 'E';