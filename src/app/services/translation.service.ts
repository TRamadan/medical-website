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
    'explore.lang': { en: 'EN', ar: 'عربي' },
    'explore.btn': { en: 'Explore Now', ar: 'استكشف المزيد' },
    // Navigation items
    'nav.home': { en: 'Home', ar: 'الرئيسية' },
    'nav.about': { en: 'About Us', ar: 'من نحن' },
    'nav.solutions': { en: 'Our solutions', ar: 'حلولنا' },
    'nav.science': { en: 'The science', ar: 'العلوم' },
    'nav.exploreSolution': { en: 'Explore solution', ar: 'حلولنا' },
    'nav.contact': { en: 'Contact', ar: 'اتصل بنا' },
    'nav.education': { en: 'Knowledge Hub', ar: 'بنك المعرفة' },

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

    // About
    'about.title': { en: 'About Us', ar: 'من نحن' },
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

    //knowledgehub researches translation
    'knowledgehubResearches.title.badge': {
      en: 'Research & Evidence',
      ar: 'الأبحاث والدراسات',
    },
    'knowledgehubResearches.title.part1': { en: 'Advancing', ar: 'تطور' },
    'knowledgehubResearches.title.part2': {
      en: 'Rehabilitation',
      ar: 'التأهيل',
    },
    'knowledgehubResearches.title.subtitle': {
      en: 'Latest studies, insights, and scientific breakthroughs',
      ar: 'أحدث الدراسات والرؤى والاكتشافات العلمية',
    },

    //knowledgehub researches translation
    'knowledgehubExercises.title.badge': {
      en: 'Rehabilitation Exercises',
      ar: 'تمارين التأهيل',
    },
    'knowledgehubExercises.title.part1': {
      en: 'Restore',
      ar: 'استعادة',
    },
    'knowledgehubExercises.title.part2': {
      en: 'Movement',
      ar: 'الحركة',
    },
    'knowledgehubExercises.title.subtitle': {
      en: 'Guided exercises to improve strength, mobility, and recovery',
      ar: 'تمارين موجهة لتحسين القوة والحركة والتعافي',
    },

    // About - Team
    'about.team.title': {
      en: 'Leadership & Talent',
      ar: 'القيادة والكفاءات ',
    },

    'about.team.subTitle1': {
      en: 'Driven by Passion',
      ar: 'مدفوعون بالشغف',
    },

    'about.team.advisoryboard': {
      en: 'Our advisory board',
      ar: 'المجلس الاستشاري',
    },

    'about.team.ordinaryTeam': {
      en: 'Our talents',
      ar: 'الكفاءات',
    },

    'about.team.subTitle2': {
      en: 'United by Purpose',
      ar: 'متحدون من أجل الهدف',
    },

    'about.team.subTitle': {
      en: 'Meet the people turning challenges into victories, together',
      ar: 'تعرف على الأشخاص الذين يحولون التحديات إلى انتصارات، معًا',
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

    //educational content
    'educationalcontent.noCategories': {
      en: 'No content available in this category',
      ar: 'لا توجد محتوي متاح في هذه الفئة',
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
      en: '© 2025 The sports doctor. All rights reserved.',
      ar: '© 2025 طبيب الرياضة. جميع الحقوق محفوظة.',
    },
    'footer.description': {
      en: 'At The Sports Doctor, we believe every setback is a setup for a powerful comeback. Our state-of-the-art rehabilitation center is designed to not only heal your injuries but to empower you with the strength and resilience needed to dominate your sport.',
      ar: 'في طبيب الرياضة، نؤمن بأن كل نكسة هي إعداد لعودة قوية. مركز إعادة التأهيل المتطور لدينا مصمم ليس فقط لشفاء إصاباتك ولكن لتمكينك بالقوة والمرونة اللازمة للسيطرة على رياضتك.',
    },
    'footer.whoWeAre': { en: 'Who we are', ar: 'من نحن' },
    'footer.ourStory': { en: 'Our Story', ar: 'قصتنا' },
    'footer.ourAdvisors': { en: 'Our advisors', ar: 'مستشارونا' },
    'footer.ourTeam': { en: 'Our team', ar: 'فريقنا' },
    'footer.joinOurTeam': { en: 'Join our team', ar: 'انضم لفريقنا' },
    'footer.ourApproach': { en: 'Our Approach', ar: 'نهجنا' },
    'footer.methodology': { en: 'Methodology', ar: 'المنهجية' },
    'footer.peakPerformance': {
      en: 'Peak performance',
      ar: 'نحو الأداء الأمثل',
    },
    'footer.benefits': {
      en: 'Benefits of working with us',
      ar: 'فوائد العمل معنا',
    },
    'footer.technology': {
      en: 'Cutting Edge Technology',
      ar: 'أحدث التقنيات',
    },
    'footer.knowledgeHub': { en: 'Knowledge Hub', ar: 'مركز المعرفة' },
    'footer.articles': { en: 'Articles', ar: 'مقالات' },
    'footer.videos': { en: 'Videos', ar: 'فيديوهات' },
    'footer.exercisePrograms': {
      en: 'Exercise Programs',
      ar: 'برامج التمارين',
    },
    'footer.research': { en: 'Research', ar: 'الأبحاث' },
    'footer.ourSolutions': { en: 'Our Solutions', ar: 'حلولنا' },
    'footer.returnToPlay': { en: 'Return to Play', ar: 'العودة للعب' },
    'footer.athletesRecharger': {
      en: "Athlete's Recharger",
      ar: 'شاحن الرياضي',
    },
    'footer.resilientAthlete': {
      en: 'The resilient athlete',
      ar: 'الرياضي المرن',
    },
    'footer.athleteBlueprint': {
      en: 'Athlete blueprint',
      ar: 'مخطط الرياضي',
    },
    'footer.successStories': { en: 'Success Stories', ar: 'قصص النجاح' },
    'footer.legacies': { en: 'Legacies', ar: 'الإرث' },
    'footer.superStars': { en: 'Super stars', ar: 'النجوم الخارقون' },
    'footer.comebackStories': {
      en: 'Comeback stories',
      ar: 'قصص العودة',
    },
    'footer.testimonials': { en: 'Testimonials', ar: 'الشهادات' },
    'footer.collaborations': { en: 'Collaborations', ar: 'التعاونات' },
    'footer.getInTouch': { en: 'Get in touch', ar: 'تواصل معنا' },
    'footer.followUs': { en: 'Follow us', ar: 'تابعنا' },

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

    'booking.noservices': {
      ar: '',
      en: ''
    },
    'booking.locationService.loading': {
      en: 'Loading services...',
      ar: 'جاري تحميل الخدمات...',
    },
    'booking.locationService.noServices': {
      en: 'No services available',
      ar: 'لا توجد خدمات متاحة',
    },

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
      en: 'Search here for service or sub service...',
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
      en: 'Choose Your Appointment available date and time slot',
      ar: 'اختر موعدك من التواريخ والأوقات المتاحة',
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
    'booking.timeSlot.loadingCalendar': {
      en: 'Loading calendar...',
      ar: 'جاري تحميل التقويم...',
    },
    'booking.timeSlot.loadingSlots': {
      en: 'Loading time slots...',
      ar: 'جاري تحميل المواعيد...',
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
    'booking.patientForm.fields.interestedService': {
      en: 'Interested Service',
      ar: 'الخدمة المطلوبة',
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
      ar: 'اختر النوع',
    },
    'booking.patientForm.placeholders.favoriteSport': {
      en: 'Your favorait sport',
      ar: 'ادخل رياضتك المفضلة',
    },
    'booking.patientForm.placeholders.emergencyContact': {
      en: 'Emergency contact phone number',
      ar: ' رقم هاتف الطوارئ ',
    },
    'booking.patientForm.placeholders.medicalHistory': {
      en: 'Please provide any relevant medical history that might help your doctor...',
      ar: 'يرجى تقديم أي تاريخ طبي ذي صلة قد يساعد طبيبك',
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

    // Confirmation
    'booking.confirmation.title': {
      en: 'Appointment Booked Successfully!',
      ar: 'تم حجز الموعد بنجاح !',
    },
    'booking.confirmation.subtitle': {
      en: 'Your consultation has been scheduled',
      ar: 'تم جدولة استشارتك بنجاح',
    },
    'booking.confirmation.okButton': {
      en: 'Ok',
      ar: 'موافق',
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
      en: 'Confirmation Message',
      ar: 'رسالة التأكيد',
    },
    'booking.confirmation.arabicEmail.greeting': {
      en: 'Hello {name},',
      ar: 'مرحباً {name}،',
    },
    'booking.confirmation.arabicEmail.intro': {
      en: 'Your appointment has been successfully booked! A confirmation email will be sent containing:',
      ar: 'تم حجز موعدك بنجاح! سيتم إرسال إيميل تأكيد يحتوي على:',
    },
    'booking.confirmation.arabicEmail.details': {
      en: 'Booked Appointment Details is on',
      ar: 'تفاصيل الموعد المحجوز',
    },
    'booking.confirmation.arabicEmail.appLink': {
      en: 'App Download Link',
      ar: 'رابط تحميل التطبيق',
    },
    'booking.confirmation.arabicEmail.formInstructions': {
      en: 'Injury Assessment Form Instructions',
      ar: 'تعليمات ملء استمارة بيانات الإصابة',
    },
    'booking.confirmation.arabicEmail.clinicInfo': {
      en: 'Clinic Contact Information',
      ar: 'معلومات التواصل مع العيادة',
    },
    'booking.confirmation.arabicEmail.from': { en: 'From', ar: 'من' },
    'booking.confirmation.arabicEmail.to': { en: 'To', ar: 'إلى' },
    'booking.confirmation.arabicEmail.atLocation': {
      en: 'at location',
      ar: 'في',
    },
    'booking.confirmation.arabicEmail.instruction': {
      en: 'Please download the app and fill out the form before your visit to ensure the best medical care.',
      ar: 'يرجى تحميل التطبيق وملء الاستمارة قبل موعد الزيارة لضمان تقديم أفضل رعاية طبية.',
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
    'superstars.champions': {
      en: 'Our Champions super stars',
      ar: 'ابطالنا من النجوم',
    },

    // Methodology Section
    'methodology.badge': { en: 'Methodology', ar: 'المنهجية' },
    'methodology.title.part1': { en: 'Our Path to', ar: 'طريقنا نحو' },
    'methodology.title.part2': { en: 'Recovery', ar: 'التعافي' },
    'methodology.subtitle': {
      en: 'A proven methodology that transforms setbacks into comebacks, designed specifically for elite athletes who refuse to settle.',
      ar: 'منهجية مثبتة تحول الانتكاسات إلى عودات قوية، مصممة خصيصًا للرياضيين الذين يرفضون التسوية.',
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

    // Brands Section
    'brands.title': { en: 'The sports doctor', ar: 'العلامة التجارية' },
    'brands.subtitle': { en: 'Our Mission', ar: 'مهمتنا' },
    'brands.description': {
      en: 'We are dedicated to help our stars of all levels to defeat injuries, return to training & competition effectively with a minimal risk of recurrence. We use the latest scientific protocols according to the educational & physiological code. We also take our share of responsibility to spread awareness about prevention & peak performance.',
      ar: 'نحن ملتزمون بمساعدة نجومنا على مختلف المستويات في التغلب على الإصابات والعودة إلى التدريب والمنافسة بفعالية مع تقليل مخاطر الانتكاس. نستخدم أحدث البروتوكولات العلمية وفقًا للمعايير التعليمية والفسيولوجية. كما نضطلع بدورنا في نشر الوعي حول الوقاية وذروة الأداء.',
    },

    // how it works section
    'howitworks.badge': {
      en: 'How It Works',
      ar: 'كيف تعمل',
    },
    'howitworks.title.part1': {
      en: 'Your journey to recovery,',
      ar: 'رحلتك نحو التعافي،',
    },
    'howitworks.title.part2': {
      en: 'step by step',
      ar: 'خطوة بخطوة',
    },
    'howitworks.subtitle': {
      en: 'From first consultation to complete transformation, here’s how our process empowers you.',
      ar: 'من أول استشارة حتى التحول الكامل، إليك كيف تدعمك عمليتنا خطوة بخطوة.',
    },

    'howitworks.step1.title': { en: 'Book an Appointment', ar: 'احجز موعدك' },
    'howitworks.step1.description': {
      en: 'Schedule your first consultation through our website or mobile app.',
      ar: 'جدولة الاستشارة الأولى عبر الموقع أو التطبيق.',
    },


    'howitworks.step2.title': {
      en: 'Initial Assessment',
      ar: 'التقييم الأولي',
    },
    'howitworks.step2.description': {
      en: 'Get a personalized treatment plan.',
      ar: 'الحصول على خطة علاج شخصية.',
    },
    'howitworks.step3.title': { en: 'Download the App', ar: 'نزّل التطبيق' },
    'howitworks.step3.description': {
      en: 'Access your plan and exercises anytime.',
      ar: 'الوصول إلى خطتك والتمارين في أي وقت.',
    },
    'howitworks.step4.title': { en: 'Follow Your Plan', ar: 'اتبع خطتك' },
    'howitworks.step4.description': {
      en: 'Complete exercises and track your recovery.',
      ar: 'إتمام التمارين ومتابعة التعافي.',
    },
    'howitworks.step5.title': { en: 'Regular Check-ins', ar: 'متابعة دورية' },
    'howitworks.step5.description': {
      en: 'Regular communication with your care provider.',
      ar: 'تواصل منتظم مع مقدم الرعاية.',
    },

    'education.readMore': {
      en: 'Read more',
      ar: 'قراءة المزيد',
    },

    'education.readLess': {
      en: 'Read less',
      ar: 'عرض أقل',
    },

    'education.searchplaceholder': {
      en: 'Search articles or videos...',
      ar: 'ابحث في المقالات أو الفيديوهات ...',
    },

    'education.badge': {
      en: 'Knowledge Hub',
      ar: 'منصة المعرفة',
    },

    'education.title.part1': {
      en: 'Explore trusted insights,',
      ar: 'استكشف المعرفة الموثوقة،',
    },

    'education.title.part2': {
      en: 'learn, practice, and grow',
      ar: 'تعلّم وتمرّن وتطوّر',
    },

    'education.subtitle': {
      en: 'Access expert videos, articles, research, and exercises to advance your knowledge in sports science and recovery.',
      ar: 'تصفّح فيديوهات ومقالات وأبحاث وتمارين متخصصة لتعزيز معرفتك في علوم الرياضة والتعافي.',
    },

    // Booking confirmation card
    'booking.confirmation.title1': {
      en: 'Booking Confirmation',
      ar: 'تأكيد الحجز',
    },

    'booking.confirmation.greeting': {
      en: 'Hello {{name}},',
      ar: 'مرحباً {{name}}،',
    },

    'booking.confirmation.successMessage': {
      en: 'Your booking has been successfully confirmed. Here are the appointment details:',
      ar: 'تم تأكيد حجزك بنجاح. إليك تفاصيل الموعد:',
    },

    'booking.confirmation.appointmentDetails': {
      en: 'Appointment details: {{date}}, at {{time}} at {{location}}.',
      ar: 'تفاصيل الموعد: {{date}}، الساعة {{time}} في {{location}}.',
    },

    'booking.confirmation.appLink': {
      en: 'Application link: [App Link]',
      ar: 'رابط التطبيق: [رابط التطبيق]',
    },

    'booking.confirmation.formInstructions': {
      en: 'Form instructions: Please complete the medical form before your visit.',
      ar: 'تعليمات النموذج: يرجى ملء النموذج الطبي قبل زيارتك.',
    },

    'booking.confirmation.clinicInfo': {
      en: 'Clinic information: {{phone}}',
      ar: 'معلومات العيادة: {{phone}}',
    },

    'booking.confirmation.footerMessage': {
      en: 'We look forward to seeing you soon ',
      ar: 'نتطلع لرؤيتك قريباً',
    },

    'booking.loading.title': {
      ar: 'برجاء الانتظار ...',
      en: 'Please wait  ...'
    },

    'booking.loading.subtitle': {
      ar: 'جاري انشاء الطلب ...',
      en: 'Creating the request ...'
    }
  };

  constructor(private languageService: LanguageService) { }

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
