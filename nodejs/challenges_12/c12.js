const fs = require('fs');
const readline = require('readline');

if (process.argv[2] === 'data.json') {
    fs.readFile('data.json', (err, data) => {
        if (err) throw err;
        const object = JSON.parse(data);
        let number = 0;
        let count = 0;
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: 'Jawaban: '
        });

        console.log(
            'Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini "data.json". \nUntuk bermain, jawablah dengan jawaban yang sesuai. \nGunakan "skip" untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.'
        );
        console.log(`\nPertanyaan: ${object[number].definition}`);

        rl.prompt();
        rl.on('line', answer => {
            if (answer.toLowerCase() === 'skip') {
                object.push(object[number]);
                number++;
                count = 0;
                console.log(`\nPertanyaan: ${object[number].definition}`);
            } else {
                if (answer.toLowerCase() === object[number].term.toLowerCase()) {
                    console.log('\nAnda Beruntung!');
                    number++;
                    if (number === object.length) {
                        rl.close();
                    }
                    console.log(`\nPertanyaan: ${object[number].definition}`);
                } else {
                    count++;
                    console.log(
                        `\nAnda Kurang Beruntung! anda telah salah ${count} kali, silahkan coba lagi.`
                    );
                }
            }

            rl.prompt();
        }).on('close', () => {
            console.log('\nAnda Berhasil');
            process.exit(0);
        });
    });
} else {
    console.log('Tolong sertakan nama file sebagai inputan soalnya \nMisalnya "node solution.js data.json"');
}