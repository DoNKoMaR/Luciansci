let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*ββ ππππΎππΈπ°π» π±πΎππΌπΈπ½π΄ π·πΎππ*


------------------------------------

*ββ ππππΎππΈπ°π» π°π²πΈπ³πΈπ²π½πΎπ³π΄π π·πΎππ*

------------------------------------

*ββ π²πΎπΌπ°π½π³πΎπ ππ΄ππΌππ*
> cd
> termux-setup-storage
> apt update 
> pkg upgrade 
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/BrunoSobrino/Mystic-termux
> cd Mystic-termux
> yarn install 
> npm install
> npm update
> npm install 
> npm start`  
m.reply(text)   
}
handler.command = /^(ΠΊΠΈΡΠΊΠ° ΠΠΠ’Π)/i
export default handler
