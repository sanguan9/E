const fs = require('fs')

global.namabot = "??"
global.namaowner = "??????"
global.footer_text = "? ??" + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['62895630468565']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay Kirim Bukti Transaksi
*_PAYMENT_*
*?DANA: 0895630468565*
*?GOPAY: 083110933360*
*?PULSA: 083110933360*

*?LINK GRUP*
https://chat.whatsapp.com/DurGUEaA19Q6K6DjV94NmH
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*¡¸ FITUR BOT ¡¹*

\`\`\`? /¨q©¤? ¡¸ *KHUSUS PEMILIK* ¡¹ 
©¦
©¦¡ð .owner
©¦¡ð .pay
©¦
¨t?

? ¡¸  *OWNER MENU*  ¡¹
©¦
©¦¡ð .addsewa  
©¦¡ð .delsewa  
©¦¡ð .listsewa  
©¦¡ð .ceksewa  
©¦¡ð .bot
©¦
¨t?

¨q©¤? ¡¸  *STORE MENU*  ¡¹
©¦
©¦¡ð .list  
©¦¡ð .addlist  
©¦¡ð .updatelist  
©¦¡ð .dellist  
©¦¡ð .setproses  
©¦¡ð .changeproses  
©¦¡ð  delsetproses  
©¦¡ð .setdone  
©¦¡ð .changedone  
©¦¡ð .delsetdone  
©¦¡ð .proses  
©¦¡ð .done  
©¦
¨t?

¨q©¤? ¡¸ *GROUP MENU* ¡¹ 
©¦
©¦¡ð .antiwame  [on/off]
©¦¡ð .antiwame2  [on/off]
©¦¡ð .antilink  [on/off]
©¦¡ð .antilink2  [on/off]
©¦¡ð .welcome  [on/off]
©¦¡ð .goodbye  [on/off]
©¦¡ð .setwelcome  
©¦¡ð .changewelcome  
©¦¡ð .delsetwelcome  
©¦¡ð .setleft  
©¦¡ð .changeleft  
©¦¡ð .delsetleft  
©¦¡ð .open
©¦¡ð .close
©¦¡ð .jeda  
©¦¡ð .hidetag  
©¦¡ð .kick          
©¦¡ð .add
©¦¡ð .setppgc
©¦¡ð .setnamegc
©¦¡ð .setdesgc
©¦¡ð .linkgc
©¦¡ð .resetlinkgc
©¦¡ð .promote
©¦¡ð .demote
©¦
¨t?

¨q©¤? ¡¸  *KALKULATOR MENU*  ¡¹
©¦
©¦¡ð .tambah  
©¦¡ð .kurang  
©¦¡ð .kali  
©¦¡ð .bagi  
©¦
¨t?
\`\`\`

? *NOTE*: 
DI LARANG SPAM
MAU SEWA BOT? HUBUNGI wa.me/62895630468565 KETIK OWNER DI CHAT BOT
`
}