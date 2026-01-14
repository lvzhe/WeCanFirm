const translations = {
  en: {
    tagline: "Focused Legal Advocacy",
    call: "Call: +1 626-558-9420",
    eyebrow: "WeCan Law Firm · Immigration · Accident · Litigation",
    heroTitle: "A steady legal team for the moments that matter most",
    heroText:
      "WeCan Law Firm supports clients with immigration filings, car accident claims, and civil disputes. Our bilingual attorneys answer quickly, explain clearly, and advocate with professionalism at every step.",
    heroCta: "Call for a Consultation",
    heroNote: "Same-day response · 中文服务",
    cardTitle: "Your Case, Handled With Care",
    cardPoint1: "Direct attorney communication and clear timelines.",
    cardPoint2: "Strategic planning tailored to your goals.",
    cardPoint3: "Trusted advocacy for individuals and families.",
    cardCall: "Speak with a lawyer now:",
    servicesTitle: "Practice Areas",
    servicesSubtitle:
      "Comprehensive representation across immigration, accident recovery, and litigation matters.",
    service1Title: "Immigration Law",
    service1Text:
      "Family-based petitions, green cards, work visas, asylum, and status adjustments.",
    service2Title: "Car Accidents & Injury",
    service2Text: "Medical bills, lost wages, and settlement negotiation for serious injuries.",
    service3Title: "Civil Litigation",
    service3Text: "Contract disputes, business conflicts, and courtroom representation.",
    service4Title: "Criminal Defense",
    service4Text:
      "Strategic defense to protect your record, immigration status, and reputation.",
    trustTitle: "A Clear and Respectful Process",
    trustText:
      "We start with a careful review, explain options in plain language, and build a plan that moves your case forward with confidence.",
    highlightTitle: "Local, bilingual support",
    highlightText: "Visit our West Covina office or call anytime for guidance.",
    step1Title: "Consultation",
    step1Text: "We listen, assess urgency, and outline next steps.",
    step2Title: "Strategy",
    step2Text: "Your attorney crafts a precise legal plan.",
    step3Title: "Resolution",
    step3Text: "We negotiate, litigate, and pursue results.",
    contactTitle: "Contact WeCan Law Firm",
    contactSubtitle: "Reach us by phone or visit our office in West Covina.",
    contactPhoneTitle: "Phone",
    contactPhoneNote: "We answer quickly and keep you informed.",
    contactWebTitle: "Website",
    contactWebNote: "Start your case review online or by phone.",
    contactOfficeTitle: "Office",
    footerText: "Professional legal counsel for immigrants, families, and injured clients.",
    footerCall: "Call us anytime:"
  },
  zh: {
    tagline: "专业专注的法律支持",
    call: "咨询电话：+1 626-558-9420",
    eyebrow: "WeCan 律师事务所 · 移民 · 车祸 · 诉讼",
    heroTitle: "关键时刻的稳健法律团队",
    heroText:
      "WeCan 律师事务所为客户提供移民申请、车祸理赔与民事诉讼服务。双语律师团队响应迅速、沟通清晰、专业负责。",
    heroCta: "立即电话咨询",
    heroNote: "当日回复 · 中文服务",
    cardTitle: "用心处理您的案件",
    cardPoint1: "律师直接沟通，流程清晰。",
    cardPoint2: "根据目标制定专属策略。",
    cardPoint3: "服务个人与家庭，值得信赖。",
    cardCall: "立即与律师对话：",
    servicesTitle: "服务领域",
    servicesSubtitle: "涵盖移民、事故理赔与诉讼等综合法律服务。",
    service1Title: "移民法",
    service1Text: "亲属移民、绿卡、工作签证、庇护与身份调整。",
    service2Title: "车祸与人身伤害",
    service2Text: "医疗费用、误工损失与赔偿协商。",
    service3Title: "民事诉讼",
    service3Text: "合同纠纷、商业争议与出庭代理。",
    service4Title: "刑事辩护",
    service4Text: "维护记录、移民身份与声誉。",
    trustTitle: "清晰稳妥的服务流程",
    trustText: "从案件评估到方案执行，我们用易懂语言解释选择并制定行动计划。",
    highlightTitle: "本地双语支持",
    highlightText: "欢迎到访西科汶纳办公室或随时致电咨询。",
    step1Title: "初步咨询",
    step1Text: "了解需求，评估紧急程度与方向。",
    step2Title: "制定方案",
    step2Text: "律师团队为您建立精准策略。",
    step3Title: "推进结果",
    step3Text: "谈判、诉讼并争取成果。",
    contactTitle: "联系 WeCan 律师事务所",
    contactSubtitle: "欢迎来电或亲访西科汶纳办公室。",
    contactPhoneTitle: "电话",
    contactPhoneNote: "快速响应，及时沟通。",
    contactWebTitle: "官网",
    contactWebNote: "可在线或电话开始案件评估。",
    contactOfficeTitle: "地址",
    footerText: "为移民、家庭与受伤客户提供专业法律服务。",
    footerCall: "欢迎来电咨询："
  }
};

const toggleButton = document.getElementById("langToggle");
let currentLang = "en";

const applyTranslations = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  toggleButton.textContent = lang === "en" ? "中文" : "EN";
  document.documentElement.lang = lang === "en" ? "en" : "zh";
};

toggleButton.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "zh" : "en";
  applyTranslations(currentLang);
});

applyTranslations(currentLang);
