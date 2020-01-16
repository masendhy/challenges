const Table = require('cli-table');
const readline = require('readline');
const sqlite3 = require('sqlite3').verbose();

//koneksi db
const dbFile = __dirname + "/university.db";
let db = new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
      }
    //   console.log('Connected to university.db');
    });
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * TODO: LOGIN USER
 */
function login() {
    console.log('===========================================================');
    console.log(`Welcome to Universitas Pendidikan Indonesia`);
    console.log(`Jl. Setiabudhi No.255`);
    console.log('===========================================================');
    rl.question("username: ", (username) => {
            rl.question("password: ", (password) => {
            console.log("===========================================================");
            db.serialize( () => {
                let sql = `SELECT * FROM user WHERE user.username="${username}" AND user.password = "${password}"`;
                db.get(sql, (err, rows) => {
                    if (err) throw err;
                    if (rows) {
                        console.log(`Welcome, ${rows.username}. Your access level is: ${rows.userrole}`);
                        mainMenu();                    
                    } else {
                        console.log("user tidak terdaftar");
                        login();
                    }
                });
            });
        })
    })
}
// mainMenu();

login();
function mainMenu(){
    console.log("============================================================");
    console.log("silahkan pilih opsi di bawah ini : ");
    console.log("[1] Mahasiswa");
    console.log("[2] Jurusan");
    console.log("[3] Dosen");
    console.log("[4] Mata Kuliah");
    console.log("[5] Kontrak");
    console.log("[6] keluar");
    console.log(("============================================================"));
    rl.question("masukkan salah satu no. dari opsi diatas :",(num)  => {
        switch(num){
            case"1":
                menuMahasiswa();
            break;
            case"2":
                menuJurusan();
            break;
            case"3":
                menuDosen();
            break;
            case"4":
                menuMataKuliah();
            break;
            case"5":
                menuKontrak();
            break;
            case"6":
                logout();
            break;
            default:
                console.log("anda telah selesai");
                mainMenu();
            break;
        
        }
    });    
}

function logout(){
    console.log("=============================================================");
    console.log("ANDA BERHASIL KELUAR DARI SISTEM");
    // mainMenu();
}
function menuMahasiswa(){
     console.log("===========================================================");
     console.log(" silahkan pilih opsi di bawah ini :");
     console.log("[1] Daftar Mahasiswa");
     console.log("[2] Cari Mahasiswa");
     console.log("[3] Tambah Mahasiswa");
     console.log("[4] Hapus Mahasiswa");
     console.log("[5] kembali");
     console.log("===========================================================");
     rl.question("masukkan salah satu no. dari opsi diatas :",(num) => {
    //  console.log("===========================================================");
        switch(num){
            case"1":
            listMahasiswa();
            break;
            case"2":
            searchMahasiswa();
            break;
            case"3":
            addMahasiswa();
            break;
            case"4":
            deleteMahasiswa();
            break;
            case"5":
            mainMenu();
            break;
            default:
                console.log("tidak ada pilihan ");
                menuMahasiswa();
                break;     

        }
    })
}
function listMahasiswa (){
    db.serialize(() =>{
        const sql = `select * from mahasiswa`;
        db.all(sql,(err,mahasiswa) => {
        if(err) throw err;
        if (mahasiswa){
        let table = new Table ({
            head : ['nim', 'nama', 'alamat', 'jurusan' ],
            colWidths : [17, 23, 31,17]
        });
        // looping trough mahasiswa using forEach because an array data
        mahasiswa.forEach((mahasiswa) =>{
            // you can .push, .slice, .splice because an array
        table.push(
        [`${mahasiswa.nim}`, `${mahasiswa.nama}`, `${mahasiswa.alamat}`, `${mahasiswa.id_jurusan}`]
        );
        });
        console.log(table.toString());
        menuMahasiswa();
        }  else {
            console.log("tidak terdapat data mahasiswa");
            menuMahasiswa();            
        }
    });
});
}

function searchMahasiswa(){
    rl.question('masukkan NIM :', (answer) => {
        db.serialize(() => {
            const sql = ` select * from mahasiswa WHERE nim = ?`;
            db.get(sql, [answer], function( err,mahasiswa){
                if (err) throw err;
                if(mahasiswa){
                    console.log("===========================================================");
                    console.log('Mahasiswa details :');
                    console.log(`id         : ${mahasiswa.nim}`);
                    console.log(`nama       : ${mahasiswa.nama}`);
                    console.log(`alamat     : ${mahasiswa.alamat}`);
                    console.log(`jurusan    : ${mahasiswa.id_jurusan}`);
                    menuMahasiswa();
                    
                }else{
                    console.log(`mahasiswa dengan nim ${answer} tidak terdaftar`);
                    menuMahasiswa();
                }
            });
        });
    });
}

