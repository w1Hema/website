import { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  CheckCircle, 
  HelpCircle, 
  Smartphone, 
  Lock, 
  Globe, 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  AlertTriangle,
  Cpu,
  Info,
  ChevronRight,
  RefreshCw,
  Moon,
  Sun
} from 'lucide-react';

const t = {
  en: {
    badge: "ANTI-SPYWARE & SECURITY DETECTOR",
    title1: "Secure Your Android",
    title2: "Device Against Spyware",
    description: "Scoyrte is a premium security suite combining automated background spyware scanning with a professional cybersecurity audit questionnaire to safeguard your data and credentials.",
    btnAudit: "Start Cyber Audit Survey",
    btnScan: "Try In-Browser Scanner",
    btnDownload: "Download Android App",
    toastMessage: "Scoyrte Android Guardian is under development. The APK link will be active soon!",
    featuresBadge: "PLATFORM CAPABILITIES",
    featuresTitle: "A Comprehensive Defense Grid",
    featuresDesc: "We provide local device telemetry combined with human cybersecurity analytics to evaluate risks.",
    f1Title: "Active Malware Defuse",
    f1Desc: "Scan system background daemons, overlays, and permissions to isolate stealth spyware applications.",
    f2Title: "Security Expert Audit",
    f2Desc: "Answer questions curated by security professionals to diagnose vulnerabilities and trace potential infiltration entry points.",
    f3Title: "Mitigation Guidelines",
    f3Desc: "Receive detailed, step-by-step mitigation instructions if a vulnerability is flagged, ensuring your phone returns to a hardened state.",
    auditBadge: "CYBERSECURITY AUDIT",
    auditTitle: "Run Your Device Audit Survey",
    auditDesc: "Analyze your daily phone habits and permissions to see if your security posture is at risk.",
    auditIntroTitle: "Interactive Cybersecurity Infiltration Assessment",
    auditIntroDesc: "This questionnaire is modeled after security audits conducted by forensic experts. It will evaluate whether a hacker has gained access to your device.",
    auditBegin: "Begin Assessment",
    q1Title: "QUESTION 1 OF 4",
    q1: "Have you recently downloaded any apps or updates from outside the Google Play Store (e.g., APK files from Chrome or Telegram)?",
    q1Note: "* Hackers regularly distribute malicious software disguised as 'System Updates', 'Free Streaming apps', or 'Cheat Tools' via websites.",
    q2Title: "QUESTION 2 OF 4",
    q2: "Have you clicked on any links sent via SMS, WhatsApp, or Email regarding package deliveries, government grants, or bank warnings?",
    q2Note: "* Phishing URLs are designed to inject scripts into mobile browsers or trick you into installing accessibility-hijack tools.",
    q3Title: "QUESTION 3 OF 4",
    q3: "Have you noticed unusual behavior like sudden battery drain, unexpected pop-ups, or apps requesting 'Accessibility Services' permission?",
    q3Note: "* Accessibility logs allow keyloggers to record keyboard actions, bank details, and chat conversations.",
    q4Title: "QUESTION 4 OF 4",
    q4: "Have you enabled 'Developer Options' or allowed 'USB Debugging' inside your Android settings panel?",
    q4Note: "* Leaving debug channels active permits local exploit payloads to command actions on the system level without your approval.",
    yes: "Yes, I did",
    no: "No, never",
    yesClick: "Yes, I clicked one",
    noClick: "No, none",
    yesObserved: "Yes, observed this",
    noObserved: "No, battery is fine",
    yesEnabled: "Yes, enabled",
    noEnabled: "No / Disabled",
    reportTitle: "Security Report Generated",
    riskLabel: "THREAT EVALUATION:",
    recommendations: "Cybersecurity Hardening Recommendations:",
    rec1: "1. Revoke Accessibility permissions: Open settings and audit which apps have access to draw overlays or read screen details. Deactivate everything suspicious.",
    rec2: "2. Block Unknown Sources: Go to Settings > Apps > Special App Access > Install Unknown Apps, and set to 'Not Allowed' for browsers and files.",
    rec3: "3. Scan for active spyware: Run the Scoyrte Android Guardian Scanner to sweep active system daemons.",
    btnRestart: "Restart Assessment",
    simulatorBadge: "LIVE ENGINE SCANNER SIMULATOR",
    simulatorTitle: "Test the Scoyrte Spyware Engine",
    simulatorDesc: "Simulate a mobile threat database sweep inside your web browser. Click the button to launch a check.",
    consoleTitle: "Threat Console",
    consoleDesc: "This simulator uses matching signatures from the Scoyrte Android application library to audit binary hashes.",
    btnStartScan: "Initiate System Scan",
    scannerIdle: "System scanner idle. Press 'Initiate System Scan' to sweep device logs...",
    scannerScanning: "Initializing signature database v12.42...",
    scannerLogPrefix: "Sweeping system",
    scannerCompleted: "System scan execution completed successfully.",
    scannerFilesParsed: "Total files parsed: 12,408",
    scannerDaemonsChecked: "Active service daemons checked: 142",
    scannerInfectedAlert: "[ALERT] Malware Signature Detected: Spyware.Android.Keylogger.d",
    scannerCleanAlert: "[SECURE] Zero malicious signature hashes found.",
    scannerInfectedResultTitle: "Spyware Threat Isolated!",
    scannerInfectedResultDesc: "We identified a package: FlashlightPro.apk. This app requests permission to read Keystore credentials and SMS databases. We recommend immediate deletion.",
    scannerCleanResultTitle: "All Systems Secure",
    scannerCleanResultDesc: "Your signature hashes are clean. Ensure you do not download third-party files or click suspicious SMS warnings.",
    educationalBadge: "EDUCATIONAL SHIELD",
    educationalTitle: "How Hackers Compromise Android Devices",
    educationalDesc: "Understanding the vectors hackers use is the key to preventing attacks.",
    h1Title: "1. Overlay Attacks",
    h1Desc: "A malicious app uses accessibility/system overlay settings to draw a fake screen over your bank login app, recording your passwords as you type.",
    h2Title: "2. Malicious APKs",
    h2Desc: "Hackers bundle real apps (like games or calculators) with trojan background daemons that run automatically and record audio, SMS, and locations.",
    h3Title: "3. SMS/WhatsApp Phishing",
    h3Desc: "An SMS alerts you to a 'delivery charge'. Clicking the link prompts you to download a package tracker app, which is actually spy software.",
    footerText: "© 2026 Scoyrte Platform Ecosystem. Designed for Premium Mobile Auditing.",
    footerL1: "Privacy Shield",
    footerL2: "Audit Portal",
    footerL3: "Security Docs",
    btnResetScan: "Reset Scanner"
  },
  ar: {
    badge: "كاشف برامج التجسس وحماية الأجهزة",
    title1: "احمِ جهاز الأندرويد",
    title2: "الخاص بك ضد برامج التجسس",
    description: "سكورت (Scoyrte) هي حزمة أمان بريميوم تجمع بين فحص برامج التجسس في الخلفية تلقائياً وبين استبيان تدقيق أمني احترافي لحماية بياناتك وحساباتك.",
    btnAudit: "ابدأ التقييم الأمني",
    btnScan: "جرب الفحص التجريبي",
    btnDownload: "تحميل تطبيق أندرويد",
    toastMessage: "تطبيق سكورت أندرويد قيد التطوير النشط حالياً. سيتم توفير رابط تحميل الـ APK قريباً!",
    featuresBadge: "قدرات المنصة",
    featuresTitle: "شبكة دفاعية شاملة للأجهزة",
    featuresDesc: "نحن نقدم تحليل بيانات الهاتف محلياً مع دراسات أمنية متخصصة لتقييم المخاطر وتفاديها.",
    f1Title: "تعطيل البرمجيات الخبيثة",
    f1Desc: "فحص العمليات التي تعمل بالخلفية والصلاحيات النشطة لعزل برامج التجسس المخفية تماماً.",
    f2Title: "تدقيق أمني احترافي",
    f2Desc: "إجابة أسئلة أعدت من قبل خبراء الأمن السيبراني لتحديد الثغرات وتتبع مصادر الاختراق.",
    f3Title: "إرشادات سد الثغرات",
    f3Desc: "الحصول على خطوات عملية مفصلة لإغلاق الثغرات المكتشفة واستعادة الهاتف لوضعه الآمن والصلب.",
    auditBadge: "التدقيق الأمني السيبراني",
    auditTitle: "قم بإجراء الفحص التقييمي لهاتفك",
    auditDesc: "قم بتحليل عادات استخدامك للهاتف وصلاحيات التطبيقات لتعرف مدى أمان هاتفك ضد الهكرز.",
    auditIntroTitle: "التقييم التفاعلي لاختراق الأجهزة السيبرانية",
    auditIntroDesc: "هذا الاستبيان محاكي لعمليات الفحص والتحليل الجنائي الرقمي التي يجريها خبراء الأمن للتحقق من اختراق الأجهزة.",
    auditBegin: "ابدأ عملية الفحص",
    q1Title: "السؤال 1 من 4",
    q1: "هل قمت مؤخراً بتحميل أو تحديث أي تطبيقات من خارج متجر جوجل بلاي الرسمي (مثل ملفات APK من جوجل كروم أو تيليجرام)؟",
    q1Note: "* يقوم المخترقون غالباً بنشر برامج خبيثة تحت مسمى 'تحديث نظام'، 'برامج بث مجانية' أو 'أدوات غش'.",
    q2Title: "السؤال 2 من 4",
    q2: "هل قمت بالضغط على أي روابط مشبوهة وصلتك عبر الرسائل القصيرة (SMS)، واتساب، أو البريد تعلّق بشحنات بريدية أو قروض حكومية أو تحذيرات بنكية؟",
    q2Note: "* الروابط الاحتيالية مصممة لحقن المتصفح أو خداعك لتثبيت أدوات التحكم بالهاتف وقراءة الشاشة.",
    q3Title: "السؤال 3 من 4",
    q3: "هل لاحظت سلوكاً غير طبيعي بالهاتف مؤخراً مثل استهلاك بطارية مفاجئ، أو نوافذ منبثقة، أو طلب تطبيقات لصلاحية 'قراءة الشاشة ومساعدة ذوي الاحتياجات'؟",
    q3Note: "* صلاحيات إمكانية الوصول تتيح لبرامج التجسس تسجيل ضربات لوحة المفاتيح والرسائل ورموز التحقق.",
    q4Title: "السؤال 4 من 4",
    q4: "هل قمت بتفعيل 'خيارات المطورين' (Developer Options) أو السماح بـ 'تصحيح أخطاء USB' (USB Debugging) في إعدادات جهازك؟",
    q4Note: "* ترك قنوات التطوير وتصحيح الأخطاء نشطة يتيح حقن الأوامر التلقائية بالنظام دون موافقتك.",
    yes: "نعم، قمت بذلك",
    no: "لا، أبداً",
    yesClick: "نعم، ضغطت على رابط",
    noClick: "لا، لم أضغط",
    yesObserved: "نعم، لاحظت ذلك",
    noObserved: "لا، البطارية طبيعية",
    yesEnabled: "نعم، قمت بتفعيلها",
    noEnabled: "لا، معطلة",
    reportTitle: "تم إنشاء التقرير الأمني بنجاح",
    riskLabel: "تقييم مستوى التهديد:",
    recommendations: "توصيات تعزيز الأمان وسد الثغرات:",
    rec1: "1. إلغاء صلاحيات الوصول المشبوهة: ادخل لإعدادات الهاتف ثم صلاحيات الوصول وعطل أي تطبيق غريب يملك صلاحية قراءة الشاشة.",
    rec2: "2. حظر تثبيت تطبيقات مجهولة المصدر: اذهب للإعدادات، ثم التطبيقات الخاصة، وامنع المتصفح والملفات من تثبيت أي ملفات APK خارجية.",
    rec3: "3. إجراء فحص دوري للملفات: استخدم محرك فحص سكورت أندرويد لتتبع أي برمجيات تجسس نشطة.",
    btnRestart: "إعادة الفحص والتقييم",
    simulatorBadge: "محاكي محرك الفحص التجريبي",
    simulatorTitle: "اختبر أداء محرك فحص سكورت",
    simulatorDesc: "محاكاة كاملة لفحص قاعدة بيانات التهديدات مباشرة داخل المتصفح. اضغط على الزر لبدء الفحص التجريبي.",
    consoleTitle: "لوحة التحكم بالفحص",
    consoleDesc: "يستخدم هذا المحاكي عينات تطابق بصمات الملفات في مكتبة تطبيقات سكورت أندرويد للتحقق من سلامة الأكواد.",
    btnStartScan: "ابدأ عملية الفحص الكامل",
    scannerIdle: "> محاكي الفحص في وضع الاستعداد. اضغط على 'ابدأ عملية الفحص الكامل' لفحص سجلات الجهاز...",
    scannerScanning: "جاري استدعاء قاعدة بصمات التهديدات والملفات الخبيثة...",
    scannerLogPrefix: "جاري فحص ملفات وسجلات النظام",
    scannerCompleted: "> تمت عملية فحص سجلات الجهاز بنجاح تام.",
    scannerFilesParsed: "إجمالي الملفات المفحوصة: 12,408",
    scannerDaemonsChecked: "العمليات المشبوهة المفحوصة في الخلفية: 142",
    scannerInfectedAlert: "[تنبيه] تم اكتشاف برمجية تجسس نشطة: Spyware.Android.Keylogger.d",
    scannerCleanAlert: "[آمن] لم يتم العثور على أي بصمات خبيثة أو تهديدات نشطة.",
    scannerInfectedResultTitle: "تم وعزل برمجية التجسس!",
    scannerInfectedResultDesc: "تم العثور على التطبيق الخبيث: FlashlightPro.apk. يطلب هذا التطبيق صلاحيات حرجة لقراءة الرسائل القصيرة والتحقق البنكي. نوصي بحذفه فوراً.",
    scannerCleanResultTitle: "جميع الأنظمة آمنة",
    scannerCleanResultDesc: "جهازك نظيف تماماً. تأكد دائماً من عدم تثبيت تطبيقات خارجية مجهولة أو فتح روابط مجهولة.",
    educationalBadge: "الدرع التوعوي والتثقيفي",
    educationalTitle: "كيف يتم اختراق أجهزة الأندرويد؟",
    educationalDesc: "فهم الطرق التي يستخدمها المخترقون هو الخطوة الأولى والأهم لحماية نفسك.",
    h1Title: "1. هجمات حجب النوافذ (Overlay)",
    h1Desc: "يقوم تطبيق خبيث برسم نافذة وهمية مطابقة لصفحة البنك الرسمية فوق تطبيقك الحقيقي ليسرق كلمة مرورك أثناء إدخالها.",
    h2Title: "2. ملفات APK الخبيثة",
    h2Desc: "يتم دمج برامج تجسس خلفية صامتة داخل ألعاب أو تطبيقات شائعة لتقوم بتسجيل الصوت والصور والموقع دون علمك.",
    h3Title: "3. روابط التصيد والتحايل",
    h3Desc: "تصلك رسالة تفيد بضرورة دفع رسوم شحن، وعند الضغط عليها يتم تثبيت تطبيق للتتبع يتبين لاحقاً أنه برنامج تجسس كامل.",
    footerText: "© 2026 شبكة سكورت الدفاعية لحماية الأجهزة المحمولة وتدقيق الأمان.",
    footerL1: "حماية الخصوصية",
    footerL2: "بوابة التدقيق الأمني",
    footerL3: "المستندات الأمنية",
    btnResetScan: "إعادة تعيين الفحص"
  }
};

