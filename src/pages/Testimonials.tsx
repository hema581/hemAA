import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "سارة أحمد",
      level: "الصف الثالث الثانوي",
      rating: 5,
      text: "الأستاذ أحمد ساعدني كثيراً في فهم الرياضيات. كانت درجاتي ضعيفة وبعد الدروس معه أصبحت من المتفوقات في الفصل. طريقة شرحه واضحة ومبسطة.",
      improvement: "من 45% إلى 95%"
    },
    {
      name: "محمد خالد",
      level: "الصف الثاني الإعدادي",
      rating: 5,
      text: "لم أعد أخاف من الرياضيات بعد الآن! الأستاذ أحمد يشرح بصبر ويكرر الدرس حتى أفهم. الآن أحب حل المسائل الرياضية.",
      improvement: "من 60% إلى 88%"
    },
    {
      name: "ليلى عبدالله",
      level: "IG - الصف العاشر",
      rating: 5,
      text: "ممتاز في تدريس المنهج الدولي. ساعدني في التحضير لامتحانات IGCSE وحصلت على درجة A. ينصح بقوة للطلاب الذين يدرسون المناهج الدولية.",
      improvement: "حصلت على درجة A"
    },
    {
      name: "عبدالرحمن محمد",
      level: "تحضير SAT",
      rating: 5,
      text: "تحضيري لامتحان SAT كان مثالياً مع الأستاذ أحمد. فهم متطلبات الامتحان وساعدني في تطوير استراتيجيات حل المسائل. حصلت على 750 في قسم الرياضيات.",
      improvement: "750/800 في SAT Math"
    },
    {
      name: "فاطمة حسن",
      level: "الصف الأول الثانوي",
      rating: 5,
      text: "بعد انتقالي من الإعدادي إلى الثانوي واجهت صعوبة في الرياضيات. الأستاذ أحمد ساعدني في بناء أساس قوي وفهم المفاهيم الجديدة بسهولة.",
      improvement: "من 50% إلى 85%"
    },
    {
      name: "أحمد سالم",
      level: "الصف الثالث الإعدادي",
      rating: 5,
      text: "ما شاء الله، أستاذ محترف جداً. يستخدم أمثلة من الحياة العملية لتوضيح المفاهيم الرياضية. ابني أصبح يحب الرياضيات ويتطلع للدروس.",
      improvement: "من 70% إلى 92%",
      isParent: true
    }
  ];

  const stats = [
    { number: "500+", label: "طالب ناجح" },
    { number: "15+", label: "سنة خبرة" },
    { number: "95%", label: "معدل التحسن" },
    { number: "4.9/5", label: "تقييم الطلاب" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            آراء الطلاب وأولياء الأمور
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اكتشف كيف غيّر الأستاذ أحمد الحلواني حياة الطلاب الأكاديمية وساعدهم في تحقيق أهدافهم في الرياضيات.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">
                      {testimonial.name}
                      {testimonial.isParent && <span className="text-base font-normal text-muted-foreground"> (ولي أمر)</span>}
                    </CardTitle>
                    <Badge variant="secondary" className="text-base px-3 py-1">
                      {testimonial.level}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -right-2" />
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4 relative z-10">
                    "{testimonial.text}"
                  </p>
                  <div className="bg-accent/50 rounded-lg p-4">
                    <p className="text-primary font-semibold text-lg">
                      التحسن: {testimonial.improvement}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/20">
          <CardContent className="pt-0">
            <h2 className="text-3xl font-bold text-center mb-8">قصص نجاح حقيقية</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-2xl">٨٥٪</span>
                </div>
                <h3 className="font-semibold mb-2 text-lg">معدل نجاح الثانوية العامة</h3>
                <p className="text-muted-foreground leading-relaxed">
                  من طلاب الأستاذ أحمد يحصلون على درجات ممتازة في امتحانات الثانوية العامة
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-2xl">٧٢٠+</span>
                </div>
                <h3 className="font-semibold mb-2 text-lg">متوسط درجات SAT</h3>
                <p className="text-muted-foreground leading-relaxed">
                  متوسط درجات طلاب الأستاذ أحمد في قسم الرياضيات لامتحان SAT
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-2xl">٩٨٪</span>
                </div>
                <h3 className="font-semibold mb-2 text-lg">رضا أولياء الأمور</h3>
                <p className="text-muted-foreground leading-relaxed">
                  من أولياء الأمور يوصون بخدمات الأستاذ أحمد لأطفالهم وأطفال الآخرين
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Testimonials Placeholder */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">شهادات فيديو</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <div className="w-full h-48 bg-accent/30 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary text-2xl">▶</span>
                    </div>
                    <p className="text-muted-foreground">شهادة فيديو - أم لطالب في الثانوية العامة</p>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">تحسن ملحوظ في الدرجات</h3>
                <p className="text-muted-foreground">
                  أم لطالب تشارك تجربتها مع الأستاذ أحمد وكيف تحسنت درجات ابنها
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <div className="w-full h-48 bg-accent/30 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary text-2xl">▶</span>
                    </div>
                    <p className="text-muted-foreground">شهادة فيديو - طالب منهج IG</p>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">نجاح في المنهج الدولي</h3>
                <p className="text-muted-foreground">
                  طالب يشارك كيف ساعده الأستاذ أحمد في التفوق في المنهج الدولي
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary text-primary-foreground">
            <CardContent className="pt-0">
              <h2 className="text-2xl font-bold mb-4">كن أحد قصص النجاح القادمة!</h2>
              <p className="mb-6 opacity-90 text-lg leading-relaxed">
                انضم إلى مئات الطلاب الذين حققوا أهدافهم في الرياضيات مع الأستاذ أحمد الحلواني.
              </p>
              <a
                href="https://wa.me/+201234567890?text=السلام عليكم أستاذ أحمد! أريد بدء رحلتي في تعلم الرياضيات."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                ابدأ رحلتك الآن
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;