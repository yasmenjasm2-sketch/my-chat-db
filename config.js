/**
 * 🛠️ ملف إعدادات الإعلان المتقدم - FawakihAI Ad System
 * يمكنك تعديل هذا الملف من GitHub مباشرة لتغيير الإعلان في التطبيق فوراً.
 */

const adConfig = {
    // 1. حالة الإعلان العامة
    isActive: true,

    // 2. قائمة الإعلانات (يتم التناوب بينها تلقائياً لكل مستخدم/جهاز)
    ads: [
        {
            // الإعلان الأول
            type: "photo",
            fileName: "fawakih.jpg",
            link: "https://yasmenjasm2-sketch.github.io/fawakihAI2/",
            maxDuration: 15000, // مدة الإعلان الكلية
            skipTime: 10000     // يظهر زر التخطي بعد
        },
        {
            // الإعلان الثاني
            type: "photo", // يمكنك تغييره لـ video أيضاً
            fileName: "fawakih.jpg", // اسم ملف الإعلان الثاني
            link: "https://yasmenjasm2-sketch.github.io/fawakihAI2/", // رابط الإعلان الثاني
            maxDuration: 15000,
            skipTime: 1000
        }
    ],
    
    lastUpdated: "2026-08-30"
};
