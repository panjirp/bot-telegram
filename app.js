Telegram = require('node-telegram-bot-api')
const token = '898249457:AAHZp4EXPjJaRglNiviB8qs35rykSc75BxY';
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
        
    } 

});