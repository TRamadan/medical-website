import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';

export interface TranslationMap {
  [key: string]: {
    en: string;
    ar: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private translations: TranslationMap = {
    // Navigation items
    'nav.home': { en: 'Home', ar: 'الرئيسية' },
    'nav.about': { en: 'About Us', ar: 'من نحن' },
    'nav.superstars': { en: 'Our super stars', ar: 'نجومنا' },
    'nav.science': { en: 'The science', ar: 'العلوم' },
    'nav.exploreSolution': { en: 'Explore solution', ar: 'حلولنا' },
    'nav.contact': { en: 'Contact', ar: 'اتصل بنا' },

    // Brand
    'brand.name': { en: 'The sports doctor', ar: 'طبيب الرياضة' },

    // Hero section
    'hero.title': {
      en: 'Elite Performance',
      ar: 'الاداء المتميز',
    },
    'hero.subtitle1': {
      en: 'Through Science',
      ar: 'من خلال العلم',
    },
    'hero.subtitle': {
      en: 'Unlock your athletic potential with cutting-edge sports science, proven methodologies, and personalized training programs trusted by world champions',
      ar: 'اكتشف إمكاناتك الرياضية الكاملة من خلال علوم الرياضة المتطورة والمنهجيات المثبتة علمياً وبرامج التدريب المخصصة التي يثق بها أبطال العالم',
    },

    'hero.downloadandroid': {
      en: 'Donwload for android',
      ar: 'تحميل تطبيق الاندرويد',
    },

    'hero.downloadios': {
      en: 'Download for iOS',
      ar: 'تحميل تطبيق الـ iOS ',
    },

    // Services
    'services.title': { en: 'Our Services', ar: 'خدماتنا' },
    'services.subtitle': {
      en: 'Comprehensive rehabilitation services tailored to your specific needs and recovery goals',
      ar: 'خدمات إعادة تأهيل شاملة مصممة خصيصاً لاحتياجاتك وأهداف شفائك',
    },

    // Services - Injury Treatment
    'services.injuryTreatment.title': {
      en: 'Injury Treatment',
      ar: 'علاج الإصابات',
    },
    'services.injuryTreatment.description': {
      en: 'Restore movement and function through evidence-based therapeutic techniques and personalized treatment plans.',
      ar: 'استعادة الحركة والوظيفة من خلال تقنيات علاجية قائمة على الأدلة وخطط علاج مخصصة.',
    },
    'services.injuryTreatment.orthopedic': {
      en: 'Orthopedic Rehabilitation',
      ar: 'إعادة تأهيل العظام',
    },
    'services.injuryTreatment.sports': {
      en: 'Sports Injury Recovery',
      ar: 'شفاء إصابات الرياضة',
    },
    'services.injuryTreatment.postSurgical': {
      en: 'Post-Surgical Recovery',
      ar: 'الشفاء بعد الجراحة',
    },
    'services.injuryTreatment.balance': {
      en: 'Balance & Mobility Training',
      ar: 'تدريب التوازن والحركة',
    },
    'services.injuryTreatment.painManagement': {
      en: 'Pain Management',
      ar: 'إدارة الألم',
    },

    // Services - Injury Prevention
    'services.injuryPrevention.title': {
      en: 'Injury Prevention',
      ar: 'منع الإصابات',
    },
    'services.injuryPrevention.description': {
      en: 'Help you regain independence in daily activities and return to meaningful occupations and life roles.',
      ar: 'مساعدتك في استعادة الاستقلالية في الأنشطة اليومية والعودة إلى المهن والأدوار الحياتية الهادفة.',
    },
    'services.injuryPrevention.dailyLiving': {
      en: 'Activities of Daily Living',
      ar: 'أنشطة الحياة اليومية',
    },
    'services.injuryPrevention.workHardening': {
      en: 'Work Hardening Programs',
      ar: 'برامج تقوية العمل',
    },
    'services.injuryPrevention.handUpper': {
      en: 'Hand & Upper Extremity',
      ar: 'اليد والطرف العلوي',
    },
    'services.injuryPrevention.cognitive': {
      en: 'Cognitive Rehabilitation',
      ar: 'إعادة التأهيل المعرفي',
    },
    'services.injuryPrevention.adaptiveEquipment': {
      en: 'Adaptive Equipment Training',
      ar: 'تدريب المعدات التكيفية',
    },

    // Services - Rehabilitation
    'services.rehabilitation.title': {
      en: 'Rehabilitation Programs',
      ar: 'برامج إعادة التأهيل',
    },
    'services.rehabilitation.description': {
      en: 'Improve communication skills, swallowing function, and cognitive abilities through specialized interventions.',
      ar: 'تحسين مهارات التواصل ووظيفة البلع والقدرات المعرفية من خلال التدخلات المتخصصة.',
    },
    'services.rehabilitation.speechLanguage': {
      en: 'Speech & Language Disorders',
      ar: 'اضطرابات النطق واللغة',
    },
    'services.rehabilitation.swallowing': {
      en: 'Swallowing Difficulties',
      ar: 'صعوبات البلع',
    },
    'services.rehabilitation.voiceArticulation': {
      en: 'Voice & Articulation',
      ar: 'الصوت والنطق',
    },
    'services.rehabilitation.cognitiveCommunication': {
      en: 'Cognitive Communication',
      ar: 'التواصل المعرفي',
    },
    'services.rehabilitation.accentModification': {
      en: 'Accent Modification',
      ar: 'تعديل اللكنة',
    },

    // Services - Conditions
    'services.conditions.title': {
      en: 'Supported Injuries & Conditions',
      ar: 'الإصابات والحالات المدعومة',
    },
    'services.conditions.backNeckPain': {
      en: 'Back & Neck Pain',
      ar: 'آلام الظهر والرقبة',
    },
    'services.conditions.jointReplacement': {
      en: 'Joint Replacement',
      ar: 'استبدال المفاصل',
    },
    'services.conditions.sportsInjuries': {
      en: 'Sports Injuries',
      ar: 'إصابات الرياضة',
    },
    'services.conditions.strokeRecovery': {
      en: 'Stroke Recovery',
      ar: 'شفاء السكتة الدماغية',
    },
    'services.conditions.arthritis': { en: 'Arthritis', ar: 'التهاب المفاصل' },
    'services.conditions.fractures': { en: 'Fractures', ar: 'الكسور' },
    'services.conditions.neurological': {
      en: 'Neurological Disorders',
      ar: 'الاضطرابات العصبية',
    },
    'services.conditions.cardiac': {
      en: 'Cardiac Rehabilitation',
      ar: 'إعادة تأهيل القلب',
    },
    'services.conditions.workInjuries': {
      en: 'Work Injuries',
      ar: 'إصابات العمل',
    },
    'services.conditions.motorVehicle': {
      en: 'Motor Vehicle Accidents',
      ar: 'حوادث المركبات',
    },
    'services.conditions.chronicPain': {
      en: 'Chronic Pain',
      ar: 'الألم المزمن',
    },
    'services.conditions.balanceDisorders': {
      en: 'Balance Disorders',
      ar: 'اضطرابات التوازن',
    },

    // About
    'about.title': { en: 'About Us', ar: 'من نحن' },
    // 'about.subtitle': {
    //   en: 'Dedicated to your health and performance',
    //   ar: 'متخصصون في صحتك وأدائك',
    // },

    'about.subtitle1': {
      en: 'Passion meets precision,',
      ar: ',الشغف يلتقي بالدقة',
    },

    'about.subtitle2': {
      en: 'Setbacks become comebacks',
      ar: 'العثرات تتحول إلى انطلاقات',
    },

    'about.subtitle': {
      en: 'What we believe, why we exist, and how we make it happen',
      ar: 'مبادئنا، رسالتنا، ونهجنا في تحقيق النجاح',
    },

    // About - Mission, Vision, Values
    'about.mission.title': { en: 'Our Mission', ar: 'مهمتنا' },
    'about.mission.description': {
      en: 'To provide accessible, personalized, and evidence-based rehabilitation services that empower individuals to achieve optimal physical function and return to their active lifestyle.',
      ar: 'تقديم خدمات إعادة تأهيل سهلة الوصول ومخصصة وقائمة على الأدلة تمكن الأفراد من تحقيق الوظيفة البدنية المثلى والعودة إلى نمط حياتهم النشط.',
    },
    'about.vision.title': { en: 'Our Vision', ar: 'رؤيتنا' },
    'about.vision.description': {
      en: 'To be the leading digital platform for injury rehabilitation, making quality physiotherapy accessible to everyone, anywhere, and revolutionizing the way people recover.',
      ar: 'أن نكون المنصة الرقمية الرائدة في إعادة تأهيل الإصابات، مما يجعل العلاج الطبيعي عالي الجودة متاحاً للجميع في كل مكان، ويحدث ثورة في طريقة شفاء الناس.',
    },
    'about.values.title': { en: 'Our Values', ar: 'قيمنا' },
    'about.values.description': {
      en: 'Compassion, Excellence, Innovation, and Integrity guide everything we do. We believe in treating each patient as a whole person, not just an injury.',
      ar: 'الرحمة والتميز والابتكار والنزاهة توجه كل ما نقوم به. نؤمن بمعاملة كل مريض كشخص كامل، وليس مجرد إصابة.',
    },

    // About - Team
    'about.team.title': {
      en: 'Our Team',
      ar: 'تعرف على فريقنا ',
    },

    'about.team.subTitle1': {
      en: 'Driven by Passion',
      ar: 'مدفوعون بالشغف',
    },

    'about.team.subTitle2': {
      en: 'United by Purpose',
      ar: 'متحدون من أجل الهدف',
    },

    'about.team.subTitle': {
      en: 'Meet the people turning challenges into victories, together',
      ar: 'تعرف على الأشخاص الذين يحولون التحديات إلى انتصارات، معًا',
    },

    // About - Certifications
    'about.certifications.title': {
      en: 'Certifications & Accreditations',
      ar: 'الشهادات والاعتمادات',
    },
    'about.certifications.subtitle': {
      en: 'Our team holds the highest certifications in the industry, ensuring you receive world-class care.',
      ar: 'يحمل فريقنا أعلى الشهادات في الصناعة، مما يضمن لك رعاية عالمية المستوى.',
    },
    'about.certifications.licensed': {
      en: 'Licensed Physical Therapists (State Board Certified)',
      ar: 'أخصائيون علاج طبيعي مرخصون (معتمدون من مجلس الولاية)',
    },
    'about.certifications.apta': {
      en: 'American Physical Therapy Association (APTA) Members',
      ar: 'أعضاء الجمعية الأمريكية للعلاج الطبيعي (APTA)',
    },
    'about.certifications.ceu': {
      en: 'Continuing Education Units (CEU) Compliant',
      ar: 'متوافق مع وحدات التعليم المستمر (CEU)',
    },
    'about.certifications.hipaa': {
      en: 'HIPAA Compliance Certification',
      ar: 'شهادة الامتثال لـ HIPAA',
    },
    'about.certifications.cpr': {
      en: 'CPR/AED Certified',
      ar: 'معتمد في الإنعاش القلبي الرئوي/مزيل الرجفان',
    },
    'about.certifications.telehealth': {
      en: 'Telehealth Practice Certification',
      ar: 'شهادة ممارسة الصحة عن بُعد',
    },
    'about.certifications.evidence': {
      en: 'Evidence-Based Practice Certification',
      ar: 'شهادة الممارسة القائمة على الأدلة',
    },
    'about.certifications.safety': {
      en: 'Patient Safety & Quality Improvement Certified',
      ar: 'معتمد في سلامة المرضى وتحسين الجودة',
    },

    // Contact
    'contact.title': { en: 'Contact Us', ar: 'اتصل بنا' },
    'contact.subtitle': {
      en: 'Get in touch with our team',
      ar: 'تواصل مع فريقنا',
    },
    'contact.description': {
      en: "Have questions about our services? Need help with your recovery journey? We're here to help and would love to hear from you.",
      ar: 'هل لديك أسئلة حول خدماتنا؟ تحتاج مساعدة في رحلة شفائك؟ نحن هنا للمساعدة ونود أن نسمع منك.',
    },
    'contact.badge': { en: 'Contact us', ar: 'اتصل بنا' },
    'contact.heading.part1': { en: 'Our Path to', ar: 'طريقنا نحو' },
    'contact.heading.part2': {
      en: 'Get the Answers You Need',
      ar: 'الحصول على الإجابات التي تحتاجها',
    },
    'contact.heading.subtitle': {
      en: "Have questions about our services? Need help with your recovery journey? We're here to help and would love to hear from you.",
      ar: 'هل لديك أسئلة حول خدماتنا؟ هل تحتاج إلى مساعدة في رحلة شفائك؟ نحن هنا للمساعدة ويسعدنا التواصل معك.',
    },

    // Contact - Information
    'contact.getInTouch': { en: 'Get in Touch', ar: 'تواصل معنا' },
    'contact.followUs': { en: 'Follow Us', ar: 'تابعنا' },
    'contact.sendMessage': { en: 'Send us a Message', ar: 'أرسل لنا رسالة' },

    // Contact - Phone
    'contact.phone.title': { en: 'Phone', ar: 'الهاتف' },
    'contact.phone.description': {
      en: 'Call us directly',
      ar: 'اتصل بنا مباشرة',
    },
    'contact.phone.hours': {
      en: 'Mon-Fri 9AM-6PM EST',
      ar: 'الاثنين-الجمعة 9 صباحاً-6 مساءً بتوقيت شرق الولايات المتحدة',
    },

    // Contact - Email
    'contact.email.title': { en: 'Email', ar: 'البريد الإلكتروني' },
    'contact.email.description': {
      en: 'Send us an email',
      ar: 'أرسل لنا بريد إلكتروني',
    },

    // Contact - Address
    'contact.address.title': { en: 'Address', ar: 'العنوان' },
    'contact.address.description': { en: 'Visit our office', ar: 'زر مكتبنا' },

    // Contact - Subjects
    'contact.subjects.general': { en: 'General Inquiry', ar: 'استفسار عام' },
    'contact.subjects.appointment': {
      en: 'Appointment Question',
      ar: 'سؤال حول الموعد',
    },
    'contact.subjects.technical': {
      en: 'Technical Support',
      ar: 'الدعم التقني',
    },
    'contact.subjects.billing': {
      en: 'Billing Question',
      ar: 'سؤال حول الفواتير',
    },
    'contact.subjects.partnership': {
      en: 'Partnership Inquiry',
      ar: 'استفسار حول الشراكة',
    },
    'contact.subjects.media': {
      en: 'Media/Press Inquiry',
      ar: 'استفسار إعلامي/صحفي',
    },
    'contact.subjects.feedback': { en: 'Feedback', ar: 'ملاحظات' },

    // Contact - Form
    'contact.form.fullName': { en: 'Full Name *', ar: 'الاسم الكامل *' },
    'contact.form.email': { en: 'Email Address *', ar: 'البريد الإلكتروني *' },
    'contact.form.phone': { en: 'Phone Number', ar: 'رقم الهاتف' },
    'contact.form.subject': { en: 'Subject *', ar: 'الموضوع *' },
    'contact.form.message': { en: 'Message *', ar: 'الرسالة *' },
    'contact.form.selectSubject': { en: 'Select subject', ar: 'اختر الموضوع' },
    'contact.form.namePlaceholder': {
      en: 'Enter your full name',
      ar: 'أدخل اسمك الكامل',
    },
    'contact.form.emailPlaceholder': {
      en: 'your.email@example.com',
      ar: 'بريدك.الإلكتروني@مثال.com',
    },
    'contact.form.phonePlaceholder': {
      en: '+1 (555) 123-4567',
      ar: '+1 (555) 123-4567',
    },
    'contact.form.messagePlaceholder': {
      en: 'Please describe your inquiry in detail...',
      ar: 'يرجى وصف استفسارك بالتفصيل...',
    },
    'contact.form.sendMessage': { en: 'Send Message', ar: 'إرسال الرسالة' },

    // Contact - Response Time
    'contact.responseTime.title': {
      en: 'Response Time:',
      ar: 'وقت الاستجابة:',
    },
    'contact.responseTime.description': {
      en: 'We typically respond to inquiries within 24 hours during business days. For urgent matters, please call us directly at 01144877526.',
      ar: 'نحن عادةً نرد على الاستفسارات خلال 24 ساعة في أيام العمل. للشؤون العاجلة، يرجى الاتصال بنا مباشرة على 01144877526.',
    },

    // Contact - Success Message
    'contact.successMessage': {
      en: 'Thank you for your message! We will get back to you soon.',
      ar: 'شكراً لك على رسالتك! سنرد عليك قريباً.',
    },

    // Form Errors
    'form.errors.required': { en: '{field} is required', ar: '{field} مطلوب' },
    'form.errors.email': {
      en: 'Please enter a valid email address',
      ar: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
    },
    'form.errors.minlength': {
      en: '{field} is too short',
      ar: '{field} قصير جداً',
    },

    // Forms
    'form.name': { en: 'Name', ar: 'الاسم' },
    'form.submit': { en: 'Submit', ar: 'إرسال' },

    // Buttons
    'button.learnMore': { en: 'Learn More', ar: 'اعرف المزيد' },
    'button.bookNow': { en: 'Book Now', ar: 'احجز الآن' },
    'button.readMore': { en: 'Read More', ar: 'اقرأ المزيد' },

    // Footer
    'footer.copyright': {
      en: '© 2024 The Sports Doctor. All rights reserved.',
      ar: '© 2024 طبيب الرياضة. جميع الحقوق محفوظة.',
    },
    'footer.description': {
      en: 'At The Sports Doctor, we believe every setback is a setup for a powerful comeback. Our state-of-the-art rehabilitation center is designed to not only heal your injuries but to empower you with the strength and resilience needed to dominate your sport.',
      ar: 'في طبيب الرياضة، نؤمن بأن كل نكسة هي إعداد لعودة قوية. مركز إعادة التأهيل المتطور لدينا مصمم ليس فقط لشفاء إصاباتك ولكن لتمكينك بالقوة والمرونة اللازمة للسيطرة على رياضتك.',
    },

    // How It Works
    'howItWorks.title': { en: 'How It Works', ar: 'طريقة العمل' },
    'howItWorks.step1.title': { en: 'Book an Appointment', ar: 'احجز موعد' },
    'howItWorks.step1.description': {
      en: 'Schedule your first consultation through our website or mobile app.',
      ar: 'احجز استشارتك الأولى من خلال موقعنا الإلكتروني أو تطبيق الهاتف المحمول.',
    },
    'howItWorks.step2.title': {
      en: 'Initial Assessment',
      ar: 'التقييم الأولي',
    },
    'howItWorks.step2.description': {
      en: 'Our specialists will evaluate your condition and create a personalized treatment plan.',
      ar: 'سيقوم متخصصونا بتقييم حالتك وإنشاء خطة علاج مخصصة.',
    },
    'howItWorks.step3.title': { en: 'Download the App', ar: 'حمل التطبيق' },
    'howItWorks.step3.description': {
      en: 'Get our mobile app to access your treatment plan, exercises, and track your progress.',
      ar: 'احصل على تطبيق الهاتف المحمول للوصول إلى خطة علاجك وتمارينك وتتبع تقدمك.',
    },
    'howItWorks.step4.title': { en: 'Follow Your Plan', ar: 'اتبع خطتك' },
    'howItWorks.step4.description': {
      en: 'Complete your prescribed exercises and track your recovery journey.',
      ar: 'أكمل تمارينك الموصوفة وتتبع رحلة شفائك.',
    },
    'howItWorks.step5.title': { en: 'Regular Check-ins', ar: 'فحوصات منتظمة' },
    'howItWorks.step5.description': {
      en: 'Stay connected with your healthcare provider through regular virtual or in-person appointments.',
      ar: 'ابق على تواصل مع مقدم الرعاية الصحية الخاص بك من خلال المواعيد الافتراضية أو الشخصية المنتظمة.',
    },

    // Process (How it works intro block)
    'process.badge': {
      en: 'STOCKIE OPERATION ACROSS THE WORLD',
      ar: 'العمليات عبر العالم',
    },
    'process.title.part1': { en: 'We have best team', ar: 'لدينا أفضل فريق' },
    'process.title.part2': { en: 'and best process', ar: 'وأفضل عملية' },
    'process.lead': {
      en: 'Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.',
      ar: 'نقدم أفضل الممارسات لمساعدتك طوال رحلتك العلاجية بنهج واضح وفعّال.',
    },
    'process.cta': { en: 'Get Started', ar: 'ابدأ الآن' },

    // Booking
    'booking.title': {
      en: 'Book Your Medical Consultation',
      ar: 'احجز استشارتك الطبية',
    },
    'booking.subtitle': {
      en: 'Connect with qualified doctors and specialists. Simple booking, no login required for first-time appointments.',
      ar: 'تواصل مع الأطباء والمتخصصين المؤهلين. حجز بسيط، لا يتطلب تسجيل دخول للمواعيد الأولى.',
    },
    'booking.cta': { en: 'Book Now', ar: 'احجز الآن' },
    'booking.badge': { en: 'Book Your Appointment', ar: 'احجز موعدك' },
    'booking.title.part1': { en: 'Book your', ar: 'احجز' },
    'booking.title.part2': {
      en: 'medical consultation',
      ar: 'استشارتك الطبية',
    },

    // Booking Features
    'booking.features.location.title': {
      en: 'Location Based',
      ar: 'قائم على الموقع',
    },
    'booking.features.location.description': {
      en: 'Find doctors near your location for convenient appointments',
      ar: 'اعثر على الأطباء بالقرب من موقعك لمواعيد مريحة',
    },
    'booking.features.availability.title': {
      en: 'Real-time Availability',
      ar: 'التوفر في الوقت الفعلي',
    },
    'booking.features.availability.description': {
      en: 'See doctor availability and book instantly',
      ar: 'شاهد توفر الطبيب واحجز فوراً',
    },
    'booking.features.specialized.title': {
      en: 'Specialized Care',
      ar: 'رعاية متخصصة',
    },
    'booking.features.specialized.description': {
      en: 'Match with specialists based on your injury type',
      ar: 'تطابق مع المتخصصين بناءً على نوع إصابتك',
    },
    'booking.features.confirmation.title': {
      en: 'Instant Confirmation',
      ar: 'تأكيد فوري',
    },
    'booking.features.confirmation.description': {
      en: 'Get email confirmation and app download instructions',
      ar: 'احصل على تأكيد بالبريد الإلكتروني وتعليمات تحميل التطبيق',
    },

    // Booking How It Works
    'booking.howItWorks.title': { en: 'How It Works', ar: 'طريقة العمل' },
    'booking.howItWorks.step1.title': {
      en: 'Choose service and location',
      ar: 'اختر الخدمة والموقع',
    },
    'booking.howItWorks.step1.description': {
      en: 'Select your preferred service and location area',
      ar: 'اختر الخدمة المفضلة ومنطقة الموقع',
    },
    'booking.howItWorks.step2.title': {
      en: 'Select your desired slot',
      ar: 'اختر الفترة المطلوبة',
    },
    'booking.howItWorks.step2.description': {
      en: 'Choose your desired date and time slot',
      ar: 'اختر التاريخ والفترة الزمنية المطلوبة',
    },
    'booking.howItWorks.step3.title': {
      en: 'Book Appointment',
      ar: 'احجز الموعد',
    },
    'booking.howItWorks.step3.description': {
      en: 'Fill in your details and confirm',
      ar: 'املأ تفاصيلك وأكد',
    },
    'booking.howItWorks.step4.title': {
      en: 'Get Confirmation',
      ar: 'احصل على التأكيد',
    },
    'booking.howItWorks.step4.description': {
      en: 'Receive email with app download link',
      ar: 'استلم بريد إلكتروني مع رابط تحميل التطبيق',
    },

    // Booking Form
    'booking.form.title': { en: 'Book Appointment', ar: 'احجز موعد' },
    'booking.form.progress.step': { en: 'Step', ar: 'خطوة' },
    'booking.form.progress.of': { en: 'of', ar: 'من' },
    'booking.form.progress.complete': { en: 'Complete', ar: 'مكتمل' },
    'booking.form.steps.location': {
      en: 'Choose location and service',
      ar: 'اختر الموقع والخدمة',
    },
    'booking.form.steps.timeSlot': {
      en: 'Pick your time slot',
      ar: 'اختر فترة الوقت',
    },
    'booking.form.steps.patientInfo': {
      en: 'Patient Info',
      ar: 'معلومات المريض',
    },
    'booking.form.steps.confirmation': { en: 'Confirmation', ar: 'التأكيد' },
    'booking.form.navigation.previous': { en: 'Previous', ar: 'السابق' },
    'booking.form.navigation.next': { en: 'Next', ar: 'التالي' },
    'booking.form.navigation.createBooking': {
      en: 'Create booking',
      ar: 'إنشاء الحجز',
    },

    // Location Service Form
    'booking.locationService.title': {
      en: 'Select Your Location And Service',
      ar: 'اختر موقعك وخدمتك',
    },
    'booking.locationService.subtitle': {
      en: 'Choose your preferred location and service for the appointment',
      ar: 'اختر موقعك وخدمتك المفضلة للموعد',
    },
    'booking.locationService.searchPlaceholder': {
      en: 'Search here for location or service...',
      ar: 'ابحث هنا عن الموقع أو الخدمة...',
    },
    'booking.locationService.selectService': {
      en: 'Select service',
      ar: 'اختر الخدمة',
    },
    'booking.locationService.selectLocation': {
      en: 'Select location',
      ar: 'اختر الموقع',
    },
    'booking.locationService.currency': { en: 'EGP', ar: 'ج.م' },
    'booking.locationService.confirmationMessage': {
      en: 'Your chosen service is {service}, at location {location}.',
      ar: 'الخدمة المختارة هي {service}، في الموقع {location}.',
    },
    'booking.locationService.selectionMessage': {
      en: 'Your service is {service}, and your location {location}',
      ar: 'خدمتك هي {service}، وموقعك {location}',
    },

    // Time Slot
    'booking.timeSlot.title': {
      en: 'Choose Your Appointment Time',
      ar: 'اختر وقت موعدك',
    },
    'booking.timeSlot.selectDate': { en: 'Select Date', ar: 'اختر التاريخ' },
    'booking.timeSlot.selectTime': { en: 'Select Time', ar: 'اختر الوقت' },
    'booking.timeSlot.slotsAvailable': {
      en: 'slots available',
      ar: 'فترات متاحة',
    },
    'booking.timeSlot.from': { en: 'From', ar: 'من' },
    'booking.timeSlot.to': { en: 'To', ar: 'إلى' },
    'booking.timeSlot.noSlotsAvailable': {
      en: 'No time slots available for this date',
      ar: 'لا توجد فترات زمنية متاحة لهذا التاريخ',
    },

    // Patient Form
    'booking.patientForm.title': {
      en: 'Patient Information',
      ar: 'معلومات المريض',
    },
    'booking.patientForm.subtitle': {
      en: 'Please provide your details to complete the booking',
      ar: 'يرجى تقديم تفاصيلك لإكمال الحجز',
    },
    'booking.patientForm.personalInfo.title': {
      en: 'Personal Information',
      ar: 'المعلومات الشخصية',
    },
    'booking.patientForm.fields.firstName': {
      en: 'First Name',
      ar: 'الاسم الأول',
    },
    'booking.patientForm.fields.lastName': {
      en: 'Last Name',
      ar: 'اسم العائلة',
    },
    'booking.patientForm.fields.email': {
      en: 'Email Address',
      ar: 'عنوان البريد الإلكتروني',
    },
    'booking.patientForm.fields.phone': {
      en: 'Phone Number',
      ar: 'رقم الهاتف',
    },
    'booking.patientForm.fields.dateOfBirth': {
      en: 'Date of Birth',
      ar: 'تاريخ الميلاد',
    },
    'booking.patientForm.fields.gender': { en: 'Gender', ar: 'الجنس' },
    'booking.patientForm.fields.emergencyContact': {
      en: 'Emergency Contact',
      ar: 'جهة اتصال الطوارئ',
    },
    'booking.patientForm.placeholders.firstName': {
      en: 'Enter your first name',
      ar: 'أدخل اسمك الأول',
    },
    'booking.patientForm.placeholders.lastName': {
      en: 'Enter your last name',
      ar: 'أدخل اسم العائلة',
    },
    'booking.patientForm.placeholders.email': {
      en: 'your.email@example.com',
      ar: 'بريدك.الإلكتروني@مثال.com',
    },
    'booking.patientForm.placeholders.phone': {
      en: '+20 XXX XXX XXXX',
      ar: '+20 XXX XXX XXXX',
    },
    'booking.patientForm.placeholders.gender': {
      en: 'Select gender',
      ar: 'اختر الجنس',
    },
    'booking.patientForm.placeholders.emergencyContact': {
      en: 'Emergency contact name and phone number',
      ar: 'اسم جهة اتصال الطوارئ ورقم الهاتف',
    },
    'booking.patientForm.placeholders.medicalHistory': {
      en: 'Please provide any relevant medical history that might help your doctor...',
      ar: 'يرجى تقديم أي تاريخ طبي ذي صلة قد يساعد طبيبك...',
    },
    'booking.patientForm.options.male': { en: 'Male', ar: 'ذكر' },
    'booking.patientForm.options.female': { en: 'Female', ar: 'أنثى' },
    'booking.patientForm.medicalHistory.title': {
      en: 'Medical History (Optional)',
      ar: 'التاريخ الطبي (اختياري)',
    },
    'booking.patientForm.medicalHistory.description': {
      en: 'Previous injuries, surgeries, medications, or relevant medical information',
      ar: 'الإصابات السابقة، العمليات الجراحية، الأدوية، أو المعلومات الطبية ذات الصلة',
    },
    'booking.patientForm.validation.ready': {
      en: 'All required information provided. Ready to proceed!',
      ar: 'تم تقديم جميع المعلومات المطلوبة. جاهز للمتابعة!',
    },
    'booking.patientForm.validation.incomplete': {
      en: 'Please fill in all required fields marked with *',
      ar: 'يرجى ملء جميع الحقول المطلوبة المميزة بـ *',
    },
    'booking.patientForm.errors.required': {
      en: '{field} is required',
      ar: '{field} مطلوب',
    },
    'booking.patientForm.errors.minlength': {
      en: '{field} must be at least 2 characters',
      ar: 'يجب أن يكون {field} على الأقل حرفين',
    },
    'booking.patientForm.errors.email': {
      en: 'Please enter a valid email address',
      ar: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
    },
    'booking.patientForm.errors.phone': {
      en: 'Please enter a valid phone number',
      ar: 'يرجى إدخال رقم هاتف صحيح',
    },
    'booking.patientForm.errors.minAge': {
      en: 'You must be at least 16 years old',
      ar: 'يجب أن تكون على الأقل 16 سنة',
    },

    // Confirmation
    'booking.confirmation.title': {
      en: 'Appointment Booked Successfully!',
      ar: 'تم حجز الموعد بنجاح!',
    },
    'booking.confirmation.subtitle': {
      en: 'Your consultation has been scheduled and account created',
      ar: 'تم جدولة استشارتك وإنشاء الحساب',
    },
    'booking.confirmation.emailSent': {
      en: 'Confirmation Email Sent!\nتم إرسال إيميل التأكيد مع رابط تحميل التطبيق إلى بريدك الإلكتروني',
      ar: 'تم إرسال إيميل التأكيد!\nتم إرسال إيميل التأكيد مع رابط تحميل التطبيق إلى بريدك الإلكتروني',
    },
    'booking.confirmation.appointmentDetails.title': {
      en: 'Appointment Details',
      ar: 'تفاصيل الموعد',
    },
    'booking.confirmation.appointmentDetails.location': {
      en: 'Location',
      ar: 'الموقع',
    },
    'booking.confirmation.appointmentDetails.date': {
      en: 'Date',
      ar: 'التاريخ',
    },
    'booking.confirmation.appointmentDetails.time': { en: 'Time', ar: 'الوقت' },
    'booking.confirmation.patientInfo.title': {
      en: 'Patient Information',
      ar: 'معلومات المريض',
    },
    'booking.confirmation.patientInfo.name': { en: 'Name', ar: 'الاسم' },
    'booking.confirmation.patientInfo.dateOfBirth': {
      en: 'Date of Birth',
      ar: 'تاريخ الميلاد',
    },
    'booking.confirmation.patientInfo.email': {
      en: 'Email',
      ar: 'البريد الإلكتروني',
    },
    'booking.confirmation.patientInfo.phone': { en: 'Phone', ar: 'الهاتف' },
    'booking.confirmation.nextSteps.title': {
      en: 'Next Steps',
      ar: 'الخطوات التالية',
    },
    'booking.confirmation.nextSteps.step1.title': {
      en: 'Account Created',
      ar: 'تم إنشاء الحساب',
    },
    'booking.confirmation.nextSteps.step1.description': {
      en: 'Your account is pending admin validation',
      ar: 'حسابك في انتظار التحقق من الإدارة',
    },
    'booking.confirmation.nextSteps.step2.title': {
      en: 'Email Confirmation',
      ar: 'تأكيد البريد الإلكتروني',
    },
    'booking.confirmation.nextSteps.step2.description': {
      en: 'Check your email for appointment details and app download link',
      ar: 'تحقق من بريدك الإلكتروني للحصول على تفاصيل الموعد ورابط تحميل التطبيق',
    },
    'booking.confirmation.nextSteps.step3.title': {
      en: 'Download App',
      ar: 'تحميل التطبيق',
    },
    'booking.confirmation.nextSteps.step3.description': {
      en: 'Download our mobile app to complete your injury assessment form',
      ar: 'حمل تطبيق الهاتف المحمول لإكمال استمارة تقييم الإصابة',
    },
    'booking.confirmation.arabicEmail.title': {
      en: 'رسالة التأكيد',
      ar: 'رسالة التأكيد',
    },
    'booking.confirmation.arabicEmail.greeting': {
      en: 'مرحباً {name}،',
      ar: 'مرحباً {name}،',
    },
    'booking.confirmation.arabicEmail.intro': {
      en: 'تم حجز موعدك بنجاح! سيتم إرسال إيميل تأكيد يحتوي على:',
      ar: 'تم حجز موعدك بنجاح! سيتم إرسال إيميل تأكيد يحتوي على:',
    },
    'booking.confirmation.arabicEmail.details': {
      en: 'تفاصيل الموعد المحجوز',
      ar: 'تفاصيل الموعد المحجوز',
    },
    'booking.confirmation.arabicEmail.appLink': {
      en: 'رابط تحميل التطبيق',
      ar: 'رابط تحميل التطبيق',
    },
    'booking.confirmation.arabicEmail.formInstructions': {
      en: 'تعليمات ملء استمارة بيانات الإصابة',
      ar: 'تعليمات ملء استمارة بيانات الإصابة',
    },
    'booking.confirmation.arabicEmail.clinicInfo': {
      en: 'معلومات التواصل مع العيادة',
      ar: 'معلومات التواصل مع العيادة',
    },
    'booking.confirmation.arabicEmail.instruction': {
      en: 'يرجى تحميل التطبيق وملء الاستمارة قبل موعد الزيارة لضمان تقديم أفضل رعاية طبية.',
      ar: 'يرجى تحميل التطبيق وملء الاستمارة قبل موعد الزيارة لضمان تقديم أفضل رعاية طبية.',
    },

    // Educational Videos
    'educationalVideos.title': {
      en: 'Learn About Injury Recovery',
      ar: 'تعلم عن التعافي من الإصابات',
    },
    'educationalVideos.subtitle': {
      en: 'Educational content to help you understand your injury and learn proper recovery techniques',
      ar: 'محتوى تعليمي لمساعدتك على فهم إصابتك وتعلم تقنيات التعافي الصحيحة',
    },
    'educationalVideos.watchButton': { en: 'Watch Video', ar: 'شاهد الفيديو' },
    'educationalVideos.viewAllButton': {
      en: 'View All Educational Content',
      ar: 'عرض كل المحتوى التعليمي',
    },

    'educationalVideos.videos.understandingInjury.title': {
      en: 'Understanding Your Injury',
      ar: 'فهم إصابتك',
    },
    'educationalVideos.videos.understandingInjury.category': {
      en: 'Education',
      ar: 'تعليم',
    },
    'educationalVideos.videos.recoveryExercises.title': {
      en: 'Basic Recovery Exercises',
      ar: 'تمارين التعافي الأساسية',
    },
    'educationalVideos.videos.recoveryExercises.category': {
      en: 'Exercise',
      ar: 'تمرين',
    },
    'educationalVideos.videos.painManagement.title': {
      en: 'Pain Management Techniques',
      ar: 'تقنيات إدارة الألم',
    },
    'educationalVideos.videos.painManagement.category': {
      en: 'Treatment',
      ar: 'علاج',
    },
    'educationalVideos.videos.preventingReinjury.title': {
      en: 'Preventing Re-injury',
      ar: 'منع إعادة الإصابة',
    },
    'educationalVideos.videos.preventingReinjury.category': {
      en: 'Prevention',
      ar: 'وقاية',
    },
    'educationalVideos.videos.nutritionForRecovery.title': {
      en: 'Nutrition for Recovery',
      ar: 'التغذية للتعافي',
    },
    'educationalVideos.videos.nutritionForRecovery.category': {
      en: 'Nutrition',
      ar: 'تغذية',
    },
    'educationalVideos.videos.mentalHealth.title': {
      en: 'Mental Health & Recovery',
      ar: 'الصحة النفسية والتعافي',
    },
    'educationalVideos.videos.mentalHealth.category': {
      en: 'Wellness',
      ar: 'عافية',
    },
    'educationalVideos.videos.returnToActivity.title': {
      en: 'Return to Activity',
      ar: 'العودة إلى النشاط',
    },
    'educationalVideos.videos.returnToActivity.category': {
      en: 'Recovery',
      ar: 'تعافي',
    },
    'educationalVideos.videos.sleepAndHealing.title': {
      en: 'Sleep & Healing',
      ar: 'النوم والشفاء',
    },
    'educationalVideos.videos.sleepAndHealing.category': {
      en: 'Wellness',
      ar: 'عافية',
    },

    // Join Our Team
    'joinOurTeam.title': { en: 'Join Our Team', ar: 'انضم إلى فريقنا' },
    'joinOurTeam.subtitle': {
      en: "Be part of a revolutionary platform that's changing how people recover from injuries. We offer exciting opportunities for physiotherapists, doctors, and healthcare professionals.",
      ar: 'كن جزءًا من منصة ثورية تغير كيفية تعافي الناس من الإصابات. نحن نقدم فرصًا مثيرة لأخصائيي العلاج الطبيعي والأطباء والمتخصصين في الرعاية الصحية.',
    },
    'joinOurTeam.whyJoinUs.title': {
      en: 'Why Join Us?',
      ar: 'لماذا تنضم إلينا؟',
    },
    'joinOurTeam.whyJoinUs.technology.title': {
      en: 'Cutting-edge Technology',
      ar: 'تقنية متطورة',
    },
    'joinOurTeam.whyJoinUs.technology.description': {
      en: 'Work with the latest rehabilitation technologies and digital health tools.',
      ar: 'اعمل بأحدث تقنيات إعادة التأهيل وأدوات الصحة الرقمية.',
    },
    'joinOurTeam.whyJoinUs.growth.title': {
      en: 'Professional Growth',
      ar: 'نمو مهني',
    },
    'joinOurTeam.whyJoinUs.growth.description': {
      en: 'Continuous learning opportunities and career advancement paths.',
      ar: 'فرص تعلم مستمرة ومسارات تقدم وظيفي.',
    },
    'joinOurTeam.whyJoinUs.flexibility.title': {
      en: 'Flexible Work Environment',
      ar: 'بيئة عمل مرنة',
    },
    'joinOurTeam.whyJoinUs.flexibility.description': {
      en: 'Hybrid work options with both clinic and remote consultations.',
      ar: 'خيارات عمل هجينة مع استشارات في العيادة وعن بعد.',
    },
    'joinOurTeam.internship.title': {
      en: 'Internship Program',
      ar: 'برنامج التدريب',
    },
    'joinOurTeam.internship.description': {
      en: 'Our comprehensive internship program offers hands-on experience in digital health, mentorship from industry experts, and a pathway to full-time opportunities.',
      ar: 'يقدم برنامجنا التدريبي الشامل خبرة عملية في الصحة الرقمية، وإشرافًا من خبراء الصناعة، ومسارًا لفرص عمل بدوام كامل.',
    },
    'joinOurTeam.internship.point1': {
      en: '6-month structured program',
      ar: 'برنامج منظم لمدة 6 أشهر',
    },
    'joinOurTeam.internship.point2': {
      en: 'Direct mentorship from senior physiotherapists',
      ar: 'إشراف مباشر من كبار أخصائيي العلاج الطبيعي',
    },
    'joinOurTeam.internship.point3': {
      en: 'Real patient case experience',
      ar: 'خبرة في حالات مرضى حقيقية',
    },
    'joinOurTeam.internship.point4': {
      en: 'Technology training and certification',
      ar: 'تدريب على التكنولوجيا وشهادات معتمدة',
    },
    'joinOurTeam.form.title': { en: 'Submit Application', ar: 'إرسال طلب' },
    'joinOurTeam.form.labels.fullName': { en: 'Full Name', ar: 'الاسم الكامل' },
    'joinOurTeam.form.labels.email': {
      en: 'Email Address',
      ar: 'عنوان البريد الإلكتروني',
    },
    'joinOurTeam.form.labels.phone': { en: 'Phone Number', ar: 'رقم الهاتف' },
    'joinOurTeam.form.labels.position': {
      en: 'Position of Interest',
      ar: 'الوظيفة المهتم بها',
    },
    'joinOurTeam.form.labels.experience': {
      en: 'Years of Experience',
      ar: 'سنوات الخبرة',
    },
    'joinOurTeam.form.labels.education': {
      en: 'Highest Education Level',
      ar: 'أعلى مستوى تعليمي',
    },
    'joinOurTeam.form.labels.resume': {
      en: 'Resume/CV Upload',
      ar: 'تحميل السيرة الذاتية',
    },
    'joinOurTeam.form.labels.coverLetter': {
      en: 'Cover Letter',
      ar: 'خطاب التغطية',
    },
    'joinOurTeam.form.placeholders.fullName': {
      en: 'Enter your full name',
      ar: 'أدخل اسمك الكامل',
    },
    'joinOurTeam.form.placeholders.email': {
      en: 'your.email@example.com',
      ar: 'your.email@example.com',
    },
    'joinOurTeam.form.placeholders.phone': {
      en: '+1 (555) 123-4567',
      ar: '+20 XXX XXX XXXX',
    },
    'joinOurTeam.form.placeholders.position': {
      en: 'Select position',
      ar: 'اختر الوظيفة',
    },
    'joinOurTeam.form.placeholders.experience': {
      en: 'Select experience level',
      ar: 'اختر مستوى الخبرة',
    },
    'joinOurTeam.form.placeholders.education': {
      en: "e.g., DPT, MD, Bachelor's in Physiotherapy",
      ar: 'مثال: دكتوراه في العلاج الطبيعي، دكتور في الطب، بكالوريوس في العلاج الطبيعي',
    },
    'joinOurTeam.form.placeholders.coverLetter': {
      en: 'Tell us why you want to join our team and what unique value you can bring...',
      ar: 'أخبرنا لماذا تريد الانضمام إلى فريقنا وما هي القيمة الفريدة التي يمكنك تقديمها...',
    },
    'joinOurTeam.form.fileFormats': {
      en: 'Accepted formats: PDF, DOC, DOCX',
      ar: 'الصيغ المقبولة: PDF, DOC, DOCX',
    },
    'joinOurTeam.form.submitButton': {
      en: 'Submit Application',
      ar: 'إرسال الطلب',
    },
    'joinOurTeam.form.positions.physiotherapist': {
      en: 'Physiotherapist',
      ar: 'أخصائي علاج طبيعي',
    },
    'joinOurTeam.form.positions.sportsMedicine': {
      en: 'Sports Medicine Specialist',
      ar: 'أخصائي طب رياضي',
    },
    'joinOurTeam.form.positions.occupationalTherapist': {
      en: 'Occupational Therapist',
      ar: 'معالج وظيفي',
    },
    'joinOurTeam.form.positions.fitnessCoach': {
      en: 'Fitness Coach',
      ar: 'مدرب لياقة بدنية',
    },
    'joinOurTeam.form.positions.intern': {
      en: 'Internship Program',
      ar: 'برنامج تدريب',
    },
    'joinOurTeam.form.positions.admin': {
      en: 'Administrative Role',
      ar: 'دور إداري',
    },
    'joinOurTeam.form.experienceLevels.entry': {
      en: 'Entry Level (0-2 years)',
      ar: 'مستوى مبتدئ (0-2 سنوات)',
    },
    'joinOurTeam.form.experienceLevels.mid': {
      en: 'Mid Level (3-5 years)',
      ar: 'مستوى متوسط (3-5 سنوات)',
    },
    'joinOurTeam.form.experienceLevels.senior': {
      en: 'Senior Level (6-10 years)',
      ar: 'مستوى متقدم (6-10 سنوات)',
    },
    'joinOurTeam.form.experienceLevels.expert': {
      en: 'Expert Level (10+ years)',
      ar: 'مستوى خبير (10+ سنوات)',
    },
    'joinOurTeam.form.experienceLevels.student': {
      en: 'Student/Recent Graduate',
      ar: 'طالب/خريج حديث',
    },
    'joinOurTeam.form.alerts.success': {
      en: 'Application submitted successfully! We will contact you soon.',
      ar: 'تم إرسال الطلب بنجاح! سنتصل بك قريبا.',
    },
    'joinOurTeam.form.alerts.error': {
      en: 'Please fill in all required fields.',
      ar: 'يرجى ملء جميع الحقول المطلوبة.',
    },

    // Superstars
    'superstars.sectionTitle.part1': {
      en: 'Excellence in',
      ar: 'التميّز في',
    },
    'superstars.sectionTitle.part2': {
      en: 'Sports Medicine',
      ar: 'الطب الرياضي',
    },
    'superstars.sectionSubtitle': {
      en: 'Evidence-based methodologies and cutting-edge technology delivering superior recovery outcomes for athletes at every level',
      ar: 'منهجيات قائمة على الأدلة وتقنيات متطورة تحقق نتائج تعافي متفوقة للرياضيين على جميع المستويات',
    },
    'superstars.title': { en: 'Our Super Stars', ar: 'نجومنا' },
    'superstars.titleElite': {
      en: 'Our Elite Super Stars',
      ar: 'نجومنا النخبة',
    },
    // 'superstars.subtitle': {
    //   en: 'Olympians and World Record Holders .',
    //   ar: 'الأولمبيون وحاملو الأرقام القياسية العالمية .',
    // },
    // 'superstars.athletes.messi.name': { en: 'Lionel Messi', ar: 'ليونيل ميسي' },
    // 'superstars.athletes.messi.sport': { en: 'Football', ar: 'كرة القدم' },
    // 'superstars.athletes.messi.achievement': {
    //   en: "8x Ballon d'Or Winner",
    //   ar: 'الفائز بالكرة الذهبية 8 مرات',
    // },
    // 'superstars.athletes.messi.testimonial': {
    //   en: 'Dreams come true with hard work and dedication.',
    //   ar: 'الأحلام تتحقق بالعمل الجاد والتفاني.',
    // },
    // 'superstars.athletes.serena.name': {
    //   en: 'Serena Williams',
    //   ar: 'سيرينا ويليامز',
    // },
    // 'superstars.athletes.serena.sport': { en: 'Tennis', ar: 'تنس' },
    // 'superstars.athletes.serena.achievement': {
    //   en: '23x Grand Slam Champion',
    //   ar: 'بطلة جراند سلام 23 مرة',
    // },
    // 'superstars.athletes.serena.testimonial': {
    //   en: 'You have to believe in yourself when no one else does.',
    //   ar: 'يجب أن تؤمن بنفسك عندما لا يفعل ذلك أي شخص آخر.',
    // },
    // 'superstars.athletes.lebron.name': {
    //   en: 'LeBron James',
    //   ar: 'ليبرون جيمس',
    // },
    // 'superstars.athletes.lebron.sport': { en: 'Basketball', ar: 'كرة سلة' },
    // 'superstars.athletes.lebron.achievement': {
    //   en: '4x NBA Champion',
    //   ar: 'بطل الدوري الاميركي للمحترفين 4 مرات',
    // },
    // 'superstars.athletes.lebron.testimonial': {
    //   en: 'Success is not given, it is earned.',
    //   ar: 'النجاح لا يُعطى، بل يُكتسب.',
    // },
    // 'superstars.athletes.usain.name': { en: 'Usain Bolt', ar: 'يوسين بولت' },
    // 'superstars.athletes.usain.sport': { en: 'Athletics', ar: 'ألعاب القوى' },
    // 'superstars.athletes.usain.achievement': {
    //   en: '8x Olympic Gold Medalist',
    //   ar: 'حائز على 8 ميداليات ذهبية أولمبية',
    // },
    // 'superstars.athletes.usain.testimonial': {
    //   en: 'Limits are meant to be broken.',
    //   ar: 'الحدود وُجدت لتُكسر.',
    // },
    // 'superstars.athletes.simone.name': {
    //   en: 'Simone Biles',
    //   ar: 'سيمون بايلز',
    // },
    // 'superstars.athletes.simone.sport': { en: 'Gymnastics', ar: 'جمباز' },
    // 'superstars.athletes.simone.achievement': {
    //   en: '7x Olympic Medalist',
    //   ar: 'حائزة على 7 ميداليات أولمبية',
    // },
    // 'superstars.athletes.simone.testimonial': {
    //   en: 'Push yourself because no one else is going to do it for you.',
    //   ar: 'ادفع نفسك لأنه لا يوجد شخص آخر سيفعل ذلك من أجلك.',
    // },

    // Methodology Section
    'methodology.badge': { en: 'Methodology', ar: 'المنهجية' },
    'methodology.title.part1': { en: 'Our Path to', ar: 'طريقنا نحو' },
    'methodology.title.part2': { en: 'Recovery', ar: 'التعافي' },
    'methodology.subtitle': {
      en: 'A proven methodology that transforms setbacks into comebacks, designed specifically for elite athletes who refuse to settle.',
      ar: 'منهجية مثبتة تحول الانتكاسات إلى عودات قوية، مصممة خصيصًا للرياضيين الذين يرفضون التسوية.',
    },
    'methodology.steps.assessment.title': {
      en: 'Assessment & Analysis',
      ar: 'التقييم والتحليل',
    },
    'methodology.steps.assessment.description': {
      en: 'Comprehensive evaluation of your current physical condition, mental state, and performance barriers to create a personalized recovery roadmap.',
      ar: 'تقييم شامل لحالتك البدنية الحالية، والحالة النفسية، ومعوقات الأداء لإنشاء خريطة تعافٍ مخصصة.',
    },
    'methodology.steps.strategy.title': {
      en: 'Strategic Planning',
      ar: 'التخطيط الاستراتيجي',
    },
    'methodology.steps.strategy.description': {
      en: 'Development of a custom recovery strategy that addresses your specific needs, goals, and timeline for optimal performance restoration.',
      ar: 'تطوير استراتيجية تعافٍ مخصصة تلبي احتياجاتك المحددة وأهدافك وإطارك الزمني لاستعادة الأداء الأمثل.',
    },
    'methodology.steps.implementation.title': {
      en: 'Implementation & Training',
      ar: 'التنفيذ والتدريب',
    },
    'methodology.steps.implementation.description': {
      en: 'Execution of evidence-based recovery protocols, progressive training regimens, and mental conditioning techniques tailored to your sport.',
      ar: 'تنفيذ بروتوكولات تعافٍ قائمة على الأدلة، وبرامج تدريب تدريجية، وتقنيات إعداد ذهني مخصصة لرياضتك.',
    },
    'methodology.steps.monitoring.title': {
      en: 'Monitoring & Optimization',
      ar: 'المراقبة والتحسين',
    },
    'methodology.steps.monitoring.description': {
      en: 'Continuous tracking of progress, real-time adjustments to your program, and ongoing support to ensure sustained peak performance.',
      ar: 'متابعة مستمرة للتقدم، وتعديلات فورية على برنامجك، ودعم متواصل لضمان الحفاظ على الأداء العالي.',
    },

    // Cutting Edge Technology Section
    'technology.badge': { en: 'Inovation Hub', ar: 'مركز الابتكار' },
    'technology.title.part1': {
      en: 'Cutting edge science,',
      ar: 'علوم متقدمة،',
    },
    'technology.title.part2': {
      en: 'technology and innovation',
      ar: 'التكنولوجيا والابتكار',
    },
    'technology.subtitle': {
      en: 'State-of-the-art tools and methodologies that power your recovery journey with precision and innovation.',
      ar: 'أدوات ومنهجيات متطورة تدعم رحلة تعافيك بدقة وابتكار.',
    },
    'technology.cards.ai.title': {
      en: 'AI-Powered Analytics',
      ar: 'تحليلات مدعومة بالذكاء الاصطناعي',
    },
    'technology.cards.ai.description': {
      en: 'Advanced machine learning algorithms analyze your performance data to provide personalized recovery recommendations and predict optimal training loads.',
      ar: 'تحلل خوارزميات التعلم الآلي المتقدمة بيانات أدائك لتقديم توصيات تعافٍ مخصصة والتنبؤ بأحمال التدريب المثلى.',
    },
    'technology.cards.biometric.title': {
      en: 'Biometric Monitoring',
      ar: 'المراقبة البيومترية',
    },
    'technology.cards.biometric.description': {
      en: 'Real-time tracking of heart rate variability, sleep quality, and stress levels to optimize your recovery protocols and training intensity.',
      ar: 'تتبع فوري لتقلبات معدل ضربات القلب، وجودة النوم، ومستويات الإجهاد لتحسين بروتوكولات التعافي وشدة التدريب.',
    },
    'technology.cards.cryotherapy.title': {
      en: 'Cryotherapy Systems',
      ar: 'أنظمة العلاج بالتبريد',
    },
    'technology.cards.cryotherapy.description': {
      en: 'Precision-controlled cold therapy chambers that accelerate muscle recovery and reduce inflammation through targeted temperature protocols.',
      ar: 'غرف علاج بالتبريد مضبوطة بدقة تُسرّع تعافي العضلات وتقلل الالتهاب من خلال بروتوكولات حرارة موجهة.',
    },
    'technology.cards.electrical.title': {
      en: 'Electrical Stimulation',
      ar: 'التحفيز الكهربائي',
    },
    'technology.cards.electrical.description': {
      en: 'Advanced EMS and TENS technology for muscle activation, pain relief, and accelerated healing through targeted electrical impulses.',
      ar: 'تقنيات EMS وTENS المتقدمة لتنشيط العضلات وتخفيف الألم وتسريع الشفاء من خلال نبضات كهربائية موجهة.',
    },
    'technology.cards.compression.title': {
      en: 'Compression Therapy',
      ar: 'العلاج بالضغط',
    },
    'technology.cards.compression.description': {
      en: 'Pneumatic compression devices that enhance circulation, reduce swelling, and accelerate the removal of metabolic waste products.',
      ar: 'أجهزة ضغط هوائي تعزز الدورة الدموية وتقلل التورم وتسرع التخلص من نواتج الأيض.',
    },
    'technology.cards.mobile.title': {
      en: 'Mobile Integration',
      ar: 'تكامل مع الأجهزة المحمولة',
    },
    'technology.cards.mobile.description': {
      en: 'Seamless connectivity with fitness trackers and mobile apps to provide comprehensive recovery insights and progress tracking.',
      ar: 'اتصال سلس مع متتبعات اللياقة وتطبيقات الهاتف لتقديم رؤى شاملة حول التعافي وتتبع التقدم.',
    },

    // Our Benefits Section
    'benefits.badge': { en: 'Our benefits', ar: 'فوائدنا' },
    'benefits.title.part1': { en: 'Why Choose', ar: 'لماذا تختار' },
    'benefits.title.part2': {
      en: 'Our Athletic Recovery',
      ar: 'برنامج التعافي الرياضي لدينا',
    },
    'benefits.subtitle': {
      en: 'Experience the difference with our comprehensive approach to athletic recovery and performance enhancement.',
      ar: 'اختبر الفرق مع نهجنا الشامل للتعافي الرياضي وتعزيز الأداء.',
    },
    'benefits.items.personalized': {
      en: 'Personalized recovery plans tailored to your specific athletic needs',
      ar: 'خطط تعافٍ مخصصة وفقًا لاحتياجاتك الرياضية المحددة',
    },
    'benefits.items.stateOfArt': {
      en: 'State-of-the-art recovery technology and equipment',
      ar: 'تقنيات ومعدات تعافٍ متطورة',
    },
    'benefits.items.expertGuidance': {
      en: 'Expert guidance from certified sports medicine professionals',
      ar: 'إرشاد خبراء من مختصين معتمدين في الطب الرياضي',
    },
    'benefits.items.provenResults': {
      en: 'Proven results with faster recovery times and improved performance',
      ar: 'نتائج مثبتة مع أوقات تعافٍ أسرع وأداء محسّن',
    },
    'benefits.items.comprehensivePrograms': {
      en: 'Comprehensive injury prevention and rehabilitation programs',
      ar: 'برامج شاملة للوقاية من الإصابات وإعادة التأهيل',
    },
    'benefits.items.flexibleScheduling': {
      en: 'Flexible scheduling to fit your training and competition calendar',
      ar: 'جداول مرنة لتناسب تدريبك ومواعيد المنافسات',
    },

    // Our Partners Section
    'partners.badge': { en: 'Our Partners', ar: 'شركاؤنا' },
    'partners.title.part1': { en: 'Trusted by', ar: 'موثوق من قِبل' },
    'partners.title.part2': { en: 'Industry Leaders', ar: 'رواد الصناعة' },
    'partners.subtitle': {
      en: 'We partner with top organizations to deliver exceptional results and drive innovation across every project',
      ar: 'نتعاون مع أفضل المؤسسات لتقديم نتائج استثنائية ودفع الابتكار عبر كل مشروع',
    },

    // Success Stories Section
    'success.badge': { en: 'Success Stories', ar: 'قصص النجاح' },
    'success.title.part1': { en: 'From Setback', ar: 'من الانتكاسة' },
    'success.title.part2': { en: 'to Comeback', ar: 'إلى العودة' },
    'success.subtitle': {
      en: 'Explore how our evidence-based tools support patients, therapists, and clinics in achieving measurable recovery milestones',
      ar: 'استكشف كيف تدعم أدواتنا المبنية على الأدلة المرضى والمعالجين والعيادات لتحقيق معالم تعافٍ قابلة للقياس',
    },
    'success.videos.title': { en: 'Success Title', ar: 'عنوان النجاح' },
    'success.videos.company': { en: 'Company Name', ar: 'اسم الشركة' },
    'success.videos.testimonial': {
      en: 'This solution transformed the way we work. Incredible results!',
      ar: 'هذا الحل غيّر طريقة عملنا. نتائج مذهلة!',
    },
    'success.customers.title': {
      en: 'What Our Customers Say',
      ar: 'ماذا يقول عملاؤنا',
    },
    'success.customers.testimonial1.name': {
      en: 'Emma Thompson',
      ar: 'إيما تومسون',
    },
    'success.customers.testimonial1.role': {
      en: 'Marketing Manager',
      ar: 'مديرة تسويق',
    },
    'success.customers.testimonial1.text': {
      en: "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day. I can't imagine running our business without it now.",
      ar: 'لقد غيّر هذا المنتج سير عملنا بالكامل. إنه بديهي وقوي وممتع في الاستخدام يوميًا. لا أستطيع تخيل إدارة أعمالنا بدونه الآن.',
    },
    'success.customers.testimonial2.name': {
      en: 'Michael Chen',
      ar: 'مايكل تشين',
    },
    'success.customers.testimonial2.role': {
      en: 'Software Engineer',
      ar: 'مهندس برمجيات',
    },
    'success.customers.testimonial2.text': {
      en: 'The level of customer support is outstanding. The team is quick to respond and always goes above and beyond to help.',
      ar: 'مستوى دعم العملاء ممتاز. الفريق سريع الاستجابة ودائمًا ما يبذل جهدًا إضافيًا للمساعدة.',
    },
    'success.customers.testimonial3.name': {
      en: 'Sophia Rodriguez',
      ar: 'صوفيا رودريغيز',
    },
    'success.customers.testimonial3.role': {
      en: 'Small Business Owner',
      ar: 'صاحبة عمل صغير',
    },
    'success.customers.testimonial3.text': {
      en: 'As a small business owner, investing in this software paid off many times over. It has been a game-changer for our efficiency.',
      ar: 'بصفتي صاحبة عمل صغير، كان الاستثمار في هذا البرنامج مجديًا عدة مرات. لقد كان نقطة تحول في كفاءتنا.',
    },

    // Brands Section
    'brands.title': { en: 'Branding', ar: 'العلامة التجارية' },
    'brands.subtitle': { en: 'Our Mission', ar: 'مهمتنا' },
    'brands.description': {
      en: 'We are dedicated to help our stars of all levels to defeat injuries, return to training & competition effectively with a minimal risk of recurrence. We use the latest scientific protocols according to the educational & physiological code. We also take our share of responsibility to spread awareness about prevention & peak performance.',
      ar: 'نحن ملتزمون بمساعدة نجومنا على مختلف المستويات في التغلب على الإصابات والعودة إلى التدريب والمنافسة بفعالية مع تقليل مخاطر الانتكاس. نستخدم أحدث البروتوكولات العلمية وفقًا للمعايير التعليمية والفسيولوجية. كما نضطلع بدورنا في نشر الوعي حول الوقاية وذروة الأداء.',
    },
  };

  constructor(private languageService: LanguageService) {}

  translate(key: string, params?: { [key: string]: string }): string {
    const currentLang = this.languageService.getCurrentLanguage();
    const translation = this.translations[key];

    if (translation) {
      let result = translation[currentLang] || translation.en;

      // Replace parameters if provided
      if (params) {
        Object.keys(params).forEach((param) => {
          result = result.replace(`{${param}}`, params[param]);
        });
      }

      return result;
    }

    return key; // Return the key if translation not found
  }

  translateWithParams(key: string, params: { [key: string]: string }): string {
    let translation = this.translate(key);

    // Replace parameters in the translation
    Object.keys(params).forEach((param) => {
      translation = translation.replace(`{${param}}`, params[param]);
    });

    return translation;
  }

  // Method to add new translations dynamically
  addTranslation(key: string, enText: string, arText: string): void {
    this.translations[key] = { en: enText, ar: arText };
  }
}