function App() {
  const [lang, setLang] = useState('en'); // en | ar
  const [theme, setTheme] = useState('light'); // light | dark

  // Mobile scan simulator states
  const [scanState, setScanState] = useState('idle'); // idle | scanning | completed
  const [scanPercent, setScanPercent] = useState(0);
  const [scanLog, setScanLog] = useState('');
  const [scanResult, setScanResult] = useState(null); // clean | infected

  // Security Audit state
  const [auditStep, setAuditStep] = useState(0); // 0: intro, 1-4: questions, 5: result
  const [answers, setAnswers] = useState({
    installedOutsideStore: null,
    clickedSmsLink: null,
    batteryDrainPopups: null,
    devOptionsEnabled: null
  });

  // Chatbot states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [botTyping, setBotTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  // Toast Notification states
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('');

  // Initialize and synchronize chatbot messages with active language
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChatMessages(prev => {
      if (prev.length === 0 || (prev.length === 1 && prev[0].sender === 'bot')) {
        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return [
          {
            sender: 'bot',
            text: lang === 'en'
              ? "Hello! I am Scoyrte AI Security Guardian. Ask me any question about spyware, suspicious links, or mobile safety!"
              : "أهلاً بك! أنا المساعد الأمني الذكي لشبكة سكورت. يمكنك سؤالي عن أي شيء يخص أمان هاتف الأندرويد، البرمجيات الخبيثة، أو الروابط المشبوهة!",
            time: timeStr
          }
        ];
      }
      return prev;
    });
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleDownloadClick = () => {
    setToastText(t[lang].toastMessage);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Simulator scan process
  useEffect(() => {
    let interval;
    if (scanState === 'scanning') {
      const logsList = lang === 'en' ? [
        'Analyzing running memory registers...',
        'Auditing accessibility services...',
        'Scanning /sdcard/Downloads for unverified APKs...',
        'Verifying cryptographic package signatures...',
        'Checking system overlays & screen readers...',
        'Cross-referencing database for Trojan.Android.Spy...',
        'Validating background daemon sockets...'
      ] : [
        'تحليل سجلات ذاكرة الوصول العشوائي للعمليات النشطة...',
        'فحص صلاحيات إمكانية الوصول النشطة بالخلفية...',
        'مسح مجلد التنزيلات بحثاً عن ملفات تثبيت مشبوهة...',
        'التحقق من التوقيعات الرقمية لحزم التطبيقات المثبتة...',
        'فحص النوافذ المنبثقة النشطة وأدوات قراءة الشاشة...',
        'مطابقة التواقيع مع قاعدة بيانات التجسس والتروجان...',
        'التحقق من حزم الاتصالات الخلفية المشبوهة...'
      ];
      
      interval = setInterval(() => {
        setScanPercent((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setScanState('completed');
            const isInfected = Math.random() > 0.4;
            setScanResult(isInfected ? 'infected' : 'clean');
            return 100;
          }
          const logIdx = Math.floor((prev / 100) * logsList.length);
          setScanLog(logsList[logIdx] || (lang === 'en' ? 'Scanning system assets...' : 'جاري فحص سجلات الهاتف...'));
          return prev + 4;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [scanState, lang]);

  const startScan = () => {
    setScanPercent(0);
    setScanLog(lang === 'en' ? 'Initializing scanner engine...' : 'تهيئة محرك الفحص الرقمي...');
    setScanState('scanning');
    setScanResult(null);
  };

  const resetScan = () => {
    setScanState('idle');
    setScanPercent(0);
    setScanResult(null);
  };

  // Audit evaluation calculation
  const handleAnswer = (question, val) => {
    setAnswers({ ...answers, [question]: val });
    setAuditStep(auditStep + 1);
  };

  const getAuditRiskLevel = () => {
    let yesCount = 0;
    if (answers.installedOutsideStore === 'yes') yesCount += 2;
    if (answers.clickedSmsLink === 'yes') yesCount += 2;
    if (answers.batteryDrainPopups === 'yes') yesCount += 1;
    if (answers.devOptionsEnabled === 'yes') yesCount += 1;

    if (lang === 'en') {
      if (yesCount >= 4) return { level: 'High Risk / Likely Compromised', color: '#ef5350', description: 'Your device exhibits pattern indicators commonly associated with active banking trojans or keyloggers.' };
      if (yesCount >= 2) return { level: 'Moderate Risk / Suspicious', color: '#ffb74d', description: 'Potential entry points are active. Suspicious actions are flagged, but no verified malicious malware packages are running.' };
      return { level: 'Protected / Low Risk', color: '#66bb6a', description: 'Your device settings align with cybersecurity best practices. Continue keeping safety measures active.' };
    } else {
      if (yesCount >= 4) return { level: 'خطر مرتفع / الهاتف مخترق غالباً', color: '#ef5350', description: 'يظهر جهازك مؤشرات سلوك شائعة ترتبط ببرمجيات التجسس النشطة أو سرقة الحسابات البنكية.' };
      if (yesCount >= 2) return { level: 'خطر متوسط / سلوك مشبوه', color: '#ffb74d', description: 'هناك ثغرات نشطة في إعدادات الأمان. نوصي بمراجعة الصلاحيات الممنوحة للتطبيقات بأسرع وقت.' };
      return { level: 'آمن / خطر منخفض جداً', color: '#66bb6a', description: 'إعدادات جهازك ممتازة وتتطابق مع أفضل ممارسات الأمن السيبراني. حافظ على هذا الوضع دائماً.' };
    }
  };

  const resetAudit = () => {
    setAnswers({
      installedOutsideStore: null,
      clickedSmsLink: null,
      batteryDrainPopups: null,
      devOptionsEnabled: null
    });
    setAuditStep(0);
  };

  // Bot Auto Reply Engine
  const handleBotMessage = (text) => {
    const query = text.toLowerCase().trim();
    const isArabic = /[\u0600-\u06FF]/.test(query);
    let reply;

    if (!isArabic && lang === 'en') {
      if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
        reply = "Hello! I am Scoyrte Security AI. Is your phone exhibiting suspicious behaviors like battery drain or random popups?";
      } else if (query.includes('link') || query.includes('sms') || query.includes('message')) {
        reply = "WARNING: Phishing URLs in SMS/WhatsApp are the #1 way mobile devices get compromised. Do NOT open suspicious links, especially ones regarding package deliveries or bank alerts.";
      } else if (query.includes('apk') || query.includes('download') || query.includes('outside')) {
        reply = "APKs installed from browsers or Telegram are dangerous. To protect yourself, block installation from unknown sources in your settings panel.";
      } else if (query.includes('hack') || query.includes('spyware') || query.includes('virus')) {
        reply = "If you suspect spyware, open your Android Settings > Special App Access > Device Admin Apps. Check if any unrecognized apps have admin controls, and revoke them immediately.";
      } else {
        reply = "I recommend running our Interactive Cybersecurity Audit questionnaire above or testing the live simulator to evaluate threat signatures on your device.";
      }
    } else {
      if (query.includes('مرحبا') || query.includes('اهلين') || query.includes('سلام') || query.includes('هلو') || query.includes('هلا') || query.includes('عامل') || query.includes('ازيك') || query.includes('كيفك')) {
        reply = "أهلاً بك! أنا المساعد الأمني الذكي. هل تلاحظ أي مشاكل في جهازك مثل نفاد البطارية السريع أو نوافذ منبثقة غريبة؟";
      } else if (query.includes('رابط') || query.includes('رسالة') || query.includes('لينك') || query.includes('مسج')) {
        reply = "تحذير: روابط التصيد عبر SMS هي الطريقة الأولى لاختراق الهواتف. لا تفتح أي رابط يدعي أنه من البنك أو شركات الشحن أبداً.";
      } else if (query.includes('تحميل') || query.includes('برنامج') || query.includes('تطبيق') || query.includes('خارج')) {
        reply = "تثبيت تطبيقات APK خارج المتجر الرسمي يمثل خطورة قصوى. ننصحك بالدخول للإعدادات وتعطيل خيار 'تثبيت تطبيقات مجهولة المصدر'.";
      } else if (query.includes('اختراق') || query.includes('هكر') || query.includes('تجسس') || query.includes('فيروس')) {
        reply = "إذا كنت تخشى الاختراق، توجه إلى إعدادات الهاتف > تطبيقات إدارة الجهاز، وتحقق من عدم وجود أي تطبيق مجهول يملك صلاحيات مسؤول الجهاز.";
      } else {
        reply = "يسعدني مساعدتك! أنصحك بإجراء 'التدقيق الأمني' المتاح في الصفحة لتشخيص وتقييم أمان هاتفك بالكامل وبشكل احترافي.";
      }
    }
    return reply;
  };

  const sendChatMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add user message
    const updatedMessages = [...chatMessages, { sender: 'user', text: userText, time: timeStr }];
    setChatMessages(updatedMessages);
    setChatInput('');
    
    // Show bot typing indicator
    setBotTyping(true);
    
    setTimeout(() => {
      const botResponse = handleBotMessage(userText);
      setChatMessages([...updatedMessages, { sender: 'bot', text: botResponse, time: timeStr }]);
      setBotTyping(false);
    }, 1000);
  };

  return (
    <div className={theme === 'dark' ? 'dark-theme' : ''} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ direction: lang === 'ar' ? 'rtl' : 'ltr', width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Background shapes & mesh */}
        <div className="grid-bg"></div>
        <div className="glow-orb orb-primary"></div>
        <div className="glow-orb orb-secondary"></div>
        <div className="sphere-3d sphere-1"></div>
        <div className="sphere-3d sphere-2"></div>
        <div className="sphere-3d sphere-3"></div>

        {/* Navigation */}
        <header className="glass">
          <div className="logo">
            <Cpu size={24} style={{ color: 'var(--primary)' }} />
            <span>SCOYRTE</span>
          </div>
          <nav>
            <a href="#features">{lang === 'en' ? 'Key Features' : 'أهم المميزات'}</a>
            <a href="#audit">{lang === 'en' ? 'Cybersecurity Audit' : 'التدقيق الأمني'}</a>
            <a href="#simulator">{lang === 'en' ? 'Scan Simulator' : 'محاكي الفحص'}</a>
            <a href="#about">{lang === 'en' ? 'How Hackers Attack' : 'طرق الاختراق'}</a>
          </nav>
          
          <div className="header-controls">
            <button onClick={toggleLanguage} className="btn-icon btn-icon-text" title={lang === 'en' ? 'تغيير اللغة للعربية' : 'Change language to English'}>
              <Globe size={16} />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>
            <button onClick={toggleTheme} className="btn-icon" title={theme === 'light' ? 'الوضع الداكن' : 'الوضع الفاتح'}>
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <a href="#audit" className="btn btn-secondary header-audit-btn">
              {lang === 'en' ? 'Audit Device' : 'فحص الجهاز'}
              <ChevronRight size={16} style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }} />
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <span className="badge">{t[lang].badge}</span>
          <h1>{t[lang].title1} <br />{t[lang].title2}</h1>
          <p>{t[lang].description}</p>
          
          <div className="hero-actions">
            <a href="#audit" className="btn btn-primary">
              {t[lang].btnAudit}
              <ArrowRight size={18} style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }} />
            </a>
            <button onClick={handleDownloadClick} className="btn btn-android">
              <Smartphone size={18} />
              {t[lang].btnDownload}
            </button>
            <a href="#simulator" className="btn btn-glass">
              {t[lang].btnScan}
            </a>
          </div>

          {/* Hero Visual Mockup */}
          <div className="mockup-container">
            <div className="mockup-shadow"></div>
            <div className="main-mockup">
              {/* Browser Header Bar */}
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="mockup-address">
                  <Lock size={11} className="lock-icon" />
                  <span>scoyrte.com/android-security-guardian</span>
                </div>
                <div className="mockup-dummy-action"></div>
              </div>
              {/* Browser Content / Video */}
              <div className="mockup-content">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="mockup-video"
                >
                  <source src="./vid.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section" id="features">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="badge">{t[lang].featuresBadge}</span>
            <h2>{t[lang].featuresTitle}</h2>
            <p style={{ maxWidth: '600px', margin: '12px auto 0' }}>{t[lang].featuresDesc}</p>
          </div>

          <div className="features-grid">
            <div className="glass-card feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(37,99,235,0.08)', color: 'var(--primary)' }}>
                <ShieldCheck size={24} />
              </div>
              <h3>{t[lang].f1Title}</h3>
              <p>{t[lang].f1Desc}</p>
            </div>

            <div className="glass-card feature-card feature-secondary">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(14,165,233,0.08)', color: 'var(--secondary)' }}>
                <HelpCircle size={24} />
              </div>
              <h3>{t[lang].f2Title}</h3>
              <p>{t[lang].f2Desc}</p>
            </div>

            <div className="glass-card feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(37,99,235,0.08)', color: 'var(--primary)' }}>
                <Lock size={24} />
              </div>
              <h3>{t[lang].f3Title}</h3>
              <p>{t[lang].f3Desc}</p>
            </div>
          </div>
        </section>

        {/* Audit Survey Panel (Interactive) */}
        <section className="section" id="audit">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge">{t[lang].auditBadge}</span>
            <h2>{t[lang].auditTitle}</h2>
            <p style={{ maxWidth: '600px', margin: '12px auto 0' }}>{t[lang].auditDesc}</p>
          </div>

          <div className="simulator-panel" style={{ maxWidth: '750px', margin: '0 auto' }}>
            {auditStep === 0 && (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <ShieldAlert size={48} style={{ color: 'var(--primary)', marginBottom: '15px' }} />
                <h3 style={{ marginBottom: '10px' }}>{t[lang].auditIntroTitle}</h3>
                <p style={{ marginBottom: '25px', fontSize: '0.98rem' }}>{t[lang].auditIntroDesc}</p>
                <button onClick={() => setAuditStep(1)} className="btn btn-primary">
                  {t[lang].auditBegin}
                  <ChevronRight size={16} style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }} />
                </button>
              </div>
            )}

            {auditStep === 1 && (
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>{t[lang].q1Title}</span>
                <h3 style={{ margin: '10px 0 15px' }}>{t[lang].q1}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>{t[lang].q1Note}</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => handleAnswer('installedOutsideStore', 'yes')} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>{t[lang].yes}</button>
                  <button onClick={() => handleAnswer('installedOutsideStore', 'no')} className="btn btn-glass" style={{ flex: 1, justifyContent: 'center' }}>{t[lang].no}</button>
                </div>
              </div>
            )}

            {auditStep === 2 && (
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>{t[lang].q2Title}</span>
                <h3 style={{ margin: '10px 0 15px' }}>{t[lang].q2}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>{t[lang].q2Note}</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => handleAnswer('clickedSmsLink', 'yes')} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>{t[lang].yesClick}</button>
                  <button onClick={() => handleAnswer('clickedSmsLink', 'no')} className="btn btn-glass" style={{ flex: 1, justifyContent: 'center' }}>{t[lang].noClick}</button>
                </div>
              </div>
            )}

            {auditStep === 3 && (
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>{t[lang].q3Title}</span>
                <h3 style={{ margin: '10px 0 15px' }}>{t[lang].q3}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>{t[lang].q3Note}</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => handleAnswer('batteryDrainPopups', 'yes')} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>{t[lang].yesObserved}</button>
                  <button onClick={() => handleAnswer('batteryDrainPopups', 'no')} className="btn btn-glass" style={{ flex: 1, justifyContent: 'center' }}>{t[lang].noObserved}</button>
                </div>
              </div>
            )}

            {auditStep === 4 && (
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>{t[lang].q4Title}</span>
                <h3 style={{ margin: '10px 0 15px' }}>{t[lang].q4}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>{t[lang].q4Note}</p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button onClick={() => handleAnswer('devOptionsEnabled', 'yes')} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>{t[lang].yesEnabled}</button>
                  <button onClick={() => handleAnswer('devOptionsEnabled', 'no')} className="btn btn-glass" style={{ flex: 1, justifyContent: 'center' }}>{t[lang].noEnabled}</button>
                </div>
              </div>
            )}

            {auditStep === 5 && (
              <div style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <CheckCircle size={32} style={{ color: 'var(--primary)' }} />
                  <h3>{t[lang].reportTitle}</h3>
                </div>
                
                <div style={{ background: 'hsl(var(--bg-secondary))', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t[lang].riskLabel}</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: getAuditRiskLevel().color, margin: '5px 0' }}>
                    {getAuditRiskLevel().level}
                  </div>
                  <p style={{ fontSize: '0.95rem' }}>{getAuditRiskLevel().description}</p>
                </div>

                <h4 style={{ marginBottom: '10px' }}>{t[lang].recommendations}</h4>
                <ul style={{ paddingLeft: lang === 'ar' ? '0' : '20px', paddingRight: lang === 'ar' ? '20px' : '0', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '25px' }}>
                  <li>{t[lang].rec1}</li>
                  <li>{t[lang].rec2}</li>
                  <li>{t[lang].rec3}</li>
                </ul>

                <button onClick={resetAudit} className="btn btn-glass">
                  {t[lang].btnRestart}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Simulator Section (Interactive Web Scanner) */}
        <section className="section" id="simulator">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="badge">{t[lang].simulatorBadge}</span>
            <h2>{t[lang].simulatorTitle}</h2>
            <p style={{ maxWidth: '650px', margin: '12px auto 0' }}>{t[lang].simulatorDesc}</p>
          </div>

          <div className="glass-card" style={{ maxWidth: '850px', margin: '0 auto', textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <div className="simulator-grid">
              {/* Left controls */}
              <div className="simulator-left">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--primary)' }}>{t[lang].consoleTitle}</h3>
                <p style={{ fontSize: '0.88rem', marginBottom: '20px', color: 'var(--text-muted)' }}>{t[lang].consoleDesc}</p>

                {scanState === 'idle' && (
                  <button onClick={startScan} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Play size={16} style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }} />
                    {t[lang].btnStartScan}
                  </button>
                )}

                {scanState === 'scanning' && (
                  <div style={{ textAlign: 'center' }}>
                    <RefreshCw size={24} style={{ color: 'var(--primary)', animation: 'spin 1.5s linear infinite' }} />
                    <div style={{ fontSize: '0.9rem', marginTop: '10px', fontWeight: 'bold' }}>
                      {t[lang].scannerLogPrefix}: {scanPercent}%
                    </div>
                  </div>
                )}

                {scanState === 'completed' && (
                  <button onClick={resetScan} className="btn btn-glass" style={{ width: '100%', justifyContent: 'center' }}>
                    {t[lang].btnResetScan}
                  </button>
                )}
              </div>

              {/* Right log view & results */}
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '15px' }}>{lang === 'en' ? 'Terminal Output & Scan Log' : 'نافذة الأوامر وسجل الفحص'}</h3>
                
                <div style={{ 
                  background: '#0f172a', 
                  color: '#38bdf8', 
                  padding: '18px', 
                  borderRadius: '10px', 
                  fontFamily: 'monospace', 
                  fontSize: '0.85rem',
                  minHeight: '140px',
                  border: '1px solid var(--border-color)',
                  marginBottom: '15px',
                  direction: 'ltr',
                  textAlign: 'left'
                }}>
                  {scanState === 'idle' && <p style={{ color: '#64748b' }}>&gt; {t[lang].scannerIdle}</p>}
                  {scanState === 'scanning' && (
                    <div>
                      <p style={{ color: '#00e676' }}>&gt; {t[lang].scannerScanning}</p>
                      <p style={{ color: '#e2e8f0' }}>&gt; {scanLog}</p>
                      <div className="scan-progress-bar">
                        <div className="scan-progress-fill" style={{ width: `${scanPercent}%` }}></div>
                      </div>
                    </div>
                  )}
                  {scanState === 'completed' && (
                    <div>
                      <p style={{ color: '#00e676' }}>&gt; {t[lang].scannerCompleted}</p>
                      <p style={{ color: '#e2e8f0' }}>&gt; {t[lang].scannerFilesParsed}</p>
                      <p style={{ color: '#e2e8f0' }}>&gt; {t[lang].scannerDaemonsChecked}</p>
                      {scanResult === 'infected' ? (
                        <p style={{ color: '#ef5350', fontWeight: 'bold' }}>&gt; {t[lang].scannerInfectedAlert}</p>
                      ) : (
                        <p style={{ color: '#00e676', fontWeight: 'bold' }}>&gt; {t[lang].scannerCleanAlert}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Status display */}
                {scanState === 'completed' && (
                  <div style={{ 
                    padding: '15px', 
                    borderRadius: '8px', 
                    background: scanResult === 'infected' ? 'rgba(239, 83, 80, 0.05)' : 'rgba(102, 187, 106, 0.05)',
                    border: scanResult === 'infected' ? '1px solid rgba(239, 83, 80, 0.2)' : '1px solid rgba(102, 187, 106, 0.2)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    {scanResult === 'infected' ? (
                      <>
                        <AlertTriangle size={24} style={{ color: '#ef5350', flexShrink: 0 }} />
                        <div>
                          <h4 style={{ color: '#ef5350', fontSize: '0.95rem', margin: 0 }}>{t[lang].scannerInfectedResultTitle}</h4>
                          <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>{t[lang].scannerInfectedResultDesc}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <CheckCircle size={24} style={{ color: '#66bb6a', flexShrink: 0 }} />
                        <div>
                          <h4 style={{ color: '#66bb6a', fontSize: '0.95rem', margin: 0 }}>{t[lang].scannerCleanResultTitle}</h4>
                          <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>{t[lang].scannerCleanResultDesc}</p>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Info: How hackers target Android */}
        <section className="section" id="about">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="badge">{t[lang].educationalBadge}</span>
            <h2>{t[lang].educationalTitle}</h2>
            <p style={{ maxWidth: '600px', margin: '12px auto 0' }}>{t[lang].educationalDesc}</p>
          </div>

          <div className="features-grid">
            <div className="glass-card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} style={{ color: 'var(--primary)' }} />
                {t[lang].h1Title}
              </h3>
              <p style={{ fontSize: '0.9rem' }}>{t[lang].h1Desc}</p>
            </div>

            <div className="glass-card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} style={{ color: 'var(--primary)' }} />
                {t[lang].h2Title}
              </h3>
              <p style={{ fontSize: '0.9rem' }}>{t[lang].h2Desc}</p>
            </div>

            <div className="glass-card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} style={{ color: 'var(--primary)' }} />
                {t[lang].h3Title}
              </h3>
              <p style={{ fontSize: '0.9rem' }}>{t[lang].h3Desc}</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <p>{t[lang].footerText}</p>
          <div className="footer-links">
            <a href="#features">{t[lang].footerL1}</a>
            <a href="#audit">{t[lang].footerL2}</a>
            <a href="#simulator">{t[lang].footerL3}</a>
          </div>
        </footer>

        {/* Floating WhatsApp Chat Widget */}
        <div className={`whatsapp-chat-widget ${isChatOpen ? 'open' : ''}`}>
          {/* Floating Bubble */}
          <button className="whatsapp-bubble" onClick={() => setIsChatOpen(!isChatOpen)}>
            <div className="whatsapp-icon-wrapper">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.908.533 3.69 1.455 5.215L2.05 22.05l4.98-1.39A9.957 9.957 0 0 0 12.005 22c5.522 0 10.002-4.478 10.002-10.002C22.007 6.48 17.527 2 12.004 2zm5.72 14.195c-.244.688-1.21 1.25-1.666 1.306-.457.056-.995.09-2.946-.684-2.5-1.026-4.103-3.565-4.23-3.73-.122-.166-1.01-1.34-1.01-2.557 0-1.216.64-1.815.867-2.06.227-.245.502-.307.67-.307.168 0 .336.002.48.008.152.007.35-.062.548.42.2.49.684 1.667.745 1.79.06.124.102.268.016.44-.085.17-.128.277-.253.424-.125.147-.26.326-.372.438-.124.123-.255.257-.11.507.147.25.648 1.07 1.393 1.734.96.857 1.765 1.12 2.015 1.246.25.125.397.105.546-.067.15-.173.64-.746.812-.998.172-.252.343-.21.579-.123.235.087 1.493.704 1.75.83.256.126.427.19.49.296.06.107.06.619-.184 1.307z"/>
              </svg>
            </div>
            {/* Notification badge */}
            {!isChatOpen && <span className="notification-ping"></span>}
          </button>

          {/* Chat Window */}
          <div className="chat-window glass-card">
            {/* Chat Header */}
            <div className="chat-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="bot-avatar">
                  <Cpu size={18} style={{ color: '#ffffff' }} />
                  <span className="online-indicator"></span>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.92rem', color: '#ffffff', margin: 0 }}>Scoyrte AI Shield</h4>
                  <span style={{ fontSize: '0.72rem', color: '#a7f3d0' }}>
                    {lang === 'en' ? 'Online Support' : 'متصل بالإنترنت'}
                  </span>
                </div>
              </div>
              <button type="button" className="chat-close-btn" onClick={() => setIsChatOpen(false)}>×</button>
            </div>

            {/* Chat Messages */}
            <div className="chat-messages-container">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`chat-message-bubble ${msg.sender}`}>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: 'inherit' }}>{msg.text}</p>
                  <span className="chat-time">{msg.time}</span>
                </div>
              ))}
              {botTyping && (
                <div className="chat-message-bubble bot typing">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form className="chat-input-form" onSubmit={sendChatMessage}>
              <input 
                type="text" 
                className="chat-input-field" 
                placeholder={lang === 'en' ? 'Type your question...' : 'اكتب سؤالك الأمني هنا...'}
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button type="submit" className="chat-send-btn">
                <ArrowRight size={16} style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }} />
              </button>
            </form>
          </div>
        </div>

        {/* Custom Premium Toast Notification */}
        {showToast && (
          <div className="toast-notification">
            <Info size={18} className="toast-icon" />
            <span>{toastText}</span>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
