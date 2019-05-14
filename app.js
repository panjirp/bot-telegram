Telegram = require('node-telegram-bot-api')
const token = 'YOUR-TELEGRAM-BOT-KEY';
const bot = new Telegram(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const user = msg.chat.first_name;   
    var date = new Date();
    var day = date.getHours();
    var hour = date.getHours();

    if (msg.text.toString().toLowerCase().indexOf("hi") === 0 || msg.text.toString().toLowerCase().indexOf("hai") === 0) {
        bot.sendMessage(chatId,"Hai, "+user+" :)");
    }else if (msg.text.toString().toLowerCase().includes("dimana") === true || msg.text.toString().toLowerCase().includes("di mana") === true || msg.text.toString().toLowerCase().includes("dimana?") === true || msg.text.toString().toLowerCase().includes("di mana?") === true){
        if(0 < day < 6){
            if(8 < hour < 18){
                bot.sendMessage(chatId,"Masih di kantor nih, "+user+" :)");
            }else{
                bot.sendMessage(chatId,"Udah di kosan nih, "+user+" :)");
            }
        }else{
            bot.sendMessage(chatId,"Di kosan kok, "+user+" :)");
        }
        
    }else if (msg.text.toString().toLowerCase().includes("lagi apa") === true || msg.text.toString().toLowerCase().includes("lagi apa?") === true || msg.text.toString().toLowerCase().includes("lg apa?") === true || msg.text.toString().toLowerCase().includes("lg apa") === true){
        if(0 < day < 6){
            if(8 < hour < 18){
                bot.sendMessage(chatId,"Lagi kerja nih, "+user+" :)");
            }else{
                bot.sendMessage(chatId,"Ga ngapa-ngapain kok, "+user+" :)");
            }
        }else{
            bot.sendMessage(chatId,"Gabut nih, "+user+" :)");
        }
        
    }

});