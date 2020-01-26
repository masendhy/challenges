    --  siapin dulu :       
-- tambah kolom umur pada tabel mahasiswa
-- tambah kolom nilai pada kontrak
-- tambah mata kuliah data mining
-- tambah mahasiswa yang kontrak mata kuliah data mining


ALTER TABLE mahasiswa ADD umur INT;
UPDATE mahasiswa SET umur = 19 WHERE nim = 201912001;
UPDATE mahasiswa SET umur = 20 WHERE nim = 201912002;
UPDATE mahasiswa SET umur = 21 WHERE nim = 201912003;
UPDATE mahasiswa SET umur = 22 WHERE nim = 201912004;
UPDATE mahasiswa SET umur = 19 WHERE nim = 201912005;


ALTER TABLE kontrak ADD nilai VARCHAR;
UPDATE kontrak SET nilai = 'A' WHERE nim = 201912001;
UPDATE kontrak SET nilai = 'D' WHERE nim = 201912002;
UPDATE kontrak SET nilai = 'B' WHERE nim = 201912003;
UPDATE kontrak SET nilai = 'A' WHERE nim = 201912004;
UPDATE kontrak SET nilai = 'E' WHERE nim = 201912005;
UPDATE kontrak SET nilai = 'A' WHERE nim = 201912005;
UPDATE kontrak SET nilai = 'D' WHERE nim = 201912003;
UPDATE kontrak SET nilai = 'B' WHERE nim = 201912004;
UPDATE kontrak SET nilai = 'A' WHERE nim = 201912002;
UPDATE kontrak SET nilai = 'E' WHERE nim = 201912001;
UPDATE kontrak SET nilai = 'B' WHERE nim = 201912001;
UPDATE kontrak SET nilai = 'C' WHERE nim = 201912002;
UPDATE kontrak SET nilai = 'A' WHERE nim = 201912003;
UPDATE kontrak SET nilai = 'D' WHERE nim = 201912004;
UPDATE kontrak SET nilai = 'B' WHERE nim = 201912005;


INSERT INTO kontrak VALUES ('201912001','005122019','H005122019');
INSERT INTO kontrak VALUES ('201912002','004122019','H004122019');
INSERT INTO kontrak VALUES ('201912003','001122019','H001122019');
INSERT INTO kontrak VALUES ('201912004','002122019','H002122019');
INSERT INTO kontrak VALUES ('201912005','003122019','H003122019');
INSERT INTO kontrak VALUES ('201912001','001122019','H005122019');
INSERT INTO kontrak VALUES ('201912002','005122019','H005122019');
INSERT INTO kontrak VALUES ('201912003','006122019','H004122019');
INSERT INTO kontrak VALUES ('201912004','006122019','H004122019');
INSERT INTO kontrak VALUES ('201912005','006122019','H004122019');
INSERT INTO kontrak VALUES ('201912005','005122019','H005122019');


INSERT INTO mata_kuliah VALUES ('Data Mining','006122019','2');



-- 1. Tampilkan seluruh data mahasiswa beserta nama jurusannya
SELECT nim, nama_mhs, alamat, jurusan.nama_jurusan FROM mahasiswa INNER JOIN jurusan ON mahasiswa.id_jurusan = jurusan.id_jurusan;

-- 2. Tampilkan seluruh mahasiswa yang berumur kurang di 20 tahun
SELECT * FROM mahasiswa WHERE umur < 20;

-- 3. Tampilkan seluruh mahasiswa yang memiliki nilai B ke atas
SELECT * FROM kontrak WHERE nilai <= 'B';

-- 4. Tampilkan data mahasiswa yang memiliki SKS lebih dari 10
SELECT nim, nama_mhs  FROM kontrak GROUP BY nama_mhs  HAVING SUM(sks) >=10;

-- 5. Tampilkan data mahasiswa yang mengontrak mata kuliah 'data mining'
SELECT mahasiswa.nama_mhs,mata_kuliah.nama_matakuliah FROM mahasiswa, kontrak, mata_kuliah WHERE mahasiswa.nim = kontrak.nim AND mata_kuliah.id_matakuliah = kontrak.id_matakuliah AND nama_matakuliah = 'Data Mining';

-- 6. Tampilkan jumlah mahasiswa utuk setiap dosen
SELECT dosen.nama_dosen, mahasiswa.nama_mhs FROM mahasiswa, kontrak, dosen WHERE kontrak.id_dosen = dosen.id_dosen AND mahasiswa.nim = kontrak.nim;

-- 7. Urutkan mahasiswa berdasarkan umurnya
SELECT nama_mhs,umur FROM mahasiswa ORDER BY umur;

-- 8. Mahasiswa dengan nilai D dan E
SELECT mahasiswa.nama_mhs, jurusan.nama_jurusan, dosen.nama_dosen, mata_kuliah.nama_matakuliah, kontrak.nilai FROM ((( mahasiswa INNER JOIN jurusan ON mahasiswa.id_jurusan = jurusan.id_jurusan) INNER JOIN dosen ON kontrak.id_dosen = dosen.id_dosen ) INNER JOIN mata_kuliah ON kontrak.id_matakuliah = mata_kuliah.id_matakuliah )INNER JOIN kontrak ON kontrak.nim = mahasiswa.nim  WHERE kontrak.nilai = 'D' OR kontrak.nilai = 'E';