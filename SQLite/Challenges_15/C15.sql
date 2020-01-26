/*1. tampilkan seluruh data mahasiswa beserta nama jurusannya*/ 
SELECT nim, nama_mhs, alamat, nama_jurusan FROM mahasiswa,jurusan WHERE mahasiswa.id_jurusan = jurusan.id_jurusan;

/* 2.tampilkan mahasiswa yang memiliki umur dibawah 20 tahun */ 
SELECT * FROM mahasiswa WHERE umur < 20;

/* 3. tampilkan mahasiswa yang memiliki nilai 'B' ke atas */ 
SELECT nama_mhs, nilai FROM mahasiswa, kontrak WHERE mahasiswa.nim = kontrak.nim AND Nilai <= 'B';
/* opsional */
SELECT nama_mhs, nilai FROM mahasiswa, kontrak WHERE mahasiswa.nim = kontrak.nim AND Nilai <= 'B' GROUP BY nama_mhs;

/* 4. tampilkan mahasiswa yang memiliki jumlah SKS lebih dari 10*/ 
SELECT nama_mhs, sum(sks) AS jumlah FROM mahasiswa,kontrak,mata_kuliah WHERE mahasiswa.nim=kontrak.nim AND kontrak.id_matkul=mata_kuliah.id_matkul GROUP BY nama_mhs HAVING jumlah  > 10

/* 5. tampilkan mahasiswa yang mengontrak mata kuliah 'Data mining'*/ 
SELECT nama_mhs,nama_matkul FROM mahasiswa, kontrak, mata_kuliah WHERE mahasiswa.nim = kontrak.nim AND kontrak.id_matkul = mata_kuliah.id_matkul AND nama_matkul = 'Data mining';

/* 6. tampilkan jumlah mahasiswa untuk setiap dosen*/ 
SELECT nama_dosen, COUNT(DISTINCT(nama_mhs)) FROM  mahasiswa, dosen, kontrak WHERE  dosen.id_dosen = kontrak.id_dosen AND mahasiswa.nim = kontrak.nim GROUP BY nama_dosen;

/* 7. urutkan mahasiswa berdasarkan umurnya*/ 
SELECT nama_mhs, umur FROM mahasiswa ORDER BY umur;

/* 8. tampilkan kontrak matakuliah yang harus diulang (nilai D dan E), serta tampilkan data mahasiswa jurusan dan dosen secara lengkap. gunakan mode JOIN dan WHERE clause (solusi terdiri dari 2 syntax SQL)*/ 
/* WHERE CONDITION */
SELECT nama_mhs, nama_jurusan, nama_dosen, nama_matkul,nilai FROM mahasiswa,jurusan,dosen,mata_kuliah,kontrak WHERE mahasiswa.nim= kontrak.nim AND mahasiswa.id_jurusan = jurusan.id_jurusan AND dosen.id_dosen=kontrak.id_dosen AND mata_kuliah.id_matkul = kontrak.id_matkul AND kontrak.nilai >= 'D';
/* INNER JOIN */
SELECT nama_mhs, nama_jurusan, nama_dosen, nama_matkul,nilai FROM mahasiswa INNER JOIN jurusan,dosen, mata_kuliah, kontrak ON mahasiswa.nim= kontrak.nim AND mahasiswa.id_jurusan = jurusan.id_jurusan AND dosen.id_dosen=kontrak.id_dosen AND mata_kuliah.id_matkul = kontrak.id_matkul AND kontrak.nilai >= 'D';

-- =======================
-- //tampilkan seluruh nama mahasiswa beserta jurusan
SELECT nim_mahasiswa, nama_mahasiswa, alamat, jurusan, umur
FROM mahasiswa;

-- //menampilkan data mahasiswa yg berumur dibawah 20 tahun.
SELECT nim_mahasiswa, nama_mahasiswa, umur
FROM mahasiswa
WHERE umur < 20;

-- // tampilkan mahasiswa yg mendapat nilai di atas B
SELECT mahasiswa.nim_mahasiswa, mahasiswa.nama_mahasiswa, nilai.pencapaian
FROM nilai
INNER JOIN mahasiswa
ON nilai.nim_mahasiswa = mahasiswa.nim_mahasiswa
WHERE pencapaian > "B";

-- //
SELECT mahasiswa.nama_mahasiswa, SUM(matakuliah.sks)
FROM mahasiswa, nilai, matakuliah
WHERE mahasiswa.nim_mahasiswa = nilai.nim_mahasiswa
AND nilai.id_matakuliah = matakuliah.id_matakuliah
GROUP BY mahasiswa.nama_mahasiswa
HAVING SUM(matakuliah.sks) >10;

-- //
SELECT mahasiswa.nim_mahasiswa, mahasiswa.nama_mahasiswa, matakuliah.nama_matakuliah, matakuliah.sks
FROM ((nilai
INNER JOIN mahasiswa ON nilai.nim_mahasiswa = mahasiswa.nim_mahasiswa)
INNER JOIN matakuliah ON nilai.id_matakuliah = matakuliah.id_matakuliah)
WHERE nama_matakuliah = "data mining";

-- //
SELECT dosen.nip_dosen, dosen.nama_dosen, COUNT(mahasiswa.nama_mahasiswa)
FROM ((nilai
INNER JOIN dosen ON  nilai.nip_dosen = dosen.nip_dosen)
INNER JOIN mahasiswa ON nilai.nim_mahasiswa = mahasiswa.nim_mahasiswa)
GROUP BY nama_dosen;

-- //
SELECT * FROM mahasiswa ORDER BY nama_mahasiswa ASC;
SELECT * FROM mahasiswa ORDER BY nama_mahasiswa DESC;

-- //
SELECT nama_matakuliah, nama_mahasiswa, nama_jurusan, nama_dosen, pencapaian
FROM (((mahasiswa
  INNER JOIN jurusan ON mahasiswa.id_jurusan = jurusan.id_jurusan)
  INNER JOIN nilai ON mahasiswa.nim_mahasiswa = nilai.nim_mahasiswa)
  INNER JOIN dosen ON dosen.nip_dosen = nilai.nip_dosen)
  INNER JOIN matakuliah ON matakuliah.id_matakuliah = nilai.id_matakuliah
  AND pencapaian > "B";