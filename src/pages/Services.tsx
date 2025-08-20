import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Target, Users, Clock, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "رياضيات المرحلة الإعدادية",
      description: "بناء أساس رياضي قوي للصفوف السابع - التاسع",
      features: [
        "أساسيات الجبر",
        "أساسيات الهندسة",
        "نظرية الأعداد",
        "استراتيجيات حل المسائل",
        "تحضير الامتحانات"
      ],
      duration: "60 دقيقة لكل جلسة",
      level: "مبتدئ إلى متوسط"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "رياضيات المرحلة الثانوية",
      description: "مفاهيم متقدمة لطلاب المرحلة الثانوية (الصفوف 10-12)",
      features: [
        "الجبر المتقدم",
        "علم المثلثات",
        "مقدمة في التفاضل والتكامل",
        "الإحصاء والاحتمالات",
        "تحضير الامتحانات النهائية"
      ],
      duration: "75 دقيقة لكل جلسة",
      level: "متوسط إلى متقدم"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "المنهج الدولي (IG)",
      description: "دعم متخصص للشهادة العامة الدولية",
      features: [
        "مواءمة منهج كامبريدج",
        "رياضيات IGCSE",
        "ممارسة أسئلة السنوات السابقة",
        "إرشاد الواجبات الدراسية",
        "تحسين الدرجات"
      ],
      duration: "90 دقيقة لكل جلسة",
      level: "المعيار الدولي"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "تحضير امتحان SAT",
      description: "تحضير شامل لقسم الرياضيات في امتحان SAT",
      features: [
        "استراتيجيات خاصة بـ SAT",
        "تقنيات إدارة الوقت",
        "تحليل الاختبارات التجريبية",
        "التركيز على تحسين النتيجة",
        "بناء الثقة في الامتحان"
      ],
      duration: "90 دقيقة لكل جلسة",
      level: "تحضير جامعي"
    }
  ];

  const additionalServices = [
    {
      title: "مراجعات الامتحانات النهائية",
      description: "جلسات مراجعة مكثفة قبل الامتحانات المهمة",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "برامج تأسيسية شاملة",
      description: "برامج كاملة لبناء المهارات للطلاب الذين لديهم فجوات",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "جلسات جماعية",
      description: "تدريس جماعي لمجموعات صغيرة للتعلم التشاركي",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            خدمات تدريس الرياضيات
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تعليم رياضيات شامل مصمم حسب مستواك الأكاديمي وأهداف التعلم، 
            لخدمة الطلاب في مصر ودول الخليج.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <Badge variant="secondary" className="mt-2 text-base px-3 py-1">{service.level}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">ما يشمله:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-base text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-accent">
                    <p className="text-base text-muted-foreground">
                      <Clock className="w-4 h-4 inline ml-2" />
                      {service.duration}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">خدمات إضافية</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{service.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl">
                <MapPin className="w-6 h-6 ml-3 text-primary" />
                الجلسات الحضورية
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                تدريس وجهاً لوجه في بيئة تعليمية مريحة مع حل المسائل العملي والتغذية الراجعة الفورية.
              </p>
              <ul className="space-y-2 text-base">
                <li className="flex items-center space-x-2 space-x-reverse">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>انتباه وتفاعل شخصي</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>شرح على السبورة</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>توضيح فوري للشكوك</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl">
                <BookOpen className="w-6 h-6 ml-3 text-primary" />
                الجلسات الأونلاين
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                تدريس أونلاين مرن باستخدام أدوات رقمية متقدمة، مثالي للطلاب في مواقع مختلفة.
              </p>
              <ul className="space-y-2 text-base">
                <li className="flex items-center space-x-2 space-x-reverse">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>سبورة رقمية تفاعلية</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>مشاركة الشاشة وتبادل الملفات</span>
                </li>
                <li className="flex items-center space-x-2 space-x-reverse">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>جلسات مسجلة للمراجعة</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Section */}
        <Card className="p-8 text-center bg-accent/30">
          <CardContent className="pt-0">
            <h2 className="text-3xl font-bold mb-4">مستعد للبدء؟</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
              تواصل معي للحصول على تسعير مخصص بناءً على احتياجاتك المحددة وتكرار الجلسات وشكل التعلم المختار.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                اطلب استشارة مجانية
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                تواصل للاستفسار عن الأسعار
              </Button>
            </div>
            <p className="text-base text-muted-foreground mt-4">
              الجلسة الاستشارية الأولى مجانية دائماً لتقييم احتياجاتك وإنشاء خطة تعلم مخصصة.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;