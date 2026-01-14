const translations = {
  en: {
    tagline: "Trusted Legal Advocates",
    call: "Call: (800) 555-0128",
    eyebrow: "WeCan Law Firm · Immigration · Injury · Litigation",
    heroTitle: "Strategic Legal Support When Your Future Depends on It",
    heroText:
      "Our bilingual team guides clients through immigration petitions, car accident recovery, and complex litigation with clarity and compassion. You can count on responsive counsel and decisive action.",
    heroCta: "Schedule a Consultation",
    heroNote: "24/7 call answering · Same-day case review",
    cardTitle: "Why Clients Choose WeCan",
    cardPoint1: "Experienced attorneys focused on results.",
    cardPoint2: "Clear bilingual communication at every step.",
    cardPoint3: "Personalized strategy for each unique case.",
    cardCall: "Speak with a lawyer now:",
    servicesTitle: "Focused Practice Areas",
    servicesSubtitle:
      "We help individuals and families protect their rights, recover damages, and build secure futures.",
    service1Title: "Immigration Law",
    service1Text:
      "Family petitions, asylum, work visas, and adjustment of status handled with precision.",
    service2Title: "Car Accidents & Injury",
    service2Text:
      "We fight for medical coverage, wage recovery, and full compensation after accidents.",
    service3Title: "Civil Litigation",
    service3Text: "Strategic representation in disputes, contracts, and business conflicts.",
    service4Title: "Criminal Defense",
    service4Text: "Protecting your record and your reputation with vigorous defense.",
    trustTitle: "A Clear, Client-First Process",
    trustText:
      "From your first call to case resolution, we prioritize responsiveness, transparency, and the legal strategy that moves you forward.",
    step1Title: "Consultation",
    step1Text: "We listen, assess, and map the best next step.",
    step2Title: "Case Strategy",
    step2Text: "Your attorney builds a tailored legal plan.",
    step3Title: "Resolution",
    step3Text: "We negotiate, litigate, and secure results.",
    footerText: "Professional legal counsel for immigrants, families, and injured clients.",
    footerCall: "Call us anytime:"
  },
  zh: {
    tagline: "值得信赖的法律专家",
    call: "咨询电话：(800) 555-0128",
    eyebrow: "WeCan 律师事务所 · 移民 · 车祸 · 诉讼",
    heroTitle: "为您的未来提供坚定的法律支持",
    heroText:
      "我们的双语团队协助客户处理移民申请、车祸理赔与复杂诉讼，以清晰沟通和同理心守护您的权益。",
    heroCta: "预约法律咨询",
    heroNote: "全天候接听 · 当日案件评估",
    cardTitle: "客户选择 WeCan 的理由",
    cardPoint1: "资深律师团队，注重结果。",
    cardPoint2: "中英文沟通顺畅，随时更新进展。",
    cardPoint3: "每案定制策略，精细执行。",
    cardCall: "立即与律师对话：",
    servicesTitle: "重点服务领域",
    servicesSubtitle: "协助个人与家庭维护权益、争取赔偿、规划未来。",
    service1Title: "移民法",
    service1Text: "亲属移民、庇护、工作签证与身份调整。",
    service2Title: "车祸与人身伤害",
    service2Text: "争取医疗费用、误工损失与全面赔偿。",
    service3Title: "民事诉讼",
    service3Text: "合同争议、商业纠纷与综合诉讼代理。",
    service4Title: "刑事辩护",
    service4Text: "全力维护您的记录与声誉。",
    trustTitle: "清晰透明的服务流程",
    trustText: "从首次来电到案件解决，我们保持高响应与透明策略。",
    step1Title: "初步咨询",
    step1Text: "倾听需求，评估方案。",
    step2Title: "制定策略",
    step2Text: "律师团队建立个性化行动计划。",
    step3Title: "案件解决",
    step3Text: "谈判、诉讼并争取结果。",
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
