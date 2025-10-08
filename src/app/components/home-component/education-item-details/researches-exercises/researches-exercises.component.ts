import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-researches-exercises',
  standalone: true,
  templateUrl: './researches-exercises.component.html',
  styleUrls: ['./researches-exercises.component.css'],
})
export class ResearchesExercisesComponent implements OnInit {
  @Input() itemState: number = 0;
  researches: any[] = [];
  exercises: any[] = [];
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: any) {
    if (changes['itemState'].currentValue == 2) {
      this.researches = [
        {
          id: 'r1',
          img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
          title: {
            ar: 'الذكاء الاصطناعي في الرعاية الصحية',
            en: 'AI in Healthcare',
          },
          description: {
            ar: 'دراسة تأثير الذكاء الاصطناعي في تحسين التشخيص الطبي والرعاية الصحية',
            en: 'Studying the impact of AI in improving medical diagnosis and healthcare',
          },
          link: '#research-ai-healthcare',
        },
        {
          id: 'r2',
          img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
          title: {
            ar: 'الحوسبة الكمومية',
            en: 'Quantum Computing',
          },
          description: {
            ar: 'بحث في تطبيقات الحوسبة الكمومية وإمكانياتها في حل المشكلات المعقدة',
            en: 'Research on quantum computing applications and their potential in solving complex problems',
          },
          link: '#research-quantum',
        },
        {
          id: 'r3',
          img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
          title: {
            ar: 'البلوكشين والأمن',
            en: 'Blockchain and Security',
          },
          description: {
            ar: 'تحليل تقنيات البلوكشين وتطبيقاتها في تعزيز الأمن السيبراني',
            en: 'Analyzing blockchain technologies and their applications in enhancing cybersecurity',
          },
          link: '#research-blockchain',
        },
        {
          id: 'r4',
          img: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&h=600&fit=crop',
          title: {
            ar: 'إنترنت الأشياء',
            en: 'Internet of Things',
          },
          description: {
            ar: 'دراسة شاملة لتطبيقات إنترنت الأشياء في المدن الذكية',
            en: 'Comprehensive study of IoT applications in smart cities',
          },
          link: '#research-iot',
        },
        {
          id: 'r5',
          img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
          title: {
            ar: 'التعلم الآلي والتنبؤ',
            en: 'Machine Learning and Prediction',
          },
          description: {
            ar: 'أبحاث متقدمة في خوارزميات التعلم الآلي والنماذج التنبؤية',
            en: 'Advanced research in machine learning algorithms and predictive models',
          },
          link: '#research-ml',
        },
        {
          id: 'r6',
          img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
          title: {
            ar: 'تحليل البيانات الضخمة',
            en: 'Big Data Analytics',
          },
          description: {
            ar: 'استكشاف تقنيات تحليل البيانات الضخمة واستخراج الرؤى القيمة',
            en: 'Exploring big data analytics techniques and extracting valuable insights',
          },
          link: '#research-bigdata',
        },
      ];
    } else {
      this.exercises = [
        {
          id: 'e1',
          img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
          title: {
            ar: 'تمارين JavaScript الأساسية',
            en: 'JavaScript Fundamentals Exercises',
          },
          file: '#exercise-js-fundamentals.pdf',
        },
        {
          id: 'e2',
          img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
          title: {
            ar: 'تمارين React المتقدمة',
            en: 'Advanced React Exercises',
          },
          file: '#exercise-react-advanced.pdf',
        },
        {
          id: 'e3',
          img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop',
          title: {
            ar: 'تمارين قواعد البيانات',
            en: 'Database Exercises',
          },
          file: '#exercise-database.pdf',
        },
        {
          id: 'e4',
          img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
          title: {
            ar: 'تمارين خوارزميات البرمجة',
            en: 'Programming Algorithms Exercises',
          },
          file: '#exercise-algorithms.pdf',
        },
        {
          id: 'e5',
          img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
          title: {
            ar: 'تمارين Python للمبتدئين',
            en: 'Python for Beginners Exercises',
          },
          file: '#exercise-python-basics.pdf',
        },
        {
          id: 'e6',
          img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
          title: {
            ar: 'تمارين تصميم واجهات المستخدم',
            en: 'UI Design Exercises',
          },
          file: '#exercise-ui-design.pdf',
        },
      ];
    }
  }
}
