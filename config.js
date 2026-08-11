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
            type: "video",
            fileName: "fawakih.mp4",
            link: "https://wsend.co/905424678123",
            maxDuration: 11, // مدة الإعلان الكلية
            skipTime: 7     // يظهر زر التخطي بعد
        },
        {
            // الإعلان الثاني
            type: "video", // يمكنك تغييره لـ video أيضاً
            fileName: "caca.mp4", // اسم ملف الإعلان الثاني
            link: "https://wsend.co/905424678123", // رابط الإعلان الثاني
            maxDuration: 28,
            skipTime: 7
        }
    ],
    
    lastUpdated: "2026-08-30"
};
