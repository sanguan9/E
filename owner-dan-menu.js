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

*�� FITUR BOT ��*

\`\`\`? /�q��? �� *KHUSUS PEMILIK* �� 
��
���� .owner
���� .pay
��
�t?

? ��  *OWNER MENU*  ��
��
���� .addsewa  
���� .delsewa  
���� .listsewa  
���� .ceksewa  
���� .bot
��
�t?

�q��? ��  *STORE MENU*  ��
��
���� .list  
���� .addlist  
���� .updatelist  
���� .dellist  
���� .setproses  
���� .changeproses  
����  delsetproses  
���� .setdone  
���� .changedone  
���� .delsetdone  
���� .proses  
���� .done  
��
�t?

�q��? �� *GROUP MENU* �� 
��
���� .antiwame  [on/off]
���� .antiwame2  [on/off]
���� .antilink  [on/off]
���� .antilink2  [on/off]
���� .welcome  [on/off]
���� .goodbye  [on/off]
���� .setwelcome  
���� .changewelcome  
���� .delsetwelcome  
���� .setleft  
���� .changeleft  
���� .delsetleft  
���� .open
���� .close
���� .jeda  
���� .hidetag  
���� .kick          
���� .add
���� .setppgc
���� .setnamegc
���� .setdesgc
���� .linkgc
���� .resetlinkgc
���� .promote
���� .demote
��
�t?

�q��? ��  *KALKULATOR MENU*  ��
��
���� .tambah  
���� .kurang  
���� .kali  
���� .bagi  
��
�t?
\`\`\`

? *NOTE*: 
DI LARANG SPAM
MAU SEWA BOT? HUBUNGI wa.me/62895630468565 KETIK OWNER DI CHAT BOT
`
}