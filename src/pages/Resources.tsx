import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Download, BookOpen, Calculator, Target } from "lucide-react";

const Resources = () => {
  const videoResources = [
    {
      title: "أساسيات الجبر - الصف الثامن",
      description: "شرح مبسط لأساسيات الجبر مع أمثلة تطبيقية",
      duration: "25 دقيقة",
      level: "إعدادي",
      topics: ["المتغيرات", "الثوابت", "العمليات الأساسية"]
    },
    {
      title: "حل المعادلات الخطية",
      description: "طرق مختلفة لحل المعادلات الخطية البسيطة والمعقدة",
      duration: "30 دقيقة",
      level: "إعدادي - ثانوي",
      topics: ["المعادلات البسيطة", "المعادلات المعقدة", "التحقق من الحل"]
    },
    {
      title: "الهندسة المسطحة - النظريات الأساسية",
      description: "أهم النظريات في الهندسة المسطحة مع البراهين",
      duration: "40 دقيقة",
      level: "ثانوي",
      topics: ["نظرية فيثاغورس", "نظريات المثلثات", "خصائص الدوائر"]
    },
    {
      title: "التفاضل والتكامل - مقدمة",
      description: "مقدمة شاملة لمفاهيم التفاضل والتكامل",
      duration: "50 دقيقة",
      level: "ثانوي متقدم",
      topics: ["النهايات", "المشتقات", "التكامل البسيط"]
    }
  ];

  const practiceSheets = [
    {
      title: "مجموعة تمارين الجبر",
      description: "50 تمرين متدرج في الجبر مع الحلول النموذجية",
      level: "إعدادي",
      pages: "12 صفحة",
      difficulty: "متوسط"
    },
    {
      title: "مسائل الهندسة التطبيقية",
      description: "مسائل عملية في الهندسة من الحياة اليومية",
      level: "ثانوي",
      pages: "8 صفحات",
      difficulty: "متقدم"
    },
    {
      title: "تمارين الإحصاء والاحتمالات",
      description: "تطبيقات عملية على الإحصاء والاحتمالات",
      level: "ثانوي",
      pages: "10 صفحات",
      difficulty: "متوسط"
    },
    {
      title: "أسئلة تحضيرية لـ SAT Math",
      description: "نماذج أسئلة مشابهة لامتحان SAT في الرياضيات",
      level: "SAT",
      pages: "15 صفحة",
      difficulty: "متقدم"
    }
  ];

  const studyTips = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "كيفية المذاكرة الفعالة للرياضيات",
      description: "استراتيجيات مُثبتة لتحسين فهم وحفظ المفاهيم الرياضية",
      tips: [
        "ذاكر في جلسات قصيرة ومتكررة",
        "اربط المفاهيم الجديدة بما تعلمته سابقاً",
        "مارس حل المسائل يومياً",
        "لا تحفظ بل افهم المفهوم أولاً"
      ]
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "تقنيات حل المسائل",
      description: "خطوات منهجية لحل أي مسألة رياضية بطريقة صحيحة",
      tips: [
        "اقرأ المسألة عدة مرات بتأني",
        "حدد المطلوب والمعطيات بوضوح",
        "اختر الطريقة المناسبة للحل",
        "تحقق من صحة الإجابة"
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "التحضير للامتحانات",
      description: "نصائح مهمة للتحضير الأمثل لامتحانات الرياضيات",
      tips: [
        "ابدأ التحضير مبكراً",
        "راجع الأخطاء السابقة",
        "حل نماذج امتحانات سابقة",
        "نظم وقتك أثناء الامتحان"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            الموارد التعليمية المجانية
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة شاملة من الموارد التعليمية المجانية لمساعدتك في تطوير مهاراتك في الرياضيات، 
            من الفيديوهات التعليمية إلى أوراق التمارين ونصائح الدراسة.
          </p>
        </div>

        {/* Video Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Video className="w-8 h-8 ml-3 text-primary" />
            الفيديوهات التعليمية
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {videoResources.map((video, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{video.title}</CardTitle>
                      <p className="text-muted-foreground text-lg leading-relaxed">{video.description}</p>
                    </div>
                    <Badge variant="secondary" className="mr-4 text-base px-3 py-1">
                      {video.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-base">
                      <span className="text-muted-foreground">المدة: {video.duration}</span>
                      <Button size="sm" variant="outline">
                        شاهد الآن
                      </Button>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">المواضيع المشمولة:</h4>
                      <div className="flex flex-wrap gap-2">
                        {video.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-sm">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice Sheets */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FileText className="w-8 h-8 ml-3 text-primary" />
            أوراق التمارين
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {practiceSheets.map((sheet, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{sheet.title}</CardTitle>
                      <p className="text-muted-foreground text-lg leading-relaxed">{sheet.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-base">
                        <Badge variant="secondary">{sheet.level}</Badge>
                        <span className="text-muted-foreground">{sheet.pages}</span>
                        <Badge variant={sheet.difficulty === 'متقدم' ? 'destructive' : sheet.difficulty === 'متوسط' ? 'default' : 'secondary'}>
                          {sheet.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Download className="w-4 h-4 ml-2" />
                      تحميل مجاني
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Study Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">نصائح الدراسة والتفوق</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {studyTips.map((tip, index) => (
              <Card key={index} className="p-8">
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {tip.icon}
                  </div>
                  <CardTitle className="text-xl text-center mb-4">{tip.title}</CardTitle>
                  <p className="text-muted-foreground text-center text-lg leading-relaxed">{tip.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tip.tips.map((tipItem, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-3 space-x-reverse">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-base leading-relaxed">{tipItem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/20">
          <CardContent className="pt-0">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">احصل على موارد جديدة أسبوعياً</h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
                اشترك في النشرة الإخبارية لتحصل على أحدث الفيديوهات التعليمية وأوراق التمارين ونصائح الدراسة مباشرة في بريدك الإلكتروني.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-4 py-3 text-lg border border-input rounded-md bg-background"
                />
                <Button size="lg" className="text-lg px-8">
                  اشترك مجاناً
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                لن نرسل لك رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary text-primary-foreground">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-bold mb-4">تحتاج مساعدة شخصية؟</h2>
              <p className="mb-6 opacity-90 text-lg leading-relaxed">
                هذه الموارد مفيدة، لكن التدريس الشخصي يحقق نتائج أفضل وأسرع. احجز جلستك التجريبية المجانية الآن!
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/+201234567890?text=السلام عليكم أستاذ أحمد! أريد حجز جلسة تجريبية مجانية.', '_blank')}
              >
                احجز جلسة مجانية
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;