function addMahasiswa(){
    console.log("Lengkapilah data berikut ini :");
    rl.question('NIM        :',(nim) => {
        rl.question("NAMA       :",(nama) =>{
            rl.question('ALAMAT     :',(alamat) => {
                rl.question('JURUSAN    :',(id_jurusan)  =>{
                    db.serialize(() =>{
                        const sql =`INSERT INTO mahasiswa (nim, nama, alamat, id_jurusan) VALUES ("${nim}","${nama}","${alamat}","${id_jurusan}")`;
                        db.run(sql,(err) => {
                            if(err) throw err;
                            console.log(`data mahasiswa BERHASIL ditambahkan`);
                            listMahasiswa();
                        });
                    });
                })
            })
        })
    })
}

function deleteMahasiswa(){
    rl.question("Masukkan NIM mahasiswa yang akan dihapus : ",(nim) => {
        db.serialize(() =>{
            const sql =`DELETE FROM mahasiswa WHERE nim = ?`;
            db.run(sql,[nim],(err,row) => {
                if (err) throw err;
                    if(row){
                    console.log(`Mahasiswa dengan NIM : ${nim} telah dihapus`);
                    console.log("===================================================");
                    menuMahasiswa();
                    }else {
                    console.log(`data mahasiswa yang kan dihapus TIDAK TERSEDIA`);
                    menuMahasiswa();
                }
            });
        });
    })
}

function menuJurusan(){
    console.log("============================================================");
    console.log("Pilih opsi dibawah ini :");
    console.log("[1] Daftar Jurusan");
    console.log("[2] Cari Jurusan");
    console.log("[3] Tambah Jurusan ");
    console.log("[4] Hapus Jurusan");
    console.log("[5] kembali");
    console.log("============================================================");
    rl.question("Silahkan Pilih Menu diatas : ", (num) =>{
        switch(num){
            case"1":
            listJurusan();
            break;
            case"2":
            cariJurusan();
            break;
            case"3":
            addJurusan();
            break;
            case"4":
            deleteJurusan();
            break;
            case"5":
            mainMenu();
            break;
            default:
                console.log("Tidak ada pilihan");
                menuJurusan();
                break;
        }
    })
    
    function listJurusan(){
        db.serialize(() =>{
            let sql ="select * from jurusan";
            db.all(sql,(err,rows) => {
            if(err) throw err;
            if(rows){
                // cetak isi rows
            let table = new Table({
                head : ['No.','Nama Jurusan'],
                colWidths : [11,25]
            });
            rows.forEach( (jurusan, index) => {
                table.push(
                    [`${index+1}`, `${jurusan.nama_jurusan}`]
                );
            });
            console.log(table.toString());
            menuJurusan();
            }
            });
       });
    }
}

function cariJurusan(){
    rl.question("Masukkan Nama Jurusan : ",(nama) => {
        console.log("=========================================================");
        db.serialize(() => {
            const sql = "select * from jurusan WHERE nama_jurusan = ?";
            db.get(sql,[nama],(err,jurusan) => {
                if (err) throw err;
                if(jurusan){1
                    console.log("id             : " + jurusan.id_jurusan);
                    console.log("nama jurusan   : " + jurusan.nama_jurusan);
                    menuJurusan();
                } else
                    console.log("DATA TIDAK TERSEDIA");
                    menuJurusan(); 
                });
            });
        })
    }
    
function addJurusan(){
console.log("Lengkapi data di bawah ini : ");
rl.question("Jurusan : ",(jurusan) => {
    db.serialize(() => {
        const sql = `INSERT INTO jurusan (nama_jurusan) VALUES ("${jurusan}")`;
        db.run(sql,(err) => {
            if(err) throw err;
            menuJurusan();
        });
    });
});
}

function deleteJurusan(){
rl.question("Masukkan nama jurusan yang akan di hapus : ",(nama_jurusan) => {
    db.serialize(() => {
        const sql = ` DELETE FROM jurusan WHERE nama_jurusan = ?`;
        db.run(sql,[nama_jurusan],(err,row) => {
            if (!err){
                if(row){
                    console.log(`Jurusan ${nama_jurusan} telah berhasil dihapus`);
                menuJurusan();
                }else{
                    console.log(`data jurusan yang akan dihapus TIDAK TERSEDIA`);
                menuJurusan();
                    
                }
                
            }
        });
      });
    })
}

function menuDosen (){
console.log("============================================================");
console.log("Silahkan pilih opsi dibawah ini :");
console.log("[1] Daftar Dosen");
console.log("[2] Cari Dosen");
console.log("[3] Tambah Dosen ");
console.log("[4] Hapus Dosen");
console.log("[5] kembali");
console.log("============================================================");
rl.question("Masukkan salah satu nomor dari opsi diatas: ",(dosen) =>{
    switch(dosen){
        case"1":
        listDosen();
        break;
        case"2":
        searchDosen();
        break;
        case"3":
        addDosen();
        break;
        case"4":
        deleteDosen();
        break;
        case"5":
        mainMenu();
        break;
        default:
            console.log("Data tidak tersedia");
            menuDosen();
            break;
        }
    })
}

