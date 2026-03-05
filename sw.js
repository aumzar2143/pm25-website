self.addEventListener("install",event=>{
self.skipWaiting()
})

self.addEventListener("activate",event=>{
})

self.addEventListener("push",event=>{

self.registration.showNotification(
"🚨 PM2.5 Alert",
{
body:"ค่าฝุ่นเกินระดับปลอดภัย",
icon:"https://cdn-icons-png.flaticon.com/512/414/414927.png",
vibrate:[200,100,200]
}
)

})
