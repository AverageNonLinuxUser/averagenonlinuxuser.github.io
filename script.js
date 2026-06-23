// ดึง element จาก DOM
const serveBtn = document.getElementById('serve-btn');
const countDisplay = document.getElementById('finger-count');
const ratingDisplay = document.getElementById('funny-rating');

let count = 0;

// ข้อความแซวขำ ๆ ตามจำนวนชิ้นที่กิน
const tierMessages = [
    { limit: 0, text: "คุณยังไม่ได้เปิดเตาอบเลยด้วยซ้ำนะ..." },
    { limit: 3, text: "ของว่างเบา ๆ พอหายหิวกรุบกริบ" },
    { limit: 6, text: "เริ่มเป็นมื้อจริงจังแล้วล่ะ หยิบซอสมะเขือเทศมาด่วน!" },
    { limit: 10, text: "ระดับตำนานนักกินแซนด์วิชฟิชฟิงเกอร์! ฝีมือคุณน่าเกรงขามมาก" },
    { limit: 15, text: "ไหวไหมนั่น? ฟาดไปเกือบหมดกล่องแล้วนะ เรียกพวกมาช่วยด่วน!" },
    { limit: Infinity, text: "คุณได้ก้าวข้ามขีดจำกัดของมนุษย์ไปแล้ว ตอนนี้ร่างกายคุณเป็นเกล็ดขนมปังไปแล้ว 50%!" }
];

// ดักจับเหตุการณ์ตอนกดปุ่ม
serveBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
    updateRating(count);
});

// ฟังก์ชันอัปเดตข้อความตามจำนวนชิ้น
function updateRating(currentCount) {
    for (let i = 0; i < tierMessages.length; i++) {
        if (currentCount <= tierMessages[i].limit) {
            ratingDisplay.textContent = tierMessages[i].text;
            break;
        }
    }
}