function listDosen(){
    db.serialize(() => {
        const sql = "select * from dosen";
        db.all(sql,(err,rows) => {
            if (err) throw err;
            if(rows){
                const table = new Table({
                    head : ['NIP', 'Nama Dosen'],
                    colWidths : [17,27]
                });
                rows.forEach((dosen) => {
                    table.push(
                        [`${dosen.nip}`,`${dosen.nama_dosen}`]
                    );
                });
                console.log(table.toString());
                menuDosen();
            } else {
                console.log("tidak ada data dosen");
                listDosen();
            }
        });
    });
}

function searchDosen (){
    console.log("============================================================");
    rl.question("Masukkan NIP :",(nip) =>{
        console.log("============================================================");
        db.serialize(() => {
            const sql= "select * from dosen WHERE nip = ? ";
            db.get(sql,[nip],(err,dosen) => {
                if(err) throw err;
                if(dosen){
                    console.log("nip        : "+ dosen.nip);
                    console.log("nama       : "+ dosen.nama_dosen);  
                    menuDosen();  
                } else {
                    console.log("data dosen tidak ditemukan");
                    menuDosen();
                }
            });
        });
    })
}

function addDosen (){
    console.log("Lengkapi data dibawah ini :");
    rl.question("NIP        : ",(nip) => {
        rl.question("Nama Dosen :",(nama) => {
            db.serialize(() =>{
                const sql =`INSERT INTO dosen (nip, nama_dosen) VALUES ("${nip}","${nama}")`;
                db.run(sql,(err) => {
                    if(err) throw err;
                    console.log('data dosen berhasil ditambahkan');
                    menuDosen();
                });
            });
        });
    })
}

function deleteDosen (){
    rl.question('Masukkan NIP dosen yang akan dihapus :',(nip) => {
        db.serialize(() =>{
            const sql = 'DELETE FROM dosen WHERE nip = ?';
            db.run(sql,[nip],(err,row) =>{
                if(!err){
                    if(row){
                        console.log(`Data dosen dengan NIP : ${nip} telah berhasil dihapus.`);
                    menuDosen();
                    } else {
                        console.log(`data dosen yang akan dihapus TIDAK TERSEDIA`);
                    menuDosen();
                    }
                 }
            })
        })
    })
}

function menuMataKuliah (){
    console.log("====================================================");
    console.log("Silahkan pilih opsi dibawaah ini : ");
    console.log("[1] Daftar Mata Kuliah");
    console.log("[2] Cari Mata Kuliah");
    console.log("[3] Tambah Mata Kuliah ");
    console.log("[4] Hapus Mata Kuliah ");
    console.log("[5] kembali");
    console.log("===================================================");
    rl.question("Masukkan salah satu no. dari opsi diatas : ",(num) =>{
        switch(num){
            case"1":
            listMataKuliah();
            break;
            case"2":
            searchMataKuliah();
            break;
            case"3":
            addMataKuliah();
            break;
            case"4":
            deleteMataKuliah();
            break;
            case"5":
            mainMenu();
            break;
            default:
                console.log("data tidak tersedia");
                menuMataKuliah();
                break;
        }
    })    
}

function listMataKuliah(){
    db.serialize(() => {
        const sql = "select * from matakuliah";
        db.all(sql,(err,rows) => {
            if (err) throw err;
            if (rows){
                const table = new Table ({
                    head : ['ID','Mata Kuliah','SKS'],
                    colWidths : [11,27,11,11]
                });
                rows.forEach((matakuliah) => {
                    table.push(
                        [`${matakuliah.id_matakuliah}`,`${matakuliah.nama_matakuliah}`,`${matakuliah.sks}`]
                    )
                });
                console.log(table.toString());
                menuMataKuliah();
            } else {
                console.log(" data tidak tersedia");
                menuMataKuliah();
            }
        })
    })
}

function searchMataKuliah(){
    rl.question(" Masukkan Nama Mata Kuliah : ",(namamatakuliah) =>{
        console.log("====================================================");
        db.serialize(() =>{
            const sql = "select * from matakuliah where id_matakuliah = ? ";
            db.get(sql,[namamatakuliah],(err,matakuliah) =>{
                if(err) throw err;
                if(matakuliah){
                    console.log("id                 :"+ matakuliah.id_matakuliah);
                    console.log("Nama Mata Kuliah   :"+ matakuliah.nama_matakuliah);
                    console.log("SKS                :"+ matakuliah.sks);       
                } else
                console.log(" data tidak tersedia ");
                menuMataKuliah();                
            })
        })
    })
}

