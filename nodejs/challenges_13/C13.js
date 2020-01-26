const fs  = require('fs')

const readData = ()=>{
    return JSON.parse (fs.readFileSync('data.json','utf8'))
}
const writeData = (data) =>{
    fs.writeFileSync("data.json",JSON.stringify(data,null,3),"utf8");
}

const help = `
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncompleted <task_id>
$ node list.js outstanding asc|desc
$ node list.js list:completed asc|desc
$ node list.js tag <task_id> <tag_name_1> <tag_name_2> <tag_name_N>
$ node list.js filter:<tag_name>`;

// console.log('>> JS TODO <<');
// console.log(help);

const param = process.argv;
let data = readData();
switch (param[2]){

case 'list' :
    console.log("Daftar Pekerjaan");
    console.log("================");
data = readData(); 
if(data.length > 0){
    for(let i = 0; i < data.length;i++){
    console.log(`${i+1}.${data[i].complete ? "[x]" : "[ ]"} ${data[i].task}.`);
}
}else{
    console.log("--tidak ada data--");
}
break;

case 'task' :
    let idTask = parseInt(param[3])-1;
    if(idTask < data.length){
    console.log(`${param[3]}.${data[idTask].complete ? "[x]" : "[ ]"} ${data[idTask].task}.`);
    }else{
        console.log(`data ID ${param[3]} tidak ditemukan`);
    }
break;

case 'add' :
    let plan = param.slice(3).join('');
    data.push({task:plan,complete:false,tags:[]})
    writeData(data);
    console.log(`"${plan}"telah di tambahkan`);
break;

case 'delete' :
let idDelete = param[3]-1;
let thisDelete = data[idDelete];
data.splice(idDelete,1);
writeData(data);
console.log(`${param[3]} 'telah di hapus'`);

break;

case 'complete' :
let idComplete = param[3]-1;
data[idComplete].complete = true;
writeData(data);
console.log(`${param[3]}'data telah selesai'`);

break;

case 'uncomplete' :
let unComplete = param[3]-1;
data[unComplete].complete = false;
writeData(data);
console.log(`${param[3]}'data telah dibatalkan'`);

break;

case 'list outstanding' :
    
}