function addMataKuliah(){
    console.log("Lengkapi data dibawah ini :");
    rl.question(`ID Mata Kuliah         :`,(id_matakuliah) =>{
    rl.question(`Nama Mata Kuliah       :`,(nama_matakuliah) =>{
        rl.question("SKS                    : ",(sks) => {
            db.serialize(() =>{
                const sql = `INSERT INTO matakuliah (id_matakuliah, nama_matakuliah,sks) VALUES("${id_matakuliah}","${nama_matakuliah}","${sks}")`;
                db.run(sql,(err) =>{
                    if(err) throw err;
                        console.log('Data mata kuliah BERHASIL ditambahkan');
                        listMataKuliah();
                });
            });
        });
    });
})
}

function deleteMataKuliah(){
    rl.question("Masukkan nama matakuliah yang akan dihapus :",(nama_matakuliah) => {
        db.serialize(() =>{
            const sql =`DELETE FROM matakuliah WHERE nama_matakuliah = ?`;
            db.run(sql,[nama_matakuliah],(err) => {
                if(!err){
                console.log(`Matakuliah ${nama_matakuliah} berhasil dihapus`);
                menuMataKuliah();    
                }            
            })
        })
    })
}

function menuKontrak(){
    console.log("==============================================================");
    console.log("silahkan pilih opsi dibawah ini");
    console.log("[1] Daftar Kontrak ");
    console.log("[2] Cari Kontrak");
    console.log("[3] Tambah Kontrak");
    console.log("[4] Hapus Kontrak");
    console.log("[5] kembali");
    console.log("==============================================================");
    rl.question("Masukkan salah satu no. dari opsi diatas : ",(num) =>{
        switch(num){
            case"1":
            listKontrak();
            break;
            case"2":
            searchKontrak();
            break;
            case"3":
            addKontrak();
            break;
            case"4":
            deleteKontrak();
            break;
            case"5":
            mainMenu();
            break;
            default:
                console.log("data tidak tersedia");
                menuKontrak();
                break;  
        }
    })
}

function listKontrak(){
    db.serialize(() => {
        const sql = "SELECT * FROM kontrak";
        db.all(sql,(err,rows) => {
            if (err) throw err ;
            if(rows){
                const table = new Table ({
                    head : ['NIM','Nama',"Alamat","Jurusan"],
                    colWidths : [11,27,21,11]
                });
                rows.forEach((mahasiswa) =>{
                    table.push(
                        [`${mahasiswa.nim}`,`${mahasiswa.nama}`,`${mahasiswa.alamat}`,`${mahasiswa.id_jurusan}`]
                    );
                });
                console.log(table.toString());
                menuKontrak();
            } else {
                console.log("data kontrak tidak tersedia");
            }
        });
    });
}

function searchKontrak(){
    rl.question("Masukkan NIM :",(nim) =>{
        db.serialize(() =>{
            const sql = "SELECT * FROM kontrak WHERE nim = ? ";
            db.all(sql,[nim],(err,row) => {
                if(err) throw err;
                if(row){
                row.forEach((kontrak) => {
                    console.log("id_kontrak         :" + kontrak.id_kontrak);
                    console.log("nilai              :" + kontrak.nilai);
                    console.log("id_matakuliah      :" + kontrak.id_matakuliah);
                    console.log("nim                :" + kontrak.nim);
                    console.log("nama               :" + kontrak.nama);
                    console.log("NIP                :" + kontrak.nip);
                })
                    menuKontrak();
                }else{
                    console.log("data kontrak tidak tersedia");
                    menuKontrak();
                }
            })
        })
    })
}
function addKontrak(){
    console.log("Lengkapi data dibawah ini : ");
    rl.question("NIM        : ",(nim) =>{
        rl.question("Nama       :",(nama) => {
            rl.question("Alamat     :",(alamat) =>{
                rl.question("Jurusan    :",(id_jurusan) =>{
                    db.serialize(() => {
                        const sql = `INSERT INTO kontrak (nim,nama,alamat,id_jurusan) VALUES ("${nim}","${nama}","${alamat}","${id_jurusan}")`;
                    db.run(sql,(err) => {
                        if(err) throw err;
                        menuKontrak();
                    });
                    });
                });
            });
        });
    });
}

function deleteKontrak(){
    rl.question("Masukkan ID Kontrak yang akan dihapus :",(id_kontrak) =>{
        db.serialize(() =>{
            const sql =`DELETE FROM kontrak WHERE id_kontrak = ?`;
            db.run(sql,[id_kontrak],(err) => {
                if(!err){
                    console.log(`Kontrak denga nomor ID = ${id_kontrak} telah berhasil di hapus`);
                    menuKontrak();
                }
            });
        });
    });
}s